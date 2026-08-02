(() => {
  'use strict';

  const originalFetch = window.fetch.bind(window);
  const paperParts = ['00','01','02','03','04','05a','05b','06','07','08','09','10'];
  const paperPaths = paperParts.map((part) => `../data/performance/paper-data.part${part}.txt`);
  const taxonomyPaths = [
    '../data/performance/metric-taxonomy.json.gz.b64.part1',
    '../data/performance/metric-taxonomy.json.gz.b64.part2'
  ];

  const fetchText = async (path) => {
    const response = await originalFetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${path} returned ${response.status}`);
    return response.text();
  };

  const fetchJson = async (path) => {
    const response = await originalFetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${path} returned ${response.status}`);
    return response.json();
  };

  const decodeGzipJson = async (paths) => {
    const base64 = (await Promise.all(paths.map(fetchText))).join('').replace(/\s+/g, '');
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    return JSON.parse(await new Response(stream).text());
  };

  const bytesToBase64 = (bytes) => {
    let binary = '';
    const size = 0x8000;
    for (let index = 0; index < bytes.length; index += size) {
      binary += String.fromCharCode(...bytes.subarray(index, index + size));
    }
    return btoa(binary);
  };

  const encodeGzipJson = async (value) => {
    const input = new Blob([JSON.stringify(value)]).stream();
    const stream = input.pipeThrough(new CompressionStream('gzip'));
    const bytes = new Uint8Array(await new Response(stream).arrayBuffer());
    return bytesToBase64(bytes);
  };

  let mergedPromise;
  const buildMergedData = () => {
    if (mergedPromise) return mergedPromise;
    mergedPromise = Promise.all([
      decodeGzipJson(paperPaths),
      decodeGzipJson(taxonomyPaths),
      fetchJson('../data/performance/performance-summary.json'),
      fetchJson('../data/performance/paper-performance-supplemental.json')
    ]).then(async ([paperData, taxonomyData, baseSummary, supplement]) => {
      const existingIds = new Set((paperData.papers || []).map((paper) => Number(paper.paper_id)));
      const supplementalRecords = (supplement.records || []).filter((paper) => !existingIds.has(Number(paper.paper_id)));
      const papers = [...(paperData.papers || []), ...supplementalRecords]
        .sort((left, right) => Number(left.paper_id) - Number(right.paper_id));

      const metrics = (taxonomyData.metrics || []).map((metric) => ({
        ...metric,
        paper_ids: [...(metric.paper_ids || [])]
      }));
      const metricById = new Map(metrics.map((metric) => [metric.metric_id, metric]));

      supplementalRecords.forEach((paper) => {
        (paper.normalized_metric_ids || []).forEach((metricId) => {
          const metric = metricById.get(metricId);
          if (!metric) return;
          if (!metric.paper_ids.includes(Number(paper.paper_id))) metric.paper_ids.push(Number(paper.paper_id));
          metric.paper_ids.sort((a, b) => a - b);
          metric.paper_count = metric.paper_ids.length;
        });
      });

      const statuses = papers.reduce((counts, paper) => {
        counts[paper.reporting_status] = (counts[paper.reporting_status] || 0) + 1;
        return counts;
      }, {});
      const metricCounts = new Map();
      const groupCounts = {};
      papers.forEach((paper) => {
        (paper.normalized_metric_ids || []).forEach((metricId) => {
          metricCounts.set(metricId, (metricCounts.get(metricId) || 0) + 1);
          const group = metricById.get(metricId)?.metric_group;
          if (group) groupCounts[group] = (groupCounts[group] || 0) + 1;
        });
      });
      const allIds = new Set(papers.map((paper) => Number(paper.paper_id)));
      const missingIds = Array.from({ length: 853 }, (_, index) => index + 1).filter((id) => !allIds.has(id));
      const duplicateIds = papers
        .map((paper) => Number(paper.paper_id))
        .filter((id, index, values) => values.indexOf(id) !== index)
        .filter((id, index, values) => values.indexOf(id) === index);
      const topMetrics = [...metricCounts.entries()]
        .map(([metricId, count]) => ({
          metric_id: metricId,
          metric_name: metricById.get(metricId)?.metric_name || metricId.replaceAll('_', ' '),
          count
        }))
        .sort((left, right) => right.count - left.count || left.metric_name.localeCompare(right.metric_name))
        .slice(0, 20);

      const summary = {
        ...baseSummary,
        generated_at: supplement.generated_at || baseSummary.generated_at,
        source_rows: papers.length,
        valid_paper_ids: allIds.size,
        missing_ids: missingIds,
        duplicate_ids: duplicateIds,
        papers_with_reported_metrics: (statuses.reported_numerically || 0) + (statuses.reported_qualitatively || 0),
        papers_with_numerical_values: statuses.reported_numerically || 0,
        qualitative_only_records: statuses.reported_qualitatively || 0,
        not_reported_records: statuses.not_reported || 0,
        review_papers: statuses.review_paper || 0,
        non_pinn_records: statuses.non_pinn_record || 0,
        software_or_framework_records: statuses.software_or_framework || 0,
        normalized_observations: papers.reduce((total, paper) => total + (paper.normalized_metric_ids || []).length, 0),
        top_metrics: topMetrics,
        group_counts: groupCounts
      };

      return {
        paperBase64: await encodeGzipJson({ ...paperData, papers }),
        taxonomyBase64: await encodeGzipJson({ ...taxonomyData, metrics }),
        summary
      };
    });
    return mergedPromise;
  };

  window.fetch = async (input, init) => {
    const requestUrl = new URL(input instanceof Request ? input.url : input, document.baseURI);
    const filename = requestUrl.pathname.split('/').pop() || '';
    const isPaperPart = /^paper-data\.part(?:\d{2}|05a|05b)\.txt$/.test(filename);
    const isTaxonomyPart = /^metric-taxonomy\.json\.gz\.b64\.part[12]$/.test(filename);
    const isSummary = filename === 'performance-summary.json';

    if (!isPaperPart && !isTaxonomyPart && !isSummary) return originalFetch(input, init);

    try {
      const merged = await buildMergedData();
      if (isSummary) {
        return new Response(JSON.stringify(merged.summary), {
          status: 200,
          headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
        });
      }
      if (isPaperPart) {
        const content = filename === 'paper-data.part00.txt' ? merged.paperBase64 : '';
        return new Response(content, { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });
      }
      const content = filename.endsWith('part1') ? merged.taxonomyBase64 : '';
      return new Response(content, { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });
    } catch (error) {
      console.error('Performance supplement merge failed; using base Atlas data.', error);
      return originalFetch(input, init);
    }
  };
})();
