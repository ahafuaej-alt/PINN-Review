const versionParts = (value) => {
  const match = String(value || '').match(/^(\d+)\.(\d+)\.(\d+)$/u);
  return match ? match.slice(1).map(Number) : null;
};

export const compareVersions = (left, right) => {
  const leftParts = versionParts(left);
  const rightParts = versionParts(right);
  if (!leftParts || !rightParts) return 0;
  for (let index = 0; index < leftParts.length; index += 1) {
    if (leftParts[index] !== rightParts[index]) return leftParts[index] - rightParts[index];
  }
  return 0;
};

const latestAuditsByPaper = (changes, baselineVersion) => {
  const latest = new Map();
  for (const audit of changes || []) {
    if (!Number.isInteger(audit.paper_id) || compareVersions(audit.version, baselineVersion) <= 0) continue;
    const current = latest.get(audit.paper_id);
    if (!current || compareVersions(audit.version, current.version) > 0) latest.set(audit.paper_id, audit);
  }
  return latest;
};

export const reviewResolutionSummary = (report) => {
  const resolved = (report.records || []).filter((record) => record.resolution?.status === 'resolved').length;
  return {
    open_records: (report.records || []).length - resolved,
    resolved_records: resolved
  };
};

export const reconcilePublisherReview = (sourceReport, changes, currentDatasetVersion) => {
  const report = structuredClone(sourceReport);
  const latest = latestAuditsByPaper(changes, report.dataset_version_after);

  for (const record of report.records || []) {
    const audit = latest.get(record.id);
    if (!audit) continue;
    record.resolution = {
      status: 'resolved',
      change_id: audit.change_id,
      dataset_version: audit.version,
      resolved_at: audit.date,
      changed_fields: [...(audit.changed_fields || [])],
      reason: audit.reason || null,
      evidence_url: audit.evidence?.url || null
    };
  }

  report.current_dataset_version = currentDatasetVersion;
  report.summary = { ...report.summary, ...reviewResolutionSummary(report) };
  return report;
};

export const validatePublisherReview = (report, master, changes) => {
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(message); };
  const baselineVersion = report?.dataset_version_after;
  const records = Array.isArray(report?.records) ? report.records : [];
  const paperIds = new Set((master?.papers || []).map((paper) => paper.id));
  const ids = records.map((record) => record.id);
  const derived = reconcilePublisherReview(report, changes, master?.metadata?.dataset_version);
  const resolution = reviewResolutionSummary(derived);
  const postReportPapers = new Set(
    (changes || [])
      .filter((audit) => Number.isInteger(audit.paper_id) && compareVersions(audit.version, baselineVersion) > 0)
      .map((audit) => audit.paper_id)
      .filter((id) => ids.includes(id))
  );

  check(['1.0.0', '1.1.0'].includes(report?.schema_version), 'publisher review has an unsupported schema version');
  check(Boolean(versionParts(baselineVersion)), 'publisher review has no valid baseline dataset version');
  check(compareVersions(master?.metadata?.dataset_version, baselineVersion) >= 0, 'publisher review baseline is newer than the master dataset');
  check(ids.length === new Set(ids).size, 'publisher review contains duplicate paper IDs');
  check(ids.every((id) => paperIds.has(id)), 'publisher review contains an unknown paper ID');
  check(resolution.resolved_records === postReportPapers.size, 'publisher review audit reconciliation is inconsistent');
  check(resolution.open_records + resolution.resolved_records === records.length, 'publisher review state counts do not cover every record');
  return errors;
};
