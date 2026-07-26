# Journal Articles — Exact Abstracts

This Markdown file was generated from the supplied dataset for reliable future review, searching, citation checking, and text synthesis.

## Dataset QA

* **Total records:** 420
* **Text handling:** Verbatim abstract text; only PDF line-wrap hyphenation, ligatures, whitespace, and publisher-layout artifacts were normalized in the source dataset.

\---

## Paper ID 176

**Record number:** 1  
**Paper ID:** 176  
**DOI:** 10.1109/TIE.2024.3476977  
**Publisher URL:** https://ieeexplore.ieee.org/document/10729277/

### Exact abstract

High-precision dynamics and friction models are crucial for high-performance control and operation of industrial robots. However, due to the requirement for model linearization, mainstream identification-based modeling methods struggle to capture nonlinear features of the model. In recent years, physics-informed neural network (PINN)-based methods have achieved interpretable nonlinear robotic dynamics and friction modeling, but suffer from suboptimal accuracy due to the lack of comprehensive modeling and learning strategies. This article presents a PINN-based friction-inclusive dynamics modeling method for industrial robots. A hybrid learning strategy for robot dynamics and friction is designed, ensuring modeling accuracy while avoiding reliance on joint torque component labels. Furthermore, residual error compensation is integrated into the proposed PINN to enhance its capability to learn nonlinear features. Experimental validation on two different robots demonstrates the effectiveness of the proposed method. Compared with other advanced methods, the average joint torque error is reduced by an average of 39.69%.

\---

## Paper ID 177

**Record number:** 2  
**Paper ID:** 177  
**DOI:** 10.1109/TIE.2024.3472313  
**Publisher URL:** https://ieeexplore.ieee.org/document/10726613/

### Exact abstract

This article proposes an innovative generative physics-informed machine learning (GPIML) method for the estimation of dc-link capacitance during the precharging process of the vehicular power systems, which contributes to greatly enhancing the reliability of electrified transportation. Different from the other machine learning-based estimation approaches, the proposed method produces highly accurate results using small input experimental dataset. To enable sufficient neural network training, diffusion algorithm is first adopted in the proposed method to augment the training data based on small input dataset. Then, the augmented data is fed to a physics-informed long shortterm memory (PILSTM) algorithm to estimate the dc-link capacitance. Superior accuracy and strong robustness to measurement noises are achieved. The effectiveness of the proposed method is validated through experimental studies.

\---

## Paper ID 178

**Record number:** 3  
**Paper ID:** 178  
**DOI:** 10.1109/JLT.2025.3538637  
**Publisher URL:** https://ieeexplore.ieee.org/document/10873852/

### Exact abstract

The conventional analog radio-over-fiber (A-RoF) scheme offers high spectral efficiency, which can meet the growing capacity demand in 6G cloud radio access networks (C-RAN). With the trend towards dense small cells, the directly modulated laser with direct detection (DML-DD) link stands out as a cost-effective option. The main challenge in the DML-DD link-based A-RoF fronthaul is the nonlinear chirp-dispersion interaction including composite second-order (CSO) and composite triple beat (CTB) distortion. In this work, we propose and experimentally demonstrate a fast-convergence and low data dependency physics-informed trimodule multiplicative network (TriMNet) for C-band DML-DD link. Neural networks (NN) usually require substantial training set to learn and achieve high performance in a data-driven mode. By introducing the analytical form of the CSO and CTB models, TriMNet can extract nonlinear distortion features more quickly and accurately, offering significantly reduced training data requirements. Compared to the fully connected neural network (FNN), TriMNet reduces training symbols by 50% and training epochs by 62.5%, without extra computational complexity. Furthermore, TriMNet enhances the system capacity, achieving a common public radio interface (CPRI)-equivalent rate of 1.02 Tb/s from 0.9 Tb/s in 10-km transmission and 0.84 Tb/s from 0.72 Tb/s in 15-km transmission at 8% error vector magnitude (EVM) threshold compared to full-tap 3rd order Volterra-based feed-forward equalizer (VFE).

\---

## Paper ID 179

**Record number:** 4  
**Paper ID:** 179  
**DOI:** 10.1109/TPEL.2025.3532588  
**Publisher URL:** https://ieeexplore.ieee.org/document/10849612/

### Exact abstract

Accurate estimation of the state of health (SOH) for lithium-ion batteries is crucial for maintaining their safety, reliability, and sustainability. This article presents an electrochemical aging-informed data-driven approach for battery SOH estimation by integrating physics-based electrochemical model with deep learning model. In addition, electrochemical parameter inconsistencies resulting from manufacturing differences can cause variations in battery aging rates, a factor often overlooked in traditional SOH prediction methods. The proposed method addresses inconsistency by leveraging the initial cyclic state to improve prediction accuracy and adaptability. Furthermore, a physics-informed dual neural network (PIDNN) is developed to estimate electrochemical parameters and the Li+ concentration in both the solid phase and the electrolyte to calculate battery capacity fade. A gradient normalization strategy is utilized to train the model effectively. The prediction performance of the proposed method is assessed using three metrics: mean absolute error, root mean square error (RMSE), and the coefficient of determination (R2). Notably, the RMSE remains below 0.556%, 0.310%, 0.187%, and 0.486% across four real-world battery datasets, even when trained with just 1% of the total data. Furthermore, PIDNN effectively simulates Li+ concentration dynamics in both the electrode and electrolyte, demonstrating the exceptional interpretability and accuracy of the proposed method.

\---

## Paper ID 182

**Record number:** 5  
**Paper ID:** 182  
**DOI:** 10.1109/TAES.2024.3520078  
**Publisher URL:** https://ieeexplore.ieee.org/document/10807245/

### Exact abstract

Blind modulation identification (BMI) of 6G aeronautical multibeam satellite (MBS) systems is prominently challenging due to the intricacy of shadowed-Rician (SR) fading, limited channel state information (CSI), and interbeam interference (IBI). These factors degrade thestatisticalpropertiesofmodulation signals,rendering conventional terrestrial BMI techniques inapplicable to MBS systems. To remedy the above flaws, this article proposes a physics-informed scattering transformation network (RCR-SCTNet) using symbol-level rotation correlation reconstruction (RCR) for BMI of MBS signals. Initially, the RCR strategy with partial CSI is designed to transform destructive interference into constructive interference, alleviating IBI, SR, and limited CSI problems. Then, the constellation intensity matrix is constructed as the training data for RCR-SCTNet with the help of domain knowledge. Finally, the scattering transformation module is employed to capture salient features with the lowest trainable parameters, and the gradient centralization (GC) strategy is further integrated into RCR-SCTNet to achieve stable and efficient training. Experimental results demonstrate that our RCR-SCTNet performs best among previous BMI methods in the severe MBS channels. Further, it remains a great generalization, is robust, and has low-computation complexity.

\---

## Paper ID 183

**Record number:** 6  
**Paper ID:** 183  
**DOI:** 10.1109/TTE.2024.3514657  
**Publisher URL:** https://ieeexplore.ieee.org/document/10789227/

### Exact abstract

This article proposes a physics-informed deep transfer reinforcement learning (PIDTRL) approach for power balance control and triple phase shift (TPS) modulation method for the input-series output-parallel dual active bridge (ISOPDAB) converter-based auxiliary power module (APM) in electric aircraft. The approach involves three stages: 1) centralized training of deep reinforcement learning agents to balance power and reduce current stress in the ISOP-DAB converter; 2) effective knowledge transfer from a source simulation system to a target experimental system using minimal experimental data, providing a scalable solution without extensive data reliance; and 3) deployment of multiple agents for online control in the ISOP-DAB converter. The proposed method adaptively determines optimal modulation variables (duty cycles and phase shifts) in stochastic and uncertain environments without requiring accurate model information. The experimental results validate the effectiveness of the proposed PIDTRL algorithm.

\---

## Paper ID 184

**Record number:** 7  
**Paper ID:** 184  
**DOI:** 10.1109/TEMC.2025.3526942  
**Publisher URL:** https://ieeexplore.ieee.org/document/10855003/

### Exact abstract

This article introduces an innovative calibratable modeling approach to effectively capture intricate arc behavior in air electrostatic discharge (ESD). The proposed method incorporates a compact electric arc resistance model rooted in the Rompe–Weizel law, calibrating by a physics informed neural network (PINN). The systematic uncertainties in the air discharge behaviorduetoenvironmentalfactorsandmeasurementprocedure are succinctly and effectively quantified through introducing an equivalent arc length in the compact model. A dedicated electrostatic air discharge behavior library is developed by a reducedorder partial element equivalent circuit model for training the neural network. The PINN calibrates the arc model according to the measured discharge currents on a standard ESD calibration set. The fidelity of the calibrated compact electric arc model is verified by the simulation and measurement. The efficacy of the proposed approach is observed through a case study. This new environment-aware modeling method provides deeper insights into air discharge phenomena and proves its promising potential in characterizing noncontact electromagnetic discharge.

\---

## Paper ID 185

**Record number:** 8  
**Paper ID:** 185  
**DOI:** 10.1109/TPAMI.2025.3529259  
**Publisher URL:** https://ieeexplore.ieee.org/document/10839301/

### Exact abstract

Addressing the pervasive challenge of imperfect data in autonomous vehicle (AV) systems, this study pioneers an integrated trajectory prediction model, WAKE, that fuses physicsinformed methodologies with sophisticated machine learning techniques. Our model operates in two principal stages: the initial stage utilizes a Wavelet Reconstruction Network to accurately reconstruct missing observations, thereby preparing a robust dataset for further processing. This is followed by the Kinematic Bicycle Model which ensures that reconstructed trajectory predictions adhere strictly to physical laws governing vehicular motion. The integration of these physics-based insights with a subsequent machine learning stage, featuring a Quantum Mechanics-Inspired Interaction-aware Module, allows for sophisticated modeling of complex vehicle interactions. This fusion approach not only enhances the prediction accuracy but also enriches the model’s ability to handle real-world variability and unpredictability. Extensive tests using specific versions of MoCAD, NGSIM, HighD, INTERACTION, and nuScenes datasets featuring missing observational data, have demonstrated the superior performance of our model in terms of both accuracy and physical feasibility, particularly in scenarios with significant data loss—up to 75% missing observations. Our findings underscore the potency of combining physicsinformed models with advanced machine learning frameworks to advance autonomous driving technologies, aligning with the interdisciplinary nature of information fusion.

\---

## Paper ID 186

**Record number:** 9  
**Paper ID:** 186  
**DOI:** 10.1109/TII.2024.3523588  
**Publisher URL:** https://ieeexplore.ieee.org/document/10836131/

### Exact abstract

Nonconductive materials are extensively used in industrial applications, particularly as coatings for metal structures like oil pipelines. However, these nonmetallic coatings are prone to damage from factors, such as corrosion and scratches, leading to widespread failures. This increases the demand for nondestructive evaluation techniques capable of accurately quantifying defect parameters in such materials. Capacitive Imaging (CI) technique is an emerging electromagnetic nondestructive testing method with promising application prospects in defect evaluation in nonconducting materials. However, the CI technique is commonly used as a screening technique to detect the presence of possible defects, and its defect sizing ability, which is crucial in some engineering applications, has yet to be explored. This article proposes a high precision defect sizing method for the CI technique based on a physics informed neural network. First, the physical model of the CI technique for the detection of defects in nonconducting material is analyzed. A physical formula, which was later used as physical information, for the quantification of defect length and width was then obtained. Finite-element simulations were then conducted to visualize the sensitivity distribution of the CI sensor and analyze the characteristics of defect signals the physical information was integrated into a neural network, enabling it to quantify defect parameters from the CI detection data. Experimental results demonstrate that this method can accurately determine defect length, width, depth, and buried depth. Compared to other neural network structures and traditional algorithms, the proposed approach achieves superior precision in defect quantification.

\---

## Paper ID 190

**Record number:** 10  
**Paper ID:** 190  
**DOI:** 10.1016/j.cma.2025.117787  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782525000593

### Exact abstract

Numerical methods for contact mechanics are of great importance in engineering applications, enabling the prediction and analysis of complex surface interactions under various conditions. In this work, we propose an energy-based physics-informed neural network (PINN) framework for solving frictionless contact problems under large deformation. Inspired by microscopic Lennard-Jones potential, a surface contact energy is used to describe the contact phenomena. To ensure the robustness of the proposed PINN framework, relaxation, gradual loading and output scaling techniques are introduced. In the numerical examples, the well-known Hertz contact benchmark problem is conducted, demonstrating the effectiveness and robustness of the proposed PINN framework. Moreover, challenging contact problems with the consideration of geometrical and material nonlinearities are tested. It has been shown that the proposed PINN framework provides a reliable and powerful tool for nonlinear contact mechanics. More importantly, the proposed PINN framework exhibits competitive computational efficiency to the commercial FEM software when dealing with those complex contact problems. The codes used in this manuscript are available at https://github.com/JinshuaiBai/energy\_PINN\_Contact.

\---

## Paper ID 191

**Record number:** 11  
**Paper ID:** 191  
**DOI:** 10.1109/TMAG.2025.3529855  
**Publisher URL:** https://ieeexplore.ieee.org/document/10843281/

### Exact abstract

Physics-informed neural networks (PINNs) have significant potential for modeling and parameter design in engineering field. While most existing PINNs research focuses on fluid mechanics and thermodynamics, few studies explore its application in electromagnetic field modeling of electromagnetic devices. Modeling the permanent magnet eddy-current coupler (PMECC) to predict its performance characteristics based on geometric parameters and material properties is crucial for its design and optimization. An unsupervised modeling method for PMECC based on physics-informed radial basis neural networks (PIRBFNNs) is presented in this work. The modeling and solving of static magnetic field for devices excited by permanent magnets (PMs) is realized, which solves the problem of the traditional PINN fully connected structure with many parameters and difficult training. We use the magnetic vector potential as the solution objective without providing the magnetic field boundary parameters and without labeling data, which is an unsupervised learning paradigm. The magnetic field distribution and performance of the PMECC can be computed using only the structural parameters. The experimental results show that the proposed PIRBFNN method is basically consistent with the results of the finite element numerical method and the analytical method. Additionally, a transfer learning experimental study was conducted to validate the effectiveness of the network components and training methods proposed in this article. The proposed method can, furthermore, be applied to the modeling and analysis of various devices using PM excitations.

\---

## Paper ID 192

**Record number:** 12  
**Paper ID:** 192  
**DOI:** 10.1109/TIA.2024.3430231  
**Publisher URL:** https://ieeexplore.ieee.org/document/10603394/

### Exact abstract

Power flow (PF) is the basis of steady-state analysis and control of power systems. The conventional model-driven PF formulated by a set of implicated nonlinear equations is solved iteratively by using Newton-Raphson method. But, the speed and convergence of PF computation are influenced by proper initial values and the efficiency of iterative process. The data-driven PF regression method can overcome the above issues by learning an explicit mapping function from PF data set. However, it simply achieves the nonlinear map from PF input to output, overlooking the physical rules in the PF calculation, which may result in poor accuracy and generalization. This paper presents a physically jacobian-informed encoder-decoder neural networks (NNs) for PF nonlinear regression. Based on the forward and inverse PF model, a multi-task learning method with encoder-decoder NNs is constructed for data-driven PF regression. To introduce PF physical characteristics, the corresponding jacobian information is embedded into the regression model to improve the accuracy and generalization. The performance of high accuracy and generalization of the proposed method is validated by IEEE test systems.

\---

## Paper ID 193

**Record number:** 13  
**Paper ID:** 193  
**DOI:** 10.1109/TIA.2025.3529675  
**Publisher URL:** https://ieeexplore.ieee.org/document/10841984/

### Exact abstract

In optimal dispatch (OD) of multiple integrated energy systems (MIES), purely data-driven reinforcement learning (RL) methods often encounter challenges such as transient data boundaries, robustness, and interpretability. For this problem, this paper proposes a multi-agent physics-informed reinforcement learning (MAPIRL) method for MIES optimal dispatch. MAPIRL analytically integrates safety constraints using hyperbolic tangent functions, implementing a physics-informed learning process that enforce these constraints within the actor networks. The welltrained MAPIRL can achieve highly generalized real-time decision making. The MAPIRL method is compared with none-physicsbased classical RL in a MIES market. The results demonstrate that MAPIRL not only facilitates highly safe and reliable dispatch decisions but also surpasses other methods in convergence efficiency. Additionally, embedding physics knowledge enhances the interpretability for the intelligent OD process.

\---

## Paper ID 194

**Record number:** 14  
**Paper ID:** 194  
**DOI:** 10.1109/TIA.2025.3529813  
**Publisher URL:** https://ieeexplore.ieee.org/document/10842046/

### Exact abstract

Amidst the increasing penetration of intermittent renewable generation and the persistent growth of load demands, voltage stability assumes a pivotal concern in smart grids. The realtime voltage stability assessment (VSA) under time-varying operating conditions becomes paramount. Recent strides in real-time VSA, utilizing intelligent data-driven learning with measurements, mark significant progress. However, a critical and unresolved challenge with purely data-driven methods is their susceptibility to performance degradation, especially in out-of-sample scenarios. To this end, this article presents a physics-informed guided deep learning (PGDL) paradigm for the practical and accurate assessment of voltage stability margins (VSMs), leveraging both physics-based and data-driven techniques. The PGDL architecture includes an improved temporal convolutional network (iTCN) for the automatic extraction of representative temporal features necessary for VSA from measurement data. Additionally, PGDL integrates physics-based features informed by domain-specific knowledge. A feature fusion scheme is then devised to merge deep-learned features with pertinent physics-based attributes. Acknowledging the unique contributions of these feature modalities to VSA, a novel twin attention mechanism (TAM) is proposed to adaptively adjust attention weights, prioritizing learned features and thus optimizing VSA performance. Substantial experiments on power systems of different scales, coupled with comparative analyses against stateof-the-art benchmarks, illustrate the efficacy and merits of the proposed approach.

\---

## Paper ID 195

**Record number:** 15  
**Paper ID:** 195  
**DOI:** 10.1109/TIA.2025.3529822  
**Publisher URL:** https://ieeexplore.ieee.org/document/10839544/

### Exact abstract

Digital automation and advanced sensors providing high resolution measurements are enabling reliable and efficient operation of the electric grid. Inaccurate measurements caused by anomalies can deteriorate the performance of grid operation. It is critical to detect these anomalies in the sensor measurement and flag or replace them to maintain the data integrity. The source of anomalies may include sensor failures, communication failures, firmware problems, database corruption, software bugs, and cyber intrusions. Given large amount of sensor data, decentralized approaches reduce the burden of data transfer for long distances and may run faster on edge devices. Relying solely on data-driven approaches with no system context may lead to inaccuracies in the anomaly detection results. This can be significantly improved by exploiting the knowledge of the underlying physic of the system. In this paper, we have proposed a decentralized approach involving overlapping Physics Informed Neural Networks (PINNs) covering different key components of the power system. Detailed generator dynamics, network power flow, load models, solar cells, and wind turbines are implemented in the PINN along with a deep learning layer to complement known dynamics with supplemental data driven computations. Both linear and nonlinear models of generator dynamics are implemented in modular nonlinear PINNs (mnPINNs) for approximating different generators as Single Machine Infinite Bus (SMIB) models with varying details. The performance of the mnPINN is evaluated using specific metrics for changing levels of anomalies in the presence of physical events like load change, and faults. Results demonstrate the superior performance of the proposed mnPINNs.

\---

## Paper ID 196

**Record number:** 16  
**Paper ID:** 196  
**DOI:** 10.1109/TIA.2025.3529799  
**Publisher URL:** https://ieeexplore.ieee.org/document/10839593/

### Exact abstract

Network reconfiguration has long been employed as a strategic approach to minimize power distribution system losses and effectively regulate voltage levels. Tap-changing voltage regulators are also critical for controlling bus voltages, especially in accommodating the increasing integration of distributed energy resources (DERs) with intermittent outputs. This paper introduces novel methodologies to address the challenges of dynamic reconfiguration and optimal tap setting in unbalanced three-phase distribution systems. We propose an approximated mixed-integer quadratically constrained program (MIQCP) to model dynamic reconfiguration, along with a pioneering formulation for voltage regulator (VR) tap-setting based on Special Ordered Set type 1 (SOS1). To mitigate computational complexity, we propose a physics-informed spatial-temporal graph convolutional network (STGCN) with an integrated link classifier. The proposed approach enables efficient solution generation by fixing specific variables in the MIQCP instance and solving the simplified sub-MIP using an MIP solver. Numerical studies demonstrate the superior prediction accuracy of our STGCN model compared to baseline neural network models, resulting in reduced DER curtailment and voltage deviation with shorter computation time.

\---

## Paper ID 197

**Record number:** 17  
**Paper ID:** 197  
**DOI:** 10.1109/TNSE.2025.3525625  
**Publisher URL:** https://ieeexplore.ieee.org/document/10836912/

### Exact abstract

Promptlyperceivingdistributionsystemstates is challenged by frequent topology changes and uncertain power injections. To address these issues, a Meta-learning enhanced physicsinformed graph attention convolutional network (Meta-PIGACN) model is proposed to handle topological variability in distribution system state estimation (DSSE). Specifically, physics information is integrated into the graph convolutional network, enabling a physics-informed edge-weighting process that incorporates physical information to control the aggregation of neighboring nodes. Besides, the graph attention mechanism automatically adjusts the importance of different neighboring nodes, allowing the capture and preservation of inherent system features across varying topologies, thereby improving state estimation accuracy. Furthermore, meta-learning is proposed to acquire empirical knowledge across multiple topologies so that the model can rapidly adapt to new configurations through iterative gradient descent updates even in large-scale systems. The simulation results based on the 33/118/1746-node distribution systems show the high accuracy and efficiency of the proposed model.

\---

## Paper ID 198

**Record number:** 18  
**Paper ID:** 198  
**DOI:** 10.1109/LRA.2025.3527285  
**Publisher URL:** https://ieeexplore.ieee.org/document/10833878/

### Exact abstract

Self-supervised learning is a powerful approach for developing traversability models for off-road navigation, but these models often struggle with inputs unseen during training. Existing methods utilize techniques like evidential deep learning to quantify model uncertainty, helping to identify and avoid out-of-distribution terrain. However, always avoiding out-of-distribution terrain can be overly conservative, e.g., when novel terrain can be effectively analyzed using a physics-based model. To overcome this challenge, we introduce Physics-Informed Evidential Traversability (PIETRA), a self-supervised learning framework that integrates physics priors directly into the mathematical formulation of evidential neural networks and introduces physics knowledge implicitly through an uncertainty-aware, physics-informed training loss.Ourevidentialnetworkseamlesslytransitionsbetweenlearned and physics-based predictions for out-of-distribution inputs. Additionally, the physics-informed loss regularizes the learned model, ensuring better alignment with the physics model. Extensive simulations and hardware experiments demonstrate that PIETRA improves both learning accuracy and navigation performance in environments with significant distribution shifts.

\---

## Paper ID 199

**Record number:** 19  
**Paper ID:** 199  
**DOI:** 10.1016/j.cma.2025.117784  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782525000568

### Exact abstract

In this work, we propose a workflow based on physics-informed neural networks (PINNs) to model multiphase fluid flow in fractured porous media. After validating the workflow in forward and inverse modeling of a synthetic problem of flow in fractured porous media, we applied it to a real experimental dataset in which brine is injected at a constant pressure drop into a CO2 saturated naturally fractured shale core plug. The exact spatial positions of natural fractures and the dynamic in-situ distribution of fluids were imaged using a CT-scan setup. To model the targeted system, we followed a domain decomposition approach for matrix and fractures and a multi-network architecture for the separate calculation of water saturation and pressure. The flow equations in the matrix, fractures and interplay between them were solved during training. Prior to fully-coupled simulations, we suggested pre-training the model. This aided in a more efficient and successful training of the coupled system. Both for the synthetic and experimental inverse problems, we determined flow parameters within the matrix and the fractures. Multiple random initializations of network and system parameters were performed to assess the uncertainty and uniqueness of the resulting calculations. The results confirmed the precision of the inverse calculated parameters in retrieving the main flow characteristics of the system. The consideration of matrix-fracture interactions is commonly overlooked in existing workflows. Accounting for them led to several orders of magnitude variations in the calculated flow properties compared to not accounting for them. The proposed PINNsbased workflow offer a reliable and computationally efficient solution for inverse modeling of multiphase flow in fractured porous media, achieved through history-matching noisy and multi-fidelity experimental measurements.

\---

## Paper ID 202

**Record number:** 20  
**Paper ID:** 202  
**DOI:** 10.1016/j.ymssp.2024.112134  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S088832702401032X

### Exact abstract

The smooth interaction between the pantograph and the catenary is crucial for the operational safety of railway vehicles. Coupled dynamic models of the pantograph–catenary system (PCS) constructed based on physical principles are important tools for analyzing their interactions; however, these models rely on accurate system parameters (such as stiffness, damping, and mass). Under actual operating conditions, the system parameters of the PCS exhibit timevarying characteristics and are difficult to measure, making it challenging for dynamic models to accurately represent the system’s behavior. Data-driven intelligent algorithms, with powerful feature extraction and nonlinear fitting capabilities, provide new approaches for solving system response prediction and state identification problems of the PCS. However, excessive reliance on large amounts of data for training may lead to poor generalization ability and pose challenges to model robustness, such as sensitivity to input noise or outliers. To address these issues, this paper proposes a surrogate model for the interaction of the PCS by integrating physical information with deep neural networks. The model introduces a novel neural operator that combines Transformers and convolutions (Convs), capable of capturing complex mapping relationships among various parameters within the dynamic model of the PCS in the frequency domain. A residual network incorporating physical information is designed to simulate the intricate correlations among system parameters. Additionally, a dynamic weighting balance algorithm is proposed to adjust the losses of different physical equations dynamically, ensuring the balance of physical information during training. The proposed model effectively performs response prediction and state identification of the PCS. It demonstrates excellent performance on both simulation and real-world data, providing new insights and methodologies for studying PCS interactions.

\---

## Paper ID 203

**Record number:** 21  
**Paper ID:** 203  
**DOI:** 10.1016/j.ymssp.2024.111948  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S088832702400846X

### Exact abstract

With the widespread application of deep learning across various industrial fields, there has been a growing demand for explainable artificial intelligence (XAI) and reliable decision-making processes. In addressing the issues of lacking inherent interpretability and credibility support for decision-making results within the blade crack detection models of industrial centrifugal fan, an embedded physical information network for blade crack detection considering dynamic multilevel credibility method is proposed in this paper, aiming to enhance the model’s interpretability and improve the balance between the accuracy of blade crack identification and the credibility of the decision-making process. Firstly, the spectral density offset (SDO) indicator is designed to implant the physical loss function space with the monotonicity constraint. Secondly, combined with the simulation a priori information, the gradient-weighted class activation mapping (Grad-CAM) and diversity-pick Shapley (DP-Shapley) methods are adopted to quantitatively assess its credibility from the data level and feature level. Subsequently, the composite credibility is embedded in the training process of the network at the decision-making level, and the accuracy and composite credibility relationship is balanced by adjusting the physical loss term weights. Finally, a dynamic updating method for the weights of the physical loss terms based on the gradient descent is designed, which can maintain a high crack detection accuracy during the model training while gradually improving the credibility of the overall network. Through the data verification of the blade damage test bed for the centrifugal fan, the model has high detection accuracy, stability, and interpretability, and can be applied to the credible detection of the blade crack damage.

\---

## Paper ID 205

**Record number:** 22  
**Paper ID:** 205  
**DOI:** 10.1109/TAP.2024.3516388  
**Publisher URL:** https://ieeexplore.ieee.org/document/10807120/

### Exact abstract

A circuit-informed neural network (CINN) is proposed for broadening the bandwidth of substrate-integrated waveguide (SIW)-fed slot antennas. The proposed approach optimizes the structural parameters for matching multiple stub pairs (SPs) efficiently by combining circuit knowledge and a well-trained artificial neural network (ANN) for single SP. The CINN significantly reduced the computational costs of optimization, dataset construction, and training. Experimental results illustrated the effectiveness of the proposed CINN in achieving a wide impedance fractional bandwidth of 43%. This approach features strong generalization capabilities, making it widely applicable to various SIW antennas with diverse structures and varying numbers of SPs.

\---

## Paper ID 206

**Record number:** 23  
**Paper ID:** 206  
**DOI:** 10.1109/TMTT.2024.3435970  
**Publisher URL:** https://ieeexplore.ieee.org/document/10633883/

### Exact abstract

To achieve an efficient inverse design method for electromagnetic devices, this article introduces the physics-informed neural network with embedded analytical models (EAM-PINN). This approach combines embedded physical knowledge and external physical constraints and is applied to the inverse design of electromagnetic periodic structures. In EAMPINN, we embed the physical knowledge of periodic structures into neural networks, specifically by replacing ordinary neurons with periodic neurons containing Floquet mode solutions to form neural networks and output electromagnetic fields. Then, we use the mode matching method to link the electromagnetic field with the structures, integrating them into the loss function as external physical constraints. Through EAM-PINN, we successfully perform inverse design of artificial magnetic conductors (AMCs) and frequency-selective surfaces (FSSs), demonstrating its effectiveness in designing electromagnetic periodic structures. Compared with traditional neural networks, EAM-PINN inherits the benefits of traditional PINN, requiring fewer training data or even no data at all, and achieves faster inverse design. Moreover, EAM-PINN exhibits stronger learning capabilities and easier convergence compared with the traditional PINN.

\---

## Paper ID 207

**Record number:** 24  
**Paper ID:** 207  
**DOI:** 10.1109/TTE.2024.3471626  
**Publisher URL:** https://ieeexplore.ieee.org/document/10701482/

### Exact abstract

Lithium-ion (Li-ion) battery health management is crucial for ensuring the safety and stability of electronic products, particularly in estimating remaining useful life (RUL). To achieve rapid and accurate prognostics and improve model interpretability, this article proposes a physics-informed hybrid data-driven approach with generative electrode-level features for battery health prognostics. Initially, an electrochemicalinformed data generative model is developed to reconstruct battery electrode-level state. Subsequently, features are extracted from cell-level aging states and the synthetic aging data to enhance interpretability. Furthermore, a physics-informed hybrid neural network (PIHNN) is introduced to integrate electrode-level aging states with cyclic cell-level features for battery RUL prediction. Validation is performed using four battery datasets, demonstrating the high accuracy, feasibility, and real-time performance of the proposed method and different battery aging modes can be identified by the proposed method effectively.

\---

## Paper ID 208

**Record number:** 25  
**Paper ID:** 208  
**DOI:** 10.1109/JLT.2024.3477409  
**Publisher URL:** https://ieeexplore.ieee.org/document/10712734/

### Exact abstract

Simulating the propagation of ultrashort pulses in optical fibers is vital for photonic technologies such as laser design, high-speed telecommunications, and high-resolution imaging. The conventional approach using the nonlinear Schrödinger equation (NLSE) is time-intensive and complex, creating a hurdle for realtime experimental design and pulse optimization. While recurrent neural networks (RNNs) have been explored to mitigate these issues, they often require extensive NLSE simulations for training, presenting challenges related to time and cost. To overcome these limitations, we propose a physics-informed neural network (PINN) that efficiently captures ultrashort pulse dynamics, reducing the computational burden and the need for extensive training data. We examine the model’s applicability for initial pulse widths above and below 1 ps in optical fibers, evaluating its prediction accuracy, training duration, and speed of prediction. Our findings demonstratethatPINNoffersapreciseandefficientsolutionforpredicting intricate pulse behaviors. With its adaptability to various input conditions and high predictive accuracy even with limited training data,PINNshowsgreatpromiseforwidespreaduseinexperimental settings.

\---

## Paper ID 211

**Record number:** 26  
**Paper ID:** 211  
**DOI:** 10.1049/itr2.70059  
**Publisher URL:** https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/itr2.70059

### Exact abstract

In electric railways, the interaction performance between the pantograph and catenary is crucial for maintaining a stable current supply. Establishing high-fidelity numerical models using the finite element method is generally desirable, yet it involves considerable computational complexity and time demands. In this paper, we propose a novel dynamic prediction model that integrates physical information and data-driven approaches to solve the pantograph-catenary interaction, called FENet. Specifically, there are two significant aspects: (1) A deep learning framework is developed for efficient simulation. The network utilises the temporal convolutional network to extract short-term local features. Simultaneously, the attention-based long shortterm memory is leveraged to capture the long-term dependencies in the interaction sequence. FENet establishes the dynamic relationship between the system state and excitation variables, achieving fast and accurate simulation. (2) We integrate multiple physics-informed loss terms to handle implicit constraints within motion equations, which leverages physical principles to guide the learning process. Additionally, a dynamic weighting mechanism adaptively balances the contributions of various terms in the physics-based loss function. Experimental results reveal that FENet exhibits effectiveness and robustness against different external excitations and achieves long-term dynamic response prediction with negligible computational effort. Moreover, it shows promising potential for real-time simulation and feedback in pantograph hardware-in-the-loop test rigs.

\---

## Paper ID 212

**Record number:** 27  
**Paper ID:** 212  
**DOI:** 10.1109/TSTE.2024.3452489  
**Publisher URL:** https://ieeexplore.ieee.org/document/10660524/

### Exact abstract

The serious uncertainties from the extensive integration of renewable energy generations put forward a higher real-time requirement for power system dispatching. To provide economic and feasible generation operations in real-time, a physicsinformed reinforcement learning (PIRL) method based on constrained reinforcement learning (CRL) for optimal power flow (OPF) is presented in this paper. In the proposed method, a physicsinformed actor based on the power flow equations is designed to generate generation operations that satisfy the equality constraints of OPF. To specify inequality constraints in actor optimization, the policy gradient is augmented with the constraints to correct unfeasible generation operations. In particular, the cost functions related to inequality constraints can be directly calculated based on the output of the actor, which is more accurate than using networks to approximate in general CRL methods. The proposed method is tested on the IEEE 118-bus system, and the simulation result shows that the proposed method achieves a significant improvement in computation speed compared with the traditional interior point method while obtaining a similar generation cost.

\---

## Paper ID 213

**Record number:** 28  
**Paper ID:** 213  
**DOI:** 10.1109/TPWRS.2024.3394371  
**Publisher URL:** https://ieeexplore.ieee.org/document/10509003/

### Exact abstract

This work describes a new way to solve the optimal power flow problem applying typed graph neural networks. Typed graph neural networks allow the representation of different elements of transmission systems with different types of nodes, thus adding accuracy and interpretability to the solutions obtained, in comparison to results obtained with conventional feed-forward neural network models. The proposed graph neural network architecture is trained without the need of training data, through a physics informed loss function which incorporates not only the optimization objective, but also operational constraints of the physical system. Results are comparable with those obtained with the interior point method, and it is shown that the calculation time is greatly reduced.

\---

## Paper ID 214

**Record number:** 29  
**Paper ID:** 214  
**DOI:** 10.1109/TNNLS.2023.3329368  
**Publisher URL:** https://ieeexplore.ieee.org/document/10310297/

### Exact abstract

Lithium-ion batteries are widely used in modern society. Accurate modeling and prognosis are fundamental to achieving reliable operation of lithium-ion batteries. Accurately predicting the end-of-discharge (EOD) is critical for operations and decision-making when they are deployed to critical missions. Existing data-driven methods have large model parameters, which require a large amount of labeled data and the models are not interpretable. Model-based methods need to know many parameters related to battery design, and the models are difficult to solve. To bridge these gaps, this study proposes a physics-informed neural network (PINN), called battery neural network (BattNN), for battery modeling and prognosis. Specifically, we propose to design the structure of BattNN based on the equivalent circuit model (ECM). Therefore, the entire BattNN is completely constrained by physics. Its forward propagation process follows the physical laws, and the model is inherently interpretable. To validate the proposed method, we conduct the discharge experiments under random loading profiles and develop our dataset. Analysis and experiments show that the proposed BattNN only needs approximately 30 samples for training, and the average required training time is 21.5 s. Experimental results on three datasets show that our method can achieve high prediction accuracy with only a few learnable parameters. Compared with other neural networks, the prediction MAEs of our BattNN are reduced by 77.1%, 67.4%, and 75.0% on three datasets, respectively. Our data and code will be available at: https://github.com/wang-fujin/BattNN.

\---

## Paper ID 215

**Record number:** 30  
**Paper ID:** 215  
**DOI:** 10.1109/TPWRS.2024.3406674  
**Publisher URL:** https://ieeexplore.ieee.org/document/10542429/

### Exact abstract

(PTSA) methods mainly provide an overall estimation of the probabilistic transient stability index (TSI) but ignore the temporal characteristics of each individual synchronous generators. In addition, conventional surrogate model-based PTSA trains a model for each individual trip, ignoring uncertainties of random trips. To address the above challenges, this paper develops a physicsinformed graphical learning approach for PTSA to predict the post-fault rotor angle trajectories (based on the pre-fault system state and trip location) and deal with multiple trips. The statistical analysis is designed for the developed advanced PTSA to achieve two objectives. First, it provides an overall estimation of the probabilisticTSIbyusingthemaximumrotorangledifference.Second,to further improve the situational awareness of operators, it visualizes the temporal information of the probabilistic transient stability. Three-sigma rule is used to analyze the trajectory of TSI (mean, upper bound, and lower bound). To visualize the probabilistic TSI at any assessment time point, the TSI PDF at the corresponding time point is calculated. Comparison experiments are performed on the IEEE-39 Bus System and IEEE-118 Bus System to verify the efficiency and accuracy of the proposed method.

\---

## Paper ID 216

**Record number:** 31  
**Paper ID:** 216  
**DOI:** 10.1109/JSTSP.2024.3430822  
**Publisher URL:** https://ieeexplore.ieee.org/document/10602734/

### Exact abstract

In safety- and precision-critical control scenarios for permanent magnet synchronous motors (PMSMs), the external spontaneous disturbance causes unexpected speed drop. The disturbance occurs without routine, so it cannot be modeled specifically. The large speed drop and slow response speed cause a reduced life of the machines driven by PMSMs. Therefore, it is crucial to implement a method that can lead the controller to learn the effects caused by disturbances. To this end, this paper proposes a novel approach based on the basic structure of a backpropagation neural network (BP) for adaptive real-time adjustment in motor control. Regarding the lack of explainability of BP in existing methods, the electric motor physics is embedded into the BP (BP-PHY) gradient update part to enlarge the range of stability. To overcome the shortage of a potentially unstable output of neural network (NN), the learning parameter of NN is tailored based on the stability theory and motor physics. Finally, the proposed methods are implemented into simulations and experiments. The recovery time after disturbance decreases to 51.3% and the speed drop decreases to 50.3% compared to the basic controller of the PMSM, while the control stability of the NN is ensured.

\---

## Paper ID 217

**Record number:** 32  
**Paper ID:** 217  
**DOI:** 10.1109/TPWRS.2024.3460427  
**Publisher URL:** https://ieeexplore.ieee.org/document/10679928/

### Exact abstract

This letter introduces a novel graph convolutional neural network (GCN) architecture for solving the optimal switching problem in distribution networks while integrating the underlying power flow equations in the learning process. The switching problem is formulated as a mixed-integer second-order cone program (MISOCP), recognized for its computational intensity making it impossible to solve in many real-world cases. Transforming the existing literature, the proposed learning algorithm is augmented with mathematical model information representing physical system constraints both during and post training stages to ensure the feasibility of the rendered decisions. The findings highlight the significant potential of applying predictions from a linearized model to the MISOCP form.

\---

## Paper ID 218

**Record number:** 33  
**Paper ID:** 218  
**DOI:** 10.1109/TII.2024.3452274  
**Publisher URL:** https://ieeexplore.ieee.org/document/10683882/

### Exact abstract

Modulation recognition (MR) plays a pivotal role due to its application in the spectrum sensing of 5G industrial cognitive communications and radio interference detection at the physical layer of the Internet of Things (IoT). Previous works have mainly focused on simulated fourth-generation (4G) multicarrier systems and ideal radio frequency (RF) scenarios. To bridge the gap between practice and theory, we propose a viable MR algorithm on all-physical testbeds, with nonlinear impairments of 28 GHz active phased arrays (APA). Specifically, our testbed is built on the Rohde\&Schwarz (R\&S) vector signal generation R\&S-SMBV100B and spectrum analyzer R\&S-FSW 67 GHz. To extract salient modulation patterns, we develop a physical-informed scattering transform (SCT) MR network (SCTMR-Net). With SCT modules, SCTMR-Net produces the translation-invariant and deformation-stable representations of 5-G signals by wavelet convolution, nonlinear modulus and low-pass filters. Extensive experiments on real-world measurement verify the viability of SCTMR-Net for high robustness to APA impairments.

\---

## Paper ID 219

**Record number:** 34  
**Paper ID:** 219  
**DOI:** 10.1109/TII.2024.3452273  
**Publisher URL:** https://ieeexplore.ieee.org/document/10691675/

### Exact abstract

Lithium-ion battery health state estimation constitutes an important part of battery management systems, with existing methods either based on mechanistic models or data-driven approaches. This article proposes a physics-informed hybrid multitask learning approach for estimating battery full-life aging states by integrating mechanistic knowledge with data-driven methods at an early lifetime. First, a hybrid aging mode-informed feature is introduced to integrate electrode-level health states with data-driven information. An electrochemical-informed multitask generative model is established to estimate Li+ concentration dynamics in both the solid particle and electrolyte. An electrode-level state-constrained training strategy is implemented to guide the model to respect causality. For validation purposes, three battery datasets are utilized to estimate aging states from the electrochemical to the cell level. Compared with traditional mechanistic and data-driven models, the proposed method demonstrates higher accuracy and real-time performance in battery state estimation.

\---

## Paper ID 220

**Record number:** 35  
**Paper ID:** 220  
**DOI:** 10.1109/TSMC.2024.3443601  
**Publisher URL:** https://ieeexplore.ieee.org/document/10721205/

### Exact abstract

This article introduces a novel time/space separation-based physics-informed machine learning (T/S-PIML) modeling method by making full use of the complementary strengths of the physics-informed neural network (PINN) and the time/space separation methodology. T/S-PIML is the first attempt to seamlessly integrate structural (including spatial and temporal) physical information with data for effective spatiotemporal modeling of distributed parameter systems (DPSs). With the help of the spectral method, spatial basis functions are first extracted to capture spatial physical information. Subsequently, a reducedorder system is derived to characterize the corresponding temporal physical information. Upon the structural physical information, PINN is developed for temporal modeling. Following the time/space synthesis, a small amount of sensing data is utilized to calibrate system errors. Experiments on a benchmark DPS and the thermal process of a lithium-ion battery demonstrate the effectiveness of T/S-PIML.

\---

## Paper ID 221

**Record number:** 36  
**Paper ID:** 221  
**DOI:** 10.1109/TPEL.2024.3481158  
**Publisher URL:** https://ieeexplore.ieee.org/document/10717440/

### Exact abstract

It is challenging to perform high-precision parameter identification for switched mode power converters with undetermined topology duration because the physical information, such as switching instants and circuit state variables at topology transitions is critical for realizing this goal. In conventional physics-based solutions, additional measurement circuits are required to compensate for the absence of the unknown physical information at topology transitions, otherwise accuracy has to be compromised. To avoid the undesired additional hardware, an extended PINN (ePINN), which integrates a pseudolabel generation network into the piecewise PINN, is proposed. This network can precisely identify key system parameters, along with the duration of each topology and system states at topology transitions. The effectiveness of the e-PINN is experimentally validated on a buck converter operating in discontinuous conduction mode (DCM), which, is a basic case of the power converter having undetermined topology duration. Compared with the traditional physics-based parameter identification methods for DCM buck converter, e-PINN can precisely estimate system parameters without necessitating high-frequency sampling or zero-current detection circuits, which increase the cost, volume, and safety risk. Besides, it can operate without disrupting system operation.

\---

## Paper ID 222

**Record number:** 37  
**Paper ID:** 222  
**DOI:** 10.1109/TII.2024.3452203  
**Publisher URL:** https://ieeexplore.ieee.org/document/10713461/

### Exact abstract

Accurately modeling the electrochemical process of large-scale lithium-ion batteries (LLBs), which involves estimating the electrochemical state distributions within the process, is crucial for the design and management of LLBs. A two-dimensional (2-D) physics-based model can describe the electrochemical process of LLBs accurately. However, due to the presence of complex partial differential equations (PDEs), solving the model becomes a challenging task. This article develops a physicsinformed composite network (PICN) as a surrogate model of the 2-D physics-based model. Specifically, PICN consists of four deep neural networks (DNNs) to estimate the distributions of four key electrochemical states, respectively. Since the architecture of PICN is inspired by PDE characteristics, it can achieve high accuracies with four lightweight DNNs. Additionally, by incorporating physics and data, PICN achieves accurate estimations using limited data. It can even estimate the electrochemical state distributions that may not be measured directly. Moreover, PICN presents a low-frequency information-based pretraining strategy and a two-stage loss balance strategy to address the convergence failure and loss imbalance that may arise in the training of PICN. PICN is a new attempt to model the electrochemical process of LLBs by integrating physics with data. Extensive experiments show that it is better than state-of-the-art models.

\---

## Paper ID 224

**Record number:** 38  
**Paper ID:** 224  
**DOI:** 10.1109/ACCESS.2025.3527047  
**Publisher URL:** https://ieeexplore.ieee.org/document/10833613/

### Exact abstract

This paper focus on the application of Physics Informed Neural Network (PINN) for extracting parameters of photovoltaic (PV), wind, and energy storage equipment models. Accurately extracting the parameters of these models is essential for effectively controlling and optimizing the overall stability of Chongqing power system (CPS). Despite numerous algorithms proposed to tackle this issue, accurately and reliably extracting the parameters of these remains a significant challenge. This paper proposed an improved PINN, named Uniform Physics Informed Neural Network (UPINN), with Proximal Policy Optimization (PPO) based reinforcement learning, for extortion of parameters of these models. The PINN difficulty is overcome in UPINN by configuring four strategies: feedback operator, GRU gating mechanisms, transfer operator with historic population, and modification factor with PPO aided reinforcement learning. UPINN models are trained iteratively to maximize parameters and reduce RMSE. UPINN accurately extracts parameters and describes the behavior of PV, wind, and energy storage equipment models as it converges towards optimal solutions through parameter adjustments and RMSE evaluations. The UPINN was implemented for real-time voltage stability monitoring of CPS. The results show that UPINN performs better than other neural network models in respect of accuracy and stability, demonstrating the effectiveness of improved strategies. Moreover, its emphasis the importance of computed and estimated indices obtained through UPINN for predicting voltage collapse occurrences within the system.

\---

## Paper ID 225

**Record number:** 39  
**Paper ID:** 225  
**DOI:** 10.1109/JMMCT.2025.3629980  
**Publisher URL:** https://ieeexplore.ieee.org/document/11230574/

### Exact abstract

This work proposes the inverse design of bandstop Frequency Selective Surface using a Graph based Conditional Variational Autoencoder (G-CVAE) integrated with a PhysicsInformed Neural Network (PINN). This inverse design involves the prediction of FSS geometry that exhibits ultra-wide stopband characteristics. Initially, the graph convolutional network precisely extracts the topological and spatial relationships within the FSS geometrical design. The features of the graph and simulation results of the FSS dataset are used to train the CVAE, which maps the FSS physical structure and its electromagnetic behavior. The trained CVAE predicts the FSS geometries with desired frequency responses, while the PINN is incorporated to ensure physical feasibility. By monitoring the average relative error values, the simulated and predicted transmission coefficients are brought closer to each other. Also, similar approach is followed to enhance the angular stability and to achieve polarization independence in both TE and TM modes. A G-CVAE-PINN is constructed and trained using various random combinations of graph attributes and simulation outcomes, achieving an average inaccuracy of 3%. Further, one of the best designs from the predicted FSS designs is chosen for experimental validation. This predicted and experimentally validated bandstop FSS exhibits wide band rejection of 20 GHz ranging from 8 GHz to 28 GHz. The fabricated design exhibits polarization independence up to 75°in both normal and oblique angles. Thus, the predicted FSS designs are ideal for radome, EMI shielding, and satellite communications, providing efficient frequency filtering for 5G and beyond 5G networks.

\---

## Paper ID 226

**Record number:** 40  
**Paper ID:** 226  
**DOI:** 10.1109/TMAG.2025.3629546  
**Publisher URL:** https://ieeexplore.ieee.org/document/11230642/

### Exact abstract

Parametric surrogate models of electric machines are widely used for efficient design optimization and operational monitoring. Addressing geometry variations, spline-based computer-aided design representations play a pivotal role. In this study, we propose a novel approach that combines isogeometric analysis, proper orthogonal decomposition and deep learning to enable rapid and physically consistent predictions by directly learning spline basis coefficients. The effectiveness of this method is demonstrated using a parametric nonlinear magnetostatic model of a permanent magnet synchronous machine.

\---

## Paper ID 227

**Record number:** 41  
**Paper ID:** 227  
**DOI:** 10.1109/TMAG.2025.3626486  
**Publisher URL:** https://ieeexplore.ieee.org/document/11219308/

### Exact abstract

Open-boundary 2-D magnetostatic field problems are computationally challenging for traditional numerical methods. This work proposes MagOpenNet, a physics-informed neural network (PINN) framework that introduces the concept of the 1-D and 2-D Astley Infinite Element Method (IEM), along with a self-adaptive weighting strategy, to address the complexities of predictions for both interior and exterior domains. Benchmark tests on circular geometry show that MagOpenNet attains at least 73.2 % reduction compared to the Finite Element Method (FEM) in computation time, 15.58 % reduction compared to IEM and 73.42 % reduction compared to the Finite Difference Method (FDM), with an average of 98.6 % accuracy. The transfer learning-based bus duct, C-core, and U-core benchmarks yield a similar outcome. Compared to traditional PINNs, MagOpenNet achieves up to 36.61 % time reduction in training. These results demonstrate that MagOpenNet provides an alternative for high computational efficiency, high accuracy, strong generalisation ability and stable convergence for open boundary magnetostatic analyses.

\---

## Paper ID 228

**Record number:** 42  
**Paper ID:** 228  
**DOI:** 10.1109/TMAG.2025.3626152  
**Publisher URL:** https://ieeexplore.ieee.org/document/11218939/

### Exact abstract

A new class of neural networks has been recently introduced to solve problems based on some physical model. Such networks are called “Physical-Informed Neural Networks” (PINN). PINN are trained not based on input-output data, but rather by explicitly enforcing the model physical laws. More in detail, they are trained to minimize the “equations residual” in the physical model in each point of the domain rather than the discrepancy with known data. In this contribution, we propose to formulate the equations of ElectroMagnetism (EM) embedded in a PINN by using a weak formulation approach. This helps convergence of the training process, thanks to the lower derivation order required in the error computation. In addition, the presence of different materials in the domain is easily treated. In this digest, the approach is described in its fundamentals, and a simple example is presented.

\---

## Paper ID 229

**Record number:** 43  
**Paper ID:** 229  
**DOI:** 10.1109/TMTT.2025.3616193  
**Publisher URL:** https://ieeexplore.ieee.org/document/11198828/

### Exact abstract

Accurate and efficient modeling of radio wave propagation in tunnel environments is critical for the deployment and optimization of modern intelligent transportation systems (ITSs). Traditional physics-based methods, such as the parabolic wave equation (PWE) methods, face significant challenges due to their high computational cost. Recently, the adoption of machine learning (ML) methods has enabled rapid modeling of radio wave propagation in tunnels. However, these approaches face significant challenges in accurately predicting long-range propagation in tunnel environments, limiting their practical applicability. This article proposes a physics-informed longrange attentive propagation network (PLAPN) that combines convolutional feature encoding, a dual-path attention translator, and a sliding window inference strategy. The model is designed to directly learn received signal strength (RSS) distributions from short-range simulations in tunnels, enabling long-range sequence prediction while capturing both spatial and temporal dependencies. Meanwhile, we introduce a sliding window strategy that substantially enhances prediction accuracy by focusing attention on local temporal contexts and reducing error accumulation over long sequences. Both measurement data obtained from the Massif Central tunnel and simulation results across diverse tunnel geometries and frequency settings confirm that the windowed version of the model (PLAPN-Win) delivers superior reconstruction accuracy compared to its nonwindowed variant (PLAPN-Nowin) and a conventional convolutional neural network (CNN) baseline.

\---

## Paper ID 230

**Record number:** 44  
**Paper ID:** 230  
**DOI:** 10.1109/JMMCT.2025.3618590  
**Publisher URL:** https://ieeexplore.ieee.org/document/11195112/

### Exact abstract

A novel meshless electromagnetic (EM) simulation framework based on Physics-Informed Neural Networks (PINNs), enhanced by the integration of Kolmogorov–Arnold Networks (KANs) is presented. The proposed method addresses both electrostatic and electrodynamic problems governed by Laplace and Helmholtz equations, respectively. A modular and interpretable simulation architecture is developed using KAN-PINNs which enables accurate field learning in multilayered printed circuit boards (PCBs) with spatially varying permittivity. Three canonical structures: an electrostatic box, a parallel-plate transmission line (TL) and a stripline TL are modeled to demonstrate the validity of the method. The results are validated against commercial fullwave solvers showing excellent agreement with normalized rootmean-square errors (RMSE) below 0.1. Moreover, a 4-layer PCB structure is simulated at 100 MHz to demonstrate the method’s capability at higher frequencies. For this case, the model achieves a normalized RMSE of 0.153 while reducing simulation time by a factor of three compared to numerical solvers. The proposed framework provides a scalable and fully mesh-free alternative to traditional electromagnetic solvers. This introduces new potential for efficiently simulating complex PCB structures in EMI applications.

\---

## Paper ID 231

**Record number:** 45  
**Paper ID:** 231  
**DOI:** 10.1109/TMAG.2025.3618865  
**Publisher URL:** https://ieeexplore.ieee.org/document/11195845/

### Exact abstract

In this paper, an enhanced physics-informed neural network (PINN) framework is proposed for accurate time-domain electromagnetic field computation in power transformers. To address the numerical stiffness and convergence challenges arising from steep field gradients between ferromagnetic cores, dielectric materials, and multi-layer windings, the high-frequency representation capability of the SIREN network architecture is leveraged. A novel adaptive collocation point sampling strategy is developed to dynamically refine spatial-temporal sampling resolution in high-gradient regions, effectively balancing numerical accuracy with computational efficiency. The proposed framework rigorously embeds Maxwell’s equations and composite boundary conditions into the loss formulation, establishing a surrogate model for 2D electromagnetic field computation. Numerical results demonstrate a twoorder-of-magnitude reduction in prediction error compared to vanilla PINNs with random sampling strategy. This breakthrough enables efficient simulation of time-domain multi-physics fields in complex electromagnetic devices featuring intricate geometries and multi-material interfaces.

\---

## Paper ID 232

**Record number:** 46  
**Paper ID:** 232  
**DOI:** 10.1109/TGRS.2025.3618467  
**Publisher URL:** https://ieeexplore.ieee.org/document/11194122/

### Exact abstract

Certain ore deposits feature both density and electrical anomalies, making them detectable via gravity and electromagnetic (EM) methods. However, under complex field conditions, signals are often distorted or lost due to observational errors, undermining inversion reliability. In joint inversion, errors from a single data source may mislead the overall model, resulting in structural deviations and blurred orebody boundaries. Additionally, gravity and EM inversions exhibit diﬀerent volume eﬀects, often causing inconsistencies in spatial scale representation. Their distinct physical mechanisms further hinder the establishment of clear nonlinear mappings, limiting the eﬀectiveness of traditional joint inversion approaches in achieving consistent integration and stable results. To address these challenges, we propose a spatial density-informed EM inversion network (SDI-EMI Network), a deep inversion network that fuses spatial density and EM response data. The network first performs gravity inversion to estimate orebody geometry, which serves as a structural prior for guiding EM inversion. Aligning volume deformation patterns ensures unified scale representation, enhances data complementarity, and suppresses interference from nonorebody regions. This method overcomes limitations in prior modeling and data fusion while leveraging deep learning’s nonlinear capacity. Experimental results confirm that the SDI-EMI Network oﬀers improved resolution, structural clarity, and robustness for identifying deposits with coexisting density and resistivity anomalies, supporting its potential in complex geological settings.

\---

## Paper ID 233

**Record number:** 47  
**Paper ID:** 233  
**DOI:** 10.1109/ACCESS.2025.3618282  
**Publisher URL:** https://ieeexplore.ieee.org/document/11194151/

### Exact abstract

Traffic congestion and inefficiencies in transportation networks pose significant challenges to road safety, travel times, and environmental sustainability. Traditional traffic management systems, typically reliant on sparse sensor data and rigid models, often fail to provide accurate, reliable, and user-friendly insights. This paper introduces a novel Physics-Informed Neural Network-Based Traffic State Estimator (PINN-TSE), framework that integrates the Aw-Rascle traffic flow model with advanced machine learning and natural language processing (NLP) techniques. By combining physics-informed modeling with datadriven learning, the framework ensures accurate and physically consistent predictions of traffic density and velocity. A multicomponent loss function balances data fidelity with physical constraints, while Large Language Models (LLMs) generate contextualized and interpretable traffic insights through a chat-based web interface. The system is designed to handle diverse user queries from precise spatio-temporal inputs to broad, general inquiries, making it highly adaptable for real-world deployment. Validated on real-world data from the US-101 highway, PINN-TSE demonstrated strong performance in capturing shockwave dynamics and transitions between traffic regimes. It achieved mean absolute errors (MAE) of 2.4 vehicles per mile (vpm) for density and 3.98 mph for velocity, representing improvements of 60% and 73%, respectively, over purely data-driven models. Furthermore, the shockwave speed error was reduced to 8%, significantly improving the reliability of traffic dynamic predictions. The system’s ability to provide actionable insights, such as identifying congestion hotspots and suggesting alternative routes, highlights its practical utility in real-world traffic management. This work makes three key contributions: 1) a robust PINN-TSE framework that embeds physical laws into neural networks, 2) an intuitive LLM-powered interface for real-time traffic interaction, and 3) a demonstration of its effectiveness in real-world settings. By bridging the gap between complex traffic data and human decision-making, this study advances the field of intelligent transportation systems, offering a transformative solution to safer, more efficient, and sustainable traffic management.

\---

## Paper ID 234

**Record number:** 48  
**Paper ID:** 234  
**DOI:** 10.1109/TMAG.2025.3615791  
**Publisher URL:** https://ieeexplore.ieee.org/document/11184611/

### Exact abstract

Physics-Informed Neural Networks (PINNs) offer a promising alternative to mitigate difficulties inherent in mesh-based approaches, such as finite difference methods, particularly concerning mesh generation times and computational costs for achieving higher accuracies. Since PINNs are mesh-free and provide continuous function representations, they naturally solve these challenges faced by traditional mesh-based methods. However, a major bottleneck in deploying PINNs lies in the cumbersome process of choosing optimal hyperparameters for specific problems and target error tolerances. In this work, we propose and benchmark a hybrid random and grid search approach to tune suitable PINN hyperparameters. Our results in an application example indicate that this approach is more efficient and reliable than conventional grid-based, random-based, or surrogate-guided optimization strategies.

\---

## Paper ID 235

**Record number:** 49  
**Paper ID:** 235  
**DOI:** 10.1109/TAP.2025.3609199  
**Publisher URL:** https://ieeexplore.ieee.org/document/11174083/

### Exact abstract

This study proposes a current-coding residual (CCR) structure of deep learning (DL) to solve electromagnetic inverse scattering (EMIS) problems in media with inhomogeneous background structures. The CCR framework combines an encoder-decoder architecture with a residual iterative structure and a current-assisted operator matrix to regulate network parameter learning. By embedding this designed matrix, the CCR imposes constraints on the structural and weight distributions during contrast (permittivity) reconstruction, leveraging the physics-informed interaction on scatterers as prior knowledge, which ensures faster convergence and more stable inversion results. This method focuses on the reconstruction of both the real and imaginary parts of permittivity, making it suitable for lossy scatterers. Special consideration was given to scenarios with different background in the design of numerical experiments, demonstrating the method’s effectiveness in reconstructing high-contrast targets under complex and noisy conditions. Compared to other network-based methods, this approach also offers the advantage of lower computational resource consumption. Finally, its robustness and accuracy were validated using experimental data from the Fresnel Institute.

\---

## Paper ID 236

**Record number:** 50  
**Paper ID:** 236  
**DOI:** 10.1109/TTE.2025.3609345  
**Publisher URL:** https://ieeexplore.ieee.org/document/11162604/

### Exact abstract

Accurate magnetic field analysis is essential for predicting motor performance. However, the complex operating conditions combined with core material nonlinearity due to magnetic saturation present significant computational challenges for obtaining both fast and precise field solutions. To address these challenges, this paper proposes a physics-informed neural network based reduced-order model for rapid motor performance calculation. First, the proper orthogonal decomposition method is employed to reduce the dimensionality of the magnetic field matrix extracted from finite-element method. Subsequently, a neural network is trained to learn the matrix decomposition results across various operating points. To enhance accuracy, the proposed approach integrates the motor mechanism with a data-driven learning framework, incorporating a physics-guided loss function into the neural network training process. This method enables the rapid computation of magnetic field characteristics for any motor operating point, facilitating dynamic simulation and real-time performance prediction. The computed magnetic field results demonstrate strong agreement with those obtained from the finite-element method. For further verification, a prototype motor has been manufactured. Experimental measurements of the back electromotive force curves from the search coils are compared with the calculated results, confirming the effectiveness and accuracy of the proposed method.

\---

## Paper ID 237

**Record number:** 51  
**Paper ID:** 237  
**DOI:** 10.1109/TMTT.2025.3590984  
**Publisher URL:** https://ieeexplore.ieee.org/document/11128941/

### Exact abstract

One of the primary objectives of 2-D inverse scattering problems (ISPs) is to accurately characterize the nature of an unknown tomographic domain based on the collected scattered field data. While numerous existing iterative algorithms for ISPs have been successfully applied to reconstruct various scatterers, they are often computationally expensive and prone to becoming trapped in local minima during optimization. On the other hand, approaches that combine learning methods can solve ISPs rapidly and accurately but often lack the generality of purely data-driven methods. Therefore, achieving a balance between the generality of traditional iterative methods and the efficiency and accuracy of learning-based approaches remains a significant challenge. In this work, we introduce a physics-informed and transformerembedded neural network with the optimization objective of the contrast source inversion (CSI) method, termed PiTCSI, to bridge this gap. The promising results demonstrate that PiTCSI achieves reconstruction quality comparable to representative methods requiring only half of the training data. By the way, the results on multiple experimental datasets demonstrate the eﬀectiveness of the approach for reconstruction from measured scattering data.

\---

## Paper ID 238

**Record number:** 52  
**Paper ID:** 238  
**DOI:** 10.1109/ACCESS.2025.3597869  
**Publisher URL:** https://ieeexplore.ieee.org/document/11122441/

### Exact abstract

This work explores the use of Physics-Informed Neural Networks (PINNs) and a newly proposed approach, called the STacked Adaptive Residual PINN (STAR-PINN), to solve magnetic diffusion problems in the magneto quasi static regime. The study covers both one- and two-dimensional domains. The key advantage of this new architecture is the ability to refine predictions through multiple lightweight PINN blocks to achieve accurate results with lower computational cost and less architectural complexity than more advanced neural networks like Recurrent Neural Networks or Convolutional Neural Networks. The simplicity and efficiency of STAR-PINN make it a promising solution for tackling large-scale and nonlinear challenges in computational electromagnetics.

\---

## Paper ID 239

**Record number:** 53  
**Paper ID:** 239  
**DOI:** 10.1109/TGRS.2025.3594153  
**Publisher URL:** https://ieeexplore.ieee.org/document/11112515/

### Exact abstract

This article introduces a novel physics-informed neural networks (PINNs) to solve Maxwell’s equations with triaxial magnetic dipole sources in transverse isotropy (TI) medium, which can be applied to simulate the tool response of electromagnetic (EM) wave well logging. The physical model consists of a planar-stratified formation and some cylindrical, axial symmetrical anomalous bodies embedded it. The EM field is a 3-D distribution, especially for horizontal magnetic dipoles. By analyzing the characteristics of the field, the azimuth angle φ is extracted from the initial partial diﬀerential equations (PDEs); thus, the task is transferred into a 2-D issue about input parameters ρ and z. The singularity of dipole sources is addressed well by abstracting the background field. Each field component includes both the real part and imaginary part in a dissipative medium. Therefore, we train two sets of PINNs to solve for them, respectively, which greatly increases the accuracy of output results. The lost functions related to the soft boundary and hard boundary are deeply discussed, which leads to diﬀerent accuracy and efficiency. Finally, we simulate the magnetic field signals for some typical well logging scenarios in vertical and deviated wells. The results are validated by comparing with mature analytical solutions and the finite element method (FEM). The proposed PINNs method provides an innovative approach for forward modeling of EM wave logging for dealing with local anomalous body (2.5-D).

\---

## Paper ID 240

**Record number:** 54  
**Paper ID:** 240  
**DOI:** 10.1109/TCSI.2025.3590200  
**Publisher URL:** https://ieeexplore.ieee.org/document/11095764/

### Exact abstract

Current non-destructive tomography sensing systems, particularly in the domain of eddy current sensing, lack the capability to dynamically and intelligently optimize sensing parameters in response to time-varying environments. To address this limitation, we propose a hybrid tomography sensing system that integrates physical artificial intelligence (PAI) with an electromagnetic dynamics model for intelligent sensing. This system combines a physical recurrent neural network (PRNN) entities performed by the programmable planar coil arrays with its digital counterpart in a closed-loop configuration, facilitating forward inference and the backpropagation of errors respectively. Additionally, the system leverages physics-guided methods based on electromagnetic field dynamics and employs a combination of standard neural network training techniques to optimize the parameters of PRNN, enabling real-time adaptive optimization of sensing. Theoretical modelling of the PRNN has been rigorously conducted in this study. Furthermore, high-fidelity electromagnetic tomography (EMT) results for non-destructive testing are demonstrated, showcasing the potential of physicsguided analogue AI in EMT sensing. The results shows that the electromagnetic controlling system, optimized through physical AI approach, achieves higher precision results with lower complexity compared to standard digital implementations in eddy current testing. This also provides a novel potential way for optimizing PNNs, thereby enhancing the acceleration of physical AI and projecting diversity of physical information into analogue AI solver.

\---

## Paper ID 241

**Record number:** 55  
**Paper ID:** 241  
**DOI:** 10.1109/ACCESS.2025.3591876  
**Publisher URL:** https://ieeexplore.ieee.org/document/11091321/

### Exact abstract

Traveltime tomography is widely used in seismology to construct accurate long-wavelength subsurface velocity models and to investigate the Earth’s internal structure and dynamic processes. The joint inversion of vertical seismic profile (VSP) P- and S-wave velocities provides opportunities, but also presents challenges due to the limitations of conventional numerical solvers, which are generally constrained to first-order accuracy and perform poorly on irregular computational grids. To overcome these limitations, physics-informed neural networks (PINNs) have been introduced, enabling the PINN-based tomography framework (PINNtomo) to utilize the representational strength of neural networks to solve the eikonal equation, reconstruct velocity models in a data-consistent and physically constrained method, and address these challenges more effectively. We propose a physics-informed neural network framework guided by well log information for the joint P-wave and S-wave VSP traveltime tomography (W-PINNPStomo). Specifically, W-PINNPStomo performs joint multi-parameter inversion of P-wave and S-wave velocities, with model updates constrained by P- and S-wave log data serving as soft constraints. The W-PINNPStomo framework incorporates two neural networks: a travel time network dedicated to predicting P- and S-wave traveltimes, and a velocity network tasked with estimating the corresponding wave velocities. By minimizing the misfit between initial P- and S-wave traveltimes derived from the eikonal equation and those predicted by the model, the associated velocity fields can be iteratively updated. Since the original PINNtomo loss function relies on multiplicative-factor eikonal equations that depend on background traveltimes based on uniform velocities at the source location, we introduce a source-independent multiplicative decomposition of the eikonal equation to eliminate this velocity dependence. Numerical experiments conducted on the Marmousi, Fault and Salt velocity models under VSP acquisition geometries confirm the effectiveness of the proposed improvements. By incorporating well log information as soft constraints, the W-PINNPStomo framework achieves faster convergence and improved multi-parameter inversion accuracy compared to PINNPStomo.

\---

## Paper ID 242

**Record number:** 56  
**Paper ID:** 242  
**DOI:** 10.1109/TCAD.2025.3591411  
**Publisher URL:** https://ieeexplore.ieee.org/document/11087590/

### Exact abstract

Multiscale thermal analysis in integrated circuits is required for capturing both device-level and package-level dynamics. Traditional analysis with the finite element (FE) method performs poor at multiscale tasks because of conflicting element size requirements and CPU time limitation. Machine learning (ML) algorithms can be trained with FE simulation data to perform fast and efficient temperature prediction. In this work, spatial and temporal aspects of the temperature field are treated independently and used to train two artificial neural networks (ANNs). Prior to ANN training, fundamental spatial modes (proper orthogonal decomposition, POD) are calculated to simplify the ANN structure. In the time domain a similar approach is used: the fundamental temporal modes, i.e. thermal step responses are calculated and used to train the ANN. By training the ANN on step response data, the final dynamic temperature profile can be reconstructed using the convolutional operator. Using this method, a physics-informed ML workflow is established as the step response is converted to the impulse response or Green’s function, which are a known part of the analytical solution to the heat equation. The final result is an extremely fast and accurate dynamic thermal model of a chip.

\---

## Paper ID 243

**Record number:** 57  
**Paper ID:** 243  
**DOI:** 10.1109/ACCESS.2025.3589943  
**Publisher URL:** https://ieeexplore.ieee.org/document/11082158/

### Exact abstract

This study presents an AI-driven framework for predicting transmission frequency in cables using magnetic field data, offering a modern alternative to conventional analytical methods. A reference model based on transmission line theory analyzes twisted-pair cables via distributed parameters (R, L, C, G), yielding an initial frequency estimate of 750 MHz. Concurrently, an MLP neural network trained on HFSS-simulated magnetic field data predicts 745 MHz, deviating by 5 MHz. To enhance precision, a hybrid neural network—combining transformer, LSTM, and a physics-informed layer grounded in Maxwell’s equations—is proposed, reducing the error to 0.2 MHz (749.8 MHz prediction). The AI approach demonstrates superior computational efficiency while maintaining high accuracy. Key preprocessing steps include data normalization, noise reduction, and magnetic field vectorization. Findings validate AI’s potential to streamline frequency estimation in cable systems, bridging theoretical and data-driven paradigms. This work advances applications in electrical and telecommunications engineering, emphasizing scalable, intelligent solutions for electromagnetic analysis.

\---

## Paper ID 244

**Record number:** 58  
**Paper ID:** 244  
**DOI:** 10.1109/TMI.2025.3587636  
**Publisher URL:** https://ieeexplore.ieee.org/document/11076092/

### Exact abstract

In this study, we present enhanced physicsinformed neural networks (PINNs), which were designed to address flow field errors in four-dimensional flow magnetic resonance imaging (4D Flow MRI). Flow field errors, typically occurring in high-velocity regions, lead to inaccuracies in velocity fields and flow rate underestimation. We proposed incorporating flow rate constraints to ensure physical consistency across crosssections. The proposed framework included optimization strategies to improve convergence, stability, and accuracy. Artificial viscosity modeling, projecting conflicting gradients (PCGrad), and Euclidean norm scaling were applied to balance loss functions during training. The performance was validated using 2D computational fluid dynamics (CFD) with synthetic error, in-vitro 4D flow MRI mimicking aortic valve, and in-vivo 4D flow MRI from patients with aortic regurgitation and aortic stenosis. This study demonstrated considerable improvements in correcting flow field errors, denoising, and superresolution. Notably, the proposed PINNs provided accurate flow rate reconstruction in stenotic and high-velocity regions. This approach extends the applicability of 4D flow MRI by providing reliable hemodynamics in the postprocessing stage.

\---

## Paper ID 247

**Record number:** 59  
**Paper ID:** 247  
**DOI:** 10.1109/LGRS.2025.3583559  
**Publisher URL:** https://ieeexplore.ieee.org/document/11052264/

### Exact abstract

The aeromagnetic compensation method is critical for mitigating magnetic interference in airborne geophysical surveys. In the case of complex magnetic interference, the modeldriven linear regression method based on the Toles-Lawson (T-L) model cannot guarantee compensation accuracy. Additionally, purely data-driven methods often require large datasets and lack interpretability. Recent hybrid solutions, particularly physics-informed neural network (PINN), eﬀectively combine the advantages of model-driven and data-driven methods. However, PINN is heavily reliant on manual architecture tuning, which severely limits optimization efficiency and compensation accuracy. To address this issue, this letter proposes a diﬀerentiable architecture search-guided PINN (DARTS-PINN) method. Experimental results demonstrate that DARTS-PINN can eﬀectively mitigate magnetic interference, improve optimization efficiency, and substantially reduce data dependence. For aeromagnetic compensation of magnetic sensors fixed inside the cabin, the root mean square error (RMSE) of DARTS-PINN is 1.089 nT. In contrast, the optimal RMSEs of the model-driven and datadriven methods are 6.195 and 2.026 nT, respectively.

\---

## Paper ID 248

**Record number:** 60  
**Paper ID:** 248  
**DOI:** 10.1109/TAI.2025.3581506  
**Publisher URL:** https://ieeexplore.ieee.org/document/11045321/

### Exact abstract

Partial Differential Equations form the cornerstone of numerous scientific and engineering domains, modeling phenomena such as fluid dynamics, heat transfer, and electromagnetics. Traditional numerical solvers, while accurate, are computationally expensive and often impractical for real-time applications or high-dimensional systems. Recent advancements in Physics-Informed Neural Networks (PINNs) have demonstrated promise in addressing these limitations; however, existing PINN frameworks face challenges in achieving convergence, enforcing boundary conditions, and scaling to multivariate, highdimensional PDEs. This paper introduces Quantasio, a PINNbased framework that leverages a residual network-inspired architecture with domain-specific reparameterization to achieve efficient and accurate solutions to PDEs across diverse spatiotemporal scenarios and specially Navier-Stokes dynamics in 3 spatial dimensions. Quantasio addresses key limitations in traditional PINNs by incorporating adaptive loss weighting, advanced gradient stabilization techniques, and robust boundary condition enforcement. Its performance is evaluated on a wide range PDEs, including diffusion-reaction, wave equations, and fluid dynamics, demonstrating superior accuracy, achieving up to a 60% reduction in convergence time while maintaining physical consistency. Quantasio reduces peak GPU memory by 50%, and attains a lower residual compared to leading PINN and operatorlearning baselines. Our experiments demonstrate robust handling of turbulent flows and complex geometries, positioning Quantasio as an efficient and scalable solver for real-time 3D Navier–Stokes dynamics, making it a versatile tool for real-time simulation in industrial and scientific applications.

\---

## Paper ID 249

**Record number:** 61  
**Paper ID:** 249  
**DOI:** 10.1109/TIM.2025.3568966  
**Publisher URL:** https://ieeexplore.ieee.org/document/11002741/

### Exact abstract

The defect prediction and quality control are critical in manufacturing, where convolutional neural networks (CNNs) demonstrate significant potential. However, traditional finite element method (FEM) simulations, despite their accuracy, are hindered by high computational demands. This article introduces a novel framework that integrates FEM simulations with generative CNNs to predict strain distributions during antenna manufacturing. By employing physics-informed dataset generation from FEM simulations, the proposed method trains a generative CNN to predict strain distributions during antenna manufacturing, enabling physically consistent strain predictions. Validated against FEM-calculated data, the framework demonstrates its efficacy in defect prevention, while addressing the limitations of traditional offline FEM capabilities. Furthermore, a comprehensive analysis of weight initialization and cost function choices, along with the experimental validation, highlights the method’s efficiency, establishing a cost eﬀective and practical approach to integrate numerical simulations with CNN-based deep learning in manufacturing.

\---

## Paper ID 250

**Record number:** 62  
**Paper ID:** 250  
**DOI:** 10.1109/ACCESS.2025.3569091  
**Publisher URL:** https://ieeexplore.ieee.org/document/11000323/

### Exact abstract

This paper introduces an innovative approach utilizing a deep neural network (DNN) to optimize the modulation scheme for time-modulated antenna array (TMAA) to verify specific side lobe and maximum harmonics levels. The proposed method involves training a DNN with a physics-informed loss function designed to reduce the discrepancy between the desired and actual beam patterns. This is accomplished by exclusively adjusting the periodic switching time sequence of each element within the TMAA. Specifically, the physics-informed deep neural network (PIDNN) is trained to optimize the switching-on times of for each antenna element. Simulation results demonstrate that the proposed technique achieves the desired beam patterns with significantly lower side lobe level and maximum harmonic levels compared to previously published methods. Additionally, the approach is compared to genetic algorithm (GA) which corresponds to a representative evolutionary optimization algorithm. Numerical results indicate that the PIDNN surpasses the GA in both computational efficiency and loss function evaluation.

\---

## Paper ID 251

**Record number:** 63  
**Paper ID:** 251  
**DOI:** 10.1109/LSP.2025.3545306  
**Publisher URL:** https://ieeexplore.ieee.org/document/10902155/

### Exact abstract

Electrical Impedance Tomography (EIT) is a highly ill-posed inverse problem, with the challenge of reconstructing internal conductivities using only boundary voltage measurements. Although Physics-Informed Neural Networks (PINNs) have shown potential in solving inverse problems, existing approaches are limited in their applicability to EIT, as they often rely on impractical prior knowledge and assumptions that cannot be satisfied in real-world scenarios. To address these limitations, we propose a two-stage hybrid learning framework that combines Convolutional Neural Networks (CNNs) and PINNs. This framework integrates data-driven and model-driven paradigms, blending supervised and unsupervised learning to reconstruct conductivity distributions while ensuring adherence to the underlying physical laws, thereby overcoming the constraints of existing methods.

\---

## Paper ID 252

**Record number:** 64  
**Paper ID:** 252  
**DOI:** 10.1109/ACCESS.2025.3540626  
**Publisher URL:** https://ieeexplore.ieee.org/document/10879378/

### Exact abstract

Neural networks have increasingly been utilized in electric drive systems to enhance modeling, control, and optimization. These data-driven techniques enable accurate predictions of complex nonlinear behaviors, including the magnetization characteristics of electric machines. This paper investigates the use of neural networks for predicting magnetization surfaces in switched reluctance motors, a key aspect of their design and operational efficiency. Three neural networks-based methods are studied: classical neural networks, radial basis function neural networks, and physics-informed neural networks. Experimental data from a 7.5 kW switched reluctance motor are used to assess the capabilities of each approach. Moreover, the study evaluates predictive accuracy, computational requirements, and the ability to reflect physical dynamics. Results demonstrate that classical neural networks and radial basis function networks can model magnetization surface, but with inaccuracy due to failure to comply with flux behavior, with radial basis function networks excelling in computational efficiency. Physics-informed neural networks achieve the highest accuracy by integrating physical laws into the learning process. This research highlights the potential of neural networks techniques in advancing switched reluctance motors modeling, paving the way for improved electric drive systems.

\---

## Paper ID 253

**Record number:** 65  
**Paper ID:** 253  
**DOI:** 10.1109/ACCESS.2025.3531208  
**Publisher URL:** https://ieeexplore.ieee.org/document/10844292/

### Exact abstract

Academicians and researchers have been keen on climatic and maritime monitoring. Synthetic Aperture Radars (SAR) have been instrumental in capturing images of the ocean. Sea-ice classification using Sentinel-1, a type of SAR, has gained popularity over the years. Automatic image segmentation is a fundamental task in SAR image analysis. This paper proposes a novel, innovative approach to SAR image segmentation by integrating physics-based knowledge into a neural network framework. The implementation of a PDE for SAR image segmentation offers a promising avenue for advancing the field of remote sensing. PDEs provide the required physics for the model. This integration not only enhances the network’s capability to learn meaningful features but also enables it to generate more interpretable and physically meaningful segmentation maps. The Partial Differential Equations (PDE) based Physics-Guided Neural Network (PGNN) model can achieve an accuracy of about 96%, which is greater than all existing state-of-art techniques. By harnessing the synergy between deep learning and physics-based knowledge, this work not only improves segmentation accuracy but also facilitates a deeper understanding of SAR data, paving the way for more reliable and insightful remote sensing applications.

\---

## Paper ID 254

**Record number:** 66  
**Paper ID:** 254  
**DOI:** 10.1109/JMMCT.2025.3528484  
**Publisher URL:** https://ieeexplore.ieee.org/document/10839010/

### Exact abstract

A physics-informed deep learning-based scheme is introduced for computing partial inductances of interconnects. This scheme takes a physics-based skin depth map and a geometry identifier of the interconnects as inputs and provides the current density distribution on the interconnects as the output. The predicted currents are then used to compute the partial self-resistances, self-inductances, and mutual-inductances of the interconnects. The proposed method leverages an Attention U-net, a U-shaped convolutional neural network with attention modules. During the training of Attention U-net, a specifically designed loss function is used to ensure the accurate modeling of the currents on the structure as well as ports. The accuracy, efficiency, and generalization ability of this physics-informed deep learning method are demonstrated via inductance extraction of the interconnects with and without a groundplane,includingstraightsingleinterconnects,interconnects with sharp bends, parallel interconnects, and multiple conductor crossover buses. Numerical results show that the proposed scheme can predict the current density distribution of one interconnect scenario in 15.63 ms on GPU, 1157x faster than the physics-based solver, while providing self-inductances, mutual-inductances, and self-resistances of interconnects with around 1%, 3%, and 4% ℓ2-norm error, respectively.

\---

## Paper ID 255

**Record number:** 67  
**Paper ID:** 255  
**DOI:** 10.1109/JMMCT.2024.3502062  
**Publisher URL:** https://ieeexplore.ieee.org/document/10757381/

### Exact abstract

Inthispaper,wepresentamachinelearningtechnique based on analytic extension of eigenvalues and neural networks for the efficient modeling of high-frequency devices. In the proposed method, neural networks are used to learn the mapping between device’s geometry and its modal equivalent circuit parameters. These circuit parameters are extracted from the eigen-decomposition of the deviceâs Z-parameters at a few sample frequencies. The eigenvalues and eigenvectors of the Z-matrix are analytically extended to other frequencies based on functional equations constructed from the lumped equivalent circuit model, from which the full electromagnetic response can be recovered. In addition to fully-connected neural network layers, our proposed model introduces an analytical projection branch based on AEE principles to maximize the information gain from samples in the training dataset. To improve the robustness and efficiency of the learning process, we introduce an adaptive gradient update algorithm. The overall model is end-to-end differentiable and can be integrated intogradient-basedoptimizationmethods.Numericalexamplesare provided to demonstrate the capability of the proposed method. Compared with traditional neural network-based models, the proposed approach achieves higher accuracy using fewer data samples and generalizes better to out-of-domain inputs.

\---

## Paper ID 256

**Record number:** 68  
**Paper ID:** 256  
**DOI:** 10.1109/TASE.2024.3523417  
**Publisher URL:** https://ieeexplore.ieee.org/document/10819952/

### Exact abstract

Due to coupled nonlinearities and complex measurement noise, assess the condition of the rotor system remains a challenge, particularly in cases where historical run-tofailure data is lacking. To this end, we proposed a hierarchical physics-informed neural network (HPINN) to identify/discover the ordinary differential equations (ODEs) of a healthy/faulty rotor system from noise measurements and then assess the rotor condition based on the discovered ODEs. Specifically, the ODEs of a healthy rotor system are first stably identified from noisy measurement through HPINN guided by rotor dynamics. Based on the identified healthy ODEs, the extra fault terms in the ODEs of the faulty rotor system are then sparsely regressed from the predefined library embedded in HPINN, in which the phase compensation and alternating training strategy are developed to guarantee training convergence. Moreover, with the mathematical terms of discovered fault, the potential fault and the health indicator (HI) are diagnosed and constructed to assess the condition of the rotor system, respectively. Finally, the effectiveness of the proposed method is verified with simulation and test bench datasets, showing the potential for practical industrial applications.

\---

## Paper ID 257

**Record number:** 69  
**Paper ID:** 257  
**DOI:** 10.1109/TIM.2024.3522626  
**Publisher URL:** https://ieeexplore.ieee.org/document/10815989/

### Exact abstract

The accurately and rapidly delineating surface contours is crucial for ultrasonic immersion nondestructive testing (NDT) of complex curved-surface components. However, directly employing ultrasonic signals for interface reconstruction in dual-layer media remains a challenge. In this article, a physics-informed neural network (PINN) is developed for the reconstruction of the interface between water and unknown surface components. By incorporating the nonlinear equations of Fermat’s principle as additional constraints in the loss function, a neural network is constructed that is dual driven by both data and physical information. The simulation and experimental results show that the maximum error (ME) of the interface reconstruction by this method is below 0.5 mm, the average relative error (ARE) is less than 1.0%, and the computation time is less than 1 s. The imaging results of V-shaped crack defects using different interface reconstruction methods are further compared, verifying the significant advantages of PINN in ultrasonic array inspection of complex curved components.

\---

## Paper ID 258

**Record number:** 70  
**Paper ID:** 258  
**DOI:** 10.1109/TIM.2024.3509601  
**Publisher URL:** https://ieeexplore.ieee.org/document/10787133/

### Exact abstract

In industrial field, prognostics and health management (PHM) techniques, particularly remaining useful life (RUL) prediction, are pivotal in guiding mechanical maintenance decisions, enhancing system safety, and reducing operational costs. Prevalent mechanical life prediction techniques encounter challenges arising from the lack of model transparency and limited interpretability, which can undermine confidence in the reliability and accuracy of forecast outcomes. To provide a fresh perspective for comprehending the behavior of complex systems and enhancing the robustness of prediction accuracy, a novel approach called Koopman-informed neural network (KINN) is proposed. This innovative approach adeptly captures complex data patterns and relationships via nonlinear transformations by amalgamating Koopman theory with neural networks. Unlike traditional approaches that rely on linear approximations or local analyses, the Koopman operator framework enables a global linear representation of a system’s dynamics by lifting the state space to a higher dimensional eigenfunction space. This method employs both forward and backward Koopman dynamic operators to capture and reconstruct the system’s temporal dynamics, with physical constraints helping to regularize system behaviors and ensure stability. Experimental assessments were conducted using both a synthetic N-CMAPSS dataset and a real-world bearing full-life dataset, revealing the robustness and generalization capabilities of the proposed methodology, leading to improvements in the accuracy of RUL prediction.

\---

## Paper ID 259

**Record number:** 71  
**Paper ID:** 259  
**DOI:** 10.1109/ACCESS.2025.3536173  
**Publisher URL:** https://ieeexplore.ieee.org/document/10857292/

### Exact abstract

In recent years, with the increasing interest in marine research, the need to collect and process clear underwater optical images has become crucial. However, underwater images suffer from the absorption and scattering effects of the environment. In this paper, we propose Hybrid Underwater Image Enhancement Network (HUWIE-Net), a novel deep learning-based underwater image enhancement framework consisting of three distinct sections, which include an Image-to-Image Module, a PhysicsInformed Module and a Fusion Module. The training methodology of HUWIE-Net is designed to jointly optimize both pixel-level-based and physical-channel-based enhancement modules. In this framework, while Image-to-Image Module is used for color correction in pixel level, Physics-Informed Module is used for dehazing by exploiting the underwater image formation model which defines the deformations in the underwater light propagation channel. We also propose to use the joint loss function for both Image-toImage Module and Physics-Informed Module to enforce the joint optimization for better underwater image enhancement performance. The results of experiments conducted with real-world underwater images show that the proposed model achieves improved performance compared to state-of-the-art methods. The code for the newly developed HUWIE-Net is available at https://github.com/UIE-Lab/HUWIE-Net.

\---

## Paper ID 260

**Record number:** 72  
**Paper ID:** 260  
**DOI:** 10.1109/ACCESS.2025.3532669  
**Publisher URL:** https://ieeexplore.ieee.org/document/10849527/

### Exact abstract

This study investigates the application of the physics informed neural network as a meshfree collocation method for approximating solutions to large-scale wind driven ocean circulation models. By integrating the Stommel and Stommel-Munk models into the neural network framework, the neural network provides a viable alternative to traditional numerical methods for simulating ocean circulation. The architecture of the neural network was systematically optimized through hyperparameter tuning, including the selection of optimizers, activation functions, network configurations, and learning rate schedulers to ensure stable convergence and minimize fluctuations in training loss. The effects of different training point distributions, such as uniform, uniform-refined, random, and random-refined, were also examined. The results show that refining the distribution of training points near the western boundary layer can achieve similar accuracy and training performance even with fewer points. This approach highlights the potential of the physics informed neural network to address more complex oceanographic models, where conventional numerical methods may be constrained by data availability and computational cost.

\---

## Paper ID 261

**Record number:** 73  
**Paper ID:** 261  
**DOI:** 10.1109/ACCESS.2025.3529853  
**Publisher URL:** https://ieeexplore.ieee.org/document/10843214/

### Exact abstract

For a variety of applications within power systems, the precision of data acquisition is of paramount importance. However, the actual data may be corrupted by noise in the process of measurement or transmission, and the accuracy of dynamic security assessment (DSA) will be affected. In light of the poor interpretability exhibited by traditional machine learning (ML) methods in denoising, a physics-informed denoising model (PIDM) for dynamic data recovery is proposed. The differential equations of physical models in power systems are employed to guide the training of PIDM. They are transformed into physical constraints and subsequently incorporated into the loss function of stacked denoising autoencoder (SDAE) to cleanse noisy data. By integrating the powerful learning capabilities of ML with the rigorous constraints of physical laws, the noisy data recovered by PIDM can better satisfy the dynamic equations. Consequently, a more pronounced denoising effect can be achieved. The improvement of the PIDM over common ML-based models is explored when dealing with the noisy data with varying degrees of interference or those of unexpected faults. The effectiveness is validated through simulation results in IEEE 39-bus system and the East China power grid. The results show that this method can reduce the total mean square error (MSE) of the recovery of noisy data to at least 65.27% of that of the traditional methods under the same conditions. In addition to demonstrating superior denoising performance, the generalization capability under diverse noise conditions is also deemed excellent.

\---

## Paper ID 262

**Record number:** 74  
**Paper ID:** 262  
**DOI:** 10.1109/OAJPE.2025.3529928  
**Publisher URL:** https://ieeexplore.ieee.org/document/10843279/

### Exact abstract

This paper presents, for the first time, a framework for Kolmogorov-Arnold Networks (KANs) in power system applications. Inspired by the recently proposed KAN architecture, this paper proposes physics-informed Kolmogorov-Arnold Networks (PIKANs), a novel KAN-based physics-informed neural network (PINN) tailored to efficiently and accurately learn dynamics within power systems. PIKANs offer a promising alternative to conventional Multi-Layer Perceptrons (MLPs) based PINNs, achieving superior accuracy in predicting power system dynamics while employing a smaller network size. Simulation results on test power systems underscore the accuracy of the PIKANs in predicting rotor angle and frequency with fewer learnable parameters than conventional PINNs. Specifically, PIKANs can achieve higher accuracy while utilizing only 50% of the network size required by conventional PINNs. Furthermore, simulation results demonstrate PIKANs’ capability to accurately identify uncertain inertia and damping coefficients. This work opens up a range of opportunities for the application of KANs in power systems, enabling efficient dynamic analysis and precise parameter identification.

\---

## Paper ID 263

**Record number:** 75  
**Paper ID:** 263  
**DOI:** 10.1109/TASE.2025.3529578  
**Publisher URL:** https://ieeexplore.ieee.org/document/10841397/

### Exact abstract

Partial differential equations (PDEs) are commonly employed to model complex industrial systems characterized by multivariable dependence. However, existing physics-informed neural networks (PINNs) barely perform well in heterogeneous media modeling compared to their achievement for a homogeneous medium. Unknown PDE parameters due to insufficient prior knowledge with respect to physical attributes and unavailable time-varying interface caused by heterogeneous media may weaken PINNs feasibility. To this end, physically informed synchronic-adaptive learning (PISAL) is proposed. First, PISAL is proposed for learning the solutions and interface satisfying PDEs, in which Net1, Net2, and NetI are constructed. Net1 and Net2 are for synchronically learning the solutions satisfying PDEs with diverse parameters; NetI is for adaptively learning the interface to decompose the domain with heterogeneous media. Then, a criterion combined with the output of neural networks is introduced to adaptively distinguish the attributes of measurements and collocation points. Furthermore, Net1, Net2, and NetI are integrated into a data-physics-hybrid loss function. Accordingly, a synchronic-adaptive learning (SAL) strategy is proposed to decompose the domain and optimize the three networks by iteratively erasing the training errors. Besides, we theoretically prove the proposed PISAL can iteratively approximate the fields with diverse physical attributes. Finally, extensive experimental results and comparisons with relevant state-of-the-art methods verify the feasibility and effectiveness of PISAL for industrial systems modeling in heterogeneous media.

\---

## Paper ID 264

**Record number:** 76  
**Paper ID:** 264  
**DOI:** 10.1109/TIM.2025.3527517  
**Publisher URL:** https://ieeexplore.ieee.org/document/10835217/

### Exact abstract

Carbon fiber-reinforced polymer (CFRP) is widely used in various industrial applications. However, subsurface defects can compromise the performance and integrity of CFRP products. To enhance quality control and safety, nondestructive testing (NDT) methods, such as active infrared thermography (AIRT), are used for defect detection. In this study, we propose a physics-informed neural network (PINN) that combines experimental data with the priori physical knowledge expressed by Fourier’s law of heat diffusion to process thermographic data. With the help of PINN, nonuniform backgrounds are estimated and removed from the original thermograms, highlighting the defect information. Subsequently, principal component thermography (PCT) is used to reduce dimensionality and extract features from the processed thermograms. In addition, PINN can estimate unknown physical parameters such as the material’s thermal diffusivity. We demonstrate the feasibility of the proposed method using experimental and simulated case studies based on pulsed thermography (PT).

\---

## Paper ID 269

**Record number:** 77  
**Paper ID:** 269  
**DOI:** 10.1016/j.ijfatigue.2024.108486  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S014211232400344X

### Exact abstract

Defects in additively manufactured materials severely limit the performance of parts in practical applications, often exposing them to the risk of fatigue failure. In order to improve the reliability and performance of additively manufactured parts, it becomes crucial to accurately predict the fatigue life of the material. Although traditional semi-empirical formulas can assess the effect of defects on the fatigue performance of parts, they still lack detailed research and consideration of defect morphology features. Therefore, this study proposes a method based on Physics-Informed Neural Networks (PINN). This method improves the predictive capability of the model and enhances its interpretability by extracting the sensitive features of critical defects and embedding known physical knowledge or fracture mechanics methods as loss functions into the training process of the neural network. Additionally, the method effectively captures the complex relationship between defect features and fatigue life, providing a deeper understanding of the model prediction results. The results show that the PINN model considering feature-related knowledge has higher prediction accuracy and reliability, and all predicted fatigue life are narrowed within 2-factor bands, enabling more accurate prediction of fatigue life for SLM 316L stainless steel under different processing conditions.

\---

## Paper ID 270

**Record number:** 78  
**Paper ID:** 270  
**DOI:** 10.1186/s13636-024-00376-0  
**Publisher URL:** https://asmp-eurasipjournals.springeropen.com/articles/10.1186/s13636-024-00376-0

### Exact abstract

Machine learning and neural networks have advanced numerous research domains, but challenges such as large training data requirements and inconsistent model performance hinder their application in certain scientific problems. To overcome these challenges, researchers have investigated integrating physics principles into machine learning models, mainly through (i) physics-guided loss functions, generally termed as physics-informed neural networks, and (ii) physics-guided architectural design. While both approaches have demonstrated success across multiple scientific disciplines, they have limitations including being trapped to a local minimum, poor interpretability, and restricted generalizability beyond sampled data range. This paper proposes a new physics-informed neural network (PINN) architecture that combines the strengths of both approaches by embedding the fundamental solution of the wave equation into the network architecture, enabling the learned model to strictly satisfy the wave equation. The proposed point neuron learning method can model an arbitrary sound field based on microphone observations without any dataset. Compared to other PINN methods, our approach directly processes complex numbers, offers better interpretability, and can be generalized to out-of-sample scenarios. We evaluate the versatility of the proposed architecture by a sound field reconstruction problem in a reverberant environment. Results indicate that the point neuron method outperforms two competing methods and can efficiently handle noisy environments with sparse microphone observations.

\---

## Paper ID 272

**Record number:** 79  
**Paper ID:** 272  
**DOI:** 10.1016/j.ijmultiphaseflow.2024.104937  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0301932224002143

### Exact abstract

Neural network-based approaches have emerged as alternatives to conventional computational fluid dynamics (CFD) in solving multiphase flow problems. However, most of these approaches are based on data-driven machine learning methods that require training datasets prepared beforehand through CFD simulations or experiments and cannot be used independently. This study presents an unsupervised parameterized physics-informed neural networks (P-PINNs) approach for obtaining the full flow field information over a multi-dimensional parametric space. This approach is then applied to solve the three-dimensional flow around an arbitrarily rotating sphere subjected to a cross-flow. This solution is obtained for a continuous range of three parameters: the Reynolds number based on cross-flow (Re ∈\[1, 400]), non-dimensional streamwise and spanwise angular velocity components (𝛺𝑥∗, 𝛺𝑦∗∈\[−3, 3]). The predictions from the P-PINNs model are compared against particle-resolved direct numerical simulation (PR-DNS) results, demonstrating that the neural network model predicts all flow variables (velocity, pressure, and their spatial derivatives) accurately with 𝑅2 ≳0.9. The force and torque on the particle obtained from the P-PINNs model are also compared well against the corresponding PR-DNS results with 𝑅2 > 0.94. The key observation is that the computational cost of the unsupervised parameterized neural network model training and deployment is substantially lower than performing numerous conventional CFD simulations to systematically vary the parameters. Furthermore, once trained, the resultant neural network model is substantially more compact than the huge database of discretized numerical solutions. The P-PINNs model is then used to reveal several interesting flow features and phenomena about the rotating sphere, including flow symmetry, secondary drag and lift, critical Reynolds number, flow bifurcation, and flow separation. This study presents P-PINNs as an efficient alternative for solving parameterized flow problems, demonstrating its practical usage in flow physics discovery with the example of flow past an arbitrarily rotating sphere.

\---

## Paper ID 279

**Record number:** 80  
**Paper ID:** 279  
**DOI:** 10.1186/s13636-024-00366-2  
**Publisher URL:** https://asmp-eurasipjournals.springeropen.com/articles/10.1186/s13636-024-00366-2

### Exact abstract

Recent developments in acoustic signal processing have seen the integration of deep learning methodologies, alongside the continued prominence of classical wave expansion-based approaches, particularly in sound field reconstruction. Physics-informed neural networks (PINNs) have emerged as a novel framework, bridging the gap between data-driven and model-based techniques for addressing physical phenomena governed by partial differential equations. This paper introduces a PINN-based approach for the recovery of arbitrary volumetric acoustic fields. The network incorporates the wave equation to impose a regularization on signal reconstruction in the time domain. This methodology enables the network to learn the physical law of sound propagation and allows for the complete characterization of the sound field based on a limited set of observations. The proposed method’s efficacy is validated through experiments involving speech signals in a real-world environment, considering varying numbers of available measurements. Moreover, a comparative analysis is undertaken against state-of-the-art frequency domain and time domain reconstruction methods from existing literature, highlighting the increased accuracy across the various measurement configurations.

\---

## Paper ID 284

**Record number:** 81  
**Paper ID:** 284  
**DOI:** 10.1007/s10915-024-02596-0  
**Publisher URL:** https://link.springer.com/10.1007/s10915-024-02596-0

### Exact abstract

Excessive spatial parallelization can introduce a performance bottleneck due to the communication overhead. While time-parallel method multigrid-reduction-in-time (MGRIT) provides an alternative to enhance concurrency, it generally requires large numbers of iterations to converge or even fails when applied to advection-dominated problems. To enhance the convergence of MGRIT, we propose the use of consecutive-step coarse-grid operators in MGRIT, rather than the standard rediscretized coarse-grid operators. The consecutive-step coarse-grid operator is defined as the multiplication of several fine-grid operators, which is able to track the advective characteristic more accurately than the standard rediscretized one. Numerical results show that multilevel MGRIT using the proposed operator is more efficient than the one using the standard rediscretized operator when applied to linear advection problems. Moreover, we perform time-parallel computing of the Euler equations and the Navier–Stokes equations by using the proposed method. Spatial coarsening is also considered. Compared with the MGRIT using the standard rediscretization approach, the developed method demonstrates enhanced robustness and efficiency in handling complex flow problems, including cases involving multidimensional shock waves and contact discontinuities.

\---

## Paper ID 288

**Record number:** 82  
**Paper ID:** 288  
**DOI:** 10.1016/j.dsr.2024.104343  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0967063724001134

### Exact abstract

Accurate sea surface temperature (SST) prediction is of great significance for fishery farming, marine ecological protection, and planning of maritime activities. In this paper, the stacked generalization ensemble is demonstrated for SST prediction to improve every single deep-learning model. Long-term high-resolution satellite- derived SST is used with the sub-regions of the Taiwan Strait and East China Sea taken as the study area. We select the Multilayer Perceptron, Long short-term memory (LSTM), Convolutional Neural Networks (CNN), CNN- LSTM as individual learners, and Convolutional LSTM as the meta-learner. The individual learners are trained and validated on the retained data subset I, while the meta-learner is trained and validated by constructing the samples with the predictions of validated individual learners on the retained data subset II. The two types of models are evaluated on the same test dataset with root-mean-square error and coefficient of efficiency as the scoring criteria. We find that the meta-model outperforms any individual model and other baselines for the one- day-/three-day-ahead forecasts in the Taiwan Strait and one-day-/three-day-/five-day-ahead predictions in the East China Sea. Furthermore, when the lead time is 1 day and 3 days, the meta-model has a better spatial distribution of prediction metrics across all grid points in the Taiwan Strait sub-area. For the East China Sea sub- region, the meta-model advantage is extended to the lead time of 5 days. Probably due to the higher quality of offshore satellite data, the prediction ability enhancement of the stacked ensemble applied in the East China Sea is better than that in the Taiwan Strait. The better-performing meta-model prediction suggests that the stacked generalization ensemble is encouraging and promising for improving the short-term prediction of the daily SST field.

\---

## Paper ID 289

**Record number:** 83  
**Paper ID:** 289  
**DOI:** 10.1016/j.flowmeasinst.2024.102601  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0955598624000815

### Exact abstract

Multiphase flow has many applications, such as oil and gas industries. Flow meter devices must be calibrated with field or laboratory data. One of the best methods to calibrate the devices and determine flow parameters is artificial neural networks. In addition, due to development of multiphase flow sensors and computer systems, artificial neural networks are employed to determine the flow regime and phase volume fractions along the pipeline. Up until now, different methods of measurement such as flow pressure signal, radioactive, ultrasonic, impedance, and their combination with neural networks have been presented. In this paper, a review of these works is performed. The type of neural network, measurement method, neural network inputs and development of each method are investigated. Studies show that the use of the gamma-ray method is the most prevalent among the papers presented. Also, examining the flow regime detection and flow rate measurement over time has moved to the use of flow parameters, including pressure, temperature, velocity, viscosity, etc. This simple method (using flow parameters) has the potential to gradually replace more advanced techniques like ultrasonic and electrical, along with expensive techniques like gamma ray. The results of this review indicate that employing intricate neural networks with many layers and neurons slightly increases the accuracy of the results. It can also be said that the use of a combination of several techniques has led to improved results.

\---

## Paper ID 290

**Record number:** 84  
**Paper ID:** 290  
**DOI:** 10.1016/j.ijmultiphaseflow.2024.104877  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S030193222400154X

### Exact abstract

Multiphase compressible flow systems can exhibit unsteady and fast-transient dynamics, marked by sharp gradients and discontinuities, and material boundaries that interact with the evolving flow. The transient nature of the dynamics presents challenges to employing artificial intelligence (AI) and data-driven models for predicting flow behaviors. In this study, we explore the potential of physics-aware recurrent convolutional neural networks (PARC) to model the spatiotemporal dynamics of multiphase flows in the presence of shocks and reaction fronts. PARC is a neural network model that incorporates the generic form of the diffusion– advection–reaction equation in its network architecture, which mimics the process of solving the governing equations of fluid flows. In contrast to physics-informed machine learning approaches such as physics-informed neural networks (PINNs) where models are trained to directly minimize the residual of governing equations, PARC takes a dynamical systems viewpoint and does not seek to minimize potentially nonconvex and nonlinear loss terms. To assess the ability of PARC to accurately learn and simulate the physics of multiphase flows, we train and test PARC on various flow simulation problems, including the Burgers’ equation, fluid flow behind a cylindrical cross-section, and unsteady shock interactions with a particle at varying Mach numbers. We analyze PARC’s performance and examine sources of error in its prediction, in terms of differentiation and integration schemes and different weighting strategies for the model update. Based on our observations, we discuss PARC’s capabilities and limitations in multiphase flow applications and propose future research directions.

\---

## Paper ID 291

**Record number:** 85  
**Paper ID:** 291  
**DOI:** 10.1016/j.advwatres.2024.104731  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0309170824001180

### Exact abstract

Physics-informed neural networks (PINNs) have received great attention as a promising paradigm for forward, inverse, and surrogate modeling of various physical processes with limited or no labeled data. However, PINNs are rarely used to predict two-phase flow in heterogeneous and fractured porous media, which is critical to lots of subsurface applications, due to the significant challenges in their training. In this work, we present an Enriched Physics-Informed Neural Network (E-PINN) to overcome these barriers and realize the simulation of such flow. Specifically, the Embedded Discrete Fracture Model (EDFM) is adopted to explicitly represent fractures, and then the finite volume method (FVM) instead of the Automatic Differentiation (AD) is used to evaluate spatial derivatives and construct the physics-informed loss function, so that the flux continuity between neighboring elements with different properties (e.g. matrix and fracture) can be defined rigorously. Besides, we develop a novel physics-informed neural network (NN) architecture adopting the adjacency-location anchoring, adaptive activation function, skip connection and gated updating to enrich the pressure information and enhance the learning ability of NN. Additionally, the initial and boundary conditions are constrained through a hard approach, which encodes them into network design, to improve the accuracy and efficiency of network training. In order to further reduce the difficulty of training, the Implicit-Pressure Explicit-Saturation (IMPES) scheme is used to calculate pressure and saturation, in which only the pressure needs to be solved by training NN. Finally, the superiority and applicability of E-PINN to complex practical problems is demonstrated through the simulations of immiscible displacement in 2D/3D heterogeneous and fractured reservoirs.

\---

## Paper ID 292

**Record number:** 86  
**Paper ID:** 292  
**DOI:** 10.1016/j.jag.2024.103917  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S1569843224002711

### Exact abstract

This study introduces a Physically Informed Deep Neural Network (PINN) that leverages spectral data and Radiative Transfer Model insights to improve nitrogen concentration estimation in vegetation, addressing the complexities of physical processes. Utilizing a comprehensive spectroscopy dataset from various species across dry/ground (n = 2010), leaf (n = 1512), and canopy (n = 6007) scales, the study identifies 13 spectral bands key for chlorophyll and protein quantification. Key bands at 2276 nm, 755 nm, 1526 nm, 2243 nm, and 734 nm emerged vital for accurate N% prediction. The PINN outperforms partial least squares regression and standard deep neural networks, achieving an R2 of 0.71 and an RMSE of 0.42 (%N) on an independent validation set. Results indicate dry/ground data performed best (R2 = 0.9, RMSE = 0.24 %N), with leaf and canopy data showing lower efficacy (R2 = 0.67, RMSE = 0.45 %N; R2 = 0.65, RMSE = 0.46 %N, respectively). This multi-scale approach provides insights into spectral and N% relationships, enabling precise estimation across vegetation types and facilitating the development of transferable models. The PINN offers a new avenue for analyzing remote sensing data, demonstrating the significant potential for accurate, scale-spanning N% estimation in vegetation. Further enriching our analysis, the inclusion of seasonal data significantly enhanced our model’s performance in field spectroscopy, with notable improvements observed across summer, spring, autumn, and winter. This adjustment underlines the model’s increased accuracy and predictive capability at the field spectroscopy scale, emphasizing the vital role of integrating environmental factors, including climatic and physiological aspects, in future research.

\---

## Paper ID 293

**Record number:** 87  
**Paper ID:** 293  
**DOI:** 10.1016/j.compfluid.2024.106302  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045793024001348

### Exact abstract

The placement of temperature sensitive and safety-critical components is crucial in the automotive industry. It is therefore inevitable, even at the design stage of new vehicles, that these components are assessed for potential safety issues. However, with increasing number of design proposals, risk assessment using Computational Fluid Dynamics (CFD) quickly becomes expensive. We therefore present a parameterized surrogate model for the prediction of three-dimensional flow fields in aerothermal vehicle simulations. The proposed physics-informed neural network (PINN) design is aimed at learning families of flow solutions according to a geometric variation. The novelty of our method compared to existing works in the field of PINN lies in the extension of parametric flow prediction to three-dimensional space by applying a mini-batch based Quasi-Newton optimization. We contribute a parametric minibatch training algorithm which enables the utilization of the large datasets necessary for the three-dimensional flow modeling. Further, we introduce a continuous resampling algorithm that allows to represent domain variations, while operating on one static dataset of reduced size. In scope of this work, we could show that our nondimensional, multivariate scheme can be efficiently extended to predict the velocity and pressure distribution in three-dimensional space for different design scenarios and geometric scales. Every feature of our methodology is tested individually and verified against conventional CFD simulations. Finally, we apply our proposed method in context of an exemplary real-world automotive application.

\---

## Paper ID 294

**Record number:** 88  
**Paper ID:** 294  
**DOI:** 10.1016/j.jgsce.2024.205307  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2949908924001031

### Exact abstract

The simulation and prediction of fluid flow in porous media play a profoundly significant role in today’s scientific and engineering domains, particularly in gaining a deeper understanding of phenomena such as the migration and fluid flow in underground rock formations and the enhancement of oil recovery rates. The flow of fluids in nanoscale porous media requires consideration of the effects of microscale phenomena, which are challenging to accurately describe using traditional physical models. Currently, research in deep learning for porous media predominantly focuses on conventional porous media, and there is an urgent need for investigations into heterogeneous nanoporous media. Simultaneously, there is a necessity to overcome the limitations of traditional data-driven models lacking physical prior knowledge. Therefore, the integration of physics- informed neural networks, which combine deep learning with physical principles, becomes essential for inferring relatively accurate results from sparse data. In this work, based on the heterogeneity of porous media in shale, we have introduced a deep learning model that couples physical information to predict the flow in heterogeneous nanoscale porous media. In the Physical Information Neural Network model, we utilize point clouds and couple them with deep residual networks. Discrete sampling points are used as inputs, and a multi-level residual connection, along with dimension concatenation, is employed to fuse feature information. The network, through backpropagation, takes into account the Navier-Stokes equations and wall conditions in heterogeneous nanoscale porous media. The results indicate that the apparent permeability and pressure field accuracy are over 90% and 95%, respectively. The Physical Information Neural Network demonstrates promising prospects for predicting flow in nanoscale porous media. Future work will extend to the multiphase complex flow in three-dimensional porous media.

\---

## Paper ID 303

**Record number:** 89  
**Paper ID:** 303  
**DOI:** 10.1016/j.ijheatmasstransfer.2023.125089  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0017931023012346

### Exact abstract

This paper presents data-driven simulations of two-phase fluid processes with heat transfer. A Physics-Informed Neural Network (PINN) was applied to capture the behaviour of phase interfaces in two-phase flows and model the hydrodynamics and heat transfer of flow configurations representative of established numerical test cases. The developed PINN approach was trained on simulation data derived from physically based Computational Fluid Dynamics (CFD) simulations with interface capturing. The present study considers fundamental problems, including tracking the rise of a single gas bubble in a denser fluid and exploring the heat transfer in the wake of a bubble rising close to a heated wall. Tracking of a rising bubble phase interface of fluids with disparate properties was performed, revealing a maximum error of only 5.2% at the interface edge and a maximum error of 2.8% at the position of the centre of mass. Inferred (hidden variable) flows are studied in addition to a purely extrapolative inverse isothermal bubble case. When no velocity data was supplied, velocity field predictions remained accurate. Rise of an inferred isothermal bubble with unseen fluid properties was found to produce a maximum mean-squared error of 0.28 and centre of mass error of 1.25%. For the case of the rising bubble with a hot wall, the maximum error in the temperature domain using specified boundary conditions was 6.8%, while the bubble position analysis reveals a maximum positional error of 3.6%. These results demonstrate that PINN is agnostic to geometry and fluid properties when studying the combined effects of convection and buoyancy on two-phase flows for the first time. This work serves as a starting point for PINN in multiphase cases involving heat transfer over a range of geometries. Eventually, PINN will be used in such cases to provide solutions for forward, inverse, and extrapolative cases. Each of which represent a dramatic saving in computational cost compared to traditional CFD.

\---

## Paper ID 307

**Record number:** 90  
**Paper ID:** 307  
**DOI:** 10.1016/j.cpc.2023.109019  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0010465523003648

### Exact abstract

In the past decades, multiple shooting methods have proven to be a promising direction to speed up the optimization process, especially in the context of ODE-based optimization. Very recently, Fang et al. (Journal of Computational Physics, vol. 452, 110926, 2022) proposed a multiple shooting algorithm for large-scale PDEconstrained optimization. The current paper continues this line of work and explores the potential of multiple shooting methods for optimal control problems governed by the three-dimensional Navier–Stokes equations. Similar to Fang et al., the augmented Lagrangian (AL) method is used to solve the resulting equality-constrained optimization problem, and we employ the classical limited-memory BFGS method for the unconstrained subproblems inside the AL loop. In the current work, we exploit the multiple shooting paradigm in full by processing the shooting windows parallel-in-time, allowing for significant parallel speed-ups compared to single shooting. The proposed method is validated on a velocity tracking case, using up to 100 windows. Our analysis shows that the multiple shooting algorithm allows for considerable algorithmic and parallel speed-ups. While algorithmic speed-up depends on the exact tracking case and initialization of the shooting windows, the multiple shooting algorithm always outperforms single shooting in terms of computational time (if the number of windows is sufficiently high) due to the parallel-in-time implementation. For a given amount of resources, we also show that the proposed parallel-in-time strategy can outperform spatial parallelization alone, especially when the spatial parallelization is saturated.

\---

## Paper ID 308

**Record number:** 91  
**Paper ID:** 308  
**DOI:** 10.1016/j.advwatres.2024.104639  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0309170824000265

### Exact abstract

Multi-phase flow simulations in heterogeneous porous media are essential in many applications, for example, CO2 sequestration, enhanced oil and gas recovery, groundwater contaminant treatment, soil aeration, and energy security. Modeling such complex systems is significantly changeling considering flow with capillary heterogeneity (hydraulic discontinuities). Traditional modeling methods have several limitations, particularly the requirement for separate two-phase flow simulations for each change of a parameter. Physics-informed neural networks (PINNs) allows the integration of physical constraints in the training process of Deep Neural Networks (DNNs). In this work, we utilized the PINNs approach to simulate 1D, steady-state, two-phase flow with capillary heterogeneity. The PINNs system was trained with high variability in the input parameters, including boundary conditions, phase flow rates, permeability values, and the hydraulic state equations. A single DNN was trained to produce saturation and capillary pressure profiles for a homogeneous core slice. The trained DNN was utilized to construct different heterogeneous structures. Numerical simulations and data from coreflooding experiments of two-phase flow were used to examine the accuracy of the suggested approach. Results showed high accuracy of the trained PINNs system predictions, with deviations from the numerical solutions of less than 3%, and less than 1% with the experimental data. A single training of the PINNs system was required and provided many solutions for different permeability structures, phase flow rates, hydraulic parameters, and boundary conditions in less than 1 s.

\---

## Paper ID 312

**Record number:** 92  
**Paper ID:** 312  
**DOI:** 10.1016/j.engappai.2023.107324  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0952197623015087

### Exact abstract

Physics-informed neural networks (PINNs) have demonstrated promise in solving forward and inverse problems involving partial differential equations. Despite recent progress on expanding the class of problems that can be tackled by PINNs, most of existing use-cases involve simple geometric domains. To date, there is no clear way to inform PINNs about the topology of the domain where the problem is being solved. In this work, we propose a novel positional encoding mechanism for PINNs based on the eigenfunctions of the Laplace–Beltrami operator. This technique allows to create an input space for the neural network that represents the geometry of a given object. We approximate the eigenfunctions as well as the operators involved in the partial differential equations with finite elements. We extensively test and compare the proposed methodology against different types of PINNs in complex shapes, such as a coil, a heat sink and the Stanford bunny, with different physics, such as the Eikonal equation and heat transfer. We also study the sensitivity of our method to the number of eigenfunctions used, as well as the discretization used for the eigenfunctions and the underlying operators. Our results show excellent agreement with the ground truth data in cases where traditional PINNs fail to produce a meaningful solution. We envision this new technique will expand the effectiveness of PINNs to more realistic applications. Code available at: https://github.com/fsahli/Delta-PINNs.

\---

## Paper ID 314

**Record number:** 93  
**Paper ID:** 314  
**DOI:** \[Not available]  
**Publisher URL:** https://jmlr.org/papers/v25/24-0017.html

### Exact abstract

We introduce a new, physics-informed continuous-time reinforcement learning (CT-RL) algorithm for control of affine nonlinear systems, an area that enables a plethora of wellmotivated applications. Based on fundamental control principles, our approach uses reference command input (RCI) as probing noise to enable exploration in learning. With known physical dynamics of the environment, by leveraging on the Kleinman algorithm structure, and using state-action trajectory data, RCI provides a data-efficient optimal control solution under an infinite-horizon undiscounted cost. We show that our RCI-based CT-RL algorithm not only provides theoretical guarantees such as learning convergence, solution optimality, and closed-loop stability, but also well-behaved dynamic system responses. It is noted that our evaluations not only include extensive baseline and ablation studies using typical performance measures in RL, but also essential control-centric performance measures that are critical for real-life control applications. As a result, we demonstrate that our RCI-based CT-RL leads to new, SOTA control design and performance.

\---

## Paper ID 315

**Record number:** 94  
**Paper ID:** 315  
**DOI:** 10.35833/MPCE.2024.000452  
**Publisher URL:** https://ieeexplore.ieee.org/document/10640363

### Exact abstract

The increasing penetration of renewable energy resources degrades the frequency stability of power systems. The present work addresses this issue by proposing a look-ahead dispatch model of power systems based on a linear alternating current optimal power flow framework with nonlinear frequency constraints. Meanwhile, the poor efficiency for solving this formulation is addressed by introducing a physics-informed neural network (PINN) to predict key frequency-control parameter values accurately. The PINN ensures that the learned results are applicable to the original physical frequency dynamics model, and applying the predicted parameter values enables the resulting dispatch model to be solved quickly and efficiently using readily available commercial solvers. The feasibility and advantages of the proposed model are demonstrated by the results of numerical computations applied to a modified IEEE 118-bus test system.

\---

## Paper ID 316

**Record number:** 95  
**Paper ID:** 316  
**DOI:** 10.1109/ACCESS.2024.3442189  
**Publisher URL:** https://ieeexplore.ieee.org/document/10634169/

### Exact abstract

The high cost associated with high-fidelity computational fluid dynamics (CFD) is one of the main challenges that inhibit the design and optimisation of new fluid-flow systems. In this study, we explore the feasibility of a physics-informed deep learning approach to predict turbulence evolution and mixing without requiring a classical CFD solver. The deep learning architecture was inspired by integrating U-Net with inception modules for capturing the multi-scale nature of turbulent flows. In addition, a physicsconstrained loss function was designed to enforce the mass and pressure conservation of the predicted solution. After trained, the optimised model was validated in the large eddy simulation (LES) of a forced turbulent mixing layer at two distinct Reynolds numbers (Re = 3000 and 30000). The results demonstrate that the proposed approach achieves a promising solution accuracy and extrapolation ability with a significant reduction in computing time when compared to those obtained using a classical LES flow solver. The success in developing such a physics-informed deep learning approach not only justifies the potential of ML-based surrogate solvers for fast prototyping and design of generic fluid-flow systems but also highlights the key challenges arising from data-driven surrogate solver development for turbulence modelling.

\---

## Paper ID 317

**Record number:** 96  
**Paper ID:** 317  
**DOI:** 10.1109/TIM.2024.3398068  
**Publisher URL:** https://ieeexplore.ieee.org/document/10522764/

### Exact abstract

Particle image velocimetry (PIV) and particle tracking velocimetry (PTV) are important flow visualization technologies for measuring global velocity fields in a nonintrusive manner. However, they are limited by the spatial resolution of the measurement, and they require further postprocessing steps to refine the flow fields. To this end, we employ a deep-learning method, physics-informed neural networks (PINNs), which can integrate the sparse velocity measurements from PIV or PTV with the governing equations of the fluid flow by a neural network. A real experiment, where the tomographic PTV setup is applied to measure the 3-D turbulent jet flow, is considered to evaluate the proposed method. We perform a systematic study based on the experimental data, demonstrating that the PINN-enhanced velocimetry approach can yield super-resolution for the velocity vectors, hence demanding only the order of 100 vectors per snapshot compared to 16 500 vectors at full resolution. In addition, PINNs infer the pressure field without providing any pressure information. The proposed algorithm can be readily implemented with the existing PIV/PTV software, providing a standard method for greatly enhancing experimental data in fluid dynamics.

\---

## Paper ID 318

**Record number:** 97  
**Paper ID:** 318  
**DOI:** 10.1109/TGRS.2024.3409578  
**Publisher URL:** https://ieeexplore.ieee.org/document/10547323/

### Exact abstract

Accurate and stable identification of oil and gas reservoirs based on seismic data can effectively improve exploration success rates, enhance production efficiency, and reduce exploration and development costs. Limited by uncertainties in seismic data and inadequate label samples, problems of overfitting and instability generally exist in current deep-learning reservoir discrimination studies. A semi-supervised physicsinformed workflow for reservoir discrimination is herein proposed. The approach synthesizes rock physics theory, elastic forward modeling, prior geological information, and deep learning algorithms. Furthermore, to establish a connection between seismic data and reservoir types, a geofluid parameter is employed, selected for its sensitivity to oil and gas reservoirs and its reliable extraction from seismic data. Accordingly, the reservoir classification network, geofluid inversion network, and elastic forward network are designed to complete the reservoir prediction cooperatively with a task-decomposed strategy. Finally, the established networks are optimized based on the constructed “seismic-geofluid-reservoir” training dataset with the proposed multistep cooperative semi-supervised training strategy, which can improve the learning ability of the model by capturing explicit physics knowledge from labeled data, mining implicit knowledge from massive unlabeled data, and incorporating geophysics domain knowledge simultaneously. The proposed reservoir discrimination workflow is successfully applied to a field survey. The precision, recall, and f1-score of the predicted gas reservoirs can reach about 55%, 84%, and 67%.

\---

## Paper ID 320

**Record number:** 98  
**Paper ID:** 320  
**DOI:** 10.1007/s40430-023-04418-0  
**Publisher URL:** https://link.springer.com/10.1007/s40430-023-04418-0

### Exact abstract

Using neural networks to solve engineering problems has become increasingly common and relevant because of their versatility and efficiency. Although this tool can handle complex identification and prediction problems, a large amount of data are often required for training the neural network, making its application prohibitive for problems where the data are unavailable and it is not viable to obtain. Physics-informed neural networks (PINN) attempt to circumvent this problem and eliminate the need for large databases for neural network training since it uses only the partial differential equation that governs the physical problem and its boundary conditions as information for the supervised training. This work explores the capability and appropriateness of using PINN in the solution of the Reynolds equation, which models the hydrodynamic pressure in journal bearings. For this, a neural network was trained for both the static and the dynamic cases of the Reynolds equation. The results for the hydrodynamic pressure field and rotor orbit were compared with those obtained by finite volume method (FVM). The results obtained in this paper show that the PINN can be successfully applied to solve static and dynamic cases of hydrodynamic lubrication in journal bearings.

\---

## Paper ID 326

**Record number:** 99  
**Paper ID:** 326  
**DOI:** 10.1016/j.compbiomed.2023.107287  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0010482523007527

### Exact abstract

Hemodynamic parameters are of great significance in the clinical diagnosis and treatment of cardiovascular diseases. However, noninvasive, real-time and accurate acquisition of hemodynamics remains a challenge for current invasive detection and simulation algorithms. Here, we integrate computational fluid dynamics with our customized analysis framework based on a multi-attribute point cloud dataset and physics-informed neural networks (PINNs)-aided deep learning modules. This combination is implemented by our workflow that generates flow field datasets within two types of patient personalized models - aorta with fine coronary branches and abdominal aorta. Deep learning modules with or without an antecedent hierarchical structure model the flow field development and complete the mapping from spatial and temporal dimensions to 4D hemodynamics. 88,000 cases on 4 randomized partitions in 16 controlled trials reveal the hemodynamic landscape of spatio- temporal anisotropy within two types of personalized models, which demonstrates the effectiveness of PINN in predicting the space-time behavior of flow fields and gives the optimal deep learning framework for different blood vessels in terms of balancing the training cost and accuracy dimensions. The proposed framework shows intentional performance in computational cost, accuracy and visualization compared to currently prevalent methods, and has the potential for generalization to model flow fields and corresponding clinical metrics within vessels at different locations. We expect our framework to push the 4D hemodynamic predictions to the real-time level, and in statistically significant fashion, applicable to morphologically variable vessels.

\---

## Paper ID 328

**Record number:** 100  
**Paper ID:** 328  
**DOI:** 10.1016/j.buildenv.2023.110563  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0360132323005905

### Exact abstract

Obtaining a detailed indoor airflow field is important for the accurate and efficient control of indoor environmental comfort. Traditional computational fluid dynamics (CFD) methods and CFD-based surrogate models are time-consuming and sometimes produce inaccurate results because of difficulties in reproducing accurate inlet boundary conditions. Artificial neural networks (ANN) can be utilized to reconstruct indoor airflow fields directly from measurement data without building a large inaccurate and time-consuming CFD database. However, as a purely data-driven method, a normal ANN can yield unphysical results. A physics-informed neural network (PINN) is one possible solution. In this study, a PINN was introduced to reconstruct an indoor airflow field basing on measurement data (without inlet boundary conditions), and compared with ANN. The results show that the PINN produced more physical results than the ANN and is more tolerant to a reduction in the number of measurement points. In specific cases, the mean errors of the PINN results for the 98-, 32, and 16 point cases were 89%, 79%, and 70% of those of the ANN results, respectively. The PINN showed practical application potential in cases where the amount of measured data was relatively small. Comparing to traditional CFD, PINN can reconstruct the detailed airflow field directly from measurement data, avoiding inaccurate simulation conditions. Meanwhile, PINN saved 42% calculation time, comparing to CFD. Moreover, there is a potential of PINN in using less time to apply a trained PINN to a new case by transfer learning, where however CFD needs to recalculate a new case.

\---

## Paper ID 333

**Record number:** 101  
**Paper ID:** 333  
**DOI:** 10.1016/j.engappai.2023.106073  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0952197623002579

### Exact abstract

Natural gas pipeline systems are commonly designed under the assumption of constant supply and demand flow conditions. This is while gas flows are transient because of the compression stations, presence of gas storage facilities and fluctuating supply and consumer demands. Analyzing such transient flows substantially benefits design, control, and monitoring of natural gas pipeline systems. The nonlinear partial differential equations describing the physics of transient flows in pipelines are solved using conventional methods, which are computationally demanding especially for uncertainty quantification purposes where many simulations are required. In this study, we propose an alternative physics-informed neural network (PINN) framework for the transient analysis of pipeline networks that can perform transient flow analysis in natural gas pipelines that the original PINNs cannot solve due to the high complexity of the problem. We propose a nested structure for the PINNs with a loss model that greatly reduces the number of tasks in the emergent complex multi-task learning process. We also integrate an adaptive weights approach that tackles the imbalanced gradients caused by the extremely large coefficients in the equations of the natural gas pipeline problem. The proposed framework, for the first time, can produce accurate results for the complex natural gas pipeline network problem using PINNs. Furthermore, we investigate the parameterization of the nested PINNs as a surrogate model for the natural gas pipeline system. With merely 26% more training costs, the surrogate model can perform the transient flow analysis given thousands of realizations of parameters in a split millisecond, while the costs of performing the same simulations using conventional methods can be prohibitively expensive. This can greatly boost the efficiency of complex many-query analyses such as sensitivity analysis, uncertainty propagation and design optimization.

\---

## Paper ID 338

**Record number:** 102  
**Paper ID:** 338  
**DOI:** 10.1016/j.engappai.2023.105828  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S095219762300012X

### Exact abstract

Constitutive models are fundamental blocks of modeling physical processes, where they connect conservation laws with the kinematics of the system. They are often expressed in the form of linear or nonlinear systems of ordinary differential equations (ODEs). Within nonlinear regimes, however, it is often challenging to characterize these constitutive models. For solids and geomaterials, the constitutive relations that relate the macroscopic stress and strain quantities are described using highly nonlinear, constrained ODEs to characterize their mechanical response at different stages of both reversible and irreversible deformation process. A recent trend in constitutive modeling leverages complex neural network architectures to construct model-free material models, however, such complex networks are inefficient and demand significant training data. Therefore, we believe theory-based parametric models of elastoplasticity are still the most efficient and predictive. To alleviate the challenging task of characterization and discovery of such models, here, we present a physicsinformed neural network (PINN) formulation for stress–strain constitutive modeling. The main obstacle that we address is to have complex inequality constraints of elastoplasticity theory embedded in the PINN loss functions. These constraints are crucial to find the correct form of the yield surface and plastic flow. We also show that calibration of new datasets can be performed very efficiently and that enhanced performance can be achieved even for the case of discovery. This framework requires a single dataset for characterization. Although we only focus on mechanical constitutive models, similar analogies can be used to characterize constitutive models for any physical process.

\---

## Paper ID 341

**Record number:** 103  
**Paper ID:** 341  
**DOI:** 10.1109/TIE.2022.3177791  
**Publisher URL:** https://ieeexplore.ieee.org/document/9786547/

### Exact abstract

The wide integration of voltage source converters (VSCs) in power grids as the interface of renewables causes the converter-grid interaction stability challenge. The black-box impedance of VSCs identified at the converter terminal is the key to facilitate the study of converter-grid interaction stability. However, since the limited impedance data amount in online measurement, the existing impedance identification methods cannot accurately capture characteristics of the impedance model in various operating scenarios with the changing profiles of renewables and loads. In this article, a physics-informed neural network based impedance identification is proposed to fill this research gap. The physics knowledge of the VSC is used to compress the artificial neural network, which can reduce the calculation burden of online impedance identification. Meanwhile, the two-steps impedance identification is developed with the inspiration of the transfer learning theory to further increase the online impedance identification efficiency. This method can significantly reduce the required data amount used in online impedance identification for the online stability analysis with the changing operating points. The case studies confirm the effectiveness of the proposed method.

\---

## Paper ID 342

**Record number:** 104  
**Paper ID:** 342  
**DOI:** 10.1016/j.geoen.2023.211486  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2949891023000726

### Exact abstract

Production forecast based on historical data provides essential value for developing hydrocarbon resources. Classic history matching workflow is often computationally intense and geometry-dependent. Analytical data- driven models like decline curve analysis (DCA) and capacitance resistance models (CRM) provide a grid-free solution with a relatively simple model capable of integrating some degree of physics constraints. However, the analytical solution may ignore subsurface geometries and is appropriate only for specific flow regimes and otherwise may violate physics conditions resulting in degraded model prediction accuracy. Machine learning- based predictive model for time series provides non-parametric, assumption-free solutions for production forecasting, but are prone to model overfit due to training data sparsity; therefore may be accurate over short prediction time intervals. We propose a grid-free, physics-informed graph neural network (PI-GNN) for production forecasting. A customized graph convolution layer aggregates neighborhood information from historical data and has the flexibility to integrate domain expertise into the data-driven model. The proposed method relaxes the dependence on close-form solutions like CRM and honors the given physics-based constraints. Our proposed method is robust, with improved performance and model interpretability relative to the conventional CRM and GNN baseline without physics constraints.

\---

## Paper ID 349

**Record number:** 105  
**Paper ID:** 349  
**DOI:** 10.1016/j.jhydrol.2022.128828  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0022169422013981

### Exact abstract

A hydraulic tomography – physics informed neural network (HT-PINN) is developed for inverting two- dimensional large-scale spatially distributed transmissivity. HT-PINN involves a neural network model of transmissivity and a series of neural network models to describe transient or steady-state sequential pumping tests. All the neural network models are jointly trained by minimizing the total loss function including data fitting errors and PDE constraints. Batch training of collocation points is used to amplify the advantage of the mesh-free property of neural networks, thereby limiting the number of collocation points per training iteration and reducing the total training time. The developed HT-PINN accurately and efficiently inverts two-dimensional Gaussian transmissivity fields with more than a million unknowns (1024 × 1024 resolution), and the inversion map accuracy exceeds 95 %. The effects of batch sampling methods, batch number and size, and data requirements for direct and indirect measurements are systematically investigated. In addition, the developed HT- PINN exhibits great scalability and structure robustness in inverting fields with different resolutions ranging from coarse (64 × 64) to fine (1024 × 1024). Specifically, data requirements do not increase with the problem dimensionality, and the computational cost of HT-PINN remains almost unchanged due to its mesh-free nature while maintaining high inversion accuracy when increasing the field resolution.

\---

## Paper ID 353

**Record number:** 106  
**Paper ID:** 353  
**DOI:** 10.1109/TEC.2022.3180295  
**Publisher URL:** https://ieeexplore.ieee.org/document/9788008/

### Exact abstract

The objective of this paper is to investigate the ability of physics-informed neural networks to learn the magnetic field response as a function of design parameters in the context of a two-dimensional (2-D) magnetostatic problem. Our approach is as follows. First, we present a functional whose minimization is equivalent to solving parametric magnetostatic problems. Subsequently, we use a deep neural network (DNN) to represent the magnetic field as a function of space and parameters that describe geometric features and operating points. We train the DNN by minimizing the physics-informed functional using stochastic gradient descent. Lastly, we demonstrate our approach on a ten-dimensional EI-core electromagnet problem with parameterized geometry. We evaluate the accuracy of the DNN by comparing its predictions to those of finite element analysis.

\---

## Paper ID 354

**Record number:** 107  
**Paper ID:** 354  
**DOI:** 10.1016/j.enganabound.2022.09.032  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0955799722003411

### Exact abstract

This study introduces a new physics-informed neural networks (PINN)-based prediction method to determine the temperature pattern of fluid and fins when flow passes over plate-circular/ plate-square pin fin heat sinks (PCPFHS / PSPFHS). The proposed method is based on calculating the velocity pattern on the fins’ surface. For this target, a training algorithm based on the feed-forward neural network (FNN) (110 layers of learnable weights and 16 neurons in each layer), a nonlinear activation function (rectified linear unit, "ReLU") and the Adam method for optimization is used. The training algorithm is fed by transient large eddy simulation (LES) results at every 0.01 s time step for the total physical time of 100 s. According to the input parameter type, the training: validation ratio is varied between 70:30 and 90:10 in order to keep the coefficient of determination (R2) at its maximum. The automatic differentiation employed the forward accumulation approach to reduce calculation costs, while the transient training matrix fed the neural network. The adaptive gradient (AdaGrad) method is also to improve convergence process and its speed up. Based on the developed calculation tools, the temperature pattern for the flow and over the fins are calculated according to the energy balance on the fin surface and the transient pattern of velocity predicted by PINN. After careful validation with experimental data and sensitivity analysis on the number of neurons and layers, the thermal behavior of PCPFHS and PSPFHS are determined using the conduction heat transfer equation inside the fins via the finite element method and by assuming a heat balance between the fins’ surface and airflow. As a result of the proposed method, it is possible to reduce the number of equations in the calculation process of these parameters. According to the results, it is found that PSPFHS has an average Nusselt number which is 9.63% greater than the one in PCPFHS. However, compared to PCPFHS, PSPFHS shows a -17.78% reduced vorticity ratio at Re = 4,865. The results indicated that, for long calculation times (for instance, at 2,000 s physical time), the PINN method reduces calculation costs up to 35% compared to the technique that directly solves the energy conservation in the whole domain.

\---

## Paper ID 355

**Record number:** 108  
**Paper ID:** 355  
**DOI:** 10.1016/j.jcp.2022.111539  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999122006015

### Exact abstract

Physics-informed neural network (PINN) is a data-driven approach to solving equations. It is successful in many applications; however, the accuracy of the PINN is not satisfactory when it is used to solve multiscale equations. Homogenization is a way of approximating a multiscale equation by a homogenized equation without multiscale property; it includes solving cell problems and the homogenized equation. The cell problems are periodic, and we propose an oversampling strategy that greatly improves the PINN accuracy on periodic problems. The homogenized equation has a constant or slow dependency coefficient and can also be solved by PINN accurately. We hence proposed a 3-step method, neural homogenization based PINN (NH-PINN), to improve the PINN accuracy for solving multiscale problems with the help of homogenization. We apply our method to solve three equations that represent three different homogenization. The results show that the proposed method greatly improves the PINN accuracy, in particular when the scaling is small. Besides, we also find that the PINN-aided homogenization may achieve better accuracy than the numerical methods-driven homogenization; PINN hence is a potential alternative to implementing the homogenization.

\---

## Paper ID 359

**Record number:** 109  
**Paper ID:** 359  
**DOI:** 10.1016/j.ymssp.2022.109347  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0888327022004824

### Exact abstract

Lithium-ion batteries have been extensively used to power portable electronics, electric vehicles, and unmanned aerial vehicles over the past decade. Aging decreases the capacity of Lithium-ion batteries. Therefore, accurate remaining useful life (RUL) prediction is critical to the reliability, safety, and efficiency of the Lithium-ion battery-powered systems. However, battery aging is a complex electrochemical process affected by internal aging mechanisms and operating conditions (e.g., cycle time, environmental temperature, and loading condition). In this paper, a physics- informed machine learning method is proposed to model the degradation trend and predict the RUL of Lithium-ion batteries while accounting for battery health and operating conditions. The proposed physics-informed long short-term memory (PI-LSTM) model combines a physics-based calendar and cycle aging (CCA) model with an LSTM layer. The CCA model measures the aging effect of Lithium-ion batteries by combining five operating stress factor models. The PI- LSTM uses an LSTM layer to learn the relationship between the degradation trend determined by the CCA model and the online monitoring data of different cycles (i.e., voltage, current, and cell temperature). After the degradation pattern of a battery is estimated by the PI-LSTM model, another LSTM model is then used to predict the future degradation and remaining useful life (RUL) of the battery by learning the degradation trend estimated by the PI-LSTM model. Monitoring data of eleven Lithium-ion batteries under different operating conditions was used to demonstrate the proposed method. Experimental results have shown that the proposed method can accurately model the degradation behavior as well as predict the RUL of Lithium-ion batteries under different operating conditions.

\---

## Paper ID 362

**Record number:** 110  
**Paper ID:** 362  
**DOI:** 10.1109/TPEL.2022.3176468  
**Publisher URL:** https://ieeexplore.ieee.org/document/9779551/

### Exact abstract

Physics-informed machine learning (PIML) has been emerging as a promising tool for applications with domain knowledge and physical models. To uncover its potentials in power electronics, this article proposes a PIML-based parameter estimation method demonstrated by a case study of dc–dc Buck converter. A deep neural network and the dynamic models of the converter are seamlessly coupled. It overcomes the challenges related to training data, accuracy, and robustness which a typical data-driven approach has. This exemplary application envisions to provide a new perspective for tailoring existing machine learning tools for power electronics.

\---

## Paper ID 363

**Record number:** 111  
**Paper ID:** 363  
**DOI:** 10.1016/j.jcp.2022.111419  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999122004818

### Exact abstract

The theory-guided convolutional neural network (TgCNN) framework, which can incorporate discretized governing equation residuals into the training of convolutional neural networks (CNNs), is extended to two-phase porous media flow problems in this work. The two principal variables of the considered problem, pressure and saturation, are approximated simultaneously with two CNNs, respectively. Pressure and saturation are coupled with each other in the governing equations, and thus the two networks are also mutually conditioned in the training process by the discretized governing equations, which also increases the difficulty of model training. The coupled and discretized equations can provide valuable information in the training process. With the assistance of theory-guidance, the TgCNN surrogates can achieve better accuracy than ordinary CNN surrogates in two-phase flow problems. Moreover, a piecewise training strategy is proposed for the scenario with varying well controls, in which the TgCNN surrogates are constructed for different segments on the time dimension and stacked together to predict solutions for the whole time-span. For scenarios with larger variance of the formation property field, the TgCNN surrogates can also achieve satisfactory performance. The constructed TgCNN surrogates are further used for inversion of permeability fields by combining them with the iterative ensemble smoother (IES) algorithm, and sufficient inversion accuracy is obtained with improved efficiency.

\---

## Paper ID 365

**Record number:** 112  
**Paper ID:** 365  
**DOI:** 10.1109/TMAG.2022.3161814  
**Publisher URL:** https://ieeexplore.ieee.org/document/9740189/

### Exact abstract

Deep learning has achieved remarkable success in diverse applications; however, its use in solving partial differential equations (PDEs) has emerged only recently. Here, we present a feasibility study of applying physics-informed deep learning methods for solving PDEs related to the physical laws of electromagnetics. The methodology uses automatic differentiation, and the loss function is formulated based on the underlying PDE and boundary conditions. The feasibility of the method is shown using three electromagnetic problems of varying complexity and the results show close agreement with the ground truth from a finite-element analysis solver. The application of transfer learning is also explored and results in faster training. Furthermore, a hybrid approach involving physics-based governing equations and labeled data is also introduced to improve the accuracy of the results.

\---

## Paper ID 366

**Record number:** 113  
**Paper ID:** 366  
**DOI:** 10.1016/j.eswa.2022.117038  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0957417422004535

### Exact abstract

Modal-decomposition techniques are computational frameworks based on data aimed at identifying a lowdimensional space for capturing dominant flow features: the so-called modes. We propose a deep probabilisticneural-network architecture for learning a minimal and near-orthogonal set of non-linear modes from high-fidelity turbulent-flow data useful for flow analysis, reduced-order modeling and flow control. Our approach is based on 𝛽-variational autoencoders (𝛽-VAEs) and convolutional neural networks (CNNs), which enable extracting non-linear modes from multi-scale turbulent flows while encouraging the learning of independent latent variables and penalizing the size of the latent vector. Moreover, we introduce an algorithm for ordering VAE-based modes with respect to their contribution to the reconstruction. We apply this method for non-linear mode decomposition of the turbulent flow through a simplified urban environment, where the flow-field data is obtained based on well-resolved large-eddy simulations (LESs). We demonstrate that by constraining the shape of the latent space, it is possible to motivate the orthogonality and extract a set of parsimonious modes sufficient for high-quality reconstruction. Our results show the excellent performance of the method in the reconstruction against linear-theory-based decompositions, where the energy percentage captured by the proposed method from five modes is equal to 87.36% against 32.41% of the POD. Moreover, we compare our method with available AE-based models. We show the ability of our approach in the extraction of near-orthogonal modes with the determinant of the correlation matrix equal to 0.99, which may lead to interpretability.

\---

## Paper ID 369

**Record number:** 114  
**Paper ID:** 369  
**DOI:** 10.1016/j.jcp.2022.111260  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999122003229

### Exact abstract

Physics informed neural networks (PINNs) are a novel deep learning paradigm primed for solving forward and inverse problems of nonlinear partial differential equations (PDEs). By embedding physical information delineated by PDEs in feedforward neural networks, PINNs are trained as surrogate models for approximate solution to the PDEs without need of label data. Due to the excellent capability of neural networks in describing complex relationships, a variety of PINN-based methods have been developed to solve different kinds of problems such as integer-order PDEs, fractional PDEs, stochastic PDEs and integrodifferential equations (IDEs). However, for the state-of-the-art PINN methods in application to IDEs, integral discretization is a key prerequisite in order that IDEs can be transformed into ordinary differential equations (ODEs). However, integral discretization inevitably introduces discretization error and truncation error to the solution. In this study, we propose an auxiliary physics informed neural network (A-PINN) framework for solving forward and inverse problems of nonlinear IDEs. By defining auxiliary output variable(s) to represent the integral(s) in the governing equation and employing automatic differentiation of the auxiliary output to replace integral operator, the proposed A-PINN bypasses the limitation of integral discretization. Distinct from the neural network in the original PINN which only approximates the variables in the governing equation, in the proposed A-PINN framework, a multi-output neural network is constructed to simultaneously calculate the primary outputs and auxiliary outputs which respectively approximate the variables and integrals in the governing equation. Subsequently, the relationship between the primary outputs and auxiliary outputs is constrained by new output conditions in compliance with physical laws. By pursuing the first-order nonlinear Volterra IDE benchmark problem, we validate that the proposed A-PINN can obtain more accurate solution than the conventional PINN. We further demonstrate the good performance of A-PINN in solving the forward problems involving nonlinear Volterra IDEs system, nonlinear 2-dimensional Volterra IDE, nonlinear 10-dimensional Volterra IDE, and nonlinear Fredholm IDE. Finally, the A-PINN framework is implemented to solve the inverse problem of nonlinear IDEs and the results show that the unknown parameters can be satisfactorily discovered even with heavily noisy data.

\---

## Paper ID 371

**Record number:** 115  
**Paper ID:** 371  
**DOI:** 10.3233/JAE-210175  
**Publisher URL:** https://journals.sagepub.com/doi/full/10.3233/JAE-210175

### Exact abstract

. In this paper CNNs are used for solving an optimization problem with two diﬀerent approaches: CNN is used as a surrogate model of the forward problem, inserted in an optimization loop governed by a genetic algorithm, in the first approach, while a CNN is trained for solving directly the inverse problem in the second approach. The case study is the shape design of a magnetic core used for material testing.

\---

## Paper ID 372

**Record number:** 116  
**Paper ID:** 372  
**DOI:** 10.1007/s00521-022-07042-6  
**Publisher URL:** https://link.springer.com/10.1007/s00521-022-07042-6

### Exact abstract

Numerical simulation in Computational Fluid Dynamics mainly relies on discretizing the governing equations in time or space to obtain numerical solutions, which is expensive and time-consuming. Deep learning significantly reduces the computational cost due to its great nonlinear curve fitting capability, however, the data-driven models is agnostic to latent relationships between input and output. In this paper, a novel deep learning named Navier–Stokes Generative Adversarial Network integrated with physical information is proposed. The Navier–Stokes Equation is added to the loss function of the generator in the form of residuals, which means physics loss in this paper. Then, the proposed model is trained in the framework of generative adversarial network. Experimental results show that proposed model significantly outperform similar models, mean absolute error are decreased by 62.29, 78.42 and 78.61% on pressure and velocity components. What’s more, effectiveness of introducing physics loss is also verified.

\---

## Paper ID 373

**Record number:** 117  
**Paper ID:** 373  
**DOI:** 10.1021/acs.iecr.2c01036  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acs.iecr.2c01036

### Exact abstract

Artificial intelligence (AI), machine learning (ML), and data science are leading to a promising transformative paradigm. ML, especially deep learning and physics-informed ML, is a valuable toolkit that complements incomplete domain-specific knowledge in conventional experimental and computational methods. ML can provide flexible techniques to facilitate the conceptual development of new robust predictive models for multiphase flows and reactors by finding hidden pattern/information/mechanism in a data set. Due to such emergence, we thereby comprehensively survey, explore, analyze, and discuss key advancements of recent ML applications to hydrodynamics, heat and mass transfer, and reactions in single-phase and multiphase flow systems from different aspects: (1) development of multiphase closure models of drag force, turbulence stresses and heat/mass transfer to improve the accuracy and efficiency of typical CFD simulations; (2) image reconstruction, regime identification, key parameter predictions, and optimization of multiphase flow and transport fields; (3) reaction kinetics modeling (e.g., predictions of reaction networks, kinetic parameters, and species production) and reaction condition optimization. These sections also discuss and analyze the key advantages and weakness of ML for solving the problems in the domain of multiphase flows and reactors. Finally, we summarize the undersolving challenges and opportunities in order to identify future directions that would be useful for the research community. Future development and study of multiphase flows and reactors are envisaged to be accelerated by ML and data science.

\---

## Paper ID 374

**Record number:** 118  
**Paper ID:** 374  
**DOI:** 10.1016/j.cma.2022.115141  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782522003152

### Exact abstract

Physics-informed neural networks (PINNs) have received significant attention as a unified framework for forward, inverse, and surrogate modeling of problems governed by partial differential equations (PDEs). Training PINNs for forward problems, however, pose significant challenges, mainly because of the complex non-convex and multi-objective loss function. In this work, we present a PINN approach to solving the equations of coupled flow and deformation in porous media for both single-phase and multiphase flow. To this end, we construct the solution space using multi-layer neural networks. Due to the dynamics of the problem, we find that incorporating multiple differential relations into the loss function results in an unstable optimization problem, meaning that sometimes it converges to the trivial null solution, other times it moves very far from the expected solution. We report a dimensionless form of the coupled governing equations that we find most favorable to the optimizer. Additionally, we propose a sequential training approach based on the stress-split algorithms of poromechanics. Notably, we find that sequential training based on stress-split performs well for different problems, while the classical strain-split algorithm shows an unstable behavior similar to what is reported in the context of finite element solvers. We use the approach to solve benchmark problems of poroelasticity, including Mandel’s consolidation problem, Barry–Mercer’s injection-production problem, and a reference two-phase drainage problem. The Python-SciANN codes reproducing the results reported in this manuscript will be made publicly available at https://github.com/sciann/sciann-applications.

\---

## Paper ID 379

**Record number:** 119  
**Paper ID:** 379  
**DOI:** 10.1016/j.cma.2021.114502  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782521007076

### Exact abstract

Despite the great promise of the physics-informed neural networks (PINNs) in solving forward and inverse problems, several technical challenges are present as roadblocks for more complex and realistic applications. First, most existing PINNs are based on point-wise formulation with fully-connected networks to learn continuous functions, which suﬀer from poor scala- bility and hard boundary enforcement. Second, the infinite search space over-complicates the non-convex optimization for network training. Third, although the convolutional neural network (CNN)-based discrete learning can significantly improve training efficiency, CNNs struggle to handle irregular geometries with unstructured meshes. To properly address these challenges, we present a novel discrete PINN framework based on graph convolutional net- work (GCN) and variational structure of PDE to solve forward and inverse partial diﬀerential equations (PDEs) in a unified manner. The use of a piecewise polynomial basis can reduce the dimension of search space and facilitate training and convergence. Without the need of tuning penalty parameters in classic PINNs, the proposed method can strictly impose boundary conditions and assimilate sparse data in both forward and inverse settings. The flexibility of GCNs is leveraged for irregular geometries with unstructured meshes. The ef- fectiveness and merit of the proposed method are demonstrated over a variety of forward and inverse computational mechanics problems governed by both linear and nonlinear PDEs.

\---

## Paper ID 382

**Record number:** 120  
**Paper ID:** 382  
**DOI:** 10.1109/ACCESS.2022.3206368  
**Publisher URL:** https://ieeexplore.ieee.org/document/9888100/

### Exact abstract

The development of technologies for the additive manufacturing, in particular of metallic materials, is offering the possibility of producing parts with complex geometries. This opens up to the possibility of using topological optimization methods for the design of electromagnetic devices. Hence, a wide variety of approaches, originally developed for solid mechanics, have recently become attractive also in the field of electromagnetics. The general distinction between gradient-based and gradient-free methods drives the structure of the paper, with the latter becoming particularly attractive in the last years due to the concepts of artificial neural networks. The aim of this paper is twofold. On one hand, the paper aims at summarizing and describing the state-of-art on topology optimization techniques while on the other it aims at showing how the latter methodologies developed in non-electromagnetic framework (e.g., solid mechanics field) can be applied for the optimization of electromagnetic devices. Discussions and comparisons are both supported by theoretical aspects and numerical results.

\---

## Paper ID 384

**Record number:** 121  
**Paper ID:** 384  
**DOI:** 10.1007/s10409-021-01148-1  
**Publisher URL:** https://link.springer.com/10.1007/s10409-021-01148-1

### Exact abstract

Despite the significant progress over the last 50 years in simulating flow problems using numerical discretization of the Navier-Stokes equations (NSE), we still cannot incorporate seamlessly noisy data into existing algorithms, mesh-generation is complex, and we cannot tackle high-dimensional problems governed by parametrized NSE. Moreover, solving inverse flow problems is often prohibitively expensive and requires complex and expensive formulations and new computer codes. Here, we review flow physics-informed learning, integrating seamlessly data and mathematical models, and implementing them using physics-informed neural networks (PINNs). We demonstrate the effectiveness of PINNs for inverse problems related to three-dimensional wake flows, supersonic flows, and biomedical flows.

\---

## Paper ID 387

**Record number:** 122  
**Paper ID:** 387  
**DOI:** 10.1016/j.jcp.2021.110493  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999121003880

### Exact abstract

We investigate a numerical method for approximating the solution of the one dimensional acoustic wave problem, when violating the numerical stability condition. We use deep learning to create an explicit non-linear scheme that remains stable for larger time steps and produces better accuracy than the reference implicit method. The proposed spatiotemporal neural-network architecture is additionally enhanced during training with a physically-informed term, adapting it to the physical problem it is approximating and thus more accurate.

\---

## Paper ID 388

**Record number:** 123  
**Paper ID:** 388  
**DOI:** 10.1016/j.cma.2021.113959  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782521002966

### Exact abstract

We present a Physics-Informed Neural Network (PINN) to simulate the thermochemical evolution of a composite material on a tool undergoing cure in an autoclave. In particular, we solve the governing coupled system of diﬀerential equations—including conductive heat transfer and resin cure kinetics—by optimizing the parameters of a deep neural network (DNN) using a physics-based loss function. To account for the vastly diﬀerent behaviour of thermal conduction and resin cure, we design a PINN consisting of two disconnected subnetworks, and develop a sequential training algorithm that mitigates instability present in traditional training methods. Further, we incorporate explicit discontinuities into the DNN at the composite-tool interface and enforce known physical behaviour directly in the loss function to improve the solution near the interface. We train the PINN with a technique that automatically adapts the weights on the loss terms corresponding to PDE, boundary, interface, and initial conditions. Finally, we demonstrate that one can include problem parameters as an input to the model—resulting in a surrogate that provides real-time simulation for a range of problem settings—and that one can use transfer learning to significantly reduce the training time for problem settings similar to that of an initial trained model. The performance of the proposed PINN is demonstrated in multiple scenarios with diﬀerent material thicknesses and thermal boundary conditions.

\---

## Paper ID 389

**Record number:** 124  
**Paper ID:** 389  
**DOI:** 10.1007/s10334-021-00919-y  
**Publisher URL:** https://link.springer.com/10.1007/s10334-021-00919-y

### Exact abstract

Introduction The success of parallel Magnetic Resonance Imaging algorithms like SENSitivity Encoding (SENSE) depends on an accurate estimation of the receiver coil sensitivity maps. Deep learning-based receiver coil sensitivity map estimation depends upon the size of training dataset and generalization capabilities of the trained neural network. When there is a mismatch between the training and testing datasets, retraining of the neural networks is required from a scratch which is costly and time consuming. Materials and methods A transfer learning approach, i.e., end-to-end fine-tuning is proposed to address the data scarcity and generalization problems of deep learning-based receiver coil sensitivity map estimation. First, generalization capabilities of a pre-trained U-Net (initially trained on 1.5T receiver coil sensitivity maps) are thoroughly assessed for 3T receiver coil sensitivity map estimation. Later, end-to-end fine-tuning is performed on the pre-trained U-Net to estimate the 3T receiver coil sensitivity maps. Result and conclusion Peak Signal-to-Noise Ratio, Root Mean Square Error and central line profiles (of the SENSE reconstructed images) show a successful SENSE reconstruction by utilizing the receiver coil sensitivity maps estimated by the proposed method.

\---

## Paper ID 390

**Record number:** 125  
**Paper ID:** 390  
**DOI:** 10.1007/s10596-021-10070-1  
**Publisher URL:** https://link.springer.com/10.1007/s10596-021-10070-1

### Exact abstract

A method for infering bed topography beneath glaciers from surface measurements (elevation from altimetry and velocity from InSAR) and sparse thickness measurements is developed and evaluated. The method is based on an original nonisothermal Reduced Uncertainty (RU) version of the Shallow Ice Approximation (SIA) equation that natively incorporates the surface measurements. The flow model has a single dimensionless multi-physics parameter γ. This parameter takes into account the basal slipperiness and the variable vertical rate factor profiles, thus the vertical thermal variations. The inversions are based on three steps involving: an Artificial Neural Network (ANN) and two Variational Data Assimilation (VDA) processes. The ANN-based stage aims at estimating the multi-physics number γ from the thickness measurements; the resulting estimator is remarkably robust. The full inversion method is valid for half-sheared flows (presenting a moderate basal slipperiness): it can be applied to inland ice-sheets areas. Also these estimates connect continuously with estimates from mass conservation only, i.e. with areas of sliding flows. Numerical results are presented for areas of the East Antarctica Ice Sheet where bed elevation can be very uncertain (Bedmap2 values). Estimates are valid for wavelengths longer than ∼10¯h (due to the long wave assumption, shallow flow model) with resolution at ∼¯h (¯h a characteristic thickness value).

\---

## Paper ID 391

**Record number:** 126  
**Paper ID:** 391  
**DOI:** 10.1061/(ASCE)EM.1943-7889.0001947  
**Publisher URL:** https://ascelibrary.org/doi/10.1061/%28ASCE%29EM.1943-7889.0001947

### Exact abstract

Numerical methods such as finite element have been flourishing in the past decades for modeling solid mechanics problems via solving governing partial diﬀerential equations (PDEs). A salient aspect that distinguishes these numerical methods is how they approximate the physical fields of interest. Physics-informed deep learning (PIDL) is a novel approach developed in recent years for modeling PDE solutions and shows promise to solve computational mechanics problems without using any labeled data (e.g., measurement data is unavailable). The philosophy behind it is to approximate the quantity of interest (e.g., PDE solution variables) by a deep neural network (DNN) and embed the physical law to regularize the network. To this end, training the network is equivalent to minimization of a well-designed loss function that contains the residuals of the governing PDEs as well as initial/boundary conditions (I/BCs). In this paper, we present a physicsinformed neural network (PINN) with mixed-variable output to model elastodynamics problems without resort to the labeled data, in which the I/BCs are hardly imposed. In particular, both the displacement and stress components are taken as the DNN output, inspired by the hybrid finite element analysis, which largely improves the accuracy and the trainability of the network. Since the conventional PINN framework augments all the residual loss components in a “soft” manner with Lagrange multipliers, the weakly imposed I/BCs cannot not be well satisfied especially when complex I/BCs are present. To overcome this issue, a composite scheme of DNNs is established based on multiple single DNNs such that the I/BCs can be satisfied forcibly in a “hard” manner. The propose PINN framework is demonstrated on several numerical elasticity examples with diﬀerent I/BCs, including both static and dynamic problems as well as wave propagation in truncated domains. Results show the promise of PINN in the context of computational mechanics applications.

\---

## Paper ID 392

**Record number:** 127  
**Paper ID:** 392  
**DOI:** 10.1063/5.0058529  
**Publisher URL:** https://pubs.aip.org/pof/article/33/8/087101/1080391/Simulation-of-multi-species-flow-and-heat-transfer

### Exact abstract

In the present work, single- and segregated-network physics-informed neural network (PINN) architectures are applied to predict momentum, species, and temperature distributions of a dry air humidification problem in a simple two-dimensional (2D) rectangular domain. The created PINN models account for variable fluid properties, species- and heat-diffusion, and convection. Both the mentioned PINN architectures were trained using different hyperparameter settings, such as network width and depth, to find the best-performing configuration. It is shown that the segregated-network PINN approach results in on-average 62% lower losses when compared to the single-network PINN architecture for the given problem. Furthermore, the single-network variant struggled to ensure species mass conservation in different areas of the computational domain, whereas the segregated approach successfully maintained species conservation. The PINN predicted velocity, temperature, and species profiles for a given set of boundary conditions were compared to results generated using OpenFOAM software. Both the single- and segregated-network PINN models produced accurate results for temperature and velocity profiles, with average percentage difference relative to the computational fluid dynamics results of approximately 7.5% for velocity and 8% for temperature. The mean error percentages for the species mass fractions are 9% for the single-network model and 1.5% for the segregated-network approach. To showcase the applicability of PINNs for surrogate modeling of multi-species problems, a parameterized version of the segregated-network PINN is trained that could produce results for different water vapor inlet velocities. The normalized mean absolute percentage errors, relative to the OpenFOAM results, across three predicted cases for velocity and temperature are approximately 7.5% and 2.4% for water vapor mass fraction.

\---

## Paper ID 393

**Record number:** 128  
**Paper ID:** 393  
**DOI:** 10.1063/5.0055600  
**Publisher URL:** https://pubs.aip.org/pof/article/33/7/071905/1058848/Uncovering-near-wall-blood-flow-from-sparse-data

### Exact abstract

Near-wall blood flow and wall shear stress (WSS) regulate major forms of cardiovascular disease, yet they are challenging to quantify with high fidelity. Patient-specific computational and experimental measurement of WSS suﬀers from uncertainty, low resolution, and noise issues. Physics-informed neural networks (PINN) provide a flexible deep learning framework to integrate mathematical equations governing blood flow with measurement data. By leveraging knowledge about the governing equations (herein, Navier-Stokes), PINN overcomes the large data requirement in deep learning. In this study, it was shown how PINN could be used to improve WSS quantification in diseased arterial flows. Specifically, blood flow problems where the inlet and outlet boundary conditions were not known were solved by assimilating very few measurement points. Uncertainty in boundary conditions is a common feature in patient-specific computational fluid dynamics models. It was shown that PINN could use sparse velocity measurements away from the wall to quantify WSS with very high accuracy even without full knowledge of the boundary conditions. Examples in idealized stenosis and aneurysm models were considered demonstrating how partial knowledge about the flow physics could be combined with partial measurements to obtain accurate near-wall blood flow data. The proposed hybrid data-driven and physics-based deep learning framework has high potential in transforming high-fidelity near-wall hemodynamics modeling in cardiovascular disease.

\---

## Paper ID 394

**Record number:** 129  
**Paper ID:** 394  
**DOI:** 10.1109/TMAG.2021.3082431  
**Publisher URL:** https://ieeexplore.ieee.org/document/9437205/

### Exact abstract

We here present a novel deep learning (DL) approach for designing structures of permanent magnets. The challenge for the DL method in this kind of problem is to learn the mapping from a desired magnetic field to a simple magnetic structure, i.e., an inverse design approach. We demonstrate this approach by training six different standard convolutional neural network (CNN) structures previously used in the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) to inversely predict the properties of a single hard magnet (magnetization, size, and location) from a given 2-D magnetic field. We show that the best network, ResNeXt-50, can perform this prediction with an error of 0.22% in the properties of the magnet.

\---

## Paper ID 395

**Record number:** 130  
**Paper ID:** 395  
**DOI:** 10.1115/1.4050542  
**Publisher URL:** https://asmedigitalcollection.asme.org/heattransfer/article/143/6/060801/1104439/Physics-Informed-Neural-Networks-for-Heat-Transfer

### Exact abstract

Physics-informed neural networks (PINNs) have gained popularity across different engineering fields due to their effectiveness in solving realistic problems with noisy data and often partially missing physics. In PINNs, automatic differentiation is leveraged to evaluate differential operators without discretization errors, and a multitask learning problem is defined in order to simultaneously fit observed data while respecting the underlying governing laws of physics. Here, we present applications of PINNs to various prototype heat transfer problems, targeting in particular realistic conditions not readily tackled with traditional computational methods. To this end, we first consider forced and mixed convection with unknown thermal boundary conditions on the heated surfaces and aim to obtain the temperature and velocity fields everywhere in the domain, including the boundaries, given some sparse temperature measurements. We also consider the prototype Stefan problem for two-phase flow, aiming to infer the moving interface, the velocity and temperature fields everywhere as well as the different conductivities of a solid and a liquid phase, given a few temperature measurements inside the domain. Finally, we present some realistic industrial applications related to power electronics to highlight the practicality of PINNs as well as the effective use of neural networks in solving general heat transfer problems of industrial complexity. Taken together, the results presented herein demonstrate that PINNs not only can solve ill-posed problems, which are beyond the reach of traditional computational methods, but they can also bridge the gap between computational and experimental heat transfer.

\---

## Paper ID 396

**Record number:** 131  
**Paper ID:** 396  
**DOI:** 10.1016/j.cma.2021.113741  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782521000773

### Exact abstract

We present the application of a class of deep learning, known as Physics Informed Neural Networks (PINN), to inversion and surrogate modeling in solid mechanics. We explain how to incorporate the momentum balance and constitutive relations into PINN, and explore in detail the application to linear elasticity, and illustrate its extension to nonlinear problems through an example that showcases von Mises elastoplasticity. While common PINN algorithms are based on training one deep neural network (DNN), we propose a multi-network model that results in more accurate representation of the field variables. To validate the model, we test the framework on synthetic data generated from analytical and numerical reference solutions. We study convergence of the PINN model, and show that Isogeometric Analysis (IGA) results in superior accuracy and convergence characteristics compared with classic low-order Finite Element Method (FEM). We also show the applicability of the framework for transfer learning, and find vastly accelerated convergence during network re-training. Finally, we find that honoring the physics leads to improved robustness: when trained only on a few parameters, we find that the PINN model can accurately predict the solution for a wide range of parameters new to the network—thus pointing to an important application of this framework to sensitivity analysis and surrogate modeling.

\---

## Paper ID 397

**Record number:** 132  
**Paper ID:** 397  
**DOI:** 10.1109/TMAG.2021.3063470  
**Publisher URL:** https://ieeexplore.ieee.org/document/9367238/

### Exact abstract

In this work, a topology optimization procedure is proposed and applied to the TEAM 25 problem, i.e., a model of a die press with an electromagnet for orientation of magnetic powder. The shape of the press is described as a free discretized profile, and its relation to the flux density in the cavity is simulated by finite element analysis (FEA) and learned by a deep neural network (DNN) model. The DNN is used as a surrogate model for optimization, aiming to obtain a desired flux density distribution in the cavity. Results are promising, as better accuracy is obtained with respect to the full FEA-based optimization approach with the reduced time cost. Once trained, the surrogate model can be used to efficiently solve a whole family of problems where a different target field distribution is defined.

\---

## Paper ID 398

**Record number:** 133  
**Paper ID:** 398  
**DOI:** 10.1109/TMAG.2021.3068705  
**Publisher URL:** https://ieeexplore.ieee.org/document/9386125/

### Exact abstract

In order to identify the magnetic properties of magnetic steel, the synergy between the data arising from the experimental activity, an FE model, and the use of a multi-fidelity surrogate could relieve the burden of the total cost. A neural network, with as many outputs as fidelity levels, is adopted in quality of metamodel to describe the forward problem \[forward neural network (FNN)]. FNN is trained using multiple losses aiming at getting a robust surrogate that is poorly sensitive to the chosen norm. This makes it bi-objective optimal since several error metrics are simultaneously minimized. In addition, a conjugate, inverse net (INNCJ) is built, which is a ready-to-use tool for inverse properties identification, since no optimization runs are required. Its performances are compared to those obtained with a transfer learning-based approach (INNTR) and a single-fidelity inverse neural network (INNSF). Finally, a real B–H curve identification task has been solved, thereby validating the conjugate inverse net.

\---

## Paper ID 399

**Record number:** 134  
**Paper ID:** 399  
**DOI:** 10.1109/TMAG.2021.3058131  
**Publisher URL:** https://ieeexplore.ieee.org/document/9350612/

### Exact abstract

Deep learning (DL) has attracted more and more attention in computational electromagnetism. Particularly, the convolutional neural network (CNN) is one of the most popular learning models in DL due to its excellent capacity for feature extraction and convergence. The efficiency of CNN mainly depends on how many training samples are needed to effectively converge the network. The sample preparation process often involves a lot of numerical computations, which can be very expensive and time-consuming. In this article, based on the traditional DL network training procedure, two different approaches, namely adding smart training samples and reference samples, are proposed to help the DL network converge. The smart sample selection is based on a greedy algorithm, which can be applied for both training and reference samples. The influences of these two approaches on the CNN training process are investigated by an example of the coupled magneto-thermal computation applied to a transformer. Numerical results show that the two proposed approaches can significantly help the network to converge and improve the efficiency of the DL model.

\---

## Paper ID 400

**Record number:** 135  
**Paper ID:** 400  
**DOI:** 10.1073/pnas.2101784118  
**Publisher URL:** https://pnas.org/doi/full/10.1073/pnas.2101784118

### Exact abstract

Numerical simulation of fluids plays an essential role in modeling many physical phenomena, such as weather, climate, aerodynamics, and plasma physics. Fluids are well described by the Navier– Stokes equations, but solving these equations at scale remains daunting, limited by the computational cost of resolving the smallest spatiotemporal features. This leads to unfavorable tradeoffs between accuracy and tractability. Here we use end-to-end deep learning to improve approximations inside computational fluid dynamics for modeling two-dimensional turbulent flows. For both direct numerical simulation of turbulence and large-eddy simulation, our results are as accurate as baseline solvers with 8 to 10× finer resolution in each spatial dimension, resulting in 40- to 80-fold computational speedups. Our method remains stable during long simulations and generalizes to forcing functions and Reynolds numbers outside of the flows where it is trained, in contrast to black-box machine-learning approaches. Our approach exemplifies how scientific computing can leverage machine learning and hardware accelerators to improve simulations without sacrificing accuracy or generalization.

\---

## Paper ID 401

**Record number:** 136  
**Paper ID:** 401  
**DOI:** 10.1038/s42254-021-00314-5  
**Publisher URL:** https://www.nature.com/articles/s42254-021-00314-5

### Exact abstract

Despite great progress in simulating multiphysics problems using the numerical discretization of partial differential equations (PDEs), one still cannot seamlessly incorporate noisy data into existing algorithms, mesh generation remains complex, and high-dimensional problems governed by parameterized PDEs cannot be tackled. Moreover, solving inverse problems with hidden physics is often prohibitively expensive and requires different formulations and elaborate computer codes. Machine learning has emerged as a promising alternative, but training deep neural networks requires big data, not always available for scientific problems. Instead, such networks can be trained from additional information obtained by enforcing the physical laws (for example, at random points in the continuous space-time domain). Such physics-informed learning integrates (noisy) data and mathematical models, and implements them through neural networks or other kernel-based regression networks. Moreover, it may be possible to design specialized network architectures that automatically satisfy some of the physical invariants for better accuracy, faster training and improved generalization. Here, we review some of the prevailing trends in embedding physics into machine learning, present some of the current capabilities and limitations and discuss diverse applications of physics-informed learning both for forward and inverse problems, including discovering hidden physics and tackling high-dimensional problems.

\---

## Paper ID 402

**Record number:** 137  
**Paper ID:** 402  
**DOI:** 10.1063/5.0048909  
**Publisher URL:** https://pubs.aip.org/pof/article/33/5/055133/1077168/An-interpretable-framework-of-data-driven

### Exact abstract

Reynolds-averaged Navier–Stokes simulations represent a cost-effective option for practical engineering applications, but are facing evergrowing demands for more accurate turbulence models. Recently, emerging machine learning techniques have had a promising impact on turbulence modeling, but are still in their infancy regarding widespread industrial adoption. Toward their extensive uptake, this paper presents a universally interpretable machine learning (UIML) framework for turbulence modeling, which consists of two parallel machine learning-based modules to directly infer the structural and parametric representations of turbulence physics, respectively. At each phase of model development, data reflecting the evolution dynamics of turbulence and domain knowledge representing prior physical considerations are converted into modeling knowledge. The data- and knowledge-driven UIML is investigated with a deep residual network. The following three aspects are demonstrated in detail: (i) a compact input feature parameterizing a new turbulent timescale is introduced to prevent nonunique mappings between conventional input arguments and output Reynolds stress; (ii) a realizability limiter is developed to overcome the under-constrained state of modeled stress; and (iii) fairness and noise-insensitivity constraints are included in the training procedure. Consequently, an invariant, realizable, unbiased, and robust data-driven turbulence model is achieved. The influences of the training dataset size, activation function, and network hyperparameter on the performance are also investigated. The resulting model exhibits good generalization across two- and three-dimensional flows, and captures the effects of the Reynolds number and aspect ratio. Finally, the underlying rationale behind prediction is explored.

\---

## Paper ID 403

**Record number:** 138  
**Paper ID:** 403  
**DOI:** 10.1016/j.cma.2020.113603  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S004578252030788X

### Exact abstract

We employ physics-informed neural networks (PINNs) to infer properties of biological materials using synthetic data. In particular, we successfully apply PINNs to extract the permeability and viscoelastic modulus from thrombus deformation data, which can be described by the fourth-order Cahn–Hilliard and Navier–Stokes Equations. In PINNs, the partial differential equations are encoded into a loss function, where partial derivatives can be obtained through automatic differentiation (AD). To tackle the challenge of calculating the fourth-order derivative in the Cahn–Hilliard equation with AD, we introduce an auxiliary network along with the main neural network to approximate the second-derivative of the energy potential term. Our model can simultaneously predict unknown material parameters and velocity, pressure, and deformation gradient fields by merely training with partial information among all data, i.e., phase field and pressure measurements, while remaining highly flexible in sampling within the spatio-temporal domain for data acquisition. We validate our model by numerical solutions from the spectral/hp element method (SEM) and demonstrate its robustness by training it with noisy measurements. Our results show that PINNs can infer the material properties from noisy synthetic data and thus they have great potential for inferring these properties from experimental multi-modality and multi-fidelity data.

\---

## Paper ID 406

**Record number:** 139  
**Paper ID:** 406  
**DOI:** 10.1007/s00466-020-01952-9  
**Publisher URL:** https://link.springer.com/10.1007/s00466-020-01952-9

### Exact abstract

The recent explosion of machine learning (ML) and artificial intelligence (AI) shows great potential in the breakthrough of metal additive manufacturing (AM) process modeling, which is an indispensable step to derive the process-structureproperty relationship. However, the success of conventional machine learning tools in data science is primarily attributed to the unprecedented large amount of labeled data-sets (big data), which can be either obtained by experiments or firstprinciple simulations. Unfortunately, these labeled data-sets are expensive to obtain in AM due to the high expense of the AM experiments and prohibitive computational cost of high-fidelity simulations, hindering the direct applications of big-data based ML tools to metal AM problems. To fully exploit the power of machine learning for metal AM while alleviating the dependence on “big data”, we put forth a physics-informed neural network (PINN) framework that fuses both data and first physical principles, including conservation laws of momentum, mass, and energy, into the neural network to inform the learning processes. To the best knowledge of the authors, this is the first application of physics-informed deep learning to three dimensional AM processes modeling. Besides, we propose a hard-type approach for Dirichlet boundary conditions (BCs) based on a Heaviside function, which can not only exactly enforce the BCs but also accelerate the learning process. The PINN framework is applied to two representative metal manufacturing problems, including the 2018 NIST AM-Benchmark test series. We carefully assess the performance of the PINN model by comparing the predictions with available experimental data and high-fidelity simulation results, using finite element based variational multi-scale formulation method. The investigations show that the PINN, owed to the additional physical knowledge, can accurately predict the temperature and melt pool dynamics during metal AM processes with only a moderate amount of labeled data-sets. The foray of PINN to metal AM shows the great potential of physics-informed deep learning for broader applications to advanced manufacturing. All the data-sets and the PINN code will be made open-sourced in https://yan.cee.illinois.edu/ once the paper is published.

\---

## Paper ID 409

**Record number:** 140  
**Paper ID:** 409  
**DOI:** 10.1103/PhysRevLett.126.036401  
**Publisher URL:** https://link.aps.org/doi/10.1103/PhysRevLett.126.036401

### Exact abstract

Including prior knowledge is important for effective machine learning models in physics and is usually achieved by explicitly adding loss terms or constraints on model architectures. Prior knowledge embedded in the physics computation itself rarely draws attention. We show that solving the Kohn-Sham equations when training neural networks for the exchange-correlation functional provides an implicit regularization that greatly improves generalization. Two separations suffice for learning the entire one-dimensional H2 dissociation curve within chemical accuracy, including the strongly correlated region. Our models also generalize to unseen types of molecules and overcome self-interaction error.

\---

## Paper ID 410

**Record number:** 141  
**Paper ID:** 410  
**DOI:** 10.1016/j.jcp.2020.109913  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999120306872

### Exact abstract

We propose a Bayesian physics-informed neural network (B-PINN) to solve both forward and inverse nonlinear problems described by partial differential equations (PDEs) and noisy data. In this Bayesian framework, the Bayesian neural network (BNN) combined with a PINN for PDEs serves as the prior while the Hamiltonian Monte Carlo (HMC) or the variational inference (VI) could serve as an estimator of the posterior. B-PINNs make use of both physical laws and scattered noisy measurements to provide predictions and quantify the aleatoric uncertainty arising from the noisy data in the Bayesian framework. Compared with PINNs, in addition to uncertainty quantification, B-PINNs obtain more accurate predictions in scenarios with large noise due to their capability of avoiding overfitting. We conduct a systematic comparison between the two different approaches for the B-PINNs posterior estimation (i.e., HMC or VI), along with dropout used for quantifying uncertainty in deep neural networks. Our experiments show that HMC is more suitable than VI with mean field Gaussian approximation for the B-PINNs posterior estimation, while dropout employed in PINNs can hardly provide accurate predictions with reasonable uncertainty. Finally, we replace the BNN in the prior with a truncated KarhunenLoève (KL) expansion combined with HMC or a deep normalizing flow (DNF) model as posterior estimators. The KL is as accurate as BNN and much faster but this framework cannot be easily extended to high-dimensional problems unlike the BNN based framework.

\---

## Paper ID 411

**Record number:** 142  
**Paper ID:** 411  
**DOI:** 10.1016/j.procir.2021.11.263  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2212827121011616

### Exact abstract

Stereolithography (SLA), additive manufacturing (3D printing) technique, is widely used nowadays for rapid prototyping and manufacturing (RP\&M). This technique is driven by photo-polymerisation, which is an exothermal process. This may lead to thermal stresses significantly aﬀecting the final quality of printed parts/products. To guarantee high-quality parts printed with the SLA technique, understanding the thermal behaviour is therefore crucial for optimizing the process. In this paper, the recent physics-informed neural network (PINN) methodology was employed to improve a physics-based model for predicting the thermal behaviour of SLA processes. The accuracy of the improved thermal model is demonstrated in this paper by comparing the predicted 2D temperature field with the 2D temperature field measured by a high-speed infrared thermal camera on parts printed on a production machine.

\---

## Paper ID 413

**Record number:** 143  
**Paper ID:** 413  
**DOI:** 10.1016/j.cma.2020.113250  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782520304357

### Exact abstract

Physics-informed neural networks (PINNs) encode physical conservation laws and prior physical knowledge into the neural networks, ensuring the correct physics is represented accurately while alleviating the need for supervised learning to a great degree \[1]. While eﬀective for relatively short-term time integration, when long time integration of the time-dependent PDEs is sought, the time-space domain may become arbitrarily large and hence training of the neural network may become prohibitively expensive. To this end, we develop a parareal physics-informed neural network (PPINN), hence decomposing a long-time problem into many independent short-time problems supervised by an inexpensive/fast coarse-grained (CG) solver. In particular, the serial CG solver is designed to provide approximate predictions of the solution at discrete times, while initiate many fine PINNs simultaneously to correct the solution iteratively. There is a two-fold benefit from training PINNs with small-data sets rather than working on a large-data set directly, i.e., training of individual PINNs with small-data is much faster, while training the fine PINNs can be readily parallelized. Consequently, compared to the original PINN approach, the proposed PPINN approach may achieve a significant speedup for long-time integration of PDEs, assuming that the CG solver is fast and can provide reasonable predictions of the solution, hence aiding the PPINN solution to converge in just a few iterations. To investigate the PPINN performance on solving time-dependent PDEs, we first apply the PPINN to solve the Burgers equation, and subsequently we apply the PPINN to solve a two-dimensional nonlinear diﬀusion-reaction equation. Our results demonstrate that PPINNs converge in a couple of iterations with significant speed-ups proportional to the number of time-subdomains employed.

\---

## Paper ID 415

**Record number:** 144  
**Paper ID:** 415  
**DOI:** 10.1007/s10921-020-00705-1  
**Publisher URL:** https://link.springer.com/10.1007/s10921-020-00705-1

### Exact abstract

We introduce an optimized physics-informed neural network (PINN) trained to solve the problem of identifying and characterizing a surface breaking crack in a metal plate. PINNs are neural networks that can combine data and physics in the learning process by adding the residuals of a system of Partial Differential Equations to the loss function. Our PINN is supervised with realistic ultrasonic surface acoustic wave data acquired at a frequency of 5 MHz. The ultrasonic surface wave data is represented as a surface deformation on the top surface of a metal plate, measured by using the method of laser vibrometry. The PINN is physically informed by the acoustic wave equation and its convergence is sped up using adaptive activation functions. The adaptive activation function uses a scalable hyperparameter in the activation function, which is optimized to achieve best performance of the network as it changes dynamically the topology of the loss function involved in the optimization process. The usage of adaptive activation function significantly improves the convergence, notably observed in the current study. We use PINNs to estimate the speed of sound of the metal plate, which we do with an error of 1%, and then, by allowing the speed of sound to be space dependent, we identify and characterize the crack as the positions where the speed of sound has decreased. Our study also shows the effect of sub-sampling of the data on the sensitivity of sound speed estimates. More broadly, the resulting model shows a promising deep neural network model for ill-posed inverse problems.

\---

## Paper ID 416

**Record number:** 145  
**Paper ID:** 416  
**DOI:** 10.1016/j.cma.2020.113226  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782520304114

### Exact abstract

This paper introduces an innovative physics-informed deep learning framework for metamodeling of nonlinear structural systems with scarce data. The basic concept is to incorporate available, yet incomplete, physics knowledge (e.g., laws of physics, scientific principles) into deep long short-term memory (LSTM) networks, which constrains and boosts the learning within a feasible solution space. The physics constraints are embedded in the loss function to enforce the model training which can accurately capture latent system nonlinearity even with very limited available training datasets. Specifically for dynamic structures, physical laws of equation of motion, state dependency and hysteretic constitutive relationship are considered to construct the physics loss. In particular, two physics-informed multi-LSTM network architectures are proposed for structural metamodeling. The satisfactory performance of the proposed framework is successfully demonstrated through two illustrative examples (e.g., nonlinear structures subjected to ground motion excitation). It turns out that the embedded physics can alleviate overfitting issues, reduce the need of big training datasets, and improve the robustness of the trained model for more reliable prediction with extrapolation ability. As a result, the physics-informed deep learning paradigm outperforms classical non-physicsguided data-driven neural networks.

\---

## Paper ID 419

**Record number:** 146  
**Paper ID:** 419  
**DOI:** 10.1016/j.engstruct.2020.110704  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0141029619345080

### Exact abstract

Accurate prediction of building’s response subjected to earthquakes makes possible to evaluate building performance. To this end, we leverage the recent advances in deep learning and develop a physics-guided convolutional neural network (PhyCNN) for data-driven structural seismic response modeling. The concept is to train a deep PhyCNN model based on limited seismic input-output datasets (e.g., from simulation or sensing) and physics constraints, and thus establish a surrogate model for structural response prediction. Available physics (e.g., the law of dynamics) can provide constraints to the network outputs, alleviate overfitting issues, reduce the need of big training datasets, and thus improve the robustness of the trained model for more reliable prediction. The surrogate model is then utilized for fragility analysis given certain limit state criteria. In addition, an unsupervised learning algorithm based on K-means clustering is also proposed to partition the datasets to training, validation and prediction categories, so as to maximize the use of limited datasets. The performance of PhyCNN is demonstrated through both numerical and experimental examples. Convincing results illustrate that PhyCNN is capable of accurately predicting building’s seismic response in a data-driven fashion without the need of a physics-based analytical/numerical model. The PhyCNN paradigm also outperforms non-physics-guided neural networks.

\---

## Paper ID 420

**Record number:** 147  
**Paper ID:** 420  
**DOI:** 10.1016/j.advwatres.2020.103610  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0309170819311649

### Exact abstract

Data assimilation for parameter and state estimation in subsurface transport problems remains a significant challenge because of the sparsity of measurements, the heterogeneity of porous media, and the high computational cost of forward numerical models. We present a multiphysics-informed deep neural network machine learning method for estimating space-dependent hydraulic conductivity, hydraulic head, and concentration fields from sparse measurements. In this approach, we employ individual deep neural networks (DNNs) to approximate the unknown parameters (e.g., hydraulic conductivity) and states (e.g., hydraulic head and concentration) of a physical system. Next, we jointly train these DNNs by minimizing the loss function that consists of the governing equations residuals in addition to the error with respect to measurement data. We apply this approach to assimilate conductivity, hydraulic head, and concentration measurements for the joint inversion of these parameter and states in a steady- state advection–dispersion problem. We study the accuracy of the proposed data assimilation approach with respect to the data size (i.e., the number of measured variables and the number of measurements of each variable), DNN size, and the complexity of the parameter field. We demonstrate that the physics-informed DNNs are significantly more accurate than the standard data-driven DNNs, especially when the training set consists of sparse data. We also show that the accuracy of parameter estimation increases as more diﬀerent multiphysics variables are inverted jointly.

\---

## Paper ID 422

**Record number:** 148  
**Paper ID:** 422  
**DOI:** 10.1029/2019WR026731  
**Publisher URL:** https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019WR026731

### Exact abstract

We present a physics-informed deep neural network (DNN) method for estimating hydraulic conductivity in saturated and unsaturated flows governed by Darcy's law. For saturated flow, we approximate hydraulic conductivity and head with two DNNs and use Darcy's law in addition to measurements of hydraulic conductivity and head to train these DNNs. For unsaturated flow, we approximate unsaturated conductivity function and capillary pressure with DNNs and train these DNNs using measurements of capillary pressure and the Richards equation. Because it is difficult to measure unsaturated conductivity in the field, we assume that no measurements of unsaturated conductivity are available. The proposed approach enforces the partial differential equation (PDE) (Darcy or Richards equation) constraints by minimizing the PDE residual at select points in the simulation domain. We demonstrate that physics constraints increase the accuracy of DNN approximations of sparsely observed functions and allow for training DNNs when no direct measurements of the functions of interest are available. For the saturated conductivity estimation problem, we show that the physics-informed DNN method is more accurate than the state-of-the-art maximum a posteriori probability method. For the unsaturated flow in homogeneous porous media, we find that the proposed method can accurately estimate the pressure-conductivity relationship based on the capillary pressure measurements only, even in the presence of measurement noise.

\---

## Paper ID 423

**Record number:** 149  
**Paper ID:** 423  
**DOI:** 10.3389/fphy.2020.00138  
**Publisher URL:** https://www.frontiersin.org/article/10.3389/fphy.2020.00138/full

### Exact abstract

4D flow magnetic resonance imaging (MRI) is an emerging imaging technique where spatiotemporal 3D blood velocity can be captured with full volumetric coverage in a single non-invasive examination. This enables qualitative and quantitative analysis of hemodynamic flow parameters of the heart and great vessels. An increase in the image resolution would provide more accuracy and allow better assessment of the blood flow, especially for patients with abnormal flows. However, this must be balanced with increasing imaging time. The recent success of deep learning in generating super resolution images shows promise for implementation in medical images. We utilized computational fluid dynamics simulations to generate fluid flow simulations and represent them as synthetic 4D flow MRI data. We built our training dataset to mimic actual 4D flow MRI data with its corresponding noise distribution. Our novel 4DFlowNet network was trained on this synthetic 4D flow data and was capable in producing noise-free super resolution 4D flow phase images with upsample factor of 2. We also tested the 4DFlowNet in actual 4D flow MR images of a phantom and normal volunteer data, and demonstrated comparable results with the actual flow rate measurements giving an absolute relative error of 0.6–5.8% and 1.1–3.8% in the phantom data and normal volunteer data, respectively.

\---

## Paper ID 424

**Record number:** 150  
**Paper ID:** 424  
**DOI:** 10.1364/OE.384875  
**Publisher URL:** https://opg.optica.org/abstract.cfm?URI=oe-28-8-11618

### Exact abstract

In this paper, we employ the emerging paradigm of physics-informed neural networks (PINNs) for the solution of representative inverse scattering problems in photonic metamaterials and nano-optics technologies. In particular, we successfully apply mesh-free PINNs to the difficult task of retrieving the eﬀective permittivity parameters of a number of finite-size scattering systems that involve many interacting nanostructures as well as multi-component nanoparticles. Our methodology is fully validated by numerical simulations based on the finite element method (FEM). The development of physics-informed deep learning techniques for inverse scattering can enable the design of novel functional nanostructures and significantly broaden the design space of metamaterials by naturally accounting for radiation and finite-size eﬀects beyond the limitations of traditional eﬀective medium theories.

\---

## Paper ID 425

**Record number:** 151  
**Paper ID:** 425  
**DOI:** 10.1016/j.cma.2019.112732  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S004578251930622X

### Exact abstract

Numerical simulations on fluid dynamics problems primarily rely on spatially or/and tem- porally discretization of the governing equation using polynomials into a finite-dimensional algebraic system. Due to the multi-scale nature of the physics and sensitivity from mesh- ing a complicated geometry, such process can be computational prohibitive for most real- time applications (e.g., clinical diagnosis and surgery planning) and many-query analyses (e.g., optimization design and uncertainty quantification). Therefore, developing a cost- e↵ective surrogate model is of great practical significance. Deep learning (DL) has shown new promises for surrogate modeling due to its capability of handling strong nonlinearity and high dimensionality. However, the o↵-the-shelf DL architectures, success of which heav- ily relies on the large amount of training data and interpolatory nature of the problem, fail to operate when the data becomes sparse. Unfortunately, data is often insufficient in most parametric fluid dynamics problems since each data point in the parameter space requires an expensive numerical simulation based on the first principle, e.g., Navier–Stokes equations. In this paper, we provide a physics-constrained DL approach for surrogate modeling of fluid flows without relying on any simulation data. Specifically, a structured deep neural network (DNN) architecture is devised to enforce the initial and boundary conditions, and the gov- erning partial di↵erential equations (i.e., Navier–Stokes equations) are incorporated into the loss of the DNN to drive the training. Numerical experiments are conducted on a number of internal flows relevant to hemodynamics applications, and the forward propagation of uncertainties in fluid properties and domain geometry is studied as well. The results show excellent agreement on the flow field and forward-propagated uncertainties between the DL surrogate approximations and the first-principle numerical simulations.

\---

## Paper ID 426

**Record number:** 152  
**Paper ID:** 426  
**DOI:** 10.1016/j.tafmec.2019.102447  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S016784421930357X

### Exact abstract

In this work, we present a new physics informed neural network (PINN) algorithm for solving brittle fracture problems. While most of the PINN algorithms available in the literature minimize the residual of the governing partial differential equation, the proposed approach takes a different path by minimizing the variational energy of the system. Additionally, we modify the neural network output such that the boundary conditions associated with the problem are exactly satisfied. Compared to the conventional residual based PINN, the proposed approach has two major advantages. First, the imposition of boundary conditions is relatively simpler and more robust. Second, the order of derivatives present in the functional form of the variational energy is of lower order than in the residual form used in conventional PINN and hence, training the network is faster. To compute the total variational energy of the system, an efficient scheme that takes as input a geometry described by spline based CAD model and employs Gauss quadrature rules for numerical integration, has been proposed. Moreover, we note that for obtaining the crack path, the proposed PINN has to be trained at each load/displacement step, which can potentially make the algorithm computationally inefficient. To address this issue, we propose to use the concept ‘transfer learning’ wherein, instead of re-training the complete network, we only re-train the network partially while keeping the weights and the biases corresponding to the other portions fixed. With this setup, the computational efficiency of the proposed approach is significantly enhanced. The proposed approach is used to solve six fracture mechanics problems. For all the examples, results obtained using the proposed approach match closely with the results available in the literature. For the first two examples, we compare the results obtained using the proposed approach with the conventional residual based neural network results. For both the problems, the proposed approach is found to yield better accuracy compared to conventional residual based PINN algorithms.

\---

## Paper ID 427

**Record number:** 153  
**Paper ID:** 427  
**DOI:** 10.1016/j.taml.2020.01.039  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2095034920300350

### Exact abstract

Physics-informed deep learning has drawn tremendous interest in recent years to solve computational physics problems, whose basic concept is to embed physical laws to constrain/inform neural networks, with the need of less data for training a reliable model. This can be achieved by incorporating the residual of physics equations into the loss function. Through minimizing the loss function, the network could approximate the solution. In this paper, we propose a mixed-variable scheme of physics-informed neural network (PINN) for fluid dynamics and apply it to simulate steady and transient laminar flows at low Reynolds numbers. A parametric study indicates that the mixed-variable scheme can improve the PINN trainability and the solution accuracy. The predicted velocity and pressure fields by the proposed PINN approach are also compared with the reference numerical solutions. Simulation results demonstrate great potential of the proposed PINN for fluid flow simulation with a high accuracy.

\---

## Paper ID 428

**Record number:** 154  
**Paper ID:** 428  
**DOI:** 10.1016/j.jcp.2019.109136  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999119308411

### Exact abstract

We employ adaptive activation functions for regression in deep and physics-informed neural networks (PINNs) to approximate smooth and discontinuous functions as well as solutions of linear and nonlinear partial diﬀerential equations. In particular, we solve the nonlinear Klein-Gordon equation, which has smooth solutions, the nonlinear Burgers equation, which can admit high gradient solutions, and the Helmholtz equation. We introduce a scalable hyper-parameter in the activation function, which can be optimized to achieve best performance of the network as it changes dynamically the topology of the loss function involved in the optimization process. The adaptive activation function has better learning capabilities than the traditional one (fixed activation) as it improves greatly the convergence rate, especially at early training, as well as the solution accuracy. To better understand the learning process, we plot the neural network solution in the frequency domain to examine how the network captures successively different frequency bands present in the solution. We consider both forward problems, where the approximate solutions are obtained, as well as inverse problems, where parameters involved in the governing equation are identified. Our simulation results show that the proposed method is a very simple and eﬀective approach to increase the efficiency, robustness and accuracy of the neural network approximation of nonlinear functions as well as solutions of partial diﬀerential equations, especially for forward problems. We theoretically prove that in the proposed method, gradient descent algorithms are not attracted to suboptimal critical points or local minima. Furthermore, the proposed adaptive activation functions are shown to accelerate the minimization process of the loss values in standard deep learning benchmarks using CIFAR-10, CIFAR-100, SVHN, MNIST, KMNIST, Fashion-MNIST, and Semeion datasets with and without data augmentation.

\---

## Paper ID 429

**Record number:** 155  
**Paper ID:** 429  
**DOI:** 10.1016/j.cma.2019.112789  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782519306814

### Exact abstract

In this work we investigate the possibility of using physics-informed neural networks (PINNs) to approximate the Euler equations that model high-speed aerodynamic flows. In particular, we solve both the forward and inverse problems in onedimensional and two-dimensional domains. For the forward problem, we utilize the Euler equations and the initial/boundary conditions to formulate the loss function, and solve the one-dimensional Euler equations with smooth solutions and with solutions that have a contact discontinuity as well as a two-dimensional oblique shock wave problem. We demonstrate that we can capture the solutions with only a few scattered points clustered randomly around the discontinuities. For the inverse problem, motivated by mimicking the Schlieren photography experimental technique used traditionally in high-speed aerodynamics, we use the data on density gradient ∇ρ(x, t), the pressure p(x∗, t) at a specified point x = x∗as well as the conservation laws to infer all states of interest (density, velocity and pressure fields). We present illustrative benchmark examples for both the problem with smooth solutions and Riemann problems (Sod and Lax problems) with PINNs, demonstrating that all inferred states are in good agreement with the reference solutions. Moreover, we show that the choice of the position of the point x∗ plays an important role in the learning process. In particular, for the problem with smooth solutions we can randomly choose the position of the point x∗from the computational domain, while for the Sod or Lax problem, we have to choose the position of the point x∗from the domain between the initial discontinuous point and the shock position of the final time. We also solve the inverse problem by combining the aforementioned data and the Euler equations in characteristic form, showing that the results obtained by using the Euler equations in characteristic form are better than that obtained by using the Euler equations in conservative form. Furthermore, we consider another type of inverse problem, specifically, we employ PINNs to learn the value of the parameter γ in the equation of state for the parameterized two-dimensional oblique wave problem by using the given data of the density, velocity and the pressure, and we identify the parameter γ accurately. Taken together, our results demonstrate that in the current form, where the conservation laws are imposed at random points, PINNs are not as accurate as traditional numerical methods for forward problems but they are superior for inverse problems that cannot even be solved with standard techniques.

\---

## Paper ID 430

**Record number:** 156  
**Paper ID:** 430  
**DOI:** 10.1109/TMAG.2019.2957197  
**Publisher URL:** https://ieeexplore.ieee.org/document/8957004/

### Exact abstract

The computational cost of topology optimization based on the binary particle swarm optimization is greatly reduced by the use of deep neural networks (DNNs). A first convolutional neural network (CNN) is trained with data coming from finite-element analysis (FEA) with the aim of correctly estimating the output quantity (a motor torque in the proposed case study). A second CNN is trained to give as output the boundary conditions \[(BCs), expressed in terms of fields or potentials] to be used as BC of a reduced finiteelement method (FEM) model, created in order to still be able to give the correct value of the output quantity. In the optimization phase, the torque properties are evaluated by the trained CNN, and only a reduced percentage of cases are reevaluated by either the full FEM model or the reduced FEM model. The overall computational time of the optimization procedure is significantly reduced.

\---

## Paper ID 431

**Record number:** 157  
**Paper ID:** 431  
**DOI:** 10.1126/science.aaw4741  
**Publisher URL:** https://www.science.org/doi/10.1126/science.aaw4741

### Exact abstract

For centuries, flow visualization has been the art of making fluid motion visible in physical and biological systems. Although such flow patterns can be, in principle, described by the Navier-Stokes equations, extracting the velocity and pressure fields directly from the images is challenging. We addressed this problem by developing hidden fluid mechanics (HFM), a physics-informed deep-learning framework capable of encoding the Navier-Stokes equations into the neural networks while being agnostic to the geometry or the initial and boundary conditions. We demonstrate HFM for several physical and biomedical problems by extracting quantitative information for which direct measurements may not be possible. HFM is robust to low resolution and substantial noise in the observation data, which is important for potential applications.

\---

## Paper ID 432

**Record number:** 158  
**Paper ID:** 432  
**DOI:** 10.3389/fphy.2020.00042  
**Publisher URL:** https://www.frontiersin.org/article/10.3389/fphy.2020.00042/full

### Exact abstract

A critical procedure in diagnosing atrial fibrillation is the creation of electro-anatomic activation maps. Current methods generate these mappings from interpolation using a few sparse data points recorded inside the atria; they neither include prior knowledge of the underlying physics nor uncertainty of these recordings. Here we propose a physics-informed neural network for cardiac activation mapping that accounts for the underlying wave propagation dynamics and we quantify the epistemic uncertainty associated with these predictions. These uncertainty estimates not only allow us to quantify the predictive error of the neural network, but also help to reduce it by judiciously selecting new informative measurement locations via active learning. We illustrate the potential of our approach using a synthetic benchmark problem and a personalized electrophysiology model of the left atrium. We show that our new method outperforms linear interpolation and Gaussian process regression for the benchmark problem and linear interpolation at clinical densities for the left atrium. In both cases, the active learning algorithm achieves lower error levels than random allocation. Our findings open the door toward physics-based electro-anatomic mapping with the ultimate goals to reduce procedural time and improve diagnostic predictability for patients affected by atrial fibrillation. Open source code is available at https://github.com/fsahli/EikonalNet.

\---

## Paper ID 433

**Record number:** 159  
**Paper ID:** 433  
**DOI:** 10.1063/1.5140772  
**Publisher URL:** https://pubs.aip.org/pof/article/32/2/025105/1060593/Deep-learning-methods-for-super-resolution

### Exact abstract

Two deep learning (DL) models addressing the super-resolution (SR) reconstruction of turbulent flows from low-resolution coarse flow field data are developed. One is the static convolutional neural network (SCNN), and the other is the novel multiple temporal paths convolutional neural network (MTPC). The SCNN model takes instantaneous snapshots as an input, while the MTPC model takes a time series of velocity fields as an input, and it includes spatial and temporal information simultaneously. Three temporal paths are designed in the MTPC to fully capture features in different time ranges. A weight path is added to generate pixel-level weight maps of each temporal path. These models were first applied to forced isotropic turbulence. The corresponding high-resolution flow fields were reconstructed with high accuracy. The MTPC seems to be able to reproduce many important features as well, such as kinetic energy spectra and the joint probability density function of the second and third invariants of the velocity gradient tensor. As a further evaluation, the SR reconstruction of anisotropic channel flow with the DL models was performed. The SCNN and MTPC remarkably improve the spatial resolution in various wall regions and potentially grasp all the anisotropic turbulent properties. It is also shown that the MTPC supplements more under-resolved details than the SCNN. The success is attributed to the fact that the MTPC can extract extra temporal information from consecutive fluid fields. The present work may contribute to the development of the subgrid-scale model in computational fluid dynamics and enrich the application of SR technology in fluid mechanics.

\---

## Paper ID 434

**Record number:** 160  
**Paper ID:** 434  
**DOI:** 10.3389/fphy.2019.00247  
**Publisher URL:** https://www.frontiersin.org/article/10.3389/fphy.2019.00247/full

### Exact abstract

In this perspective, we examine three key aspects of an end-to-end pipeline for realistic cellular simulations: reconstruction and segmentation of cellular structures; generation of cellular structures; and mesh generation, simulation, and data analysis. We highlight some of the relevant prior work in these distinct but overlapping areas, with a particular emphasis on current use of machine learning technologies, as well as on future opportunities.

\---

## Paper ID 435

**Record number:** 161  
**Paper ID:** 435  
**DOI:** 10.1016/j.cma.2019.112623  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782519305055

### Exact abstract

Advances in computational science offer a principled pipeline for predictive modeling of cardiovascular flows and aspire to provide a valuable tool for monitoring, diagnostics and surgical planning. Such models can be nowadays deployed on large patient-specific topologies of systemic arterial networks and return detailed predictions on flow patterns, wall shear stresses, and pulse wave propagation. However, their success heavily relies on tedious pre-processing and calibration procedures that typically induce a significant computational cost, thus hampering their clinical applicability. In this work we put forth a machine learning framework that enables the seamless synthesis of non-invasive in-vivo measurement techniques and computational flow dynamics models derived from first physical principles. We illustrate this new paradigm by showing how one-dimensional models of pulsatile flow can be used to constrain the output of deep neural networks such that their predictions satisfy the conservation of mass and momentum principles. Once trained on noisy and scattered clinical data of flow and wall displacement, these networks can return physically consistent predictions for velocity, pressure and wall displacement pulse wave propagation, all without the need to employ conventional simulators. A simple post-processing of these outputs can also provide a relatively cheap and effective way for estimating Windkessel model parameters that are required for the calibration of traditional computational models. The effectiveness of the proposed techniques is demonstrated through a series of prototype benchmarks, as well as a realistic clinical case involving in-vivo measurements near the aorta/carotid bifurcation of a healthy human subject.

\---

## Paper ID 441

**Record number:** 162  
**Paper ID:** 441  
**DOI:** 10.1088/1742-5468/ab3195  
**Publisher URL:** https://iopscience.iop.org/article/10.1088/1742-5468/ab3195

### Exact abstract

. We consider the use of deep learning methods for modeling complex phenomena like those occurring in natural physical processes. With the large amount of data gathered on these phenomena the data intensive paradigm could begin to challenge more traditional approaches elaborated over the years in fields like maths or physics. However, despite considerable successes in a variety of application domains, the machine learning field is not yet ready to handle the level of complexity required by such problems. Using an example application, namely sea surface temperature prediction, we show how general background knowledge gained from the physics could be used as a guideline for designing ecient deep learning models. In order to motivate the approach and to assess its generality we demonstrate a formal link between the solution of a class of dierential equations underlying a large family of physical phenomena and the proposed model. Experiments and comparison with series of baselines including a state of the art numerical approach is then provided.

\---

## Paper ID 442

**Record number:** 163  
**Paper ID:** 442  
**DOI:** 10.1115/1.4044400  
**Publisher URL:** https://asmedigitalcollection.asme.org/mechanicaldesign/article/doi/10.1115/1.4044400/956256/MultiFidelity-PhysicsConstrained-Neural-Network

### Exact abstract

Training machine learning tools such as neural networks requires the availability of sizable data, which can be difficult for engineering and scientific applications where experiments or simulations are expensive. In this work, a novel multi-fidelity physics-constrained neural network is proposed to reduce the required amount of training data, where physical knowledge is applied to constrain neural networks, and multi-fidelity networks are constructed to improve training efficiency. A low-cost low-fidelity physics-constrained neural network is used as the baseline model, whereas a limited amount of data from a high-fidelity physics-constrained neural network is used to train a second neural network to predict the difference between the two models. The proposed framework is demonstrated with two-dimensional heat transfer, phase transition, and dendritic growth problems, which are fundamental in materials modeling. Physics is described by partial differential equations. With the same set of training data, the prediction error of physics-constrained neural network can be one order of magnitude lower than that of the classical artificial neural network without physical constraints. The accuracy of the prediction is comparable to those from direct numerical solutions of equations.

\---

## Paper ID 443

**Record number:** 164  
**Paper ID:** 443  
**DOI:** 10.1063/1.5127247  
**Publisher URL:** https://pubs.aip.org/pof/article/31/12/127101/1075984/A-novel-spatial-temporal-prediction-method-for

### Exact abstract

A fast and accurate prediction method of unsteady flow is a challenge in fluid dynamics due to the high-dimensional and nonlinear dynamic behavior. A novel hybrid deep neural network (DNN) architecture was designed to capture the spatial-temporal features of unsteady flows directly from high-dimensional numerical unsteady flow field data. The hybrid DNN is constituted by the convolutional neural network, convolutional long short term memory neural network, and deconvolutional neural network. The unsteady wake flow around a cylinder at various Reynolds numbers and an airfoil at a higher Reynolds number are calculated to establish the datasets as training samples of the hybrid DNN. The trained hybrid DNNs were then tested by predicting the unsteady flow fields in future time steps. The predicted flow fields using the trained hybrid DNN are in good agreement with those calculated directly by a computational fluid dynamic solver.

\---

## Paper ID 444

**Record number:** 165  
**Paper ID:** 444  
**DOI:** 10.1016/j.jcp.2019.05.027  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999119303584

### Exact abstract

We present a deep learning framework for quantifying and propagating uncertainty in systems governed by non-linear diﬀerential equations using physicsinformed neural networks. Specifically, we employ latent variable models to construct probabilistic representations for the system states, and put forth an adversarial inference procedure for training them on data, while constraining their predictions to satisfy given physical laws expressed by partial diﬀerential equations. Such physics-informed constraints provide a regularization mechanism for eﬀectively training deep generative models as surrogates of physical systems in which the cost of data acquisition is high, and training data-sets are typically small. This provides a flexible framework for characterizing uncertainty in the outputs of physical systems due to randomness in their inputs or noise in their observations that entirely bypasses the need for repeatedly sampling expensive experiments or numerical simulators. We demonstrate the eﬀectiveness of our approach through a series of examples involving uncertainty propagation in non-linear conservation laws, and the discovery of constitutive laws for flow through porous media directly from noisy data.

\---

## Paper ID 445

**Record number:** 166  
**Paper ID:** 445  
**DOI:** 10.1016/j.jcp.2019.05.024  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999119303559

### Exact abstract

Surrogate modeling and uncertainty quantification tasks for PDE systems are most often considered as supervised learning problems where input and output data pairs are used for training. The construction of such emulators is by definition a small data problem which poses challenges to deep learning approaches that have been developed to operate in the big data regime. Even in cases where such models have been shown to have good predictive capability in high dimensions, they fail to address constraints in the data implied by the PDE model. This paper provides a methodology that incorporates the governing equations of the physical model in the loss/likelihood functions. The resulting physics-constrained, deep learning models are trained without any labeled data (e.g. employing only input data) and provide comparable predictive responses with data-driven models while obeying the constraints of the problem at hand. This work employs a convolutional encoder-decoder neural network approach as well as a conditional flow-based generative model for the solution of PDEs, surrogate model construction, and uncertainty quantification tasks. The methodology is posed as a minimization problem of the reverse Kullback-Leibler (KL) divergence between the model predictive density and the reference conditional density, where the later is defined as the Boltzmann-Gibbs distribution at a given inverse temperature with the underlying potential relating to the PDE system of interest. The generalization capability of these models to out-of-distribution input is considered. Quantification and interpretation of the predictive uncertainty is provided for a number of problems.

\---

## Paper ID 446

**Record number:** 167  
**Paper ID:** 446  
**DOI:** 10.1016/j.petrol.2019.05.055  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0920410519305091

### Exact abstract

Engineering simulators used for steady-state multiphase flows in oil and gas wells and pipelines are commonly utilized to predict pressure drop and phase velocities. Such simulators are typically based on either empirical correlations (e.g., Beggs and Brill, Mukherjee and Brill, Duns and Ros) or first-principles mechanistic models (e.g., Ansari, Xiao, TUFFP Unified, Leda Flow Point model, OLGAS). The simulators allow one to evaluate the pressure drop in a multiphase pipe flow with acceptable accuracy. However, the only shortcoming of these correlations and mechanistic models is their applicability (besides steady-state versions of transient simulators such as Leda Flow and OLGA). Empirical correlations are commonly applicable in their respective ranges of data fitting; and mechanistic models are limited by the applicability of the empirically based closure relations that are a part of such models. In order to extend the applicability and the accuracy of the existing accessible methods, a method of pressure drop calculation in the pipeline is proposed. The method is based on well segmentation and calculation of the pressure gradient in each segment using three surrogate models based on Machine Learning (ML) algorithms trained on a representative lab data set from the open literature. The first model predicts the value of a liquid holdup in the segment, the second one determines the flow pattern, and the third one is used to estimate the pressure gradient. To build these models, several ML algorithms are trained such as Random Forest, Gradient Boosting Decision Trees, Support Vector Machine, and Artificial Neural Network, and their predictive abilities are cross-compared. The proposed method for pressure gradient calculation yields = R 0.95 2 by using the Gradient Boosting algorithm as compared with = R 0.92 2 in case of Mukherjee and Brill correlation and = R 0.91 2 when a combination of Ansari and Xiao mechanistic models is utilized. The application of the above-mentioned ML algorithms and the larger database used for their training will allow extending the proposed methodology to a wider applicability range of input parameters as compared to standard accessible techniques. The method for pressure drop prediction based on ML algorithms trained on lab data is also validated on three real field cases. Validation indicates that the proposed model yields the following coefficients of determination: = R 0.806, 0.815 2 and 0.99 as compared with the highest values obtained by commonly used techniques: = R 0.82 2 (Beggs and Brill correlation), (Mukherjee and Brill correlation) and = R 0.98 2 (Beggs and Brill correlation). Hence, the method for calculating the pressure distribution could give comparable or even higher scores on field data by contrast to correlations and mechanistic models. This fact is an indicator that the model can be scalable from the lab to the field conditions without any additional retraining of ML algorithms.

\---

## Paper ID 448

**Record number:** 168  
**Paper ID:** 448  
**DOI:** 10.1109/TMAG.2019.2899304  
**Publisher URL:** https://ieeexplore.ieee.org/document/8661767/

### Exact abstract

This paper investigates the feasibility of novel data-driven deep learning (DL) models to predict the solution of Maxwell’s equations for low-frequency electromagnetic (EM) devices. With ground truth (empirical evidence) data being generated from a finite-element analysis solver, a deep convolutional neural network is trained in a supervised manner to learn a mapping for magnetic field distribution for topologies of different complexities of geometry, material, and excitation, including a simple coil, a transformer, and a permanent magnet motor. Preliminary experiments show DL model predictions in close agreement with the ground truth. A probabilistic model is introduced to improve the accuracy and to quantify the uncertainty in the prediction, based on Monte Carlo dropout. This paper establishes a basis for a fast and generalizable data-driven model used in the analysis, design, and optimization of EM devices.

\---

## Paper ID 449

**Record number:** 169  
**Paper ID:** 449  
**DOI:** 10.3389/fphy.2019.00048  
**Publisher URL:** https://www.frontiersin.org/article/10.3389/fphy.2019.00048/full

### Exact abstract

The Fujitsu Digital Annealer is designed to solve fully connected quadratic unconstrained binary optimization (QUBO) problems. It is implemented on application-specific CMOS hardware and currently solves problems of up to 1,024 variables. The Digital Annealer’s algorithm is currently based on simulated annealing; however, it differs from it in its utilization of an efficient parallel-trial scheme and a dynamic escape mechanism. In addition, the Digital Annealer exploits the massive parallelization that custom application-specific CMOS hardware allows. We compare the performance of the Digital Annealer to simulated annealing and parallel tempering with isoenergetic cluster moves on two-dimensional and fully connected spin-glass problems with bimodal and Gaussian couplings. These represent the respective limits of sparse vs. dense problems, as well as high-degeneracy vs. low-degeneracy problems. Our results show that the Digital Annealer currently exhibits a time-to-solution speedup of roughly two orders of magnitude for fully connected spin-glass problems with bimodal or Gaussian couplings, over the single-core implementations of simulated annealing and parallel tempering Monte Carlo used in this study. The Digital Annealer does not appear to exhibit a speedup for sparse two-dimensional spin-glass problems, which we explain on theoretical grounds. We also benchmarked an early implementation of the Parallel Tempering Digital Annealer. Our results suggest an improved scaling over the other algorithms for fully connected problems of average difficulty with bimodal disorder. The next generation of the Digital Annealer is expected to be able to solve fully connected problems up to 8,192 variables in size. This would enable the study of fundamental physics problems and industrial applications that were previously inaccessible using standard computing hardware or special-purpose quantum annealing machines.

\---

## Paper ID 450

**Record number:** 170  
**Paper ID:** 450  
**DOI:** 10.1016/j.jcp.2018.10.045  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999118307125

### Exact abstract

We introduce physics-informed neural networks – neural networks that are trained to solve supervised learning tasks while respecting any given laws of physics described by general nonlinear partial diﬀerential equations. In this work, we present our developments in the context of solving two main classes of problems: data-driven solution and data-driven discovery of partial diﬀerential equations. Depending on the nature and arrangement of the available data, we devise two distinct types of algorithms, namely continuous time and discrete time models. The first type of models forms a new family of data-efficient spatio-temporal function approximators, while the latter type allows the use of arbitrarily accurate implicit Runge-Kutta time stepping schemes with unlimited number of stages. The eﬀectiveness of the proposed framework is demonstrated through a collection of classical problems in fluids, quantum mechanics, reaction-diﬀusion systems, and the propagation of nonlinear shallow-water waves.

\---

## Paper ID 454

**Record number:** 171  
**Paper ID:** 454  
**DOI:** 10.1063/1.5024595  
**Publisher URL:** https://pubs.aip.org/pof/article/30/4/047105/260354/Prediction-model-of-velocity-field-around-circular

### Exact abstract

A data-driven model is proposed for the prediction of the velocity field around a cylinder by fusion convolutional neural networks (CNNs) using measurements of the pressure field on the cylinder. The model is based on the close relationship between the Reynolds stresses in the wake, the wake formation length, and the base pressure. Numerical simulations of flow around a cylinder at various Reynolds numbers are carried out to establish a dataset capturing the effect of the Reynolds number on various flow properties. The time series of pressure fluctuations on the cylinder is converted into a grid-like spatial-temporal topology to be handled as the input of a CNN. A CNN architecture composed of a fusionofpathswithandwithoutapoolinglayerisdesigned.Thisarchitecturecancapturebothaccurate spatial-temporal information and the features that are invariant of small translations in the temporal dimension of pressure fluctuations on the cylinder. The CNN is trained using the computational fluid dynamics (CFD) dataset to establish the mapping relationship between the pressure fluctuations on the cylinder and the velocity field around the cylinder. Adam (adaptive moment estimation), an efficient method for processing large-scale and high-dimensional machine learning problems, is employed to implement the optimization algorithm. The trained model is then tested over various Reynolds numbers. The predictions of this model are found to agree well with the CFD results, and the datadriven model successfully learns the underlying flow regimes, i.e., the relationship between wake structure and pressure experienced on the surface of a cylinder is well established.

\---

## Paper ID 456

**Record number:** 172  
**Paper ID:** 456  
**DOI:** 10.1016/j.buildenv.2017.12.023  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0360132317305917

### Exact abstract

Air pollutant transmission has significant influences on indoor air quality (IAQ). It is crucial to study mechanisms involved with airborne contaminant dispersion indoors. However, relationship between pollutant diﬀusion coefficient and viscosity in enclosed spaces has not been fully understood. In this study, turbulent Schmidt number (Sct) was modified as a function of turbulent kinematic viscosity rather than a constant value to better simulate dispersion of airborne contaminant in two typical enclosed spaces: an aircraft cabin and an office room. An experiment for airborne contaminant transmission was conducted in an aircraft cabin mockup. Combining with experimental data in the office room with an under floor air distribution (UFAD) system from literature, Sct was modified based on airflow vortex structures. The performance of RNG k-ε model using the modified Sct was found to be obviously better than that using the default Sct value in both the two enclosed spaces. In addition, model applicability to diﬀerent enclosed spaces was analyzed based on the airflow vibration frequency.

\---

## Paper ID 458

**Record number:** 173  
**Paper ID:** 458  
**DOI:** 10.1109/TKDE.2017.2720168  
**Publisher URL:** https://doi.org/10.1109/TKDE.2017.2720168

### Exact abstract

Data science models, although successful in a number of commercial domains, have had limited applicability in scientific problems involving complex physical phenomena. Theory-guided data science (TGDS) is an emerging paradigm that aims to leverage the wealth of scientific knowledge for improving the effectiveness of data science models in enabling scientific discovery. The overarching vision of TGDS is to introduce scientific consistency as an essential component for learning generalizable models. Further, by producing scientifically interpretable models, TGDS aims to advance our scientific understanding by discovering novel domain insights. Indeed, the paradigm of TGDS has started to gain prominence in a number of scientific disciplines such as turbulence modeling, material discovery, quantum chemistry, bio-medical science, bio-marker discovery, climate science, and hydrology. In this paper, we formally conceptualize the paradigm of TGDS and present a taxonomy of research themes in TGDS. We describe several approaches for integrating domain knowledge in different research themes using illustrative examples from different disciplines. We also highlight some of the promising avenues of novel research for realizing the full potential of theory-guided data science.

\---

## Paper ID 460

**Record number:** 174  
**Paper ID:** 460  
**DOI:** 10.1049/ip-smt:20040087  
**Publisher URL:** https://doi.org/10.1049/ip-smt:20040087

### Exact abstract

Although magnetic wound cores have simple geometries, their magnetic properties vary in a complex manner depending on many factors such as core geometry, dimensions and interlaminar air flux between adjacent wound layers. These can set up internal stress which seriously affects internal flux distribution and hence permeability and losses. For core manufacturers to satisfy customer requirements, a need arises for a reliable tool for more accurate prediction of magnetic performance of strip wound cores. The magnetic performance of a range of strip wound cores has been measured over a wide frequency range (50Hz–100kHz). Using this information a neural network-based software package coined ‘MagnetWolf’, has been developed for predicting core performance. Input parameters include core geometry, core dimension, core material and strip width. A subneural network approach employed reduces the amount of representative data required for network training. This provides rapid network development and enhances accuracy. A JAVA graphical user interface makes it possible for the tool to be accessible via the internet. A comparison of predicted and measured results shows this to be a reliable tool with potential industrial applications.

\---

## Paper ID 461

**Record number:** 175  
**Paper ID:** 461  
**DOI:** 10.1109/72.712178  
**Publisher URL:** https://doi.org/10.1109/72.712178

### Exact abstract

We present a method to solve initial and boundary value problems using artificial neural networks. A trial solution of the differential equation is written as a sum of two parts. The first part satisfies the initial/boundary conditions and contains no adjustable parameters. The second part is constructed so as not to affect the initial/boundary conditions. This part involves a feedforward neural network containing adjustable parameters (the weights). Hence by construction the initial/boundary conditions are satisfied and the network is trained to satisfy the differential equation. The applicability of this approach ranges from single ordinary differential equations (ODE’s), to systems of coupled ODE’s and also to partial differential equations (PDE’s). In this article, we illustrate the method by solving a variety of model problems and present comparisons with solutions obtained using the Galekrkin finite element method for several cases of partial differential equations. With the advent of neuroprocessors and digital signal processors the method becomes particularly interesting due to the expected essential gains in the execution speed.

\---

## Paper ID 462

**Record number:** 176  
**Paper ID:** 462  
**DOI:** 10.1016/0301-9322(74)90006-8  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/0301932274900068

### Exact abstract

Various flow pattern maps for two-phase gas--liquid flow in horizontal pipes are tested against the 5935 flow pattern observations presently contained in the UC Multiphase Pipe Flow Data Bank. A new flow regime correlation representing an extension of the work done by Gorier and Aziz \[3] is presented and is shown to be in better agreement with the data than the other correlations tested. A computer program for this correlation is included. It is also shown that there is no significant improvement obtained by including the effects of the physical properties of the fluids using any of the physical property parameters which have been proposed so far.

\---

## Paper ID 464

**Record number:** 177  
**Paper ID:** 464  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

It is almost impossible to solve the modern fluid flow problems without the use of Computational Fluid Dynamics (CFD). In petroleum industry, flow simulations assist engineers to develop the most efficient well design and it is essential to understand the multiphase flow details. However, despite the high accuracy, performing the numerical simulation fall short in providing the required results in timely manner. This article presents two case studies of Smart Proxy Models (SPM) utilizing artificial intelligence (AI) and Machine Learning (ML) techniques to appraise the behavior of the chaotic system and predict the dynamic features including pressure, velocity and the evolution of phase fraction within the process at each time-step at a much lower run time. Proposed cases concentrate on 2-D dam-break and 3-D fluidized bed problems, using OpenFOAM and MFiX, CFD software applications, respectively. This paper focuses on building and improving the artificial neural network (ANN) models characterized by feedforward back propagation method and Levenberg-Marquardt algorithm (LMA). Each case study contains multiple scenarios to gradually enhance the model capabilities to forecast the dynamic parameters. Results for both cases indicate that 8-10 hours of computational time for running CFD simulation, reduces to a few minutes when is done by developed AI-based models along with less than 10% error for entire process.

\---

## Paper ID 465

**Record number:** 178  
**Paper ID:** 465  
**DOI:** \[Not available]  
**Publisher URL:** https://jmlr.org/papers/v24/21-1524.html

### Exact abstract

The classical development of neural networks has primarily focused on learning mappings between finite dimensional Euclidean spaces or finite sets. We propose a generalization of neural networks to learn operators, termed neural operators, that map between infinite dimensional function spaces. We formulate the neural operator as a composition of linear integral operators and nonlinear activation functions. We prove a universal approximation theorem for our proposed neural operator, showing that it can approximate any given nonlinear continuous operator. The proposed neural operators are also discretization-invariant, i.e., they share the same model parameters among different discretization of the underlying function spaces. Furthermore, we introduce four classes of efficient parameterization, viz., graph neural operators, multi-pole graph neural operators, lowrank neural operators, and Fourier neural operators. An important application for neural operators is learning surrogate maps for the solution operators of partial differential equations (PDEs). We consider standard PDEs such as the Burgers, Darcy subsurface flow, and the Navier-Stokes equations, and show that the proposed neural operators have superior performance compared to existing machine learning based methodologies, while being several orders of magnitude faster than conventional PDE solvers.

\---

## Paper ID 467

**Record number:** 179  
**Paper ID:** 467  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Derivatives, mostly in the form of gradients and Hessians, are ubiquitous in machine learning. Automatic diﬀerentiation (AD), also called algorithmic diﬀerentiation or simply “autodiﬀ”, is a family of techniques similar to but more general than backpropagation for efficiently and accurately evaluating derivatives of numeric functions expressed as computer programs. AD is a small but established field with applications in areas including computational fluid dynamics, atmospheric sciences, and engineering design optimization. Until very recently, the fields of machine learning and AD have largely been unaware of each other and, in some cases, have independently discovered each other’s results. Despite its relevance, general-purpose AD has been missing from the machine learning toolbox, a situation slowly changing with its ongoing adoption under the names “dynamic computational graphs” and “diﬀerentiable programming”. We survey the intersection of AD and machine learning, cover applications where AD has direct relevance, and address the main implementation techniques. By precisely defining the main diﬀerentiation techniques and their interrelationships, we aim to bring clarity to the usage of the terms “autodiﬀ”, “automatic diﬀerentiation”, and “symbolic diﬀerentiation” as these are encountered more and more in machine learning settings.

\---

## Paper ID 469

**Record number:** 180  
**Paper ID:** 469  
**DOI:** 10.1007/s11831-014-9136-6  
**Publisher URL:** https://doi.org/10.1007/s11831-014-9136-6

### Exact abstract

Multiscale modeling aims to solve problems at the engineering (macro) scale while consid- ering the complexity of the microstructure with minimum cost. Generally, two scales are considered in multiscale modeling: small scale, which is designed to capture the mechanical phenomena at the atomistic, molecular or molecular cluster level, and large scale which is connected to continuous de- scription. For each scale, well-established numerical methods have been developed over the years to handle the relevant phenomena. As a first part of this paper, the most popular numerical methods, used at diﬀerent scales, as well as the coupling approaches between them are classified, according to their features and applications, so that the place of those used in multiscale modeling can be distinguished. Subsequently, the class of concurrent discrete-continuum coupling approaches, which is well adapted for dynamic studies of complex multiscale problems, is reviewed. Several techniques used in this class are also detailed. Among them, the bridging domain (BD) technique is used to de- velop a discrete-continuum coupling approach, adapted for dynamic simulations, between the Discrete Element Method (DEM) and the Constrained Natural Element Method (CNEM). This approach is applied to study the BD coupling parameters in dynamics. Several results giving more light on the setting of these parameters in practice are obtained.

\---

## Paper ID 470

**Record number:** 181  
**Paper ID:** 470  
**DOI:** 10.1137/18M1229845  
**Publisher URL:** https://epubs.siam.org/doi/10.1137/18M1229845

### Exact abstract

Physics-informed neural networks (PINNs), introduced in \[1], are eﬀective in solving integerorder partial diﬀerential equations (PDEs) based on scattered and noisy data. PINNs employ standard feedforward neural networks (NNs) with the PDEs explicitly encoded into the NN using automatic diﬀerentiation, while the sum of the mean-squared PDE-residuals and the mean-squared error in initial/boundary conditions is minimized with respect to the NN parameters. Here we extend PINNs to fractional PINNs (fPINNs) to solve space-time fractional advection-diﬀusion equations (fractional ADEs), and we study systematically their convergence, hence explaining both of fPINNs and PINNs for first time. Specifically, we demonstrate their accuracy and eﬀectiveness in solving multi-dimensional forward and inverse problems with forcing terms whose values are only known at randomly scattered spatio-temporal coordinates (black-box forcing terms). A novel element of the fPINNs is the hybrid approach that we introduce for constructing the residual in the loss function using both automatic diﬀerentiation for the integer-order operators and numerical discretization for the fractional operators. This approach bypasses the difficulties stemming from the fact that automatic differentiation is not applicable to fractional operators because the standard chain rule in integer calculus is not valid in fractional calculus. To discretize the fractional operators, we employ the Grünwald-Letnikov (GL) formula in one-dimensional fractional ADEs and the vector GL formula in conjunction with the directional fractional Laplacian in two- and three-dimensional fractional ADEs. We first consider the one-dimensional fractional Poisson equation and compare the convergence of the fPINNs against the finite diﬀerence method (FDM). We present the solution convergence using both the mean L2 error as well as the standard deviation due to sensitivity to NN parameter initializations. Using diﬀerent GL formulas we observe first-, second-, and third-order convergence rates for small size of training sets but the error saturates for larger training sets. We explain these results by analyzing the four sources of numerical errors due to discretization, sampling, NN approximation, and optimization. The total error decays monotonically (below 10−5 for third order GL formula) but it saturates beyond that point due to the optimization error. We also analyze the relative balance between discretization and sampling errors and observe that the sampling size and the number of discretization points (auxiliary points) should be comparable to achieve the highest accuracy. As we increase the depth of the NN up to certain value, the mean error decreases and the standard deviation increases whereas the width has essentially no eﬀect unless its value is either too small or too large. We next consider time-dependent fractional ADEs and compare white-box (WB) and black-box (BB) forcing. We observe that for the WB forcing, our results are similar to the aforementioned cases, however, for the BB forcing fPINNs outperform FDM. Subsequently, we consider multi-dimensional time-, space-, and space-time-fractional ADEs using the directional fractional Laplacian and we observe relative errors of 10−3 ∼10−4. Finally, we solve several inverse problems in 1D, 2D, and 3D to identify the fractional orders, diﬀusion coefficients, and transport velocities and obtain accurate results given proper initializations even in the presence of significant noise.

\---

## Paper ID 473

**Record number:** 182  
**Paper ID:** 473  
**DOI:** 10.1137/19M1274067  
**Publisher URL:** https://epubs.siam.org/doi/10.1137/19M1274067

### Exact abstract

. Deep learning has achieved remarkable success in diverse applications; however, its use in solving partial diﬀerential equations (PDEs) has emerged only recently. Here, we present an overview of physics-informed neural networks (PINNs), which embed a PDE into the loss of the neural network using automatic diﬀerentiation. The PINN algorithm is simple, and it can be applied to diﬀerent types of PDEs, including integro-diﬀerential equations, fractional PDEs, and stochastic PDEs. Moreover, from the implementation point of view, PINNs solve inverse problems as easily as forward problems. We propose a new residual-based adaptive refinement (RAR) method to improve the training efficiency of PINNs. For pedagogical reasons, we compare the PINN algorithm to a standard finite element method. We also present a Python library for PINNs, DeepXDE, which is designed to serve both as an education tool to be used in the classroom as well as a research tool for solving problems in computational science and engineering. Specifically, DeepXDE can solve forward problems given initial and boundary conditions, as well as inverse problems given some extra measurements. DeepXDE supports complex-geometry domains based on the technique of constructive solid geometry, and enables the user code to be compact, resembling closely the mathematical formulation. We introduce the usage of DeepXDE and its customizability, and we also demonstrate the capability of PINNs and the user-friendliness of DeepXDE for five diﬀerent examples. More broadly, DeepXDE contributes to the more rapid development of the emerging Scientific Machine Learning field.

\---

## Paper ID 476

**Record number:** 183  
**Paper ID:** 476  
**DOI:** 10.1016/j.jcp.2020.109951  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999120307257

### Exact abstract

In the last 50 years there has been a tremendous progress in solving numerically the Navier-Stokes equations using finite differences, finite elements, spectral, and even meshless methods. Yet, in many real cases, we still cannot incorporate seamlessly (multifidelity) data into existing algorithms, and for industrial-complexity applications the mesh generation is time consuming and still an art. Moreover, solving ill-posed problems (e.g., lacking boundary conditions) or inverse problems is often prohibitively expensive and requires different formulations and new computer codes. Here, we employ physicsinformed neural networks (PINNs), encoding the governing equations directly into the deep neural network via automatic differentiation, to overcome some of the aforementioned limitations for simulating incompressible laminar and turbulent flows. We develop the Navier-Stokes flow nets (NSFnets) by considering two different mathematical formulations of the Navier-Stokes equations: the velocity-pressure (VP) formulation and the vorticityvelocity (VV) formulation. Since this is a new approach, we first select some standard benchmark problems to assess the accuracy, convergence rate, computational cost and flexibility of NSFnets; analytical solutions and direct numerical simulation (DNS) databases provide proper initial and boundary conditions for the NSFnet simulations. The spatial and temporal coordinates are the inputs of the NSFnets, while the instantaneous velocity and pressure fields are the outputs for the VP-NSFnet, and the instantaneous velocity and vorticity fields are the outputs for the VV-NSFnet. This is unsupervised learning and, hence, no labeled data are required beyond boundary and initial conditions and the fluid properties. The residuals of the VP or VV governing equations, together with the initial and boundary conditions, are embedded into the loss function of the NSFnets. No data is provided for the pressure to the VP-NSFnet, which is a hidden state and is obtained via the incompressibility constraint without extra computational cost. Unlike the traditional numerical methods, NSFnets inherit the properties of neural networks (NNs), hence the total error is composed of the approximation, the optimization, and the generalization errors. Here, we empirically attempt to quantify these errors by varying the sampling (“residual”) points, the iterative solvers, and the size of the NN architecture. For the laminar flow solutions, we show that both the VP and the VV formulations are comparable in accuracy but their best performance corresponds to different NN architectures. The initial convergence rate is fast but the error eventually saturates to a plateau due to the dominance of the optimization error. For the turbulent channel flow, we show that NSFnets can sustain turbulence at Reτ ∼1, 000, but due to expensive training we only consider part of the channel domain and enforce velocity boundary conditions on the subdomain boundaries provided by the DNS data base. We also perform a systematic study on the weights used in the loss function for balancing the data and physics components, and investigate a new way of computing the weights dynamically to accelerate training and enhance accuracy. In the last part, we demonstrate how NSFnets should be used in practice, namely for ill-posed problems with incomplete or noisy boundary conditions as well as for inverse problems. We obtain reasonably accurate solutions for such cases as well without the need to change the NSFnets and at the same computational cost as in the forward well-posed problems. We also present a simple example of transfer learning that will aid in accelerating the training of NSFnets for different parameter settings.

\---

## Paper ID 478

**Record number:** 184  
**Paper ID:** 478  
**DOI:** 10.1016/j.mlwa.2021.100029  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2666827021000104

### Exact abstract

In this work, physics-informed neural networks are applied to incompressible two-phase flow problems. We investigate the forward problem, where the governing equations are solved from initial and boundary conditions, as well as the inverse problem, where continuous velocity and pressure fields are inferred from scattered-time data on the interface position. We employ a volume of fluid approach, i.e. the auxiliary variable here is the volume fraction of the fluids within each phase. For the forward problem, we solve the two-phase Couette and Poiseuille flow. For the inverse problem, three classical test cases for two-phase modeling are investigated: (i) drop in a shear flow, (ii) oscillating drop and (iii) rising bubble. Data of the interface position over time is generated by numerical simulation. An effective way to distribute spatial training points to fit the interface, i.e. the volume fraction field, and the residual points is proposed. Furthermore, we show that appropriate weighting of losses associated with the residual of the partial differential equations is crucial for successful training. The benefit of using adaptive activation functions is evaluated for both the forward and inverse problem.

\---

## Paper ID 479

**Record number:** 185  
**Paper ID:** 479  
**DOI:** 10.1016/j.cma.2022.115671  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782522006260

### Exact abstract

Physics-informed neural networks (PINNs) have shown to be effective tools for solving both forward and inverse problems of partial differential equations (PDEs). PINNs embed the PDEs into the loss of the neural network using automatic differentiation, and this PDE loss is evaluated at a set of scattered spatio-temporal points (called residual points). The location and distribution of these residual points are highly important to the performance of PINNs. However, in the existing studies on PINNs, only a few simple residual point sampling methods have mainly been used. Here, we present a comprehensive study of two categories of sampling for PINNs: non-adaptive uniform sampling and adaptive nonuniform sampling. We consider six uniform sampling methods, including (1) equispaced uniform grid, (2) uniformly random sampling, (3) Latin hypercube sampling, (4) Halton sequence, (5) Hammersley sequence, and (6) Sobol sequence. We also consider a resampling strategy for uniform sampling. To improve the sampling efficiency and the accuracy of PINNs, we propose two new residual-based adaptive sampling methods: residual-based adaptive distribution (RAD) and residual-based adaptive refinement with distribution (RAR-D), which dynamically improve the distribution of residual points based on the PDE residuals during training. Hence, we have considered a total of 10 different sampling methods, including six non-adaptive uniform sampling, uniform sampling with resampling, two proposed adaptive sampling, and an existing adaptive sampling. We extensively tested the performance of these sampling methods for four forward problems and two inverse problems in many setups. Our numerical results presented in this study are summarized from more than 6000 simulations of PINNs. We show that the proposed adaptive sampling methods of RAD and RAR-D significantly improve the accuracy of PINNs with fewer residual points for both forward and inverse problems. The results obtained in this study can also be used as a practical guideline in choosing sampling methods.

\---

## Paper ID 481

**Record number:** 186  
**Paper ID:** 481  
**DOI:** 10.1016/j.cma.2022.115852  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782522008088

### Exact abstract

Recently, a class of machine learning methods called physics-informed neural networks (PINNs) has been proposed and gained prevalence in solving various scientific computing problems. This approach enables the solution of partial differential equations (PDEs) via embedding physical laws into the loss function. Many inverse problems can be tackled by simply combining the data from real life scenarios with existing PINN algorithms. In this paper, we present a multi-task learning method using uncertainty weighting to improve the training efficiency and accuracy of PINNs for inverse problems in linear elasticity and hyperelasticity. Furthermore, we demonstrate an application of PINNs to a practical inverse problem in structural analysis: prediction of external loads of diverse engineering structures based on limited displacement monitoring points. To this end, we first determine a simplified loading scenario at the offline stage. By setting unknown boundary conditions as learnable parameters, PINNs can predict the external loads with the support of measured data. When it comes to the online stage in real engineering projects, transfer learning is employed to fine-tune the pre-trained model from offline stage. Our results show that, even with noisy gappy data, satisfactory results can still be obtained from the PINN model due to the dual regularization of physics laws and prior knowledge, which exhibits better robustness compared to traditional analysis methods. Our approach is capable of bridging the gap between various structures with geometric scaling and under different loading scenarios, and the convergence of training is also greatly accelerated through not only the layer freezing but also the multi-task weight inheritance from pre-trained models, thus making it possible to be applied as surrogate models in actual engineering projects.

\---

## Paper ID 482

**Record number:** 187  
**Paper ID:** 482  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

In order to offer guidelines for physics-informed neural network (PINN) implementation, this study presents a comprehensive review of PINN, an emerging field at the intersection of deep learning and computational physics. PINN offers a novel approach to solve physics problems by leveraging the flexibility and scalability of neural networks, even with small or no data. First, a general description of different physics problem types and target tasks addressable with PINN was provided. A generic PINN architecture was described in detail using a component-wise approach, with components ranging from collocation points to optimization methods. Then, we surveyed studies that sought to improve upon each of these components. To offer practical insights, we highlighted studies that focused on key issues of PINN implementation and showcased three practical applications. Lastly, a summary and potential research directions were provided to offer guidelines for reliable and customized PINN implementations.

\---

## Paper ID 483

**Record number:** 188  
**Paper ID:** 483  
**DOI:** 10.1016/j.cma.2022.115041  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782522002602

### Exact abstract

Physics-informed neural networks (PINNs) have recently been used to solve various computational problems which are governed by partial differential equations (PDEs). In this paper, we propose a multi-output physics-informed neural network (MO-PINN) which can provide solutions with uncertainty distributions for both forward and inverse PDE problems with noisy data. In this framework, the uncertainty arising from the noisy data is first translated into multiple measurements regarding the prior noise distribution using the bootstrap method, and then the outputs of neural networks are designed to satisfy the measurements as well as the underlying physical laws. The posterior estimation of target parameters can be obtained at the end of training, which can be further used for uncertainty quantification and decision making. In this paper, MO-PINNs are demonstrated with a series of numerical experiments including both linear and nonlinear, forward and inverse problems. The results show that MO-PINN is able to provide accurate predictions with noisy data. In addition, we also demonstrate that the prediction and posterior distributions from MO-PINNs are consistent with the solutions from traditional a finite element method (FEM) solver and Monte Carlo methods given the same data and prior knowledge. Finally, we show that additional statistical knowledge can be incorporated into the training to improve the prediction if available.

\---

## Paper ID 485

**Record number:** 189  
**Paper ID:** 485  
**DOI:** 10.1017/jfm.2025.91  
**Publisher URL:** https://www.cambridge.org/core/product/identifier/S0022112025000916/type/journal\_article

### Exact abstract

The greatest challenge in pressure reconstruction from the measured velocity fields is that the error of material acceleration is significantly contaminated due to error propagation. Particularly for flows with moving boundaries, accurate boundary velocities are difficult to obtain due to error propagation, and a complex boundary processing technique is needed to treat the moving boundaries. The present work proposes a machine-learning-based method to determine the pressure for incompressible flows with moving boundaries. The proposed network consists of two neural networks: one network, named the boundary network, is used to track the Lagrangian boundary points; the other physics-informed neural network, named the flow network, is adopted to approximate the flow fields. These two networks are coupled by imposing boundary conditions. We further propose a new dynamic weight strategy for the loss terms to guarantee convergence and stability. The performance of the proposed method is validated by two examples: the flow over an oscillating cylinder and the flow around a swimming fish. The proposed method can accurately determine the pressure fields and boundary motion from synthetic particle image velocimetry (PIV) flow fields. Moreover, this method can also predict the boundary and pressure at a given instant without supervised data. Finally, this method was applied to reconstruct the pressure from the two-dimensional and three-dimensional PIV velocities of the left ventricle. All of the results indicate that the proposed method can accurately reconstruct the pressure fields for flows with moving boundaries and is a novel method for surface pressure estimation.

\---

## Paper ID 487

**Record number:** 190  
**Paper ID:** 487  
**DOI:** 10.1016/j.ijheatmasstransfer.2025.126680  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0017931025000213

### Exact abstract

In this paper, a physics-informed neural network (PINN) technique is developed to study a two-phase film boiling heat transfer process. Data generated through computational fluid dynamics (CFD) was used to train the PINN model. The formulated PINN approach was first validated against the classical Stefan phase-change study. Results show that the PINN predictions of interface location showed errors of up to 7.1 % compared to the respective CFD solution. Subsequently, the PINN method was trained on a film boiling study with a Jakob number (Ja = 0.2). This PINN predictions in Nusselt number show a discrepancy of 6 % compared to the CFD solution. Finally, the inference capabilities of the PINN approach were evaluated by applying transfer learning to predict the film boiling process with Ja = 0.4 where no observational CFD data was provided (inverse problem). For this inverse case, the PINN predictions produced qualitative results which are in good agreement with unobserved reference data. Although small regions exhibited Nusselt number prediction errors of around 30 %, it was found that these errors were predominantly caused by excessive interfacial diffusion. This study represents a groundbreaking development for PINN methodologies by applying the deep learning capabilities within to investigate the evolution of a film boiling process.

\---

## Paper ID 488

**Record number:** 191  
**Paper ID:** 488  
**DOI:** 10.1016/j.renene.2023.119565  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0960148123014805

### Exact abstract

Polyurethane (PU) possesses excellent thermal properties, making it an ideal material for thermal insulation. Incorporating Phase Change Materials (PCMs) capsules into Polyurethane has proven to be an effective strategy for enhancing building envelopes. This innovative design substantially enhances indoor thermal stability and minimizes fluctuations in indoor air temperature. To investigate the thermal conductivity of the Polyurethane-Phase Change Materials foam composite, we propose a hierarchical multi-scale model utilizing Physics-Informed Neural Networks (PINNs). This model allows accurate prediction and analysis of the material’s thermal conductivity at both the meso-scale and macro-scale. By leveraging the integration of physics-based knowledge and data-driven learning offered by Physics-Informed Neural Networks, we effectively tackle inverse problems and address complex multi-scale phenomena. Furthermore, the obtained thermal conductivity data facilitates the optimization of material design. To fully consider the occupants’ thermal comfort within a building envelope, we conduct a case study evaluating the performance of this optimized material in a detached house. Simultaneously, we predict the energy consumption associated with this scenario. All outcomes demonstrate the promising nature of this design, enabling passive building energy design and significantly improving occupants’ comfort. The successful development of this Physics-Informed Neural Networks-based multi-scale model holds immense potential for advancing our understanding of PolyurethanePhase Change Material’s thermal properties. It can contribute to the design and optimization of materials for various practical applications, including thermal energy storage systems and insulation design in advanced building envelopes.

\---

## Paper ID 489

**Record number:** 192  
**Paper ID:** 489  
**DOI:** 10.1007/s11071-021-07146-z  
**Publisher URL:** https://link.springer.com/10.1007/s11071-021-07146-z

### Exact abstract

With the development of computers and neural networks, the traditional methods of solving differential equations have been greatly developed. Typical examples are the differential equations of population, finance, infectious disease and traffic problems solvedbyneuralnetworkmethod.Recently,thepopular physics-informed neural network (PINN) method has beenprovedtobeabletosolvethenumericalsolutionof PDEs. Based on the PINN method, this paper proposes an improved PINN method (IPINN) that is to introduce local adaptive activation function of neurons into PINN network to improve the performance of neural network and successfully applies the IPINN method to the Ivancevic option pricing model and Black–Scholes model in finance. The rogue wave solution and soliton solution of the Ivancevic option pricing model, and the numerical solution of the Black–Scholes model are solved, respectively. At the same time, it can be shown that the IPINN method has the characteristics of faster convergence, more stability and higher accuracy than the PINN method by the results of numerical experiments.

\---

## Paper ID 491

**Record number:** 193  
**Paper ID:** 491  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Particle Image Velocimetry (PIV) measurement accuracy is lower along the phase boundaries of two-phaseflows, because the interrogation windows contain information from both phases. Different seeding density, background intensity, velocity magnitude and flow direction conditions often exist across the boundary, and the cross-correlation-based PIV algorithm selects only the highest correlation peak. The highest correlation peak is either influenced by the wrong phase (across the boundary), or the correctly calculated displacement is erroneously detected as an outlier at a later stage and is subsequently replaced. Phase-separated PIV measurements minimize this problem, and increase accuracy along the boundary by treating each phase separately. This type of measurement requires for each time step; (i) the accurate detection of the phase boundary in consecutive frames, (ii) generation of dynamic phase masks, (iii) an accurate PIV evaluation of each phase and (iv) recombination of the flow fields. In this article, we focus on the first step and test a hybrid phase boundary detection (PBD) technique in three different two-phase-flow configurations which manifest different challenges: The first configuration is the mixing of two liquids in a magnetic micromixer, the second is a combustion experiment where a turbulent, pre-mixed, low-swirl, lifted flame is investigated, and the third is a bubble column reactor where air bubbles are rising in a water tank. The PBD implementation uses a three-step procedure: approximate global thresholding, local Otsu thresholding, and discrimination of image gradients. Comparison of results with and without the use of PBD and phase separation indicate that there are significant measurement accuracy improvements along the boundary.

\---

## Paper ID 493

**Record number:** 194  
**Paper ID:** 493  
**DOI:** 10.1016/j.cma.2020.113547  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782520307325

### Exact abstract

We formulate a general framework for hp-variational physics-informed neural networks (hp-VPINNs) based on the nonlinear approximation of shallow and deep neural networks and hp-refinement via domain decomposition and projection onto the space of high-order polynomials. The trial space is the space of neural network, which is defined globally over the entire computational domain, while the test space contains piecewise polynomials. Specifically in this study, the hp-refinement corresponds to a global approximation with a local learning algorithm that can efficiently localize the network parameter optimization. We demonstrate the advantages of hp-VPINNs in both accuracy and training cost for several numerical examples of function approximation and in solving differential equations.

\---

## Paper ID 494

**Record number:** 195  
**Paper ID:** 494  
**DOI:** 10.1016/j.jcp.2019.108963  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999119306680

### Exact abstract

In this paper, we propose a mesh-free method to solve interface problems using the deep learning approach. Two types of PDEs are considered. The first one is an elliptic PDE with a discontinuous and high-contrast coefficient. While the second one is a linear elasticity equation with discontinuous stress tensor. In both cases, we represent the solutions of the PDEs using the deep neural networks (DNNs) and formulate the PDEs into variational problems, which can be solved via the deep learning approach. To deal with inhomogeneous boundary conditions, we use a shallow neural network to approximate the boundary conditions. Instead of using an adaptive mesh refinement method or specially designed basis functions or numerical schemes to compute the PDE solutions, the proposed method has the advantages that it is easy to implement and is mesh-free. Finally, we present numerical results to demonstrate the accuracy and efficiency of the proposed method for interface problems.

\---

## Paper ID 495

**Record number:** 196  
**Paper ID:** 495  
**DOI:** 10.1063/5.0226562  
**Publisher URL:** https://pubs.aip.org/pof/article/36/10/101301/3315125/A-comprehensive-review-of-advances-in-physics

### Exact abstract

Physics-informed neural networks (PINNs) represent an emerging computational paradigm that incorporates observed data patterns and the fundamental physical laws of a given problem domain. This approach provides significant advantages in addressing diverse difficulties in the field of complex fluid dynamics. We thoroughly investigated the design of the model architecture, the optimization of the convergence rate, and the development of computational modules for PINNs. However, efficiently and accurately utilizing PINNs to resolve complex fluid dynamics problems remain an enormous barrier. For instance, rapidly deriving surrogate models for turbulence from known data and accurately characterizing flow details in multiphase flow fields present substantial difficulties. Additionally, the prediction of parameters in multi-physics coupled models, achieving balance across all scales in multiscale modeling, and developing standardized test sets encompassing complex fluid dynamic problems are urgent technical breakthroughs needed. This paper discusses the latest advancements in PINNs and their potential applications in complex fluid dynamics, including turbulence, multiphase flows, multi-field coupled flows, and multiscale flows. Furthermore, we analyze the challenges that PINNs face in addressing these fluid dynamics problems and outline future trends in their growth. Our objective is to enhance the integration of deep learning and complex fluid dynamics, facilitating the resolution of more realistic and complex flow problems.

\---

## Paper ID 496

**Record number:** 197  
**Paper ID:** 496  
**DOI:** 10.1177/14750902231166424  
**Publisher URL:** https://journals.sagepub.com/doi/10.1177/14750902231166424

### Exact abstract

Physics Informed Neural Networks (PINN), a deep learning tool, has recently become an effective method for solving inverse Partial Differential Equations (PDEs) where the boundary/initial conditions are not well defined and only noisy sparse measurements sampled in the domain exist. PINN, and other Neural Networks, tends to converge to the low frequency solution in a field that has multiple frequency scales, this is known as spectral bias. For PINN this happens when solving PDEs that exhibit periodic behavior spatially and temporally with multi frequency scales. Previous studies suggested that Fourier Features-Neural Networks (FF-NN) can be used to overcome the spectral bias problem. They proposed the Multi Scale-Spatio Temporal-Fourier Features-Physics Informed Neural Networks (MS-ST-FF-PINN) to overcome the spectral bias problem in PDEs solved by PINN. This has been evaluated on basic PDEs such as Poisson, wave and Gray-Scott equations. In this paper we take MS-ST-FF-PINN a step further by applying it to the incompressible Navier-Stokes equations. Furthermore, a comparative analysis between the PINN and the MS-ST-FF-PINN architectures solution accuracy, the learnt frequency components and the rate of convergence to the correct solution is included. To show this three test cases are shown (a)-Forward time independent double-lid-driven cavity, (b)-Inverse time independent free surface estimation of Kelvin wave pattern, and (c)-Inverse 2D time-dependent turbulent Von Karman vortex shedding interaction downstream of multiple cylinders. The results show that MS-ST-FF-PINN is better at learning low and high frequency components synchronously at early training iterations compared to the PINN architecture that does not learn the high frequency components even after multiple iteration numbers such as the Kelvin wave pattern and the Karman vortex shedding cases. However, for the third test case, the MS-ST-FF-PINN architecture showed a discontinuity for the temporal prediction of the pressure field due to over-fitting.

\---

## Paper ID 497

**Record number:** 198  
**Paper ID:** 497  
**DOI:** 10.1007/s42241-020-0077-2  
**Publisher URL:** https://doi.org/10.1007/s42241-020-0077-2

### Exact abstract

Data assimilation (DA) refers to methodologies which combine data and underlying governing equations to provide an estimation of a complex system. Physics informed neural network (PINN) provides an innovative machine learning technique for solving and discovering the physics in nature. By encoding general nonlinear partial differential equations, which govern different physical systems such as fluid flows, to the deep neural network, PINN can be used as a tool for DA. Due to its nature that neither numerical differential operation nor temporal and spatial discretization is needed, PINN is straightforward for implementation and getting more and more attention in the academia. In this paper, we apply the PINN to several flow problems and explore its potential in fluid physics. Both the mesoscopic Boltzmann equation and the macroscopic Navier-Stokes are considered as physics constraints. We first introduce a discrete Boltzmann equation informed neural network and evaluate it with a one-dimensional propagating wave and two-dimensional lid-driven cavity flow. Such laminar cavity flow is also considered as an example in an incompressible Navier-Stokes equation informed neural network. With parameterized Navier-Stokes, two turbulent flows, one within a C-shape duct and one passing a bump, are studied and accompanying pressure field is obtained. Those examples end with a flow passing through a porous media. Applications in this paper show that PINN provides a new way for intelligent flow inference and identification, ranging from mesoscopic scale to macroscopic scale, and from laminar flow to turbulent flow.

\---

## Paper ID 498

**Record number:** 199  
**Paper ID:** 498  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Mosaic Flow is a novel domain decomposition method designed to scale physics-informed neural PDE solvers to large domains. Its unique approach leverages pre-trained networks on small domains to solve partial differential equations on large domains purely through inference, resulting in high reusability. This paper presents an end-to-end parallelization of Mosaic Flow, combining data parallel training and domain parallelism for inference on large-scale problems. By optimizing the network architecture and data parallel training, we significantly reduce the training time for learning the Laplacian operator to minutes on 32 GPUs. Moreover, our distributed domain decomposition algorithm enables scalable inferences for solving the Laplace equation on domains 4096× larger than the training domain, demonstrating strong scaling while maintaining accuracy on 32 GPUs. The reusability of Mosaic Flow, combined with the improved performance achieved through the distributedmemory algorithms, makes it a promising tool for modeling complex physical phenomena and accelerating scientific discovery.

\---

## Paper ID 500

**Record number:** 200  
**Paper ID:** 500  
**DOI:** 10.1016/j.cma.2023.116139  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782523002633

### Exact abstract

The physics-informed neural network (PINN) has received much attention in the field of partial differential equation (PDE) solving due to its adaptability to different governing equations. Boundary dependent PINN (BDPINN) has much higher precision than PINN, but requires to manually design complex form of a trial function to fit boundary conditions (BCs). In this paper, an automatic boundary fitting framework is introduced into BDPINN for the automatic construction of a trial function satisfying BCs to solve PDE problems with complex geometry, and radial basis function (RBF) and neural network function (NNF) are used to construct boundary fitting functions, respectively. The proposed automatic boundary fitting framework can successfully construct a trial function of BDPINN for common BCs and their combinations, including initial conditions, Dirichlet BCs, symmetric BCs and periodic BCs. With this framework, BDPINN is applied in to 4 cases. The corresponding governing equations include diffusion, advection, and advection–diffusion equations, with dimensions ranging from 2D to 4D, and the corresponding geometric boundaries include random, irregular, and distorted boundaries. The calculation results show that the BDPINN with this framework succeeds in various governing equations, in various dimensions, and in various BCs with high accuracy, and that BDPINN with RBF is more accurate than that with NNF.

\---

## Paper ID 501

**Record number:** 201  
**Paper ID:** 501  
**DOI:** 10.1002/fld.5250  
**Publisher URL:** https://onlinelibrary.wiley.com/doi/10.1002/fld.5250

### Exact abstract

Fluid mechanics is a critical field in both engineering and science. Understanding the behavior of fluids requires solving the Navier–Stokes equation (NSE). However, the NSE is a complex partial differential equation that can be challenging to solve, and classical numerical methods can be computationally expensive. In this paper, we propose enhancing physics-informed neural networks (PINNs) by modifying the residual loss functions and incorpo- rating new computational deep learning techniques. We present two enhanced models for solving the NSE. The first model involves developing the classical PINN for solving the NSE, based on a stream function approach to the velocity components. We have added the pressure training loss function to this model and integrated the new computational training techniques. Furthermore, we propose a second, more flexible model that directly approximates the solution of the NSE without making any assumptions. This model significantly reduces the training duration while maintaining high accuracy. Moreover, we have successfully applied this model to solve the three-dimensional NSE. The results demonstrate the effectiveness of our approaches, offering several advantages, including high trainability, flexibility, and efficiency.

\---

## Paper ID 502

**Record number:** 202  
**Paper ID:** 502  
**DOI:** 10.1016/j.neucom.2022.05.015  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S092523122200546X

### Exact abstract

Physics-informed neural networks (PINNs) have received significant attention as a representative deep learning-based technique for solving partial differential equations (PDEs). The loss function of PINNs is a weighted sum of multiple terms, including the mismatch of observed data, boundary and initial constraints, as well as PDE residuals. In this paper, we observe that the performance of PINNs is susceptible to the weighted combination of competitive multiple loss functions. Therefore, we establish Gaussian probabilistic models to define the self-adaptive loss function through the adaptive weights for each loss term. In particular, we propose a self-adaptive loss balanced method that automatically assigns the weights of losses by updating adaptive weights in each epoch based on the maximum likelihood estimation. Finally, we perform a series of numerical experiments with self-adaptive loss balanced physicsinformed neural networks (lbPINNs), including solving Poisson, Burgers, Helmholtz, Navier–Stokes, and Allen–Cahn equations in regular and irregular areas. We also test the robustness of lbPINNs by varying the initial adaptive weights, numbers of observations, hidden layers, and neurons per layer. These experimental results demonstrate that lbPINNs consistently achieve better performance than PINNs, and reduce the relative L2 error by about two orders of magnitude.

\---

## Paper ID 503

**Record number:** 203  
**Paper ID:** 503  
**DOI:** 10.1080/17499518.2024.2315301  
**Publisher URL:** https://www.tandfonline.com/doi/full/10.1080/17499518.2024.2315301

### Exact abstract

Engineering-scale problems generally can be described by partial diﬀerential equations (PDEs) or ordinary diﬀerential equations (ODEs). Analytical, semi-analytical and numerical analysis are commonly used for deriving the solutions of such PDEs/ODEs. Recently, a novel physicsinformed neural network (PINN) solver has emerged as a promising alternative to solve PDEs/ ODEs. PINN resembles a mesh-free method which leverages the strong non-linear ability of the deep learning algorithms (e.g. neural networks) to automatically search for the correct spatialtemporal responses constrained by embedded PDEs/ODEs. This study comprehensively reviews the current state of PINN including its principles for the forward and inverse problems, baseline algorithms for PINN, enhanced PINN variants combined with special sampling strategies and loss functions. PINN shows an easier modelling process and superior feasibility for inverse problems compared to conventional numerical methods. Meanwhile, the limitations and challenges of applications of current PINN solvers to constitutive modelling and multi-scale/ phase problems are also discussed in terms of convergence ability and computational costs. PINN has exhibited its huge potential in geoengineering and brings a revolutionary way for numerous domain problems.

\---

## Paper ID 505

**Record number:** 204  
**Paper ID:** 505  
**DOI:** 10.3934/math.20241332  
**Publisher URL:** https://doi.org/10.3934/math.20241332

### Exact abstract

In this paper, we introduced the gradient-enhanced fractional physics-informed neural networks (gfPINNs) for solving the forward and inverse problems of the multiterm time-fractional Burger-type equation. The gfPINNs leverage gradient information derived from the residual of the fractional partial differential equation and embed the gradient into the loss function. Since the standard chain rule in integer calculus is invalid in fractional calculus, the automatic differentiation of neural networks does not apply to fractional operators. The automatic differentiation for the integer order operators and the finite difference discretization for the fractional operators were used to construct the residual in the loss function. The numerical results demonstrate the effectiveness of gfPINNs in solving the multiterm time-fractional Burger-type equation. By comparing the experimental results of fractional physics-informed neural networks (fPINNs) and gfPINNs, it can be seen that the training performance of gfPINNs is better than fPINNs.

\---

## Paper ID 507

**Record number:** 205  
**Paper ID:** 507  
**DOI:** 10.1016/j.jcp.2019.07.048  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999119305340

### Exact abstract

Physics-informed neural networks (PINNs) have recently emerged as an alternative way of numerically solving partial differential equations (PDEs) without the need of building elaborate grids, instead, using a straightforward implementation. In particular, in addition to the deep neural network (DNN) for the solution, an auxiliary DNN is considered that represents the residual of the PDE. The residual is then combined with the mismatch in the given data of the solution in order to formulate the loss function. This framework is effective but is lacking uncertainty quantification of the solution due to the inherent randomness in the data or due to the approximation limitations of the DNN architecture. Here, we propose a new method with the objective of endowing the DNN with uncertainty quantification for both sources of uncertainty, i.e., the parametric uncertainty and the approximation uncertainty. We first account for the parametric uncertainty when the parameter in the differential equation is represented as a stochastic process. Multiple DNNs are designed to learn the modal functions of the arbitrary polynomial chaos (aPC) expansion of its solution by using stochastic data from sparse sensors. We can then make predictions from new sensor measurements very efficiently with the trained DNNs. Moreover, we employ dropout to quantify the uncertainty of DNNs in approximating the modal functions. We then design an active learning strategy based on the dropout uncertainty to place new sensors in the domain in order to improve the predictions of DNNs. Several numerical tests are conducted for both the forward and the inverse problems to demonstrate the effectiveness of PINNs combined with uncertainty quantification. This NN-aPC new paradigm of physics-informed deep learning with uncertainty quantification can be readily applied to other types of stochastic PDEs in multi-dimensions.

\---

## Paper ID 508

**Record number:** 206  
**Paper ID:** 508  
**DOI:** 10.1016/j.jcp.2023.112183  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999123002784

### Exact abstract

We propose a physics-informed learning based on variational autoencoder (VAE) to solve data-driven stochastic differential equations when the governing equation is known and a limited number of measurements are available. Our model integrates VAE with the given physical laws expressed by stochastic partial differential equations, allowing the encoder to infer the randomness of the solution. The decoder employs a separate structure of two neural networks, where one network learns the spatial behavior and the other network learns the random behavior of the solution, making both training and inference computationally efficient. We use an evidence lower bound (ELBO) as the loss function, which incorporates the given physical laws by using automatic differentiation to compute the differential operators. The proposed model can be used to solve data-driven forward and inverse stochastic differential equations in a unified framework. We demonstrate the efficiency of the proposed model for learning stochastic processes and solving various types of stochastic partial differential equations.

\---

## Paper ID 511

**Record number:** 207  
**Paper ID:** 511  
**DOI:** 10.1021/acs.jcim.9b00994  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acs.jcim.9b00994

### Exact abstract

Atomic neural networks (ANNs) constitute a class of machine learning methods for predicting potential energy surfaces and physicochemical properties of molecules and materials. Despite many successes, developing interpretable ANN architectures and implementing existing ones efficiently are still challenging. This calls for reliable, general-purpose, and open-source codes. Here, we present a python library named PiNN as a solution toward this goal. In PiNN, we designed a new interpretable and high-performing graph convolutional neural network variant, PiNet, as well as implemented the established Behler−Parrinello neural network. These implementations were tested using datasets of isolated small molecules, crystalline materials, liquid water, and an aqueous alkaline electrolyte. PiNN comes with a visualizer called PiNNBoard to extract chemical insight “learned” by ANNs. It provides analytical stress tensor calculations and interfaces to both the atomic simulation environment and a development version of the Amsterdam Modeling Suite. Moreover, PiNN is highly modularized, which makes it useful not only as a standalone package but also as a chain of tools to develop and to implement novel ANNs. The code is distributed under a permissive BSD license and is freely accessible at https://github.com/Teoroo-CMC/PiNN/ with full documentation and tutorials.

\---

## Paper ID 516

**Record number:** 208  
**Paper ID:** 516  
**DOI:** 10.1016/j.wavemoti.2021.102823  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0165212521001219

### Exact abstract

The research of the derivative nonlinear Schrödinger equation (DNLS) has attracted more and more extensive attention in theoretical analysis and physical application. The improved physics-informed neural network (IPINN) approach with neuron-wise locally adaptive activation function is presented to derive the data-driven localized wave solutions, which contain rational solution, soliton solution, rogue wave, periodic wave and rogue periodic wave for the DNLS with initial and boundary conditions in complex space. Especially, the flow-process diagram that accounts for the IPINN of DNLS equation has been outline in detail, and the data-driven periodic wave and rogue periodic wave of the DNLS are investigated by employing the IPINN method for the first time. The numerical results indicate the IPINN method can well simulate the localized wave solutions of the DNLS. Furthermore, the relevant dynamical behaviors, error analysis and vivid plots have been exhibited in detail.

\---

## Paper ID 517

**Record number:** 209  
**Paper ID:** 517  
**DOI:** 10.1098/rspa.2020.0334  
**Publisher URL:** https://doi.org/10.1098/rspa.2020.0334

### Exact abstract

We propose two approaches of locally adaptive activation functions namely, layer-wise and neuronwise locally adaptive activation functions, which improve the performance of deep and physicsinformed neural networks. The local adaptation of activation function is achieved by introducing a scalable parameter in each layer (layer-wise) and for every neuron (neuron-wise) separately, and then optimizing it using a variant of stochastic gradient descent algorithm. In order to further increase the training speed, an activation slope-based slope recovery term is added in the loss function, which further accelerates convergence, thereby reducing the training cost. On the theoretical side, we prove that in the proposed method, the gradient descent algorithms are not attracted to sub-optimal critical points or local minima under practical conditions on the initialization and learning rate, and that the gradient dynamics of the proposed method is not achievable by base methods with any (adaptive) learning rates. We further show that the adaptive activation methods accelerate the convergence by implicitly multiplying conditioning matrices to the gradient of the base method without any explicit computation of the conditioning matrix and the matrix–vector product. The different adaptive activation functions are shown to induce different implicit conditioning matrices. Furthermore, the proposed methods with the slope recovery are shown to accelerate the training process.

\---

## Paper ID 518

**Record number:** 210  
**Paper ID:** 518  
**DOI:** 10.1137/0916069  
**Publisher URL:** https://doi.org/10.1137/0916069

### Exact abstract

. An algorithm for solving large nonlinear optimization problems with simple bounds is described. It is based on the gradient projection method and uses a limited memory BFGS matrix to approximate the Hessian of the objective function. It is shown how to take advantage of the form of the limited memory approximation to implement the algorithm efficiently. The results of numerical tests on a set of large problems are reported.

\---

## Paper ID 521

**Record number:** 211  
**Paper ID:** 521  
**DOI:** 10.1214/aoms/1177729586  
**Publisher URL:** https://doi.org/10.1214/aoms/1177729586

### Exact abstract

Let M(x) denote the expected value at level x of the response to a certain experiment. M(x) is assumed to be a monotone function of x but is unknown to the experimenter, and it is desired to find the solution x = θ of the equation M(x) = α, where α is a given constant. We give a method for making successive experiments at levels x₁, x₂, … in such a way that xₙ will tend to θ in probability.

\---

## Paper ID 523

**Record number:** 212  
**Paper ID:** 523  
**DOI:** 10.1016/j.neunet.2021.02.011  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0893608021000538

### Exact abstract

A norm version of the RMSProp algorithm with penalty (termed RMSPropW) is introduced into the deep learning framework and its convergence is addressed both analytically and numerically. For rigour, we consider the general nonconvex setting and prove the boundedness and convergence of the RMSPropW method in both deterministic and stochastic cases. This equips us with strict upper bounds on both the moving average squared norm of the gradient and the norm of weight parameters throughout the learning process, owing to the penalty term within the proposed cost function. In the deterministic (batch) case, the boundedness of the moving average squared norm of the gradient is employed to prove that the gradient sequence converges to zero when using a fixed step size, while with diminishing stepsizes, the minimum of the gradient sequence converges to zero. In the stochastic case, due to the boundedness of the weight evolution sequence, it is further shown that the weight sequence converges to a stationary point with probability 1. Finally, illustrative simulations are provided to support the theoretical analysis, including a comparison with the standard RMSProp on MNIST, CIFAR-10, and IMDB datasets.

\---

## Paper ID 525

**Record number:** 213  
**Paper ID:** 525  
**DOI:** 10.1137/20M1318043  
**Publisher URL:** https://epubs.siam.org/doi/10.1137/20M1318043

### Exact abstract

The widespread use of neural networks across different scientific domains often involves constraining them to satisfy certain symmetries, conservation laws, or other domain knowledge. Such constraints are often imposed as soft penalties during model training and effectively act as domain-specific regularizers of the empirical risk loss. Physics-informed neural networks is an example of this philosophy in which the outputs of deep neural networks are constrained to approximately satisfy a given set of partial differential equations. In this work we review recent advances in scientific machine learning with a specific focus on the effectiveness of physics-informed neural networks in predicting outcomes of physical systems and discovering hidden physics from noisy data. We will also identify and analyze a fundamental mode of failure of such approaches that is related to numerical stiffness leading to unbalanced back-propagated gradients during model training. To address this limitation we present a learning rate annealing algorithm that utilizes gradient statistics during model training to balance the interplay between different terms in composite loss functions. We also propose a novel neural network architecture that is more resilient to such gradient pathologies. Taken together, our developments provide new insights into the training of constrained neural networks and consistently improve the predictive accuracy of physics-informed neural networks by a factor of 50-100x across a range of problems in computational physics. All code and data accompanying this manuscript are publicly available at https://github.com/PredictiveIntelligenceLab/ GradientPathologiesPINNs.

\---

## Paper ID 526

**Record number:** 214  
**Paper ID:** 526  
**DOI:** 10.1007/s10409-022-22302-x  
**Publisher URL:** https://link.springer.com/10.1007/s10409-022-22302-x

### Exact abstract

High-resolution flow field reconstruction is prevalently recognized as a difficult task in the field of experimental fluid mechanics, since the measured data are usually sparse and incomplete in time and space. Specifically, due to the limitations of experimental equipment or measurement techniques, the expected data cannot be measured in some key areas. In this paper, a practical approach is proposed to reconstruct flow field with imperfect data based on the physics informed neural network (PINN), which integrates those known data with the physical principles. The wake flow past a circular cylinder is taken as the test case. Two kinds of the training set are investigated, one is the velocity data with different sparsity, and the other is the velocity data missing in different regions. To accelerate training convergence, the learning rate schedule is discussed, and the cosine annealing algorithm shows excellent performance. Results reveal that the proposed approach not only can reconstruct the true velocity field with high accuracy, but also can predict the pressure field precisely, even when the data sparsity reaches 1% or the core flow area data are truncated away. This study provides encouraging insights that the PINN can serve as a promising data assimilation method for experimental fluid mechanics.

\---

## Paper ID 527

**Record number:** 215  
**Paper ID:** 527  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) have emerged as a prominent approach for solving partial differential equations (PDEs) by minimizing a combined loss function that incorporates both boundary loss and PDE residual loss. Despite their remarkable empirical performance in various scientific computing tasks, PINNs often fail to generate reasonable solutions, and such pathological behaviors remain difficult to explain and resolve. In this paper, we identify that PINNs can be adversely trained when gradients of each loss function exhibit a significant imbalance in their magnitudes and present a negative inner product value. To address these issues, we propose a novel framework for multi-objective optimization, Dual Cone Gradient Descent (DCGD), which adjusts the direction of the updated gradient to ensure it falls within a dual cone region. This region is defined as a set of vectors where the inner products with both the gradients of the PDE residual loss and the boundary loss are non-negative. Theoretically, we analyze the convergence properties of DCGD algorithms in a non-convex setting. On a variety of benchmark equations, we demonstrate that DCGD outperforms other optimization algorithms in terms of various evaluation metrics. In particular, DCGD achieves superior predictive accuracy and enhances the stability of training for failure modes of PINNs and complex PDEs, compared to existing optimally tuned models. Moreover, DCGD can be further improved by combining it with popular strategies for PINNs, including learning rate annealing and the Neural Tangent Kernel (NTK). Codes are available at https://github.com/youngsikhwang/Dual-Cone-Gradient-Descent.

\---

## Paper ID 528

**Record number:** 216  
**Paper ID:** 528  
**DOI:** 10.1016/j.coastaleng.2022.104167  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0378383922000825

### Exact abstract

This paper focuses on utilizing physics-informed neural networks (PINNs) to model nearshore wave transformation. The nearshore wave nets (NWnets), which integrate the prior knowledge of wave mechanics (i.e., the wave energy balance equation and dispersion relation) and fully connected neural networks, are developed to reconstruct nearshore wave fields with scarce wave measurements. The performance of the NWnets is examined by comparing the PINN outputs with numerical solutions from XBeach and experimental data over a two- dimensional alongshore uniform barred beach and a three-dimensional circular shoal, respectively. It is found that the test errors are reasonably small with wave height measurements at only three locations applied as the training data for the alongshore uniform barred beach. Moreover, the NWnets are able to reconstruct the entire wave field and capture the focusing and defocusing of wave energy with sufficient accuracy over the circular shoal when a small amount of wave height measurements from the laboratory experiment are employed as the training data. The influence of network sizes, collocation points, training points, and the resolution of wave directional spreading on the performance of the NWnets is investigated. The adaptive learning rate annealing algorithm is utilized to calculate weighting coefficients for balancing the interplay between different loss terms in the total loss functions. Several illustrative examples of transfer learning are also provided, which can accelerate the training of NWnets for modeling waves under different boundary and bathymetric conditions. Our results show that the physics-guided deep learning method is a promising tool for studying nearshore processes.

\---

## Paper ID 530

**Record number:** 217  
**Paper ID:** 530  
**DOI:** 10.1007/s00521-021-06216-y  
**Publisher URL:** https://link.springer.com/10.1007/s00521-021-06216-y

### Exact abstract

Differential evolution (DE) is recognized as a simplistic yet robust evolutionary algorithm: it has been utilized to tackle different challenging optimization problems in various science and engineering disciplines. DE has some disadvantages, such as premature convergence and slow convergence rate, leading to the worst DE execution arrangement. Two DE variations named adaptive parameter selection-based DE (APSDE) and chaotic map hybridization based on DE and PSO (CMHDE-PSO) have been proposed to tackle the issues mentioned above. The proposed variants contain three unique advantages for APSDE: (1) new population initialization scheme to keep up the decent variety of the population diversity; (2) controlled mutation factor technique followed by adaptive decreasing parameter selection procedure; (3) novel mutation strategy with a specific weighted pattern to determine the mutant vector for the mutation operation. Similarly, for CMHDE-PSO (1) novel distribution called Torus for the selection of initial population located in the search space; (2) new parameter adoption technique based on chaotic circle maps defined by chaos theory; (3) average pattern means of two different mutation strategies; (4) and lastly the hybridization of proposed improved DE with PSO to supports DE escaping local minima. Both APSDE and CMHDE-PSO are compared with several standard non-DE old-fashioned optimization algorithms and various advanced DE variants. We accomplish definite experiments behind the powerful searching technique by applying the APSDE and CMHDE-PSO-based mutation and parameter selection strategy for the function optimization and weight optimization of feed-forward neural networks (FFNN) on real-world data classification problems. For data classification performance evaluation, 10 data sets are utilized from the repository of UCI machine learning. Experimental results showed that APSDE and CMHDE-PSO extensively beat different EAs in all test functions and obtained higher accuracy with the recent state-of-the-art algorithms for weight optimization.

\---

## Paper ID 531

**Record number:** 218  
**Paper ID:** 531  
**DOI:** 10.1142/S0219876222500499  
**Publisher URL:** https://www.worldscientific.com/doi/10.1142/S0219876222500499

### Exact abstract

Recently, Physics-informed neural networks (PINNs) have been widely applied to solving various types of partial diﬀerential equations (PDEs) such as Poisson equation, Klein– Gordon equation, and diﬀusion equation. However, it is difficult to obtain higher accurate solutions, especially at the boundary due to the gradient imbalance of diﬀerent loss terms for the PINN model. In this work, an adaptive learning rate residual network algorithm based on physics-informed (adaptive-PIRN) is proposed to overcome this limitation of the PINN model. In the adaptive-PIRN model, an adaptive learning rate technique is introduced to adaptively configure appropriate weights to the residual loss of the governing equation and the loss of initial/boundary conditions (I/BCs) by utilizing gradient statistics, which can alleviate gradient imbalance of diﬀerent loss terms in PINN. Besides, based on the idea of ResNet, the “short connection” technique is used in adaptive-PIRN model, which can ensure that the original information is identically mapped. This structure has stronger expressive capabilities than fully connected neural networks and can avoid gradient disappearance. Finally, three diﬀerent types of PDE are conducted to demonstrate predictive accuracy of our model. In addition, it is clearly observed from the results that the adaptive-PIRN can balance the gradient of loss items to a great extent, which improves the eﬀectiveness of this network.

\---

## Paper ID 533

**Record number:** 219  
**Paper ID:** 533  
**DOI:** 10.1016/j.jcp.2025.113837  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999125001202

### Exact abstract

Physics-Informed Neural Networks (PINNs) serve as a flexible alternative for tackling forward and inverse problems in diﬀerential equations, displaying impressive advancements in diverse areas of applied mathematics. Despite integrating both data and underlying physics to enrich the neural network’s understanding, concerns regarding the eﬀectiveness and practicality of PINNs persist. Over the past few years, extensive eﬀorts in the current literature have been made to enhance this evolving method, by drawing inspiration from both machine learning algorithms and numerical methods. Despite notable progressions in PINNs algorithms, the important and fundamental field of data preprocessing remain unexplored, limiting the applications of PINNs especially in solving inverse problems. Therefore in this paper, a concise yet potent data preprocessing method focusing on data normalization was proposed. By applying a linear transformation to both the data and corresponding equations concurrently, the normalized PINNs approach was evaluated on the task of reconstructing flow fields in four turbulent cases. The results illustrate that by adhering to the data preprocessing procedure, PINNs can robustly achieve higher prediction accuracy for all flow quantities under diﬀerent hyperparameter setups, without incurring extra computational cost, distinctly improving the utilization of limited training data. Though mainly verfied in NavierStokes (NS) equations, this method holds potential for application to various other equations.

\---

## Paper ID 534

**Record number:** 220  
**Paper ID:** 534  
**DOI:** 10.1111/mice.12685  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S1093968726021468

### Exact abstract

Physics-informed neural networks (PINNs) are a class of deep neural networks that are trained, using automatic differentiation, to compute the response of sys- tems governed by partial differential equations (PDEs). The training of PINNs is simulation free, and does not require any training data set to be obtained from numerical PDE solvers. Instead, it only requires the physical problem description, including the governing laws of physics, domain geometry, initial/boundary conditions, and the material properties. This training usually involves solving a nonconvex optimization problem using variants of the stochastic gradient descent method, with the gradient of the loss function approximated on a batch of collocation points, selected randomly in each iteration according to a uniform distribution. Despite the success of PINNs in accurately solving a wide variety of PDEs, the method still requires improvements in terms of computational efficiency. To this end, in this paper, we study the performance of an importance sampling approach for efficient training of PINNs. Using numerical examples together with theoretical evidences, we show that in each training iteration, sampling the collocation points according to a distribution proportional to the loss function will improve the convergence behavior of the PINNs training. Additionally, we show that providing a piecewise constant approximation to the loss func- tion for faster importance sampling can further improve the training efficiency. This importance sampling approach is straightforward and easy to implement in the existing PINN codes, and also does not introduce any new hyperparameter to calibrate. The numerical examples include elasticity, diffusion, and plane stress problems, through which we numerically verify the accuracy and efficiency of the importance sampling approach compared to the predominant uniform sampling approach.

\---

## Paper ID 535

**Record number:** 221  
**Paper ID:** 535  
**DOI:** 10.1016/j.fluid.2023.113984  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0378381223002649

### Exact abstract

Flash calculations pose a significant performance bottleneck in compositional-flow simulations. While sparse grids have helped mitigate this bottleneck by shifting it to the offline stage, the accuracy of the surrogate model based on physics-informed neural networks (PINN) is still inferior to that of the sparse grid surrogate in many cases. To address this issue, we propose the sparse-grid guided PINN training algorithm. This approach involves rearranging the collocation points using sparse grids at each epoch to capture changes in the residual space. By doing so, the PINN surrogate achieves the required accuracy using the fewest collocation points possible, thereby avoiding potential performance bottlenecks. Moreover, the training time complexity of the sparse-grid guided PINN training is significantly lower compared to the normal training while maintaining the same level of accuracy. Consequently, the sparse-grid guided PINN training method enhances the accuracy of the PINN surrogate with minimal computational overhead. During the experiments, a flash calculation of methane-propane mixture is conducted using a PINN surrogate, guided by the principles of sparse grids. The collective experimental observations underscore the clear advantages of employing sparse-grid guided PINN training, showcasing superior outcomes in terms of convergence, stability, and accuracy.

\---

## Paper ID 536

**Record number:** 222  
**Paper ID:** 536  
**DOI:** 10.1088/1361-6501/ac5437  
**Publisher URL:** https://iopscience.iop.org/article/10.1088/1361-6501/ac5437

### Exact abstract

We report a new approach to flow field tomography that uses the Navier–Stokes and advection–diffusion equations to regularize reconstructions. Tomography is increasingly employed to infer 2D or 3D fluid flow and combustion structures from a series of lineof-sight (LoS) integrated measurements using a wide array of imaging modalities. The high-dimensional flow field is reconstructed from low-dimensional measurements by inverting a projection model that comprises path integrals along each LoS through the region of interest. Regularization techniques are needed to obtain realistic estimates, but current methods rely on truncating an iterative solution or adding a penalty term that is incompatible with the flow physics to varying degrees. Physics-informed neural networks (PINNs) are new tools for inverse analysis that enable regularization of the flow field estimates using the governing physics. We demonstrate how a PINN can be leveraged to reconstruct a 2D flow field from sparse LoS-integrated measurements with no knowledge of the boundary conditions by incorporating the measurement model into the loss function used to train the network. The resulting reconstructions are remarkably superior to reconstructions produced by state-of-the-art algorithms, even when a PINN is used for post-processing. However, as with conventional iterative algorithms, our approach is susceptible to semi-convergence when there is a high level of noise. We address this issue through the use of a Bayesian PINN, which facilitates comprehensive uncertainty quantification of the reconstructions, enables the use of a more intuitive loss function, and reveals the source of semi-convergence.

\---

## Paper ID 538

**Record number:** 223  
**Paper ID:** 538  
**DOI:** 10.1007/s11071-023-08361-6  
**Publisher URL:** https://link.springer.com/10.1007/s11071-023-08361-6

### Exact abstract

Inthiswork,weextendthegeneralizedconditional symmetry enhanced physics-informed neural network (gsPINN) to study the partial differential equations (PDEs) with Robin initial/boundary conditions. The gsPINN incorporates the inherent physical laws, i.e., generalized conditional symmetry of PDEs, into the loss function of PINN and thus learns higher accuracy numerical solutions than PINN with fewer training points and simpler architecture of network. More specifically, we compare the performances of PINN and gsPINN to solve the KdV-like PDEs and show that gsPINN outperforms PINN in terms of the accuracy of learned solutions. Moreover, for the problem of PDEs together with what form of initial/boundary conditions are admitted by the known generalized conditional symmetry, we use the gsPINN method to learn the undetermined functions in Robin initial/boundary conditions and demonstrate the superiorities and robustness of gsPINN over PINN. Our results provide an alternative way for utilizing the deep neural network to study the problems of generalized conditional symmetry of PDEs.

\---

## Paper ID 539

**Record number:** 224  
**Paper ID:** 539  
**DOI:** 10.1016/j.compgeo.2023.105472  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0266352X2300229X

### Exact abstract

In this work, we present a deep neural network architecture that can efficiently surrogate classical elastoplastic constitutive relations. The network is enriched with crucial physics aspects of classical elasto-plasticity, including additive decomposition of strains into elastic and plastic parts, and nonlinear incremental elasticity. This leads to a Physics-Informed Neural Network (PINN) surrogate model named here as Elasto-Plastic Neural Network (EPNN). Detailed analyses show that embedding these physics into the architecture of the neural network facilitates a more efficient training of the network with less training data, while also enhancing the extrapolation capability for loading regimes outside the training data. The architecture of EPNN is model and material-independent; it can be adapted to a wide range of elasto-plastic material types, including geomaterials; and experimental data can potentially be directly used in training the network. To demonstrate the robustness of the proposed architecture, we adapt its general framework to the elasto-plastic behavior of sands. We use synthetic data generated from material point simulations based on a relatively advanced dilatancy-based constitutive model for granular materials to train the neural network. The superiority of EPNN over regular neural network architectures is demonstrated through predicting unseen strain-controlled loading paths for sands with different initial densities.

\---

## Paper ID 542

**Record number:** 225  
**Paper ID:** 542  
**DOI:** 10.1016/j.jcp.2024.112781  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999124000305

### Exact abstract

Physics-informed neural networks (PINNs) have emerged as a significant endeavour in recent years to utilize artificial intelligence technology for solving various partial diﬀerential equations (PDEs). Nevertheless, the vanilla PINN model structure encounters challenges in accurately approximating solutions at hard-to-fit regions with, for instance, “stiﬀness” points characterized by fast-paced alterations in timescale. To this end, we introduce a novel model architecture based on PINN, named loss-attentional physics-informed neural networks (LA-PINN), which equips each loss component with an independent loss-attentional network (LAN). Feeding the squared errors (𝑆𝐸) on every training point into LAN as the input, the attentional function is then built by each LAN and provides diﬀerent weights to diverse point 𝑆𝐸s. A point errorbased weighting approach that utilizes the adversarial training between multiple networks in the LA-PINN model is proposed to dynamically update weights of 𝑆𝐸during every training epoch. Additionally, the weighting mechanism of LA-PINN is analysed and also be validated by performing several numerical experiments. The experimental results indicate that the proposed method displays superior predictive performance compared to the vanilla PINN and holds a swift convergence characteristic. Moreover, it can advance the convergence of those hard-to-fit points by progressively increasing the growth rates of both the weight and the update gradient for point error.

\---

## Paper ID 543

**Record number:** 226  
**Paper ID:** 543  
**DOI:** 10.1016/j.aej.2023.06.047  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S111001682300515X

### Exact abstract

Partial differential equations (PDEs) are essential mathematical models for describing a wide range of physical phenomena. Numerically, Physic-Informed Neural Networks (PINNs), a variant of artificial neural networks, present a promising method for solving PDEs. However, due to limitation in accuracy and stability, various adaptive PINN variants have been proposed. We have designed a novel approach that adopted self-adaptive PINN (SA-PINN) with two optimization techniques: the genetic algorithm (GA) and the limited-memory Broyden-FletcherGoldfarb-Shanno (L-BFGS) algorithm. Self-adaptive PINN modifies the weights in the loss function to be fully trainable, enabling the ANN to learn and stabilize the PINN in approximating the difficult regions of the solution. GA initializes the population of ANN trainable parameters to optimize the training process with less number of iterations, while L-BFGS is used to find the best solution accurately. Our proposed approach, named SA-PINN-GA-LBFGS, is tested on solving several benchmark PDE problems including elliptic, parabolic, and hyperbolic types. We compare our results with state-of-the-art methods, demonstrating that SA-PINN-GA-LBFGS provides higher accuracy and greater efficiency.

\---

## Paper ID 544

**Record number:** 227  
**Paper ID:** 544  
**DOI:** 10.1016/j.engappai.2024.108764  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0952197624009229

### Exact abstract

The goal of this paper is to provide a simple approach to perform local sensitivity analysis using Physicsinformed neural networks (PINN). The main idea lies in adding a new term in the loss function that regularizes the solution in a small neighborhood near the nominal value of the parameter of interest. The added term represents the derivative of the loss function with respect to the parameter of interest. The result of this modification is a solution to the problem along with the derivative of the solution with respect to the parameter of interest (the sensitivity). We call the new technique SA-PNN which stands for sensitivity analysis in PINN. The effectiveness of the technique is shown using four examples: the first one is a simple one-dimensional advection–diffusion problem to show the methodology, the second is a two-dimensional Poisson’s problem with nine parameters of interest, and the third and fourth examples are one and two-dimensional transient two-phase flow in porous media problem.

\---

## Paper ID 546

**Record number:** 228  
**Paper ID:** 546  
**DOI:** 10.1016/j.jfluidstructs.2024.104066  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S088997462400001X

### Exact abstract

Physics informed neural networks (PINNs) have been explored extensively in the recent past for solving various forward and inverse problems for facilitating querying applications in fluid mechanics. However, investigations on PINNs for unsteady flows past moving bodies, such as flapping wings are scarce. Earlier studies mostly relied on transferring the problems to a body-attached frame of reference, which could be restrictive towards handling multiple moving bodies/deforming structures. The present study attempts to couple the benefits of PINNs with a fixed Eulerian frame of reference, and proposes an immersed boundary aware framework for developing surrogate models for unsteady flows past moving bodies. Specifically, highresolution velocity reconstruction and pressure recovery as a hidden variable are the main goals. The framework has been developed by using downsampled velocity data obtained from prior simulations to train the PINNs model. The efficacy of the velocity reconstruction has been tested against high resolution IBM simulation data, whereas the efficacy of the pressure recovery has been tested against high resolution simulation data from an arbitrary Lagrange Eulerian (ALE) solver. Under the present framework, two PINN variants, (i) a moving-boundary-enabled standard Navier–Stokes based PINN (MB-PINN), and, (ii) a moving-boundary-enabled IBM based PINN (MB-IBM-PINN) have been formulated. Relaxation of physics constraints in PINNs models has been identified to be a useful strategy in improving the predictions. A fluid-solid partitioning of the physics losses in MB-IBM-PINN has been allowed, in order to investigate the effects of solid body points while training. This strategy enables MB-IBM-PINN to match with the performance of MB-PINN under certain lossweighting conditions. Interestingly, MB-PINN is found to be superior to MB-IBM-PINN when a priori knowledge of the solid body position and velocity is available. To improve the data efficiency of MB-PINN, a physics based data sampling technique has also been investigated. It is observed that a suitable combination of physics constraint relaxation and physics based sampling can achieve a model performance comparable to the case of using all the data points, under a fixed training budget.

\---

## Paper ID 549

**Record number:** 229  
**Paper ID:** 549  
**DOI:** 10.1063/5.0128935  
**Publisher URL:** https://pubs.aip.org/cha/article/33/4/043107/2882752/Solving-the-non-local-Fokker-Planck-equations-by

### Exact abstract

Physics-informed neural networks (PiNNs) recently emerged as a powerful solver for a large class of partial differential equations (PDEs) under various initial and boundary conditions. In this paper, we propose trapz-PiNNs, physics-informed neural networks incorporated with a modified trapezoidal rule recently developed for accurately evaluating fractional Laplacian and solve the space-fractional Fokker–Planck equations in 2D and 3D. We describe the modified trapezoidal rule in detail and verify the second-order accuracy. We demonstrate that trapz-PiNNs have high expressive power through predicting the solution with low L2 relative error by a variety of numerical examples. We also use local metrics, such as point-wise absolute and relative errors, to analyze where it could be further improved. We present an effective method for improving the performance of trapz-PiNN on local metrics, provided that physical observations or high-fidelity simulation of the true solution are available. The trapz-PiNN is able to solve PDEs with fractional Laplacian with arbitrary α ∈(0, 2) and on rectangular domains. It also has the potential to be generalized into higher dimensions or other bounded domains.

\---

## Paper ID 550

**Record number:** 230  
**Paper ID:** 550  
**DOI:** 10.1063/5.0106506  
**Publisher URL:** https://pubs.aip.org/pof/article/34/8/087116/2847912/Low-temperature-plasma-simulation-based-on-physics

### Exact abstract

Plasma simulation is an important, and sometimes the only, approach to investigating plasma behavior. In this work, we propose two general artificial-intelligence-driven frameworks for low-temperature plasma simulation: Coefficient-Subnet Physics-Informed Neural Network (CS-PINN) and Runge–Kutta Physics-Informed Neural Network (RK-PINN). CS-PINN uses either a neural network or an interpolation function (e.g., spline function) as the subnet to approximate solution-dependent coefficients (e.g., electron-impact cross sections, thermodynamic properties, transport coefficients, etc.) in plasma equations. Based on this, RK-PINN incorporates the implicit Runge–Kutta formalism in neural networks to achieve a large-time step prediction of transient plasmas. Both CS-PINN and RK-PINN learn the complex non-linear relationship mapping from spatiotemporal space to the equation’s solution. Based on these two frameworks, we demonstrate preliminary applications in four cases covering plasma kinetic and fluid modeling. The results verify that both CS-PINN and RK-PINN have good performance in solving plasma equations. Moreover, RK-PINN has the ability to yield a good solution for transient plasma simulation with not only large time steps but also limited noisy sensing data.

\---

## Paper ID 551

**Record number:** 231  
**Paper ID:** 551  
**DOI:** 10.1016/j.compfluid.2021.105266  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045793021003649

### Exact abstract

There have been many recent developments on machine learning about vortex induced vibration (VIV) in laminar flow. We have extended these applications to turbulence by employing a state-of-the-art parameterized Navier–Stokes equations-based physics informed neural network (PNS-PINN). Turbulent flow past a cylinder undergoing VIV motion with Reynolds number 𝑅𝑒= 104, is considered as an example. Within PNS-PINN, a viscosity-like parameter 𝜈𝑡is introduced into the Navier–Stokes equations and treated as a hidden output variable. A Navier–Stokes equations-based PINN without introducing 𝜈𝑡is also considered for comparison. A series of training dataset of scattered velocity and dye trace concentration snapshots from computational fluid dynamics (CFD) simulations are used for PNS-PINN and NSFnets. Results show that PNS-PINN is more effective in inferring and reconstructing VIV and flows under turbulence circumstance. The PNS-PINN configuration also can deal with unsteady and multiscale flows in VIV.

\---

## Paper ID 552

**Record number:** 232  
**Paper ID:** 552  
**DOI:** 10.1016/j.cma.2024.116883  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782524001397

### Exact abstract

Physics-Informed Neural Networks (PINNs) have proven effective in solving partial differential equations (PDEs), especially when some data are available by seamlessly blending data and physics. However, extending PINNs to high-dimensional and even high-order PDEs encounters significant challenges due to the computational cost associated with automatic differentiation in the residual loss function calculation. Herein, we address the limitations of PINNs in handling high-dimensional and high-order PDEs by introducing the Hutchinson Trace Estimation (HTE) method. Starting with the second-order high-dimensional PDEs, which are ubiquitous in scientific computing, HTE is applied to transform the calculation of the entire Hessian matrix into a Hessian vector product (HVP). This approach not only alleviates the computational bottleneck via Taylor-mode automatic differentiation but also significantly reduces memory consumption from the Hessian matrix to an HVP’s scalar output. We further showcase HTE’s convergence to the original PINN loss and its unbiased behavior under specific conditions. Comparisons with the Stochastic Dimension Gradient Descent (SDGD) highlight the distinct advantages of HTE, particularly in scenarios with significant variability and variance among dimensions. We further extend the application of HTE to higher-order and higher-dimensional PDEs, specifically addressing the biharmonic equation. By employing tensor-vector products (TVP), HTE efficiently computes the colossal tensor associated with the fourth-order high-dimensional biharmonic equation, saving memory and enabling rapid computation. The effectiveness of HTE is illustrated through experimental setups, demonstrating comparable convergence rates with SDGD under memory and speed constraints. Additionally, HTE proves valuable in accelerating the GradientEnhanced PINN (gPINN) version as well as the Biharmonic equation. Overall, HTE opens up a new capability in scientific machine learning for tackling high-order and high-dimensional PDEs.

\---

## Paper ID 553

**Record number:** 233  
**Paper ID:** 553  
**DOI:** 10.1016/j.jcp.2023.112031  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999123001262

### Exact abstract

We propose a hybrid framework opPINN: physics-informed neural network (PINN) with operator learning for approximating the solution to the Fokker-Planck-Landau (FPL) equation. The opPINN framework is divided into two steps: Step 1 and Step 2. After the operator surrogate models are trained during Step 1, PINN can effectively approximate the solution to the FPL equation during Step 2 by using the pre-trained surrogate models. The operator surrogate models greatly reduce the computational cost and boost PINN by approximating the complex Landau collision integral in the FPL equation. The operator surrogate models can also be combined with the traditional numerical schemes. It provides a high efficiency in computational time when the number of velocity modes becomes larger. Using the opPINN framework, we provide the neural network solutions for the FPL equation under the various types of initial conditions, and interaction models in two and three dimensions. Furthermore, based on the theoretical properties of the FPL equation, we show that the approximated neural network solution converges to the a priori classical solution of the FPL equation as the pre-defined loss function is reduced.

\---

## Paper ID 555

**Record number:** 234  
**Paper ID:** 555  
**DOI:** 10.1016/j.ymssp.2022.108907  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0888327022000942

### Exact abstract

A situation often encountered in the condition monitoring (CM) and health management of gearboxes is that a large volume of CM data (e.g., vibration signal) collected from a healthy state is available but CM data from a faulty state unavailable. Fault detection under such a situation is usually tackled by modeling the baseline CM data and then detect the fault by examining any deviation of the baseline model versus newly monitored data. Given that the CM data is mostly time series, the long-short term memory (LSTM) neural network can be employed for baseline CM data modeling. The LSTM is free from the choice of the number of lagged input time series and can also store both long-term and short-term time series dependency information. However, we found that an LSTM with its hyperparameters selected whilst minimizing validation mean squared error (VAMSE) does not differentiate the faulty and healthy states well. There is still room for detectability improvement. In this paper, we propose a physics-informed hyperparameters selection strategy for the LSTM identification and subsequently the fault detection of gearboxes. The key idea of the proposed strategy is to select hyperparameters based on maximizing the discrepancy between healthy and physics-informed faulty states, as opposed to minimizing VAMSE. Case studies have been conducted to detect the gear tooth crack and tooth wear using laboratory test rigs. Results have shown that the proposed physics-informed hyperparameters selection strategy returns an LSTM that can better detect these faults than the LSTM returned from minimizing VAMSE.

\---

## Paper ID 557

**Record number:** 235  
**Paper ID:** 557  
**DOI:** 10.1016/j.engstruct.2023.116500  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S014102962300915X

### Exact abstract

Deep learning models have achieved remarkable accuracy for structural response modeling. However, these models heavily depend on having a sufficient amount of training data, which can be challenging and time- consuming to collect. Moreover, data-driven models sometimes struggle to adhere to physics constraints. Therefore, in this study, a physics-informed long short-term memory (PI-LSTM) network was applied to structural response modeling by incorporating physics constraints into deep learning. The physics constraints were modified to accommodate the characteristics of both linear and nonlinear cases. The PI-LSTM network, inspired by and compared with existing physics-informed deep learning models (PhyCNN and PhyLSTM), was validated using the numerical simulation results of the single-degree-of-freedom (SDOF) system and the experimental results of the six-story building. Additionally, the PI-LSTM network underwent thorough investigation and validation across the four cases of the SDOF system and numerical simulation results of the six-story building with the comparison of the regular LSTM. The results indicate that the PI-LSTM network outperformed the regular LSTM models in terms of accuracy. Furthermore, the PI-LSTM network exhibited a more concentrated and higher accuracy range when analyzing the results of both the SDOF system and the six-story building. These findings demonstrate that the PI-LSTM network presents a reliable and efficient approach for structural response modeling.

\---

## Paper ID 558

**Record number:** 236  
**Paper ID:** 558  
**DOI:** 10.1016/j.cma.2023.115944  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782523000671

### Exact abstract

This study presents a novel unsupervised convolutional Neural Network (NN) architecture with nonlocal interactions for solving Partial Differential Equations (PDEs). The nonlocal Peridynamic Differential Operator (PDDO) is employed as a convolutional filter for evaluating derivatives the field variable. The NN captures the time-dynamics in smaller latent space through encoder–decoder layers with a Convolutional Long–short Term Memory (ConvLSTM) layer between them. The ConvLSTM architecture is modified by employing a novel activation function to improve the predictive capability of the learning architecture for physics with periodic behavior. The physics is invoked in the form of governing equations at the output of the NN and in the latent (reduced) space. By considering a few benchmark PDEs, we demonstrate the training performance and extrapolation capability of this novel NN architecture by comparing against Physics Informed Neural Networks (PINN) type solvers. It is more capable of extrapolating the solution for future timesteps than the other existing architectures.

\---

## Paper ID 560

**Record number:** 237  
**Paper ID:** 560  
**DOI:** 10.1016/j.ast.2024.109648  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S1270963824007776

### Exact abstract

The deep learning method provides an effective alternative to numerical simulations for establishing the nonlinear input-output relationship and calculating dynamic responses of rotor systems. To overcome the low generalization capability of pure data-driven long short-term memory (LSTM) networks when predicting dynamic responses to out-of-distribution inputs, a dynamic response prediction method using physics-informed multi-LSTM networks is proposed. This approach incorporates required physical constraints into the deep LSTM network, allowing the model training process to optimize the network parameters within the feasible solution space that adheres to physical laws. Consequently, this enhances the physical interpretability of the deep learning model. Specifically, two physics-informed multi-LSTM network architectures are introduced, and physical laws of equation of motion, state dependency and hysteretic constitutive relationship are considered to construct the physics loss. The feasibility of the proposed method is verified by a Bouc-Wen hysteresis model and a simulated gas generator rotor. The response prediction performance of the two networks is validated on a constructed fault rotor dataset with significant sample differences, along with cross-speed and cross-node prediction validation for the rotor system. The results demonstrate that the trained networks exhibit strong robustness and generalization capabilities, making them suitable as surrogate models for rotor systems.

\---

## Paper ID 565

**Record number:** 238  
**Paper ID:** 565  
**DOI:** 10.1016/j.ymssp.2023.110685  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0888327023005939

### Exact abstract

Despite being a widespread non-conventional processing technique, electrical discharge machining (EDM) has been complicated due to its removal mechanisms and weak process stability for decades. Process monitoring is an enabling technology to offer an indirect insight into the discharge phenomena, understanding the probabilistic anomaly events such as arcs and short circuits. However, the transient high-frequency pulse train poses a great challenge for statistical monitoring and control. Traditional approaches are limited to single pulse analysis, which hinders a deep understanding of the process. To address the challenge, this paper proposes a novel physics-informed deep learning architecture for real-time micro-EDM process monitoring. To prepare condition labels, a series of signal-processing techniques including sensory fusion, pulse-shape filtering and pulse segmentation are employed, followed by observation diagrams on two critical indicators, i.e. discharge energy and discharge time interval. A decision logic that allows embedding of domain knowledge is formulated, yielding physics-informed labels on each pulse train. For online monitoring applications, a hybrid hierarchical structure that combines a 1D convolutional neural network (1D-CNN) and a Transformer encoder (TSE) is designed to simultaneously extract local pulse features and temporal dependencies between pulse sequences. This deep learning model achieves a classification accuracy of 96% on the validation dataset and reaches precision and recall scores of more than 92% on the test dataset with varying processing parameters. Two model interpretation approaches, i.e. gradient-weighted class activation mapping (Grad-CAM) and attention visualization, are adopted. Consequently, it is found that the CNN module assigns high feature importance to the breakdown and maintaining stages of one pulse and the TSE module improves the feature salience and reliance on the condition of distinct events. This monitoring network is further demonstrated on a control application for adaptive regulation of the micro-EDM drilling process. The results of deep-hole drilling suggest that the CNN-TSE model can highly improve the process stability and hence the machining quality.

\---

## Paper ID 566

**Record number:** 239  
**Paper ID:** 566  
**DOI:** 10.1016/j.cma.2024.116907  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782524001634

### Exact abstract

Model-free data-driven computational mechanics, first proposed by Kirchdoerfer and Ortiz, replace phenomenological models with numerical simulations based on sample datasets in strain–stress space. In this study, we integrate this paradigm within physics-informed generative adversarial networks (GANs). We enhance the conventional physics-informed neural network framework by implementing the principles of data-driven computational mechanics into GANs. Specifically, the generator is informed by physical constraints, while the discriminator utilizes the closest strain–stress data to discern the authenticity of the generator’s output. This combined approach presents a new formalism to harness data-driven mechanics and deep learning to simulate and predict mechanical behaviors.

\---

## Paper ID 569

**Record number:** 240  
**Paper ID:** 569  
**DOI:** 10.1016/j.compstruc.2023.107215  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045794923002456

### Exact abstract

Artificial neural networks have been proven promisingly powerful in developing a data-driven surrogate model for rapid seismic response modeling, while very few of them embody a physical mechanism with explicit interpretability. Herewith, this study proposes a novel physics-informed deep 1D convolutional neural network compiled in extended state space fusion (SSM-CNN) for enhanced seismic response modeling. In the SSM-CNN, an innovative parameter-free physics-constrained mechanism is designed and embedded for performance enhancement by construing the differential nexus of state variables derived from the state-space representation of initial structural response. Both the designing philosophy and mechanism translating of the SSM-CNN are elaborated exhaustively. To fully demonstrate the capability and superiority of proposed model compared to normal CNN, two groups of filed records of earthquake events with different sources from PEER and CESMD dataset were allocated for numerical and experimental validations, respectively. The validation results confirmed the effectiveness and superiority of physics-informed SSM-CNN in seismic response prediction. The sensitivity analysis and generalization analysis were also performed on the models for better understanding their interpretability. Involved algorithms and models in present study were integrated and developed into a web program, which affirmed a promising engineering applicability for rapid seismic response prediction.

\---

## Paper ID 572

**Record number:** 241  
**Paper ID:** 572  
**DOI:** 10.1016/j.jmsy.2021.10.013  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S027861252100220X

### Exact abstract

Tool wear prediction plays an important role in ensuring the reliability of machining operation due to their wide- ranging application in smart manufacturing. Massive effort has been devoted into exploring the methods of tool wear prediction. However, it remains a challenge to improve the accuracy of tool wear prediction under varying tool wear rates. To address this issue, this paper presents a new physics-informed meta-learning framework for tool wear prediction under varying wear rates. First, a physics-informed data-driven modeling strategy is proposed by employing the empirical equations’ parameters to improve the interpretability of the modeling and optimization of the data-driven models. The piecewise fitting is adopted to ensure the accuracy of the parameters. Second, the physics-informed model input is investigated to help the data-driven models explore the hidden information about the tool wear under varying tool wear rates. Third, the physics-informed loss term is presented to constrain the optimization of the meta-learning model. An experimental study on a milling machine is performed to validate the effectiveness of the presented method.

\---

## Paper ID 573

**Record number:** 242  
**Paper ID:** 573  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

In recent years, there has been growing interest in the development of Physics-informed Neural Networks (PINNs) as useful methods for inverse analysis based on partial differential equations. However, there are few reports on design optimization of machines and equipment using PINNs. This study proposes a physics-informed CNN for acoustic equipment design optimization. Similar to the original PINNs, the Physics-informed CNN proposed in this study has a loss function with respect to partial differential equations. The proposed method is designed to identify the design variables by simultaneously minimizing the loss function with respect to the target acoustic properties and the loss function with respect to the wave equation. As a fundamental study, the performance of the proposed method was evaluated by optimizing a trumpet design. By feeding the neural network with velocity data at the lips and sound pressure data at the bell as known information, we were able to identify the tube length and bell diameter with good accuracy. Since the method is based on a CNN, it can define loss functions in the frequency domain, such as spectrograms, and is expected to have a wide range of applications in the future.

\---

## Paper ID 574

**Record number:** 243  
**Paper ID:** 574  
**DOI:** 10.1007/s00521-022-07294-2  
**Publisher URL:** https://link.springer.com/10.1007/s00521-022-07294-2

### Exact abstract

Physics-informed neural networks (PINNs) have been widely used to solve various scientific computing problems. However, large training costs limit PINNs for some real-time applications. Although some works have been proposed to improve the training efficiency of PINNs, few consider the influence of initialization. To this end, we propose a New Reptile initialization-based Physics-Informed Neural Network (NRPINN). The original Reptile algorithm is a metalearning initialization method based on labeled data. PINNs can be trained with less labeled data or even without any labeled data by adding partial differential equations (PDEs) as a penalty term into the loss function. Inspired by this idea, we propose the new Reptile initialization to sample more tasks from the parameterized PDEs and adapt the penalty term of the loss. The new Reptile initialization can acquire initialization parameters from related tasks by supervised, unsupervised, and semi-supervised learning. Then, PINNs with initialization parameters can efficiently solve PDEs. Besides, the new Reptile initialization can also be used for the variants of PINNs. Finally, we demonstrate and verify the NRPINN considering both forward problems, including solving Poisson, Burgers, and Schro¨dinger equations, as well as inverse problems, where unknown parameters in the PDEs are estimated. Experimental results show that the NRPINN training is much faster and achieves higher accuracy than PINNs with other initialization methods.

\---

## Paper ID 576

**Record number:** 244  
**Paper ID:** 576  
**DOI:** 10.1088/1361-6463/acb604  
**Publisher URL:** https://iopscience.iop.org/article/10.1088/1361-6463/acb604

### Exact abstract

Physics-Informed Neural Networks (PINNs) have a wide range of applications as an alternative to traditional numerical methods in plasma simulation. However, in some specific cases of PINN-based modeling, a well- trained PINN may require tens of thousands of optimizing iterations during training stage for complex modeling and huge neural networks, which is sometimes very time-consuming. In this work, we propose a meta-learning method, namely Meta-PINN, to reduce the training time of PINN-based 1-D arc simulation. In Meta-PINN, the meta network is first trained by a two-loop optimization on various training tasks of plasma modeling, and then used to initialize the PINN-based network for new tasks. We demonstrate the power of Meta-PINN by four cases corresponding to 1-D arc models at different boundary temperatures, arc radii, arc pressures, and gas mixtures. We found that a well-trained meta network can produce good initial weights for PINN-based arc models even at conditions slightly outside of training range. The speed-up in terms of relative L2 error by Meta-PINN ranges from 1.1 to 6.9 in the cases we studied. The results indicate that Meta-PINN is an effective method for accelerating the PINN-based 1-D arc simulation.

\---

## Paper ID 577

**Record number:** 245  
**Paper ID:** 577  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Rolling bearings are one of the key components in many mechanical equipment. Effective fault diagnosis of bearings is crucial for production safety and maintenance work. Despite variety of data driven fault diagnosis methods with high performance have been proposed, most of them learn fault features entirely from the training samples without the guide of physical knowledge, which leads to violation of physical laws and weak generalization ability. To solve this problem, this paper proposes a physics informed fusion convolutional neural network model for fault diagnosis of bearings under variable rotation speed. By embedding domain knowledge, the model’s accuracy and robustness are reinforced. The effectiveness of the proposed method is verified by comparative study under real data of fault bearings. The results show that the proposed model has a better interpretability and higher performance under high noise environments.

\---

## Paper ID 578

**Record number:** 246  
**Paper ID:** 578  
**DOI:** 10.1016/j.finel.2023.104047  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0168874X23001403

### Exact abstract

Physics-Informed Neural Network (PINN) has proven itself a powerful tool to obtain the numerical solutions of nonlinear partial differential equations (PDEs) leveraging the expressivity of deep neural networks and the computing power of modern heterogeneous hardware. However, its training is still time-consuming, especially in the multi-query and real-time simulation settings, and its parameterization often overly excessive. In this paper, we propose the Generative Pre-Trained PINN (GPT-PINN) to mitigate both challenges in the setting of parametric PDEs. GPT-PINN represents a brand-new meta-learning paradigm for parametric systems. As a network of networks, its outer-/meta-network is hyper-reduced with only one hidden layer having significantly reduced number of neurons. Moreover, its activation function at each hidden neuron is a (full) PINN pre-trained at a judiciously selected system configuration. The meta-network adaptively ‘‘learns’’ the parametric dependence of the system and ‘‘grows’’ this hidden layer one neuron at a time. In the end, by encompassing a very small number of networks trained at this set of adaptively-selected parameter values, the meta-network is capable of generating surrogate solutions for the parametric system across the entire parameter domain accurately and efficiently.

\---

## Paper ID 580

**Record number:** 247  
**Paper ID:** 580  
**DOI:** 10.1016/j.eswa.2024.123758  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0957417424006249

### Exact abstract

This paper proposes physics-informed meta-learning-based surrogate modeling (PI-MLSM), a novel approach that combines meta-learning and physicsinformed deep learning to train surrogate models with limited labeled data. PI-MLSM consists of two stages: meta-learning and physics-informed task adaptation. The proposed approach is demonstrated to outperform other methods in four numerical examples while reducing errors in prediction and reliability analysis, exhibiting robustness, and requiring less labeled data during optimization. Moreover, compared to other approaches, the proposed approach exhibits better performance in solving out-of-distribution tasks. Although this paper acknowledges certain limitations and challenges, such as the subjective nature of physical information, it highlights the key contributions of PI-MLSM, including its effectiveness in solving a wide range of tasks and its ability in handling situations wherein physical laws are not explicitly known. Overall, PI-MLSM demonstrates potential as a powerful and versatile approach for surrogate modeling.

\---

## Paper ID 582

**Record number:** 248  
**Paper ID:** 582  
**DOI:** 10.1016/j.compbiomed.2025.109926  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S001048252500277X

### Exact abstract

Autism identification and classification using biomedical medical image analysis has advanced recently. Research shows autistic females have different phenotypic and age-related brain variations than males. Genderspecific hormones and genes affect autistic female brain circuitry, unfortunately, female phenotypic and genotypic data is quite deficient. Since physicians spend much time in assessing autistic females manually. Advanced large-scale deep learning algorithms are in dire need of accurate medical diagnosis. This research proposed a 57-layer CNN architecture called NeuroNet57 that can extract features from fMRI factually. After pre-training on the Brain Tumour dataset, the NeuroNet57 model extracts female phenotypic features from autism brain imagining data exchange (ABIDE)-I+II datasets using T1 modality fMRI scans, resulting in feature matrices of 14372 × 4096 for ABIDE\_I and 16168 × 4096 for ABIDE\_II. Our model uses ant colony optimization (ACO) to select feature subsets for dimensionality reduction. Further, nine machine learning classifiers are used to categorize females with autism spectrum disorder (ASD) from females with control behavior. The KNN-based fineKNN (FKNN) classifier had 92.21% accuracy on ABIDE-I and 93.49% on ABIDE-II. This proves the effectiveness of our proposed model.

\---

## Paper ID 584

**Record number:** 249  
**Paper ID:** 584  
**DOI:** 10.1016/j.neucom.2023.126425  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0925231223005489

### Exact abstract

Physics-informed extreme learning machine (PIELM) has recently received significant attention as a rapid version of physics-informed neural network (PINN) for solving partial differential equations (PDEs). The key characteristic is to fix input layer weights with random values and use Moore–Penrose generalized inverse for the output weights. The framework is effective, but it easily suffers from overfitting noisy data and lacks uncertainty quantification for the solution under noise scenarios. To this end, we develop a novel Bayesian physics-informed extreme learning machine (BPIELM) to solve both forward and inverse linear PDE problems with noisy data in a unified framework. In our framework, a prior probability distribution is introduced in the output layer for extreme learning machine with physic laws and the Bayesian method is used to estimate the posterior of parameters. Besides, for inverse PDE problems, problem parameters considered as new output weights are unified in a framework with forward PDE problems. Finally, we demonstrate BPIELM considering both forward problems, including Poisson, advection, and diffusion equations, as well as inverse problems, where unknown problem parameters are estimated. The results show that, compared with PIELM, BPIELM quantifies uncertainty arising from noisy data and provides more accurate predictions. In addition, BPIELM is considerably cheaper than PINN in terms of the computational cost.

\---

## Paper ID 586

**Record number:** 250  
**Paper ID:** 586  
**DOI:** 10.1016/j.oceaneng.2022.113101  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0029801822023848

### Exact abstract

Vortex-induced vibration (VIV) is a typical nonlinear fluid-structure interaction (FSI) phenomenon, which widely exists in practical engineering (such as flexible risers, bridges and aircraft wings). Conventional numerical simulation and data-driven approaches for VIV analysis often suffer from the challenges of computational cost and dataset acquisition. This paper proposed a physics-informed neural network (PINN) enhanced by transfer learning (TL) to study a VIV system (2D). The TL-PINN only used 1/2, 1/4 and 1/8 of the training set (for PINN model) to reconstruct the information of flow field and structure, but with the same prediction accuracy as PINN model. In addition, a stepwise iterative training strategy was proposed to train PINN model. The strategy can effectively reduce the dependence of neural networks on data sets, so as to reduce the training cost of PINN model. The results show that PINN with the stepwise iterative training strategy and TL-PINN can enhance learning efficiency and keep predictability without requiring a huge quantity of datasets. Based on the proposed method, limited and scattered label data from monitoring, numerical and experimental can be fused to realize the reconstruction and prediction of flow field and structure information. It can break the limitation of monitoring equipment and methods in practical projects, and promote the in-depth study of VIV.

\---

## Paper ID 587

**Record number:** 251  
**Paper ID:** 587  
**DOI:** 10.1016/j.camwa.2023.05.014  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0898122123002122

### Exact abstract

We present an adaptive deep collocation method (DCM) based on physics-informed deep learning for the melting heat transfer analysis of a non-Newtonian (Sisko) fluid over a moving surface with nonlinear thermal radiation. Fitted neural network search (NAS) and model based transfer learning (TL) are developed to improve model computational efficiency and accuracy. The governing equations for this boundary-layer flow problem are derived using Buongiorno’s and a nonlinear thermal radiation model. Next, similarity transformations are introduced to reduce the governing equations into coupled nonlinear ordinary diﬀerential equations (ODEs) subjected to asymptotic infinity boundary conditions. By incorporating physics constraints into the neural networks, we employ the proposed deep learning model to solve the coupled ODEs. The imposition of infinity boundary conditions is carried out by adding an inequality constraint to the loss function, with infinity added to the hyper-parameters of the neural network, which is updated dynamically in the optimization process. The eﬀects of various dimensionless parameters on three profiles (velocity, temperature, concentration) are investigated. Finally, we demonstrate the performance and accuracy of the adaptive DCM with transfer learning through several numerical examples, which can be the promising surrogate model to solve boundary layer problems.

\---

## Paper ID 588

**Record number:** 252  
**Paper ID:** 588  
**DOI:** 10.1016/j.ymssp.2023.110360  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0888327023002674

### Exact abstract

The practical application of data-driven frameworks like deep neural network in acoustic emission (AE) source localization is impeded due to the collection of significant clean data from the field. The utility of the such framework is governed by data collected from the site and/or laboratory experiment. The noise, experimental cost and time consuming in the collection of data further worsen the scenario. To address the issue, this work proposes to use a novel multi-fidelity physics-informed neural network (mfPINN). The proposed framework is best suited for the problems like AE source detection, where the governing physics is known in an approximate sense (low-fidelity model), and one has access to only sparse data measured from the experiment (high- fidelity data). This work further extends the governing equation of AE source detection to the probabilistic framework to account for the uncertainty that lies in the sensor measurement. The mfPINN fuses the data-driven and physics-informed deep learning architectures using transfer learning. The results obtained from the data-driven artificial neural network (ANN) and physics- informed neural network (PINN) are also presented to illustrate the requirement of a multi- fidelity framework using transfer learning. In the presence of measurement uncertainties, the proposed method is verified with an experimental procedure that contains the carbon-fiber- reinforced polymer (CFRP) composite panel instrumented with a sparse array of piezoelectric transducers. The results conclude that the proposed technique based on a probabilistic framework can provide a reliable estimation of AE source location with confidence intervals by taking measurement uncertainties into account.

\---

## Paper ID 589

**Record number:** 253  
**Paper ID:** 589  
**DOI:** 10.1021/acs.iecr.3c01435  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acs.iecr.3c01435

### Exact abstract

This work develops a physics-informed transfer learning framework for modeling and control of a nonlinear process network with limited training data. Unlike the conventional transfer learning method that transfers the knowledge from one process to another process with similar configurations, the proposed transfer learning method is to develop a machine learning model for the entire process network using the knowledge of some subsystems in the network. Specifically, based on the machine learning models that have been developed for some subsystems in the process network with sufficient training data, we develop a transfer-learning-based recurrent neural network (RNN) model for the entire process network by embedding the pretrained models in the overall RNN model, and utilizing physicsinformed machine learning techniques to improve the prediction accuracy by incorporating a priori process-structure knowledge and physical laws into the development of RNNs. Subsequently, transfer learning is used to reduce the computation time of characterization of the region of attraction for model-based control using RNNs. Finally, two chemical process networks are used to illustrate the effectiveness of the proposed physics-informed transfer learning method.

\---

## Paper ID 593

**Record number:** 254  
**Paper ID:** 593  
**DOI:** 10.1016/j.engappai.2024.108085  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0952197624002434

### Exact abstract

This paper proposes a novel framework for simulating the dynamics of beams on elastic foundations. Specifically, partial differential equations modeling Euler–Bernoulli and Timoshenko beams on the Winkler foundation are simulated using a causal physics-informed neural network (PINN) coupled with transfer learning. Conventional PINNs encounter challenges in handling large space–time domains, even for problems with closed-form analytical solutions. A causality-respecting PINN loss function is employed to overcome this limitation, effectively capturing the underlying physics. However, it is observed that the causalityrespecting PINN lacks generalizability. We propose using solutions to similar problems instead of training from scratch by employing transfer learning while adhering to causality to accelerate convergence and ensure accurate results across diverse scenarios. The primary contribution of this paper lies in introducing a causalityrespecting PINN loss function in the context of structural engineering and coupling it with transfer learning to enhance the generalizability of PINNs in simulating the dynamics of beams on elastic foundations. Numerical experiments on the Euler–Bernoulli beam highlight the efficacy of the proposed approach for various initial conditions, including those with noise in the initial data. Furthermore, the potential of the proposed method is demonstrated for the Timoshenko beam in an extended spatial and temporal domain. Several comparisons suggest that the proposed method accurately captures the inherent dynamics, outperforming the state-of-the-art physics-informed methods under standard 𝐿2-norm metric and accelerating convergence.

\---

## Paper ID 596

**Record number:** 255  
**Paper ID:** 596  
**DOI:** 10.1016/j.cma.2024.117163  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782524004195

### Exact abstract

In this study, we develop a novel framework to extract turbulent combustion closure, including closure for species chemical source terms, from multiscalar and velocity measurements in turbulent flames. The technique is based on a physics-informed neural network (PINN) that combines models for velocity and scalar measurements and a deep operator network (DeepONet) to accommodate spatial measurements and experimental parameters as separate input streams. An additional key innovation is the estimate of the unconditional means of the species’ chemical source terms as additional ‘‘observations’’ to constrain the prediction of these rates. This estimate is based on a convolution of the means of species reaction rates conditioned on principal components of the multiscalar data and the joint probability density functions of these principal components. The PINN-DeepONet method is implemented on the so-called Sydney flames, where training is carried out on 3 flames and validated on 4 flames. The results show that, despite the limited samples of experimental parameters, including the inlet flow and the fuel jet recess length within the air flow, the PINN-DeepONet approach can construct velocity and scalar fields along with important closure terms for turbulent transport and reaction rates.

\---

## Paper ID 597

**Record number:** 256  
**Paper ID:** 597  
**DOI:** 10.1016/j.cma.2023.116299  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782523004231

### Exact abstract

Recent advances in scientific machine learning have shed light on the modeling of pattern-forming systems. However, simulations of real patterns still incur significant computational costs, which could be alleviated by leveraging large image datasets. Physics-informed machine learning and operator learning are two new emerging and promising concepts for this application. Here, we propose “Phase-Field DeepONet”, a physics-informed operator neural network framework that predicts the dynamic responses of systems governed by gradient flows of free-energy functionals. Examples used to validate the feasibility and accuracy of the method include the Allen–Cahn and Cahn–Hilliard equations, as special cases of reactive phase-field models for nonequilibrium thermodynamics of chemical mixtures. This is achieved by incorporating the minimizing movement scheme into the framework, which optimizes and controls how the total free energy of a system evolves, instead of solving the governing equations directly. The trained operator neural networks can work as explicit time-steppers that take the current state as the input and output the next state. This could potentially facilitate fast real-time predictions of pattern-forming dynamical systems, such as phase-separating Li-ion batteries, emulsions, colloidal displays, or biological patterns.

\---

## Paper ID 598

**Record number:** 257  
**Paper ID:** 598  
**DOI:** 10.1016/j.cma.2022.114587  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S004578252200010X

### Exact abstract

Failure trajectories, probable failure zones, and damage indices are some of the key quantities of relevance in brittle fracture mechanics. High-fidelity numerical solvers that reliably estimate these relevant quantities exist but they are computationally demanding requiring a high resolution of the crack. Moreover, independent simulations need to be carried out even for a small change in domain parameters and/or material properties. Therefore, fast and generalizable surrogate models are needed to alleviate the computational burden but the discontinuous and complex nature of fracture mechanics presents a major challenge to developing such models. We propose a physics-informed variational formulation of DeepONet (V-DeepONet) for brittle fracture analysis. V-DeepONet is trained to map the initial configuration of the defect to the relevant fields of interests (e.g., damage and displacements). Once the network is trained, the entire global solution can be rapidly obtained for any initial crack configuration and loading steps on that domain. While the original DeepONet is solely data-driven, we take a different path to train the V-DeepONet by imposing the governing equations in a variational form with some labeled data. We demonstrate the effectiveness of V-DeepOnet through two benchmarks of brittle fracture and verify its accuracy using results from high-fidelity solvers. Encoding the physical laws to the model with data enhancement in training renders the surrogate model capable of accurately performing both interpolation and extrapolation tasks. Considering that fracture modeling is very sensitive to fluctuations, the proposed V-DeepONet with a hybrid training strategy is able to predict the quantities of interests with good accuracy, which can be easily extended to a wide array of dynamical systems with complex responses.

\---

## Paper ID 599

**Record number:** 258  
**Paper ID:** 599  
**DOI:** 10.1016/j.cma.2024.117586  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782524008405

### Exact abstract

The deep operator network (DeepONet) has shown remarkable potential in solving partial differential equations (PDEs) by mapping between infinite-dimensional function spaces using labeled datasets. However, in scenarios lacking labeled data, the physics-informed DeepONet (PI-DeepONet) approach, which utilizes the residual loss of the governing PDE to optimize the network parameters, faces significant computational challenges, particularly due to the curse of dimensionality. This limitation has hindered its application to high-dimensional problems, making even standard 3D spatial with 1D temporal problems computationally prohibitive. Additionally, the computational requirement increases exponentially with the discretization density of the domain. To address these challenges and enhance scalability for high-dimensional PDEs, we introduce the Separable physics-informed DeepONet (Sep-PI-DeepONet). This framework employs a factorization technique, utilizing sub-networks for individual one-dimensional coordinates, thereby reducing the number of forward passes and the size of the Jacobian matrix required for gradient computations. By incorporating forward-mode automatic differentiation (AD), we further optimize computational efficiency, achieving linear scaling of computational cost with discretization density and dimensionality, making our approach highly suitable for high-dimensional PDEs. We demonstrate the effectiveness of Sep-PI-DeepONet through three benchmark PDE models: the viscous Burgers’ equation, Biot’s consolidation theory, and a parameterized heat equation. Our framework maintains accuracy comparable to the conventional PI-DeepONet while reducing training time by two orders of magnitude. Notably, for the heat equation solved as a 4D problem, the conventional PI-DeepONet was computationally infeasible (estimated 289.35 h), while the Sep-PI-DeepONet completed training in just 2.5 h. These results underscore the potential of Sep-PI-DeepONet in efficiently solving complex, high-dimensional PDEs, marking a significant advancement in physics-informed machine learning.

\---

## Paper ID 600

**Record number:** 259  
**Paper ID:** 600  
**DOI:** 10.1016/j.neucom.2024.128675  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0925231224014462

### Exact abstract

The Deep Neural Operator, as proposed by Lu et al. (2021), marks a considerable advancement in solving parametric partial differential equations. This paper examines the DeepOnet model’s neural network design, focusing on the effectiveness of its trunk-branch structure in operator learning tasks. Three key advantages of the trunk-branch structure are identified: the global learning strategy, the independent operation of the trunk and branch networks, and the consistent representation of solutions. These features are especially beneficial for operator learning. Building upon these findings, we have evolved the traditional DeepOnet into a more general form from a network perspective, allowing a nonlinear interfere of the branch net on the trunk net than the linear combination limited by the conventional DeepOnet. The operator model also incorporates physical information for enhanced integration. In a series of experiments tackling partial differential equations, the extended DeepOnet consistently outperforms than the traditional DeepOnet, particularly in complex problems. Notably, the extended DeepOnet model shows substantial advancements in operator learning with nonlinear parametric partial differential equations and exhibits a remarkable capacity for reducing physics loss.

\---

## Paper ID 602

**Record number:** 260  
**Paper ID:** 602  
**DOI:** 10.1016/j.watres.2024.121123  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0043135424000241

### Exact abstract

Computational fluid dynamics (CFD) can be a powerful tool for higher-fidelity water infrastructure planning and design. Despite decades of development and demonstration over a wide range of water systems such as clarification basins, activated sludge processes, ozone contactors, etc., CFD remains primarily used in academic research, with limited application in civil and environmental engineering practice. This limitation is contributed by its higher computational cost and demand for specialized user skills. This, however, need not be the case, if a robust and efficient surrogate model can be developed from CFD simulations and independently deployed for engineering purposes. Leveraging the emerging scientific machine learning (ML) techniques of physics-informed ML and operator learning, this study develops a composite neural network (CPNN) for learning the flow hydrodynamics and particulate matter (PM) transport and fate in clarification systems. The CPNN consists of a deep operator network (DeepONet) as an encoder and a physics-informed neural network (PINN) as a decoder. In contrast to common ‘‘black box’’ and lumped ML approaches, the developed CPNN directly incorporates physics principles into its architecture. Furthermore, the CPNN is designed for processresolved and operator learning, enabling it to predict spatial hydrodynamics and PM concentration distribution (i.e., contours) across different basin geometrics and loading conditions. Compared to CFD simulation, the developed CPNN model has significantly higher computational efficiency (∼milliseconds) while demonstrating robust predictive capability. For predicting basin hydrodynamics across 10,000 test cases, the trained CPNN model achieves an 𝑅2 above 0.8 for 66.4% of cases and an 𝑅2 above 0.4 for 89.2% of cases. A similar performance is also demonstrated by the CPNN in predicting basin PM concentration. Further investigation reveals that basin geometrics that trigger bi-modal flow solutions can be particularly challenging for ML. Additionally, this study visualizes the dependency of basin hydrodynamics and PM concentration on basin geometrics and loading conditions, providing valuable insights for optimizing basin configuration. Lastly, the potentials and benefits of web-based applications, e.g., DeepXtorm, as a user-friendly interface for the developed CPNN model is discussed. This study represents the initial step toward achieving real-time higher-fidelity water infrastructure planning, design, optimization, and regulation.

\---

## Paper ID 603

**Record number:** 261  
**Paper ID:** 603  
**DOI:** 10.1126/sciadv.abi8605  
**Publisher URL:** https://www.science.org/doi/10.1126/sciadv.abi8605

### Exact abstract

Partial differential equations (PDEs) play a central role in the mathematical analysis and modeling of complex dynamic processes across all corners of science and engineering. Their solution often requires laborious analytical or computational tools, associated with a cost that is markedly amplified when different scenarios need to be investigated, for example, corresponding to different initial or boundary conditions, different inputs, etc. In this work, we introduce physics-informed DeepONets, a deep learning framework for learning the solution operator of arbitrary PDEs, even in the absence of any paired input-output training data. We illustrate the effectiveness of the proposed framework in rapidly predicting the solution of various types of parametric PDEs up to three orders of magnitude faster compared to conventional PDE solvers, setting a previously unexplored paradigm for modeling and simulation of nonlinear and nonequilibrium processes in science and engineering.

\---

## Paper ID 604

**Record number:** 262  
**Paper ID:** 604  
**DOI:** 10.1007/s00521-022-07886-y  
**Publisher URL:** https://link.springer.com/10.1007/s00521-022-07886-y

### Exact abstract

Deep learning-based surrogate modeling is becoming a promising approach for learning and simulating dynamical systems. However, deep-learning methods find it very challenging to learn stiff dynamics. In this paper, we develop DAE-PINN, the first effective physics-informed deep-learning framework for learning and simulating the solution trajectories of nonlinear differential-algebraic equations (DAE). DAEs are used to model complex engineering systems, e.g., power networks, and present a ‘‘form’’ of infinite stiffness, which makes learning their solution trajectories challenging. Our DAE-PINN bases its effectiveness on the synergy between implicit Runge–Kutta time-stepping schemes (designed specifically for solving DAEs) and physics-informed neural networks (PINN) (deep neural networks that we train to satisfy the dynamics of the underlying problem). Furthermore, our framework (i) enforces the neural network to satisfy the DAEs as (approximate) hard constraints using a penalty-based method and (ii) enables simulating DAEs for long-time horizons. We showcase the effectiveness and accuracy of DAE-PINN by learning the solution trajectories of a three-bus power network.

\---

## Paper ID 605

**Record number:** 263  
**Paper ID:** 605  
**DOI:** 10.1016/j.jcp.2022.111271  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999122003333

### Exact abstract

Continuous reconstructions of periodic phenomena provide powerful tools to understand, predict and model natural situations and engineering problems. In line with the recent method called Physics-Informed Neural Networks (PINN) where a multi layer perceptron directly approximates any physical quantity as a symbolic function of time and space coordinates, we present an extension, namely ModalPINN, that encodes the approximation of a limited number of Fourier mode shapes. In addition to the added interpretability, this representation performs up to two orders of magnitude more precisely for a similar number of degrees of freedom and training time in some cases as illustrated through the test case of laminar shedding of vortices over a cylinder. This added simplicity proves to be robust in regards to flow reconstruction using only a limited number of sensors with asymmetric data that simulates an experimental configuration, even when a Gaussian noise or a random delay is added, imitating imperfect and sparse information.

\---

## Paper ID 607

**Record number:** 264  
**Paper ID:** 607  
**DOI:** 10.1109/ACCESS.2023.3331330  
**Publisher URL:** https://ieeexplore.ieee.org/document/10311559/

### Exact abstract

Based on deep neural network, elliptic partial differential equations in complex regions are solved. Accurate and effective strategies and numerical methods for elliptic partial differential equations are proposed by implementing deep feedforward artificial neural network, appropriate loss function solving strategy are constructed. The solution of an elliptic partial differential equation is obtained by iteratively learning the parameters of a neural network. Constructing a composite multi-layer radial basis function neural network can improve the real function approximation performance and operational accuracy of the constructed multi-layer radial basis function neural network. Use this high-precision composite multi-layer radial basis function neural network to solve partial differential equations. By providing specific examples of solving partial differential equations, the effectiveness of this method is tested. An improved partial differential equation solving method based on deep neural networks (Taylor PINN) has been proposed. This method utilizes the universal approximation theorem of deep neural networks and the function fitting ability of Taylor’s formula to achieve a meshless numerical solution process. The numerical experimental results on Helmholtz, Klein Gordon, and Navier Stokes equations show that Taylor PINN can well fit the mapping relationship between the coordinates of spatiotemporal points in the computational domain and the value of the desired function, which can provide accurate numerical prediction results. Compared with commonly used physical information based neural network methods, Taylor PINN improves prediction accuracy by 3-20 times for different numerical problems.

\---

## Paper ID 610

**Record number:** 265  
**Paper ID:** 610  
**DOI:** 10.1016/j.neunet.2024.106098  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0893608024000042

### Exact abstract

This paper proposes an improved version of physics-informed neural networks (PINNs), the physics-informed kernel function neural networks (PIKFNNs), to solve various linear and some specific nonlinear partial differential equations (PDEs). It can also be considered as a novel radial basis function neural network (RBFNN). In the proposed PIKFNNs, it employs one-hidden-layer shallow neural network with the physics-informed kernel functions (PIKFs) as the customized activation functions. The PIKFs fully or partially contain PDE information, which can be chosen as fundamental solutions, green’s functions, T-complete functions, harmonic functions, radial Trefftz functions, probability density functions and even the solutions of some linear simplified PDEs and so on. The main difference between the PINNs and the proposed PIKFNNs is that the PINNs add PDE constraints to the loss function, and the proposed PIKFNNs embed PDE information into the activation functions of the neural network. The feasibility and accuracy of the proposed PIKFNNs are validated by some benchmark examples.

\---

## Paper ID 611

**Record number:** 266  
**Paper ID:** 611  
**DOI:** 10.1109/lgrs.2023.3330774  
**Publisher URL:** https://ieeexplore.ieee.org/document/10310254/

### Exact abstract

The computation of the seismic wavefield by solving the Helmholtz equation is crucial to many practical applications, e.g., full waveform inversion (FWI). Physics-informed neural networks (PINNs) provide functional wavefield solutions represented by neural networks (NNs), but their convergence is slow. To address this problem, we propose a modified PINN using multiplicative filtered networks (MFNs), which embeds some of the known characteristics of the wavefield in training, e.g., frequency, to achieve much faster convergence. Specifically, we use the Gabor basis function due to its proven ability to represent wavefields accurately and refer to the implementation as GaborPINN. Meanwhile, we incorporate prior information on the frequency of the wavefield into the design of the method to mitigate the influence of the discontinuity of the represented wavefield by GaborPINN. The proposed method achieves up to a two-magnitude increase in the speed of convergence when compared with the conventional PINNs.

\---

## Paper ID 612

**Record number:** 267  
**Paper ID:** 612  
**DOI:** 10.1016/j.engappai.2023.107183  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0952197623013672

### Exact abstract

Physics-Informed Neural Networks (PINNs) and extended PINNs (XPINNs) have emerged as a promising approach in computational science and engineering for solving partial differential equations (PDEs) by combining the power of artificial intelligence (AI) with the underlying physics to accurately model and predict the solutions to complex problems in science and engineering. In this work, we propose the augmented physics-informed neural network (APINN), which adopts soft and trainable domain decomposition and flexible parameter sharing to further improve the extended PINN (XPINN) as well as the vanilla PINN methods. Concretely, a trainable gate network is employed to mimic the hard decomposition of XPINN, which can be flexibly fine-tuned for discovering a potentially better partition. The gate network satisfying the partition-ofunity property, weighted averages several sub-networks as the final output. APINN does not require complex interface conditions, whose sub-nets can utilize all training samples rather than just part of the training data in their subdomains. Lastly, each sub-net shares part of the common parameters to capture the similar components in each decomposed function. Furthermore, following the PINN generalization theory (Hu et al., 2022), APINN is shown to improve generalization by proper gate network initialization and general domain \& function decomposition. Extensive experiments on different partial differential equations (PDEs) demonstrate how APINN improves PINN and XPINN. Specifically, we present examples where XPINN performs similarly to or worse than PINN, so that APINN can significantly improve both. We also show cases where XPINN is already better than PINN, so APINN can still slightly improve XPINN. Furthermore, we visualize the optimized gating networks and their optimization trajectories, and connect them with their performance, which helps discover the possibly optimal decomposition. Interestingly, if initialized by different decomposition, the performances of corresponding APINNs can differ drastically. This, in turn, shows the potential to design an optimal domain decomposition for the PDE under consideration.

\---

## Paper ID 613

**Record number:** 268  
**Paper ID:** 613  
**DOI:** 10.1016/j.cnsns.2021.106041  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S1007570421003531

### Exact abstract

We introduce conditional PINNs (physics informed neural networks) for estimating the solution of classes of eigenvalue problems. The concept of PINNs is expanded to learn not only the solution of one particular differential equation but the solutions to a class of problems. We demonstrate this idea by estimating the coercive field of permanent magnets which depends on the width and strength of local defects. When the neural network incorporates the physics of magnetization reversal, training can be achieved in an unsupervised way. There is no need to generate labeled training data. The presented test cases have been rigorously studied in the past. Thus, a detailed and easy comparison with analytical solutions is made. We show that a single deep neural network can learn the solution of partial differential equations for an entire class of problems. The method is demonstrated for the computation of the nucleation field related to defects in magnetic materials, which is an important problem in classical micromagnetics. We show that a single neural network can predict the nucleation field depending on the properties of the defect such as the defect width and its local intrinsic magnetic properties.

\---

## Paper ID 614

**Record number:** 269  
**Paper ID:** 614  
**DOI:** 10.1016/j.jcp.2016.07.038  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999116303394

### Exact abstract

Despite their well-known limitations, Reynolds-Averaged Navier–Stokes (RANS) models are still the workhorse tools for turbulent flow simulations in today’s engineering analysis, design and optimization. While the predictive capability of RANS models depends on many factors, for many practical flows the turbulence models are by far the largest source of uncertainty. As RANS models are used in the design and safety evaluation of many missioncritical systems such as airplanes and nuclear power plants, quantifying their model-form uncertainties has significant implications in enabling risk-informed decision-making. In this work we develop a data-driven, physics-informed Bayesian framework for quantifying model-form uncertainties in RANS simulations. Uncertainties are introduced directly to the Reynolds stresses and are represented with compact parameterization accounting for empirical prior knowledge and physical constraints (e.g., realizability, smoothness, and symmetry). An iterative ensemble Kalman method is used to assimilate the prior knowledge and observation data in a Bayesian framework, and to propagate them to posterior distributions of velocities and other Quantities of Interest (QoIs). We use two representative cases, the flow over periodic hills and the flow in a square duct, to evaluate the performance of the proposed framework. Both cases are challenging for standard RANS turbulence models. Simulation results suggest that, even with very sparse observations, the obtained posterior mean velocities and other QoIs have significantly better agreement with the benchmark data compared to the baseline results. At most locations the posterior distribution adequately captures the true model error within the developed model form uncertainty bounds. The framework is a major improvement over existing black-box, physics-neutral methods for model-form uncertainty quantification, where prior knowledge and details of the models are not exploited. This approach has potential implications in many fields in which the governing equations are well understood but the model uncertainty comes from unresolved physical processes.

\---

## Paper ID 615

**Record number:** 270  
**Paper ID:** 615  
**DOI:** 10.1175/JHM-D-20-0082.1  
**Publisher URL:** https://journals.ametsoc.org/view/journals/hydr/aop/JHM-D-20-0082.1/JHM-D-20-0082.1.xml

### Exact abstract

Hydrologic predictions at rural watersheds are important but also challenging due to data shortage. Long short-term memory (LSTM) networks are a promising machine learning approach and have demonstrated good performance in streamflow predictions. However, due to its data-hungry nature, most LSTM applications focus on well-monitored catchments with abundant and high-quality observations. In this work, we investigate predictive capabilities of LSTM in poorly monitored watersheds with short observation records. To address three main challenges of LSTM applications in data-scarce locations, i.e., overfitting, uncertainty quantification (UQ), and out-of-distribution prediction, we evaluate different regularization techniques to prevent overfitting, apply a Bayesian LSTM for UQ, and introduce a physicsinformed hybrid LSTM to enhance out-of-distribution prediction. Through case studies in two diverse sets of catchments with and without snow influence, we demonstrate that 1) when hydrologic variability in the prediction period is similar to the calibration period, LSTM models can reasonably predict daily streamflow with Nash–Sutcliffe efficiency above 0.8, even with only 2 years of calibration data; 2) when the hydrologic variability in the prediction and calibration periods is dramatically different, LSTM alone does not predict well, but the hybrid model can improve the out-of-distribution prediction with acceptable generalization accuracy; 3) L2 norm penalty and dropout can mitigate overfitting, and Bayesian and hybrid LSTM have no overfitting; and 4) Bayesian LSTM provides useful uncertainty information to improve prediction understanding and credibility. These insights have vital implications for streamflow simulation in watersheds where data quality and availability are a critical issue.

\---

## Paper ID 617

**Record number:** 271  
**Paper ID:** 617  
**DOI:** 10.1016/j.ijmachtools.2021.103767  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0890695521000766

### Exact abstract

The accurate prediction of chatter stability in milling operations is a continuous pursuit of manufacturing engineering. Physical-based stability analysis methods suffer from inaccurate model parameters, while data-driven methods lack generalisability and physical interpretability. This study proposes a physics-informed Bayesian inference framework for milling stability analysis. The framework leverages experimental data to infer the distribution of model parameters for probabilistic stability lobe diagram (SLD) computation, thus maintaining the generalisability and interpretability of the physical model in a hybrid-driven manner. By defining a novel likelihood function based on the Floquet theory, the underlying connection between the model parameters and experimental cutting data is established. The uncertainties and variations of the model parameters can then be represented by the inferred probability density function, which can be used to generate a reliable probabilistic SLD. The experiments indicate that the proposed method has significant potential for improving the accuracy of milling stability prediction.

\---

## Paper ID 618

**Record number:** 272  
**Paper ID:** 618  
**DOI:** 10.1016/j.jcp.2023.112342  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999123004370

### Exact abstract

In this paper, we present a novel methodology for automatic adaptive weighting of Bayesian Physics-Informed Neural Networks (BPINNs), and we demonstrate that this makes it possible to robustly address multi-objective and multiscale problems. BPINNs are a popular framework for data assimilation, combining the constraints of Uncertainty Quantification (UQ) and Partial Differential Equation (PDE). The relative weights of the BPINN target distribution terms are directly related to the inherent uncertainty in the respective learning tasks. Yet, they are usually manually set a-priori, that can lead to pathological behavior, stability concerns, and to conflicts between tasks which are obstacles that have deterred the use of BPINNs for inverse problems with multiscale dynamics. The present weighting strategy automatically tunes the weights by considering the multitask nature of target posterior distribution. We show that this remedies the failure modes of BPINNs and provides efficient exploration of the optimal Pareto front. This leads to better convergence and stability of BPINN training while reducing sampling bias. The determined weights moreover carry information about task uncertainties, reflecting noise levels in the data and adequacy of the PDE model. We demonstrate this in numerical experiments in Sobolev training, and compare them to analytically ε-optimal baseline, and in a multiscale Lotka-Volterra inverse problem. We eventually apply this framework to an inpainting task and an inverse problem, involving latent field recovery for incompressible flow in complex geometries.

\---

## Paper ID 620

**Record number:** 273  
**Paper ID:** 620  
**DOI:** 10.1016/j.compgeo.2023.105328  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0266352X2300085X

### Exact abstract

A digital twin of a geotechnical project (e.g., a reclamation or ground improvement project) is a virtual model that aims to continuously learn from actual observations (e.g., site investigation and monitoring data) and improve model prediction (e.g., spatiotemporally varying consolidation settlement). However, real geotechnical observation data obtained from a site are often spatially sparse (e.g., site investigation data) and spatiotemporally varying (e.g., settlement monitoring data). The sparse and spatiotemporally varying data pose great challenges for continuous learning of data and improvement in model prediction. To address these challenges, this study proposes a novel data-driven and physics-informed Bayesian learning framework that automatically develops ground models from spatially sparse site investigation data, performs geotechnical analysis, and integrates geotechnical analysis results with limited, but spatiotemporally varying, settlement monitoring data to improve model prediction in a systematic and quantitative manner. The proposed method contains three key components, (1) data-driven ground modeling by Bayesian compressive sampling (BCS) using sparse site investigation data as input, (2) finite element modeling (FEM) of consolidation settlement that incorporates domain knowledge, and (3) Bayesian sparse dictionary learning of settlement monitoring data together with FEM results. The proposed method is illustrated using a real ground improvement project, and the results show that the proposed approach performs well.

\---

## Paper ID 622

**Record number:** 274  
**Paper ID:** 622  
**DOI:** 10.1190/GEO2021-0573.1  
**Publisher URL:** https://pubs.geoscienceworld.org/geophysics/article/87/6/T435/616339/Small-data-driven-fast-seismic-simulations-for

### Exact abstract

Deep learning (DL) seismic simulations have become a leading-edge field that could provide an effective alternative to traditional numerical solvers. We have developed a small-data-driven time-domain method for fast seismic simulations in complex media based on the physics-informed Fourier neural operator (FNO). Unlike most DL-based modeling schemes that either solve wave equations by embedding the physical constraints into the cost function or conduct physics-informed learning by incorporating the wave functions into convolutional neural networks (CNNs), the FNO uses a learning architecture similar to the structure of split-step Fourier wave propagators, which is composed of two CNNs formulated in the space and wavenumber domains, respectively. The space-domain CNN acts as a local trainable phase-screen compensation. The wavenumberdomain CNN represents a nonlocal spatial convolutional operator acting as a trainable wavenumber filter for the phase-shift process. The FNO method approximates the mathematicalphysical behavior of wave equations through learning the mapping between seismic wavefields at different time/locations from training seismic data. That is, the learning process parameterizes the integral kernel directly in the Fourier space, so that we can establish an expressive and efficient architecture for a better balance between accuracy and performance than the traditional spatial CNNs. Applications to gradient, layered, and Marmousi velocity models demonstrate its performance in accuracy and efficiency. The FNO seismic simulation is a data-driven method that needs a small amount of training data, especially when using blended source training data. It is a discretization-independent method that is not subject to the limitation of spatial sampling and time steps imposed on traditional numerical solvers, implying that the training data can be discretized arbitrarily. It also is a model-independent method that can include absorption attenuation into seismic modeling without the need of viscoelastic wave equations.

\---

## Paper ID 623

**Record number:** 275  
**Paper ID:** 623  
**DOI:** 10.1190/geo2023-0394.1  
**Publisher URL:** https://pubs.geoscienceworld.org/geophysics/article/89/3/T79/635648/Modeling-multisource-multifrequency-acoustic

### Exact abstract

To simulate seismic wavefields with a frequency-domain wave equation, conventional numerical methods must solve the equation sequentially to obtain the wavefields for different frequencies. The monofrequency equation has the form of a Helmholtz equation. When solving the Helmholtz equation for seismic wavefields with multiple frequencies, a physics-informed neural network (PINN) can be used. However, the PINN suffers from the problem of spectral bias when approximating high-frequency components. We propose to simulate seismic multifrequency wavefields using a PINN with an embedded Fourier feature. The input to the Fourier feature PINN for simulating multifrequency wavefields is 4-D, namely the horizontal and vertical spatial coordinates of the model, the horizontal position of the source, and the frequency, and the output is multifrequency wavefields at arbitrary source positions. While an effective Fourier feature initialization strategy can lead to optimal convergence in training this network, the Fourier feature PINN simulates multifrequency wavefields with reasonable efficiency and accuracy.

\---

## Paper ID 624

**Record number:** 276  
**Paper ID:** 624  
**DOI:** 10.1080/00295639.2023.2184194  
**Publisher URL:** https://www.tandfonline.com/doi/full/10.1080/00295639.2023.2184194

### Exact abstract

Typical machine learning (ML) methods are difficult to apply to radiation transport due to the large computational cost associated with simulating problems to create training data. Physics-informed Neural Networks (PiNNs) are a ML method that train a neural network with the residual of a governing equation as the loss function. This allows PiNNs to be trained in a low-data regime in the absence of (experimental or synthetic) data. PiNNs also are trained on points sampled within the phase-space volume of the problem, which means they are not required to be evaluated on a mesh, providing a distinct advantage in solving the linear Boltzmann transport equation, which is difficult to discretize. We have applied PiNNs to solve the streaming and interaction terms of the linear Boltzmann transport equation to create an accurate ML model that is wrapped inside a traditional source iteration process. We present an application of Fourier Features to PiNNs that yields good performance on heterogeneous problems. We also introduce a sampling method based on heuristics that improves the performance of PiNN simulations. The results are presented in a suite of one-dimensional radiation transport problems where PiNNs show very good agreement when compared to fine-mesh answers from traditional discretization techniques.

\---

## Paper ID 625

**Record number:** 277  
**Paper ID:** 625  
**DOI:** 10.1109/JMMCT.2023.3345798  
**Publisher URL:** https://ieeexplore.ieee.org/document/10372101/

### Exact abstract

We propose Physics-Informed Fourier Networks for Electrical Properties (EP) Tomography (PIFON-EPT), a novel deep learning-based method for EP reconstruction using noisy and/or incomplete magnetic resonance (MR) measurements. Our approach leverages the Helmholtz equation to constrain two networks, responsible for the denoising and completion of the transmit fields, and the estimation of the object’s EP, respectively. We embed a random Fourier features mapping into our networks to enable efficient learning of high-frequency details encoded in the transmit fields. We demonstrated the efficacy of PIFON-EPT through several simulated experiments at 3 and 7 tesla(T) MR imaging, and showed that our method can reconstruct physically consistent EP and transmit fields. Specifically, when only 20% of the noisy measured fields were used as inputs, PIFON-EPT reconstructed the EP of a phantom with ≤ 5% error, and denoised and completed the measurements with ≤ 1% error. Additionally, we adapted PIFON-EPT to solve the generalized Helmholtz equation that accounts for gradients of EP between inhomogeneities. This yielded improved results at interfaces between different materials without explicit knowledge of boundary conditions. PIFON-EPT is the first method that can simultaneously reconstruct EP and transmit fields from incomplete noisy MR measurements, providing new opportunities for EPT research.

\---

## Paper ID 626

**Record number:** 278  
**Paper ID:** 626  
**DOI:** 10.1016/j.ijheatmasstransfer.2024.126216  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0017931024010469

### Exact abstract

Non-Fourier heat conduction plays a dominant role in many extreme transient heat conduction processes, such as laser pulses and heat transfer in biological systems, but the heat wave effect makes it difficult to solve the temperature field accurately and quickly. In order to solve this problem, the first order time derivative enhanced parallel hard constraints physics-informed neural networks (T-phPINN) is proposed. T-phPINN comprises two subnetworks and incorporates a first order time derivative to capture sharp temperature changes. Two numerical cases show that the minimum relative error of T-phPINN is 0.001 % and 0.015 %, which is 1.04 % and 12.30 % of the error of conventional PINN respectively, proving the accuracy of our architecture. A transfer learning framework is established for scenarios of different parameters, the training only requires 1/6 iterations of the basic model, and close accuracy is obtained. The computational cost of T-phPINN is evaluated using the finite element method as the baseline. For the two cases, the single calculation time is 33.43 % and 51.50 % of the baseline, while the multiple calculation time under the acceleration of transfer learning is 11.59 % and 17.75 % of the baseline. This study will be helpful for solving large-scale non-Fourier heat conduction equations precisely and expeditiously.

\---

## Paper ID 627

**Record number:** 279  
**Paper ID:** 627  
**DOI:** 10.1016/j.jcp.2024.113012  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999124002614

### Exact abstract

Deep neural networks have garnered widespread attention due to their simplicity and flexibility in the fields of engineering and scientific calculation. In this study, we probe into solving a class of elliptic partial diﬀerential equations (PDEs) with multiple scales by utilizing Fourierbased mixed physics informed neural networks (dubbed FMPINN), its solver is configured as a multi-scale deep neural network. In contrast to the classical PINN method, a dual (flux) variable about the rough coefficient of PDEs is introduced to avoid the ill-condition of neural tangent kernel matrix caused by the oscillating coefficient of multi-scale PDEs. Therefore, apart from the physical conservation laws, the discrepancy between the auxiliary variables and the gradients of multi-scale coefficients is incorporated into the cost function, obtaining a satisfactory solution of PDEs by minimizing the defined loss through some optimization methods. Additionally, a trigonometric activation function is introduced for FMPINN, which is suited for representing the derivatives of complex target functions. Handling the input data by Fourier feature mapping will eﬀectively improve the capacity of deep neural networks to solve high-frequency problems. Finally, to validate the efficiency and robustness of the proposed FMPINN algorithm, we present several numerical examples of multi-scale problems in various dimensional Euclidean spaces. These examples cover low-frequency and high-frequency oscillation cases, demonstrating the eﬀectiveness of our approach. All code and data accompanying this manuscript will be publicly available at https://github.com/Blue-Giant/FMPINN.

\---

## Paper ID 628

**Record number:** 280  
**Paper ID:** 628  
**DOI:** 10.1016/j.cma.2020.113028  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782520302127

### Exact abstract

We propose a conservative physics-informed neural network (cPINN) on discrete domains for nonlinear conservation laws. Here, the term discrete domain represents the discrete sub-domains obtained after division of the computational domain, where PINN is applied and the conservation property of cPINN is obtained by enforcing the flux continuity in the strong form along the sub-domain interfaces. In case of hyperbolic conservation laws, the convective flux contributes at the interfaces, whereas in case of viscous conservation laws, both convective and diffusive fluxes contribute. Apart from the flux continuity condition, an average solution (given by two different neural networks) is also enforced at the common interface between two sub-domains. One can also employ a deep neural network in the domain, where the solution may have complex structure, whereas a shallow neural network can be used in the sub-domains with relatively simple and smooth solutions. Another advantage of the proposed method is the additional freedom it gives in terms of the choice of optimization algorithm and the various training parameters like residual points, activation function, width and depth of the network etc. Various forms of errors involved in cPINN such as optimization, generalization and approximation errors and their sources are discussed briefly. In cPINN, locally adaptive activation functions are used, hence training the model faster compared to its fixed counterparts. Both, forward and inverse problems are solved using the proposed method. Various test cases ranging from scalar nonlinear conservation laws like Burgers, Korteweg–de Vries (KdV) equations to systems of conservation laws, like compressible Euler equations are solved. The lid-driven cavity test case governed by incompressible Navier–Stokes equation is also solved and the results are compared against a benchmark solution. The proposed method enjoys the property of domain decomposition with separate neural networks in each sub-domain, and it efficiently lends itself to parallelized computation, where each sub-domain can be assigned to a different computational node.

\---

## Paper ID 629

**Record number:** 281  
**Paper ID:** 629  
**DOI:** 10.1016/j.chaos.2022.112143  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0960077922003538

### Exact abstract

In this work, based on the original physics-informed neural networks, we propose an improved physics-informed neural network method by combining the conservation laws. As one of the important integrable properties of nonlinear physical models, the conservation law can bring strong constraining force for the neural network to solve nonlinear physical models. Using this method, we study the standard nonlinear Schrödinger equation and predict various data-driven optical soliton solutions, including one-soliton, soliton molecules, two-soliton interaction, and rogue wave. In addition, from various exact solutions, we use the improved physics-informed neural network method to predict the dispersion and nonlinearity coefficients of the standard nonlinear Schrödinger equation based on the conservation law constraint. It turns out that the proposed method gives rise to the better results compared with the traditional physics-informed neural network method, and thus this method paves a way to simulate other physical models.

\---

## Paper ID 630

**Record number:** 282  
**Paper ID:** 630  
**DOI:** 10.1016/j.asoc.2021.108050  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S1568494621009662

### Exact abstract

The prohibitive cost and low fidelity of experimental data in industry-scale thermofluid systems limit the usefulness of pure data-driven machine learning methods. Physics-informed neural networks (PINN) strive to overcome this by embedding the physics equations in the construction of the neural network loss function. In the present paper, the mixed-variable PINN methodology is applied to develop steady-state and transient surrogate models of incompressible laminar flow with heat transfer through a 2D internal domain with obstructions. Automatic spatial and temporal differentiation is applied to the partial differential equations for mass, momentum and energy conservation, and the residuals are included in the loss function, together with the boundary and initial values. Good agreement is obtained between the PINN and CFD results for both the steady-state and transient cases, but normalization of the PDEs proves to be crucial. Although this proves the ability of the PINN approach to solve multiple physics-based PDEs on a single domain, the PINN takes significantly longer to solve than the traditional finite volume numerical methods utilized in commercial CFD software.

\---

## Paper ID 631

**Record number:** 283  
**Paper ID:** 631  
**DOI:** 10.1137/22M1522504  
**Publisher URL:** https://epubs.siam.org/doi/10.1137/22M1522504

### Exact abstract

. Physics informed neural networks (PINNs) require regularity of solutions of the underlying PDE to guarantee accurate approximation. Consequently, they may fail at approximating discontinuous solutions of PDEs such as nonlinear hyperbolic equations. To ameliorate this, we propose a novel variant of PINNs, termed as weak PINNs (wPINNs) for accurate approximation of entropy solutions of scalar conservation laws. wPINNs are based on approximating the solution of a min-max optimization problem for a residual, defined in terms of Kruzkhov entropies, to determine parameters for the neural networks approximating the entropy solution as well as test functions. We prove rigorous bounds on the error incurred by wPINNs and illustrate their performance through numerical experiments to demonstrate that wPINNs can approximate entropy solutions accurately.

\---

## Paper ID 632

**Record number:** 284  
**Paper ID:** 632  
**DOI:** 10.1007/s11071-023-08557-w  
**Publisher URL:** https://link.springer.com/10.1007/s11071-023-08557-w

### Exact abstract

The solution of the integrable Hirota equation has attracted considerable attention in the applications of nonlinear optics, electromagnetics, and many other natural sciences. In this paper, we propose an improved physics-informed neural network (IPINN) method to study numerical solutions of the Hirota equation, which embeds energy conservation laws into a traditional neural network through the Lax pair formulation. Our simulation results show that the proposed method can predict the solutions and parameters of the Hirota equation more accurately than the traditional physics-informed neural network method. In addition, the influence on the rogue wave solution for the Hirota equation of the three factors of the IPINN method that are, number of network layers and hidden layer neurons, sampling points, and noises, is also analyzed in detail. In our study, it is worth noting that the presented method can achieve good prediction with fewer training data and iterations.

\---

## Paper ID 634

**Record number:** 285  
**Paper ID:** 634  
**DOI:** 10.1093/gji/ggab309  
**Publisher URL:** https://academic.oup.com/gji/article/228/1/698/6348094

### Exact abstract

We introduce a scheme for probabilistic hypocentre inversion with Stein variational inference. Our approach uses a differentiable forward model in the form of a physics informed neural network, which we train to solve the Eikonal equation. This allows for rapid approximation of the posterior by iteratively optimizing a collection of particles against a kernelized Stein discrepancy. We show that the method is well-equipped to handle highly multimodal posterior distributions, which are common in hypocentral inverse problems. A suite of experiments is performed to examine the influence of the various hyperparameters. Once trained, the method is valid for any seismic network geometry within the study area without the need to build traveltime tables. We show that the computational demands scale efficiently with the number of differential times, making it ideal for large-N sensing technologies like Distributed Acoustic Sensing. The techniques outlined in this manuscript have considerable implications beyond just ray tracing procedures, with the work flow applicable to other fields with computationally expensive inversion procedures such as full waveform inversion.

\---

## Paper ID 635

**Record number:** 286  
**Paper ID:** 635  
**DOI:** 10.1016/j.cma.2022.115664  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782522006193

### Exact abstract

We propose a new class of physics-informed neural networks, called the Physics-Informed Variational Auto-Encoder (PI-VAE), to solve stochastic differential equations (SDEs) or inverse problems involving SDEs. In these problems the governing equations are known but only a limited number of measurements of system parameters are available. PI-VAE consists of a variational autoencoder (VAE), which generates samples of system variables and parameters. This generative model is integrated with the governing equations. In this integration, the derivatives of VAE outputs are readily calculated using automatic differentiation, and used in the physics-based loss term. In this work, the loss function is chosen to be the Maximum Mean Discrepancy (MMD) for improved performance, and neural network parameters are updated iteratively using the stochastic gradient descent algorithm. We first test the proposed method on approximating stochastic processes. Then we study three types of problems related to SDEs: forward and inverse problems together with mixed problems where system parameters and solutions are simultaneously calculated. The satisfactory accuracy and efficiency of the proposed method are numerically demonstrated in comparison with physics-informed Wasserstein generative adversarial network (PI-WGAN).

\---

## Paper ID 637

**Record number:** 287  
**Paper ID:** 637  
**DOI:** 10.1016/j.heliyon.2023.e18820  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2405844023060280

### Exact abstract

In this paper, we present and compare four methods to enforce Dirichlet boundary conditions in Physics-Informed Neural Networks (PINNs) and Variational Physics-Informed Neural Networks (VPINNs). Such conditions are usually imposed by adding penalization terms in the loss function and properly choosing the corresponding scaling coefficients; however, in practice, this requires an expensive tuning phase. We show through several numerical tests that modifying the output of the neural network to exactly match the prescribed values leads to more efficient and accurate solvers. The best results are achieved by exactly enforcing the Dirichlet boundary conditions by means of an approximate distance function. We also show that variationally imposing the Dirichlet boundary conditions via Nitsche’s method leads to suboptimal solvers.

\---

## Paper ID 638

**Record number:** 288  
**Paper ID:** 638  
**DOI:** 10.1016/j.eml.2023.102051  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2352431623000974

### Exact abstract

We propose a novel approach for tackling scientific problems governed by differential equations, based on the concept of a physics-informed neural networks (PINNs). The method involves evaluating the residuals of equations on subdomains of the computational zone via numerical integration. Test functions and integral weights are embedded within convolutional filters to extract information from these residuals. Our approach demonstrates exceptional parallel abilities when dealing with computational zones featuring large numbers of sub-domains, proving significantly more efficient than variational physics-informed neural networks with domain decomposition (hp-VPINNs). By utilizing domain decomposition, we can further enhance the precision of our predictions when dealing with complex functions. In comparison to PINNs, our approach boasts superior accuracy when fitting intricate functions. Additionally, we showcase the efficacy of our approach in solving inverse problems, such as identifying nonuniform damage distributions within materials. Our proposed approach offers tremendous potential for physics-informed neural networks to solve problems with complex geometries or nonlinearities that require decomposing the computational zone into numerous sub-domains.

\---

## Paper ID 639

**Record number:** 289  
**Paper ID:** 639  
**DOI:** 10.1063/5.0159224  
**Publisher URL:** https://pubs.aip.org/pof/article/35/7/073607/2902185/Radial-basis-function-differential-quadrature

### Exact abstract

In this work, a radial basis function differential quadrature-based physics-informed neural network (RBFDQ-PINN) is proposed to simulate steady incompressible flows. The conventional physics-informed neural network (PINN) makes use of the physical equation as a constraint to ensure that the solution satisfies the physical law and the automatic differentiation (AD) method to calculate derivatives at collocation points. Although the AD-PINN is expedient in evaluating derivatives at arbitrary points, it is time-consuming with higher-order derivatives and may lead to nonphysical solutions with sparse samples. Alternatively, the finite difference (FD) method can facilitate the calculation of derivatives, but the FD-PINN will increase the computational cost when handling random point distributions, especially with higher-order discretization schemes. To address these issues, the radial basis function differential quadrature (RBFDQ) method is incorporated into the PINN to replace the AD method for the calculation of derivatives. The RBFDQ method equips with high efficiency in the calculation of high-order derivatives as compared with the AD method and great flexibility in the distribution of mesh points as compared with the FD method. As a result, the proposed RBFDQ-PINN is not only more efficient and accurate but also applicable to irregular geometries. To demonstrate its effectiveness, the RBFDQ-PINN is tested in sample problems such as the lid-driven cavity flow, the channel flow over a backward-facing step, and the flow around a circular cylinder. Numerical results reveal that the RBFDQ-PINN achieves satisfactory accuracy without any labeled collocation points, whereas the AD-PINN struggles to solve some cases, especially for high Reynolds number flows.

\---

## Paper ID 641

**Record number:** 290  
**Paper ID:** 641  
**DOI:** 10.1134/S1063784223050018  
**Publisher URL:** https://link.springer.com/10.1134/S1063784223050018

### Exact abstract

Analysis of the possibilities of physics-informed neural networks intended for solution of boundary-value problems for partial differential equations is carried out. The possibilities of using radial basis-function networks as physics-informed neural networks are shown. Networks of radial basis functions for solving forward and inverse problems describing processes in piecewise homogeneous media have been proposed and investigated on model problems.

\---

## Paper ID 642

**Record number:** 291  
**Paper ID:** 642  
**DOI:** 10.1016/j.jcp.2019.109020  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999119307260

### Exact abstract

Currently the training of neural networks relies on data of comparable accuracy but in real applications only a very small set of high-fidelity data is available while inexpensive lower fidelity data may be plentiful. We propose a new composite neural network (NN) that can be trained based on multi-fidelity data. It is comprised of three NNs, with the first NN trained using the low-fidelity data and coupled to two high-fidelity NNs, one with activation functions and another one without, in order to discover and exploit nonlinear and linear correlations, respectively, between the low-fidelity and the high-fidelity data. We first demonstrate the accuracy of the new multi-fidelity NN for approximating some standard benchmark functions but also a 20-dimensional function that is not easy to approximate with other methods, e.g. Gaussian process regression. Subsequently, we extend the recently developed physics-informed neural networks (PINNs) to be trained with multi-fidelity data sets (MPINNs). MPINNs contain four fully-connected neural networks, where the first one approximates the low-fidelity data, while the second and third construct the correlation between the low- and high-fidelity data and produce the multi-fidelity approximation, which is then used in the last NN that encodes the partial differential equations (PDEs). Specifically, by decomposing the correlation into a linear and nonlinear part, the present model is capable of learning both the linear and complex nonlinear correlations between the low- and high-fidelity data adaptively. By training the MPINNs, we can: (1) obtain the correlation between the low- and high-fidelity data, (2) infer the quantities of interest based on a few scattered data, and (3) identify the unknown parameters in the PDEs. In particular, we employ the MPINNs to learn the hydraulic conductivity field for unsaturated flows as well as the reactive models for reactive transport. The results demonstrate that MPINNs can achieve relatively high accuracy based on a very small set of high-fidelity data. Despite the relatively low dimension and limited number of fidelities (two-fidelity levels) for the benchmark problems in the present study, the proposed model can be readily extended to very high-dimensional regression and classification problems involving multi-fidelity data.

\---

## Paper ID 644

**Record number:** 292  
**Paper ID:** 644  
**DOI:** 10.1016/j.physd.2023.133945  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0167278923002993

### Exact abstract

The paper proposes a deep learning method specifically dealing with the forward and inverse problem of variable coefficient partial differential equations – variable coefficient physics-informed neural network (VCPINN). The shortcut connections (ResNet structure) introduced into the network alleviate the ‘‘vanishing gradient’’ problem and unify linear and nonlinear coefficients. The developed method was applied to four equations including the variable coefficient Sine–Gordon (vSG), the generalized variable coefficient Kadomtsev–Petviashvili equation (gvKP), the variable coefficient Korteweg–de Vries equation (vKdV), the variable coefficient Sawada–Kotera equation (vSK). Numerical results show that VC-PINN is successful in the case of high dimensionality, various variable coefficients (polynomials, trigonometric functions, fractions, oscillation attenuation coefficients), and the coexistence of multiple variable coefficients. We also conducted an in-depth analysis of VC-PINN in a combination of theory and numerical experiments, including four aspects: the necessity of ResNet; the relationship between the convexity of variable coefficients and learning; anti-noise analysis; the unity of forward and inverse problems/relationship with standard PINN.

\---

## Paper ID 645

**Record number:** 293  
**Paper ID:** 645  
**DOI:** 10.3934/fods.2024029  
**Publisher URL:** https://www.aimsciences.org//article/doi/10.3934/fods.2024029

### Exact abstract

Physics-informed neural networks and operator networks have shown promise for effectively solving equations modeling physical systems. However, these networks can be difficult or impossible to train accurately for some systems of equations. We present a novel multifidelity framework for stacking physics-informed neural networks and operator networks that facilitates training. We successively build a chain of networks, where the output at one step can act as a low-fidelity input for training the next step, gradually increasing the expressivity of the learned model. The equations imposed at each step of the iterative process can be the same or different (akin to simulated annealing). The iterative (stacking) nature of the proposed method allows us to progressively learn features of a solution that are hard to learn directly. Through benchmark problems including a nonlinear pendulum, the wave equation, and the viscous Burgers equation, we show how stacking can be used to improve the accuracy and reduce the required size of physics-informed neural networks and operator networks.

\---

## Paper ID 646

**Record number:** 294  
**Paper ID:** 646  
**DOI:** 10.1029/2021JB023703  
**Publisher URL:** https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021JB023703

### Exact abstract

Seismic wave-equation based methods, for example, full waveform inversion, are currently used to illuminate the interior of Earth. Solving for the frequency-domain scattered wavefield via physics-informed neural network (PINN) has great potential in increasing the flexibility and reducing the computational cost of seismic modeling and inversion. However, when dealing with high-frequency wavefields using PINN, its accuracy and training cost limit its application. Thus, we propose a novel implementation of PINN using frequency upscaling and neuron splitting, which allows the neural network model to grow in size as we increase the frequency while leveraging the information from the pre-trained model for lower-frequency wavefields, resulting in fast convergence to highly accurate wavefield solutions. Numerical results show that, compared to the commonly used PINN with random initialization, the proposed PINN exhibits notable superiority in terms of convergence and accuracy and can achieve neuron based high-frequency wavefield solutions with a shallow model.

\---

## Paper ID 647

**Record number:** 295  
**Paper ID:** 647  
**DOI:** 10.4208/cicp.OA-2020-0164  
**Publisher URL:** https://global-sci.org/cicp/article/view/6911

### Exact abstract

We propose a generalized space-time domain decomposition framework for the physics-informed neural networks (PINNs) to solve nonlinear partial differential equations (PDEs) on arbitrary complex-geometry domains. The proposed framework, named eXtended PINNs (XPINNs), further pushes the boundaries of both PINNs as well as conservative PINNs (cPINNs), which is a recently proposed domain decomposition approach in the PINN framework tailored to conservation laws. Compared to PINN, the XPINN method has large representation and parallelization capacity due to the inherent property of deployment of multiple neural networks in the smaller subdomains. Unlike cPINN, XPINN can be extended to any type of PDEs. Moreover, the domain can be decomposed in any arbitrary way (in space and time), which is not possible in cPINN. Thus, XPINN offers both space and time parallelization, thereby reducing the training cost more effectively. In each subdomain, a separate neural network is employed with optimally selected hyperparameters, e.g., depth/width of the network, number and location of residual points, activation function, optimization method, etc. A deep network can be employed in a subdomain with complex solution, whereas a shallow neural network can be used in a subdomain with relatively simple and smooth solutions. We demonstrate the versatility of XPINN by solving both forward and inverse PDE problems, ranging from one-dimensional to three-dimensional problems, from timedependent to time-independent problems, and from continuous to discontinuous problems, which clearly shows that the XPINN method is promising in many practical problems. The proposed XPINN method is the generalization of PINN and cPINN approaches, both in terms of applicability as well as domain decomposition approach, which efficiently lends itself to parallelized computation. The XPINN code will be available on https://github.com/AmeyaJagtap/XPINNs.

\---

## Paper ID 650

**Record number:** 296  
**Paper ID:** 650  
**DOI:** 10.1016/j.jcp.2022.111768  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999122008312

### Exact abstract

Physics-informed neural networks (PINNs) are a recent trend in scientific machine learning research and modeling of differential equations. Despite progress in PINN research, large gradients and highly nonlinear patterns remain challenging to model. Thin boundary layer problems are prominent examples of large gradients that commonly arise in transport problems. In this study, boundary-layer PINN (BL-PINN) is proposed to enable a solution to thin boundary layers by considering them as a singular perturbation problem. Inspired by the classical perturbation theory and asymptotic expansions, BL-PINN is designed to replicate the procedure in singular perturbation theory. Namely, different parallel PINN networks are defined to represent different orders of approximation to the boundary layer problem in the inner and outer regions. In different benchmark problems (forward and inverse), BL-PINN shows superior performance compared to the traditional PINN approach and is able to produce accurate results, whereas the classical PINN approach could not provide meaningful solutions. BL-PINN also demonstrates significantly better results compared to other extensions of PINN such as the extended PINN (XPINN) approach. The natural incorporation of the perturbation parameter in BL-PINN provides the opportunity to evaluate parametric solutions without the need for retraining. BL-PINN demonstrates an example of how classical mathematical theory could be used to guide the design of deep neural networks for solving challenging problems.

\---

## Paper ID 652

**Record number:** 297  
**Paper ID:** 652  
**DOI:** 10.1016/j.rineng.2024.101931  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2590123024001841

### Exact abstract

Physics-Informed Neural Network (PINN) has emerged as a promising tool for solving various physical problems with diﬀerential equations. However in practice, PINN often suﬀers from the local minima issue while solving problems with minimal initial conditions. In this paper, we propose a robust Gated-PINN to address this issue, which blends numerical methods and PINN. The Gated-PINN overcomes the local minima issue by controlling the flow of information of the neural network similar to a numerical method. We first investigate the use of conventional PINN to the Cartesian-coordinate simple pendulum problem with minimal initial conditions, as one of basic diﬀerential algebraic equation (DAE) problem. Our results show the advantage of PINN over existing numerical methods in that it does not require sophisticated mathematical techniques such as index reduction. But we also observe that conventional PINN can lead to inaccurate solutions; such solutions partially satisfy the diﬀerential equation requirement, but does not meet the given initial condition and fail to further improve. We demonstrate the eﬀectiveness of the proposed Gated-PINN by showing that it yields accurate solutions, such that for a pendulum of length 1, the mean Euclidean error between the Gated-PINN model and the traditional numerical method model is less than 0.01 and pointwise maximum Euclidean error is less than 0.04. Moreover, Gated-PINN can operate without any complicated index reduction, and unlike conventional PINN, accurate solution can be obtained consistently without falling into a local minima. Overall, our study presents the potential of the Gated-PINN for solving DAE problems and provides a valuable insight into the challenges and limitations of using PINN for solving physical problems.

\---

## Paper ID 657

**Record number:** 298  
**Paper ID:** 657  
**DOI:** 10.1021/acsnano.0c05267  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acsnano.0c05267

### Exact abstract

Engineered point defects in two-dimensional (2D) materials oﬀer an attractive platform for solid-state devices that exploit tailored optoelectronic, quantum emission, and resistive properties. Naturally occurring defects are also unavoidably important contributors to material properties and performance. The immense variety and complexity of possible defects make it challenging to experimentally control, probe, or understand atomic-scale defect-property relationships. Here, we develop an approach based on deep transfer learning, machine learning, and first-principles calculations to rapidly predict key properties of point defects in 2D materials. We use physicsinformed featurization to generate a minimal description of defect structures and present a general picture of defects across materials systems. We identify over one hundred promising, unexplored dopant defect structures in layered metal chalcogenides, hexagonal nitrides, and metal halides. These defects are prime candidates for quantum emission, resistive switching, and neuromorphic computing.

\---

## Paper ID 659

**Record number:** 299  
**Paper ID:** 659  
**DOI:** 10.1016/j.engstruct.2024.118900  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0141029624014627

### Exact abstract

The physics-informed neural networks (PINNs), serving as the surrogate models, have emerged in the dynamic response prediction of nonlinear systems. However, in the conventional PINN model, the global differential equation of motion of the nonlinear system is directly integrated into the loss function, which requires the network to capture the intricate global dynamic evolution mechanism of the system and thus poses significant challenges for network learning. In this study, inspired by the explicit time-domain method (ETDM), a novel PINN based on ETDM, called E-PINN, is proposed to address the challenges arising from the network learning of the existing PINNs. A lightweight long short-term memory (LSTM) module is trained to learn the nonlinear evolution mechanism of restoring forces, while a single convolutional layer (SCL) module is utilized to reflect the linear evolution mechanism of the primary structure under the combined action of the external excitations and the nonlinear restoring forces. The weights of the SCL module can be directly retrieved from the discrete convolutional formulation of ETDM, and only the parameters in the LSTM module need to be optimized through a loss function solely based on the nonlinear restoring forces, thereby enabling easy network learning of the proposed E-PINN by decoupling the linear and nonlinear evolution mechanisms embedded in the nonlinear system. Three numerical examples are investigated by the present approach, and the results demonstrate the superior training efficiency and prediction accuracy of E-PINN in dynamic response prediction of nonlinear systems.

\---

## Paper ID 662

**Record number:** 300  
**Paper ID:** 662  
**DOI:** 10.1016/j.neunet.2020.08.017  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0893608020303063

### Exact abstract

We propose new symplectic networks (SympNets) for identifying Hamiltonian systems from data based on a composition of linear, activation and gradient modules. In particular, we define two classes of SympNets: the LA-SympNets composed of linear and activation modules, and the G-SympNets composed of gradient modules. Correspondingly, we prove two new universal approximation theorems that demonstrate that SympNets can approximate arbitrary symplectic maps based on appropriate activation functions. We then perform several experiments including the pendulum, double pendulum and three-body problems to investigate the expressivity and the generalization ability of SympNets. The simulation results show that even very small size SympNets can generalize well, and are able to handle both separable and non-separable Hamiltonian systems with data points resulting from short or long time steps. In all the test cases, SympNets outperform the baseline models, and are much faster in training and prediction. We also develop an extended version of SympNets to learn the dynamics from irregularly sampled data. This extended version of SympNets can be thought of as a universal model representing the solution to an arbitrary Hamiltonian system.

\---

## Paper ID 663

**Record number:** 301  
**Paper ID:** 663  
**DOI:** 10.1103/PhysRevResearch.4.023155  
**Publisher URL:** https://link.aps.org/doi/10.1103/PhysRevResearch.4.023155

### Exact abstract

The presence of decoherence in quantum computers necessitates the suppression of noise. Dynamically corrected gates via specially designed control pulses offer a path forward, but hardware-specific experimental constraints can cause complications. Existing methods to obtain smooth pulses are either restricted to two-level systems, require an optimization over noise realizations, or limited to piecewise-continuous pulse sequences. In this paper, we present the first general method for obtaining truly smooth pulses that minimizes sensitivity to noise, eliminating the need for sampling over noise realizations and making assumptions regarding the underlying statistics of the experimental noise. We parametrize the Hamiltonian using a neural network, which allows the use of a large number of optimization parameters to adequately explore the functional control space. We demonstrate the capability of our approach by finding smooth shapes, which suppress the effects of noise within the logical subspace as well as leakage out of that subspace.

\---

## Paper ID 664

**Record number:** 302  
**Paper ID:** 664  
**DOI:** 10.1103/PhysRevA.96.042113  
**Publisher URL:** https://link.aps.org/doi/10.1103/PhysRevA.96.042113

### Exact abstract

We have trained a deep (convolutional) neural network to predict the ground-state energy of an electron in four classes of confining two-dimensional electrostatic potentials. On randomly generated potentials, for which there is no analytic form for either the potential or the ground-state energy, the model was able to predict the ground-state energy to within chemical accuracy, with a median absolute error of 1.49 mHa. We also investigated the performance of the model in predicting other quantities such as the kinetic energy and the first excited-state energy.

\---

## Paper ID 665

**Record number:** 303  
**Paper ID:** 665  
**DOI:** 10.1021/acs.jctc.1c00904  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acs.jctc.1c00904

### Exact abstract

Machine learning (ML) has recently gained attention as a means to develop more accurate exchange-correlation (XC) functionals for density functional theory, but functionals developed thus far need to be improved on several metrics, including accuracy, numerical stability, and transferability across chemical space. In this work, we introduce a set of nonlocal features of the density called the CIDER formalism, which we use to train a Gaussian process model for the exchange energy that obeys the critical uniform scaling rule for exchange. The resulting CIDER exchange functional is significantly more accurate than any semi-local functional tested here, and it has good transferability across main-group molecules. This work therefore serves as an initial step toward more accurate exchange functionals, and it also introduces useful techniques for developing robust, physics-informed XC models via ML.

\---

## Paper ID 666

**Record number:** 304  
**Paper ID:** 666  
**DOI:** 10.1016/j.engappai.2023.106127  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0952197623003111

### Exact abstract

The current use of physical constraints as prior knowledge of neural network models is a new frontier for artificial intelligence to solve complex nonlinear system predictions. Aiming at the problems of limited feature expression and low time-domain computational efficiency of existing physical-constrained neural networks, a physical informed neural network (PINN) modeling approach in frequency domain for nonlinear system dynamic prediction is proposed. First, the frequency-domain physics-constrained neural network (FPNN) framework is constructed, which mainly consists of CliqueNet and Fourier spectral method (FSM). Then, the CliqueNet with convolution feature cyclic structure for high dimensional sequential data is designed. There are forward and backward connections between any two layers of the network to improve the cross-level information flow of the deep network. Finally, FSM is utilized to inform the neural network of physical states by learning specific initial conditions without training data. Simulation results show that FPNN can effectively achieve Kuramoto–Sivashinsky complex system state prediction, with higher computational efficiency and faster learning efficiency compared with SOTA approaches.

\---

## Paper ID 667

**Record number:** 305  
**Paper ID:** 667  
**DOI:** 10.1016/j.jmps.2022.105177  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0022509622003532

### Exact abstract

Physics-informed neural networks (PINN) can solve partial differential equations (PDEs) by encoding the mathematical information explicitly into the loss functions. In the context of plasticity, discussions of PINN have only focused on small-strain formulations. We present a framework of finite-strain elasto-plasticity for PINN, considering rate-independent isotropic hardening in this work. Details of the model architecture are discussed, including inputs and outputs of the neural network and the construction of the loss function that incorporates equilibrium equations, boundary conditions and constitutive relations. In addition, the overall architecture can learn the constitutive relations from discrete measurements on a stress– strain curve, hence eliminating the need for modeling hardening law in the formulation. We demonstrate the performance of PINN through a numerical example that includes a multi-step loading and unloading history. Moreover, we assess the performance of PINN in terms of its accuracy and robustness under mesh refinement and as a function of the network architecture design. Displacement, Cauchy stress and accumulated plastic strain fields are compared to the finite element results for the same problem for the purposes of this assessment, which is intended to provide insight and guidance for the future designs of PINN for plasticity and related problems in solid mechanics.

\---

## Paper ID 670

**Record number:** 306  
**Paper ID:** 670  
**DOI:** 10.1016/j.cma.2023.116401  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S004578252300525X

### Exact abstract

Physics-Informed Neural Networks (PINNs) have recently gained increasing attention in the field of topology optimization. The fusion of deep learning and topology optimization has emerged as a prominent area of insightful research, where minimization of the loss function in neural networks can be comparable to minimization of the objective function in topology optimization. Inspired by concepts of PINNs, this paper proposes a novel framework, ‘Complete PhysicsInformed Neural Network-based Topology Optimization (CPINNTO)’, to address various challenges in topology optimization, particularly related to structural optimization. The key innovation of the proposed framework lies in introducing the first complete machine-learning-based topology optimization framework through integration of two distinct PINNs. Herein, the Deep Energy Method (DEM) PINN is implemented to determine the deformation state of corresponding structures numerically. In addition, derivation of the objective function with respect to design variables is replaced with automatic differentiation in sensitivity-analysis PINN (S-PINN). The feasibility and potential of the CPINNTO framework have been assessed through several case studies while highlighting strengths and limitations of utilizing PINNs in topology optimization. Subsequent findings indicate that CPINNTO can achieve optimal topologies without labeled data nor FEA. The numerical examples demonstrate that CPINNTO is capable of stably obtaining optimal structures for various topology optimization applications, including compliance minimization problems, multi-constrained problems, and three-dimensional problems. Resulting designs exhibit favorable compliance values comparable to the designs obtained via densitybased topology optimization. In summary, the proposed CPINNTO framework opens up novel and interesting possibilities for structural topology optimization.

\---

## Paper ID 671

**Record number:** 307  
**Paper ID:** 671  
**DOI:** 10.1007/s00158-024-03856-1  
**Publisher URL:** https://link.springer.com/10.1007/s00158-024-03856-1

### Exact abstract

In this paper, we introduce a Physics-Informed Neural Networks (PINNs)-based Topology optimization method that is free from the usual finite element analysis and is applicable for both self-adjoint and non-self-adjoint problems. This approach leverages the continuous formulation of TO along with the continuous adjoint method to obtain sensitivity. Within this approach, the Deep Energy Method (DEM)—a variant of PINN-completely supersedes traditional PDE solution procedures such as a finite-element method (FEM) based solution process. We demonstrate the efficacy of the DEM-based TO framework through three benchmark TO problems: the design of a conduction-based heat sink, a compliant displacement inverter, and a compliant gripper. The results indicate that the DEM-based TO can generate optimal designs comparable to those produced by traditional FEM-based TO methods. Notably, our DEM-based TO process does not rely on FEM discretization for either state solution or sensitivity analysis. During DEM training, we obtain spatial derivatives based on Automatic Diﬀerentiation (AD) and dynamic sampling of collocation points, as opposed to the interpolated spatial derivatives from finite element shape functions or a static collocation point set. We demonstrate that, for the DEM method, when using AD to obtain spatial derivatives, an integration point set of fixed positions causes the energy loss function to be not lower-bounded. However, using a dynamically changing integration point set can resolve this issue. Additionally, we explore the impact of incorporating Fourier Feature input embedding to enhance the accuracy of DEM-based state analysis within the TO context. The source codes related to this study are available in the GitHub repository: https:// github. com/ xzhao 399/ DEM\_ TO. git.

\---

## Paper ID 673

**Record number:** 308  
**Paper ID:** 673  
**DOI:** 10.1016/j.cma.2025.118043  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782525003159

### Exact abstract

The application of geometrically nonlinear topology optimization (GNTO) poses a substantial challenge due to the extensive memory requirements and prohibitive computational demands involved. To tackle this challenge, a discrete physics-informed neural network (dPINN) is suggested as a promising approach to alleviate computational demands and enhance the applicability to large-scale problems. In comparison to collocation point-based PINNs, the most distinctive characteristic of dPINN is its mesh-based local interpolation for the evaluation of the system energy. This approach not only circumvents the issue of material mapping between elements and collocation points, but also provides improved robustness. Moreover, the partial differential equation (PDE) that corresponds to the adjoint equations lacks explicit expressions. The dPINN is capable of naturally evaluating equivalent energy through discrete expressions, a capability that collocation point-based PINNs lack. Furthermore, the activation state of sub-networks in series is determined in accordance with the density variation, thereby saving computational costs by dynamically incorporating each sub-network to reduce the trainable parameters in certain optimization steps, while conserving computational resources. The dPINN demonstrates exceptional accuracy and efficiency, along with enhanced resilience against mesh distortion compared to the finite element method (FEM), thereby enabling the application of larger loads. The dPINN-based GNTO is validated to be robust with regard to different geometries, loads, and volume fractions through several examples, and the outcomes are largely consistent with those of the FEM-based approach. Of greater significance is the fact that dPINN is capable of solving a million-DOFs 3D GNTO problem, which represents a notable advantage.

\---

## Paper ID 674

**Record number:** 309  
**Paper ID:** 674  
**DOI:** 10.1016/j.euromechsol.2022.104889  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0997753822003199

### Exact abstract

In this study, a physics-informed neural network (MFLP-PINN), combining multiaxial fatigue critical plane model and the neural network, is proposed for life prediction. First, a multiaxial fatigue life prediction model based on the critical plane approach is proposed, which takes the equivalent strain amplitude on the critical plane as the main damage parameter, and considers the normal strain energy on the critical plane. Then, a total of four prediction models including the new critical plane model are integrated into the loss function of a neural network to build the MFLP-PINN. The accuracy of the proposed critical plane criterion and the MFLP-PINN are respectively verified using multiaxial fatigue test data of three materials. Finally, the results show that the prediction model integrated into the loss function has a significant impact on the neural network prediction. For a specific material, integrating a life prediction model with good prediction ability to this material as the loss function into a neural network model is helpful to improve prediction accuracy. Conversely, integrating a life prediction model with poor prediction ability to this material as the loss function into a neural network model will reduce the prediction accuracy.

\---

## Paper ID 676

**Record number:** 310  
**Paper ID:** 676  
**DOI:** 10.1016/j.engfracmech.2023.109630  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S001379442300588X

### Exact abstract

The research on life prediction for mechanical structures in very high cycle fatigue regime is pivotal to improve structure service, but it can be costly and time-consuming to collect fatigue data. In response, the data-driven approach of machine learning emerged as a solution to data insufficiency. In this work, after extracting a small dataset of GCr15 bearing steel subjected to very high cycle fatigue tests from open literature, the Z-parameter model was applied to obtain extended datasets to establish models driven by support vector machine, artificial neural network, and Z-parameter based physics-informed neural network, respectively. With training on extended datasets and the original data as test set, fatigue life prediction for GCr15 steel was carried out and evaluated between these models. Results showed that the physics-informed neural network calibrated by Z-parameter model trained on a larger dataset featured more accurate and reliable prediction than other models did, which demonstrated effectiveness of Z-parameter in data extension and model construction as priori physics knowledge for a data-driven approach. Looking into the future, Z-parameter model deserves more attention to its employment in life prediction for more engineering materials and structures serving in the very high cycle fatigue regime.

\---

## Paper ID 677

**Record number:** 311  
**Paper ID:** 677  
**DOI:** 10.1016/j.jmatprotec.2022.117550  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0924013622000620

### Exact abstract

In this work we accomplished the monitoring and prediction of porosity in laser powder bed fusion (LPBF) additive manufacturing process. This objective was realized by extracting physics-informed meltpool signatures from an in-situ dual-wavelength imaging pyrometer, and subsequently, analyzing these signatures via computationally tractable machine learning approaches. Porosity in LPBF occurs despite extensive optimization of processing conditions due to stochastic causes. Hence, it is essential to continually monitor the process with in- situ sensors for detecting and mitigating incipient pore formation. In this work a tall cuboid-shaped part (10 mm × 10 mm × 137 mm, material ATI 718Plus) was built with controlled porosity by varying laser power and scanning speed. This test caused various types of porosity, such as lack-of-fusion and keyhole formation, with varying degrees of severity in the part. The meltpool was continuously monitored using a dual-wavelength imaging pyrometer installed in the machine. Physically intuitive process signatures, such as meltpool length, temperature distribution, and ejecta (spatter) characteristics, were extracted from the meltpool images. Subsequently, relatively simple machine learning models, e.g., K-Nearest Neighbors, were trained to predict both the severity and type of porosity as a function of these physics-informed meltpool signatures. These models resulted in a prediction accuracy exceeding 95% (statistical F1-score). The same analysis was carried out with a complex, black-box deep learning convolutional neural network which directly used the meltpool images instead of physics-informed features. The convolutional neural network produced a comparable F1-score in the range of 89–97%. These results demonstrate that using pragmatic, physics-informed meltpool signatures within a simple machine learning model is as effective for flaw prediction in LPBF as using a complex and computationally demanding black-box deep learning model.

\---

## Paper ID 678

**Record number:** 312  
**Paper ID:** 678  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

This paper focuses on inner defect detection with outside inspection data for linearly elastic square solid material. We transform this inner defect detection problem into an inverse problem for partial differential equations, which is generally time consuming for traditional computation algorithms. For efficiency, we introduced physics-informed neural networks (PINN) to solve the inverse problem in a purely data-driven way, where the loss function is constructed by considering the boundary condition, the equation, and the inspection data. In the simulation study, a defect (a hole) is preset and PINN performs well to search for the preset defect, allowing the exact defect location accurately and quickly.

\---

## Paper ID 679

**Record number:** 313  
**Paper ID:** 679  
**DOI:** 10.1098/rsta.2022.0387  
**Publisher URL:** https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0387

### Exact abstract

Magnetic flux leakage (MFL) is a magnetic method of non-destructive testing for in-pipe defect detection and sizing. Despite the fact that recent developments in machine learning have revolutionized disciplines like MFL defect size estimation, the most current methods for quantifying pipeline defects are primarily data-driven, which may violate the underlying physical knowledge. This paper proposes a physicsinformed neural network-based method for MFL defect size estimation. The training process of neural network is guided by the MFL data and the physical constraints that is mathematically represented by the magnetic dipole model. We use synthetic MFL data produced by a virtual MFL testing of pipeline defects to validate the proposed method through a comparison to purely data-driven neural networks and support vector machines. The findings imply that the physics-informed strategy can both improve predictive accuracy and mitigate physical violations in MFL testing, providing us with a better knowledge of how neural networks perform in defect size estimation.

\---

## Paper ID 680

**Record number:** 314  
**Paper ID:** 680  
**DOI:** 10.1177/14759217241289575  
**Publisher URL:** https://journals.sagepub.com/doi/10.1177/14759217241289575

### Exact abstract

Recent advancements in machine learning and artificial neural network algorithms have created new opportunities for expanding sparse measurements to full-field representations. However, these methods often face accuracy challenges when used for condition monitoring of physical systems. For example, traditional autoencoders can capture complex phenomena and their underlying physics in the latent space, but due to their frequentist nature, they lack generative and damage detection capabilities. To address these challenges, a novel physics-informed variational autoencoder (PI-VAE) network is proposed for expanding sparse measurements to full-field representations while also detecting damage. The effectiveness of the proposed PI-VAE network is evaluated through analytical and experimental studies on a metal plate under thermal excitation with embedded defects of various sizes and types. In the analytical studies using finite-element model data, the PI-VAE accurately expanded full-field temperature distributions and identified the dimensions of cracks, spalling, and hole-like defects with errors smaller than 5%. When tested with experimental data, the PI-VAE network maintained robust performance, detecting damage with errors smaller than 6%, despite being trained on undamaged data only. These findings demonstrate the PI-VAE’s potential as a reliable tool for full-field expansion and damage detection in structural health monitoring and nondestructive evaluation, even when limited sensors and datasets are available.

\---

## Paper ID 681

**Record number:** 315  
**Paper ID:** 681  
**DOI:** 10.1098/rsta.2022.0386  
**Publisher URL:** https://royalsocietypublishing.org/doi/10.1098/rsta.2022.0386

### Exact abstract

Additive manufacturing (AM) has attracted many attentions because of its design freedom and rapid manufacturing; however, it is still limited in actual application due to the existing defects. In particular, various defect features have been proved to affect the fatigue performance of components and lead to fatigue scatter. In order to properly assess the influences of these defect features, a defect driven physics-informed neural network (PiNN) is developed. By embedding the critical defects information into loss functions, the defect driven PiNN is enhanced to capture physical information during training progress. The results of fatigue life prediction for different AM materials show that the proposed PiNN effectively improves the generalization ability under small samples condition. Compared with the fracture mechanics-based PiNN, the proposed PiNN provides physically consistent and higher accuracy without depending on the choice of fracture mechanics-based model. Moreover, this work provides a scalable framework being able to integrate more prior knowledge into the proposed PiNN.

\---

## Paper ID 682

**Record number:** 316  
**Paper ID:** 682  
**DOI:** 10.1016/j.engfracmech.2023.109351  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0013794423003090

### Exact abstract

In this article, a machine learning approach is utilized to predict lifetime under multiaxial fatigue loading. A novel hybrid physics-informed neural network is proposed, where a combination of a LSTM/GRU cell and a fully connected layer is used to extract the damage parameter of a loading cycle. A newly proposed logarithmic activation function is then used to introduce the power law relationship between the damage parameter and the predicted fatigue life. In addition, the selected parameters of the suggested network are physically guided. Two data pre-processing methods are used to ascertain the rotational invariance of the axial–torsional loading conditions. The prediction capability of the suggested approach is demonstrated by the experimental datasets that consist of axial–torsional test results obtained for 42CrMo4 steel and for 2024-T3 aluminium alloy. A good correlation between the predicted and experimental data was achieved. Finally, the extrapolation capability of the proposed approach is demonstrated through modelling the stress-life curves for the data-points outside the experimental data range.

\---

## Paper ID 686

**Record number:** 317  
**Paper ID:** 686  
**DOI:** 10.1016/j.cpc.2025.109672  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0010465525001742

### Exact abstract

We present TSA-PINN, a novel Physics-Informed Neural Network (PINN) that leverages a Trainable Sinusoidal Activation (TSA) mechanism to approximate solutions to the Navier-Stokes equations. By incorporating neuronwise sinusoidal activation functions with trainable frequencies and a dynamic slope recovery mechanism, TSAPINN achieves superior accuracy and convergence. Its ability to dynamically adjust activation frequencies enables efficient modeling of complex fluid behaviors, reducing training time and computational cost. Our testing goes beyond canonical problems, to study less-explored and more challenging scenarios, which have typically posed difficulties for prior models. Various numerical tests underscore the efficacy of the TSA-PINN model across five diﬀerent scenarios. These include steady-state two-dimensional flows in a lid-driven cavity at two diﬀerent Reynolds numbers; a cylinder wake problem characterized by oscillatory fluid behavior; and two time-dependent three-dimensional turbulent flow cases. In the turbulent cases, the focus is on detailed near-wall phenomenaincluding the viscous sub-layer, buffer layer, and log-law region—as well as the complex interactions among eddies of various scales. Both numerical and quantitative analyses demonstrate that TSA-PINN oﬀers substantial improvements over conventional PINN models. This research advances physics-informed machine learning, setting a new benchmark for modeling dynamic systems in scientific computing and engineering.

\---

## Paper ID 689

**Record number:** 318  
**Paper ID:** 689  
**DOI:** 10.1017/jfm.2021.135  
**Publisher URL:** https://www.cambridge.org/core/product/identifier/S002211202100135X/type/journal\_article

### Exact abstract

Tomographic background oriented Schlieren (Tomo-BOS) imaging measures density or temperature fields in three dimensions using multiple camera BOS projections, and is particularly useful for instantaneous flow visualizations of complex fluid dynamics problems. We propose a new method based on physics-informed neural networks (PINNs) to infer the full continuous three-dimensional (3-D) velocity and pressure fields from snapshots of 3-D temperature fields obtained by Tomo-BOS imaging. The PINNs seamlessly integrate the underlying physics of the observed fluid flow and the visualization data, hence enabling the inference of latent quantities using limited experimental data. In this hidden fluid mechanics paradigm, we train the neural network by minimizing a loss function composed of a data mismatch term and residual terms associated with the coupled Navier–Stokes and heat transfer equations. We first quantify the accuracy of the proposed method based on a two-dimensional synthetic data set for buoyancy-driven flow, and subsequently apply it to the Tomo-BOS data set, where we are able to infer the instantaneous velocity and pressure fields of the flow over an espresso cup based only on the temperature field provided by the Tomo-BOS imaging. Moreover, we conduct an independent PIV experiment to validate the PINN inference for the unsteady velocity field at a centre plane. To explain the observed flow physics, we also perform systematic PINN simulations at different Reynolds and Richardson numbers and quantify the variations in velocity and pressure fields. The results in this paper indicate that the proposed deep learning technique can become a promising direction in experimental fluid mechanics.

\---

## Paper ID 690

**Record number:** 319  
**Paper ID:** 690  
**DOI:** 10.1016/j.compfluid.2023.106025  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045793023002505

### Exact abstract

Recently, Physics-informed neural networks (PINNs) have proven to be an efficient machine-learning method for solving partial differential equations. However, this method can be quite challenging when solving complex problems with shock/material discontinuities or multi-scale features, such as turbulence. In this paper, we propose an improved PINNs framework for solving the Reynolds-averaged Navier–Stokes (RANS) equations for turbulent mixing induced by the Rayleigh–Taylor (RT) instability. The RANS model is based on the closure form of the K–L model. However, the transport equations of the turbulent kinetic energy K and turbulent length scale L are not included and are instead predicted directly by neural networks, thus resulting in an inverse problem. Several modifications are made to the original PINNs to improve its applicability to RT turbulent mixing and accelerate the training optimization process. We first examine the applicability of the PINNs for solving multi-material Euler equations without considering turbulence. Then, PINNs is applied to the RT turbulent mixing problem using training data from the traditional K–L model. The results confirm the ability of the PINNs to predict the entire spatiotemporal field using limited training data. Next, we further train the PINNs using data from the implicit large eddy simulation (ILES), which yields a PINN-based turbulence model that performs better than the traditional K–L model. These results shed light on further applications of PINNs for complex problems, particularly those with limited measurement data and unknown physical models.

\---

## Paper ID 692

**Record number:** 320  
**Paper ID:** 692  
**DOI:** 10.1016/j.ijnonlinmec.2024.104988  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0020746224003536

### Exact abstract

Physics-informed neural networks (PINNs) demonstrated efficacy in approximating partial differential equations (PDEs). However, challenges arise when dealing with high-dimensional PDEs, particularly when characterized by nonlinear and chaotic behavior, such as turbulent fluid flows. We introduce a novel methodology that integrates domain discretization, a generative model in the Sobolev function space (𝐻1), and a gating mechanism to effectively simulate high dimensional problems. The effectiveness of the method, Discretized Generative Model Physics-Informed Neural Networks (DG-PINN), is validated by its application to the simulation of a time-dependent 3D turbulent channel flow governed by the incompressible Navier–Stokes equations, a less explored problem in the existing literature. Domain discretization prevents error propagation by using different neural network models in different subdomains. The absence of initial conditions (IC) in subsequent time steps presents a challenge in identifying optimal network parameters. To address this, discretized generative models are used, improving the model’s overall performance. The global solutions’ regularity is enhanced compared to previous decomposition techniques by using the 𝐻1 norm of error, rather than 𝐿2. The effectiveness of the DG-PINN is validated through numerical test cases and compared against baseline PINNs and traditional domain decomposition PINNs. The DG-PINN demonstrates improvement in both approximation accuracy and computational efficiency, consistently maintaining accuracy even at later time instances. Moreover, the implementation of a distributed training strategy, facilitated by domain discretization, is discussed, resulting in improved convergence rates and more optimized memory usage.

\---

## Paper ID 693

**Record number:** 321  
**Paper ID:** 693  
**DOI:** 10.1016/j.jcp.2025.114125  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999125004085

### Exact abstract

Acquisition of large datasets for three-dimensional (3D) partial diﬀerential equations (PDE) is usually very expensive. Physics-informed neural operator (PINO) eliminates the high costs associated with generation of training datasets, and shows great potential in a variety of partial diﬀerential equations. In this work, we employ physics-informed neural operator, encoding the large-eddy simulation (LES) equations directly into the neural operator for simulating three-dimensional incompressible turbulent flows. We develop the LESnets (Large-Eddy Simulation nets) by adding large-eddy simulation equations to two diﬀerent data-driven models, including Fourier neural operator (FNO) and implicit Fourier neural operator (IFNO) without using label data. Notably, by leveraging only PDE constraints to learn the spatio-temporal dynamics, LESnets models retain the computational efficiency of data-driven approaches while obviating the necessity for data. Meanwhile, using LES equations as PDE constraints makes it possible to efficiently predict complex turbulence at coarse grids. We investigate the performance of the LESnets models with two standard three-dimensional turbulent flows: decaying homogeneous isotropic turbulence and temporally evolving turbulent mixing layer. In the numerical experiments, the LESnets models show similar accuracy as compared to traditional large-eddy simulation and data-driven models including FNO and IFNO, and exhibits a robust generalization ability to unseen regime of flow fields. By integrating a single set of flow data, the LESnets models can automatically learn the coefficient of the subgrid scale (SGS) model during the training of the neural operator. Moreover, the well-trained LESnets models are significantly faster than traditional LES, and exhibits comparable computational efficiency to the data-driven FNO and IFNO models. Thus, physics-informed neural operators have a strong potential for 3D nonlinear engineering applications.

\---

## Paper ID 694

**Record number:** 322  
**Paper ID:** 694  
**DOI:** 10.2514/1.J063570  
**Publisher URL:** https://arc.aiaa.org/doi/10.2514/1.J063570

### Exact abstract

Physics-informed neural networks (PINNs) are a class of scientific machine learning that utilizes differential equations in loss formulations to model physical quantities. Despite recent developments, complex phenomena such as high-Reynolds-number (high-𝑅⁢𝑒) flow remain a modeling challenge without the use of high-fidelity inputs. In this study, a low-fidelity-influenced physics-informed neural network (LF-PINN) is proposed as a surrogate aerodynamic analysis model for inverse airfoil shape design at 𝑅⁢𝑒=1.0×106. The LF-PINN is developed in a hybrid approach using low-fidelity flowfields approximated from a viscous-inviscid coupled airfoil analysis tool (mfoil) and physics residuals from the steady, incompressible, two-dimensional Navier–Stokes (NS) equations. The approach is designed to alleviate offline computational costs by avoiding high-fidelity simulations and sustain predicting accuracy using corrections by the physics residuals. The LF-PINN is able to correct the low-fidelity flowfield quantities toward the ground truth, with a mean improvement of about 19% in pressure and about 5% in total velocity based on Euclidean distance comparisons. Evaluation of the airfoil surface pressure coefficient 𝐶𝑝 distributions shows corrections by the LF-PINN at the suction peak, which largely contributes to lifting forces. Inverse airfoil shape design is conducted using target 𝐶𝑝 distributions in the objective function, whereby the LF-PINN can approach the expected target shapes while reducing online computational time by at least an order of magnitude compared to direct airfoil analysis tools.

\---

## Paper ID 695

**Record number:** 323  
**Paper ID:** 695  
**DOI:** 10.1080/19942060.2024.2445144  
**Publisher URL:** https://www.tandfonline.com/doi/full/10.1080/19942060.2024.2445144

### Exact abstract

Shape optimization of airfoils is crucial for enhancing the aerodynamic performance of large blades. Nowadays, the integration of computational fluid dynamics and intelligent optimization algorithm has become the dominant approach for airfoil shape optimization. However, this kind of method still faces the challenges of high-dimensional design space and high cost of performance evaluation. In this work, a novel approach was proposed to optimize the shape of airfoils and achieve a highlift-dragratio.Theapproachintegratesconvolutionalneuralnetworks(CNNs),physics-informed neural networks (PINNs), and deep reinforcement learning (DRL) techniques. CNNs extract image features from airfoils and compress their shapes into six parameters. This significantly reduces the number of fitting parameters of airfoils and provides a low-dimensional design space. A PINN-based approach is utilized to evaluate the aerodynamic performance, addressing issues of collapse and non-convergence often encountered in the traditional Xfoil method. Deep reinforcement learning (DRL) is employed to integrate parameter dimensionality reduction and airfoil performance evaluation methods, identifying optimal solutions and facilitating algorithm transferability. The results demonstrate an enhanced lift-drag ratio for airfoils, and the proximal policy optimization (PPO) strategy improves the stability of the optimization algorithms.

\---

## Paper ID 696

**Record number:** 324  
**Paper ID:** 696  
**DOI:** 10.1063/5.0224111  
**Publisher URL:** https://pubs.aip.org/pof/article/36/8/084106/3307927/Aerodynamic-shape-optimization-using-a-physics

### Exact abstract

Aerodynamic shape optimization based on computational fluid dynamics still has a huge demand for improvement in the optimization effect and efficiency when optimizing the unstable flow of airfoils. This article presents a physics-informed hot-start method combined with modified metric-based proper orthogonal decomposition (MPOD-ML-Phys). The data-based filtering strategy is a core step in the original metric-based proper orthogonal decomposition method (MPOD), but existing filtering strategies generate a significant amount of additional computational consumption. Therefore, this article applies machine learning methods to data-based filtering strategy in MPOD and establishes a modified MPOD method (MPOD-ML). In addition, during the MPOD-ML process, a lot of hidden physical knowledge that is beneficial for optimization will also be generated. This article combines Bayesian optimization to construct an MPOD-ML-Phys method, which fully utilizes the flow physical knowledge in MPOD-ML. The efficiency and effect of MPOD-ML and MPOD-ML-Phys are validated by two typical cases: inverse and direct design for airfoils. The results indicate that both MPOD-ML and MPOD-ML-Phys methods can effectively improve the overall optimization efficiency. However, the intervention of machine learning models has significantly reduced the robustness of the MPOD-ML method, while the embedding of physical knowledge makes MPOD-ML-Phys more robust. Meanwhile, the optimized airfoil obtained by MPOD-ML-Phys has better drag divergence characteristics, a later flow separation point, and better flow stability.

\---

## Paper ID 698

**Record number:** 325  
**Paper ID:** 698  
**DOI:** 10.1016/j.measurement.2023.112838  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0263224123004025

### Exact abstract

Accurately predicting the remaining useful life (RUL) of lithium-ion batteries is essential for battery management systems (BMS) as rapid capacity declines and failure can impact equipment operation and pose safety hazards. However, battery aging is a complex electrochemical process influenced by various factors such as cycle time, temperature, and loading conditions. To address this, a physics-informed smooth particle filter (SPF) framework for RUL prediction is proposed in this work, which estimates parameters of a single particle model (SPM) of LiBs by extracting three main degradation mechanisms: active material loss in positive and negative electrodes and loss of lithium inventory. Unlike traditional prognostic frameworks, this approach utilizes the SPM to estimate degradation parameters directly from voltage and capacity data, enabling more accurate quantification of degradation mechanisms and prediction of capacity fade trends. The estimated capacity is then used to develop an RUL predictor based on an SPF, which produces more accurate RUL predictions compared to conventional capacity-based methods. The proposed framework achieves a best-case RUL prediction of 2402 cycles at the prediction starting point of 2000 cycles, with a minimum relative error of around 0.089% compared to approximately 0.8% for the traditional framework. Additionally, the proposed framework is demonstrated to be dependable and robust, even when dealing with LiBs data containing Gaussian white noise and dynamic discharging profiles.

\---

## Paper ID 701

**Record number:** 326  
**Paper ID:** 701  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

The operation of power systems is aﬀected by diverse technical, economic, and social factors. Social behavior determines load patterns, electricity markets regulate the generation, and weather-dependent renewables introduce power fluctuations. Thus, power system dynamics must be regarded as a nonautonomous system whose parameters vary strongly with time. However, the external driving factors are usually only available on coarse scales and the actual dependencies of the dynamic system parameters are generally unknown. Here, we propose a physics-informed machine learning model that bridges the gap between large-scale drivers and short-term dynamics of the power system. Integrating stochastic diﬀerential equations and artificial neural networks, we construct a probabilistic model of the power grid frequency dynamics in continental Europe. Its probabilistic prediction outperforms the daily average profile, which is an important benchmark, on a time horizon of 15 min. Using the integrated model, we identify and explain the parameters of the dynamical system from the data, which reveal their strong time-dependence and their relation to external drivers such as wind power feed-in and fast generation ramps. Finally, we generate synthetic time series from the model, which successfully reproduce central characteristics of the grid frequency such as their heavy-tailed distribution. All in all, our work emphasizes the importance of modeling power system dynamics as a stochastic nonautonomous system with both intrinsic dynamics and external drivers.

\---

## Paper ID 702

**Record number:** 327  
**Paper ID:** 702  
**DOI:** 10.1016/j.pnucene.2025.105745  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S014919702500143X

### Exact abstract

This work explores the development of surrogate models for estimating the evolution of quantities of interest during nuclear reactor accident scenarios. Physics-Informed Neural Networks (PINNs) offer a promising surrogate modelling approach because they allow integrating laws of physics and domain knowledge into traditional Neural Network (NN) surrogates. Specifically, the proposed solution incorporates an additional term in the PINN loss function to enforce physics-based constraints in correspondence of allocation points, which are randomly sampled points whose corresponding target output is not known. As a result, accuracy of the estimation of the quantities of interest and their adherence to the laws of physics are improved. Applications to a synthetic case study and to the response of a nuclear microreactor system during a Loss of Heat Sink scenario confirm that the developed surrogate model based on PINN with allocation points improves the estimation accuracy with respect to other state-of-the-art methods.

\---

## Paper ID 705

**Record number:** 328  
**Paper ID:** 705  
**DOI:** 10.1016/j.ijmecsci.2024.109267  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0020740324003096

### Exact abstract

This paper introduces a novel Physics-Informed Neural Network-based (PINN-based) multi-domain computational framework to analyse nonlinear and heterogeneous morphological variations of plant cells during drying. Here, two distinct models are involved: PINN-MT to simulate mass transfer; and PINN–NS to simulate nonlinear shrinkage. The models are coupled to examine cellular morphological changes resulting from moisture loss during drying. Firstly, the coupled framework, in tandem with homogeneous conditions, operates in parallel, allowing the mutual parameters to update between models. This approach demonstrates ability to approximate homogeneous cellular shrinkage within a tissue, factoring in the influence of surrounding plant cells. Secondly, non-uniform cell wall properties and heterogeneous boundary conditions are incorporated into this computational framework through domain decomposition. Inherent capabilities of neural networks allow for seamless integration of multiple domains, with additional loss terms introduced at interfaces. The framework shows capacity to account for drastic and non-uniform morphological variations of plant cells even under extreme drying conditions, which is the key novelty and has been a challenging task for existing traditional computational methods. Hence, the proposed computational approach offers an innovative avenue for understanding nonlinear and heterogeneous morphological variations not only for plant cells, but also for soft matter in general.

\---

## Paper ID 707

**Record number:** 329  
**Paper ID:** 707  
**DOI:** 10.1016/j.camwa.2023.01.002  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0898122123000032

### Exact abstract

There has been an arising trend of adopting deep learning methods to study partial diﬀerential equations (PDEs). This article is to propose a kind of coupled physics-informed neural networks (CPINNs) for the closedloop geothermal system, which is a new coupled multi-physics PDEs and mainly consists of a framework of underground heat exchange pipelines to extract the geothermal heat from the geothermal reservoir. The approach embeds the PDEs formula into the loss function of the neural networks and the resulting networks is trained to meet the equations along with the boundary conditions, initial conditions and interface conditions. The advantage of this method is that it avoids grid generation compared with the grid based methods and it is parallel for the equations and variables. In order to improve the approximation ability of the CPINNs, we add the loss weights before some terms of the loss function. Moreover, the approximate ability of the CPINNs is demonstrated by the theoretical analysis of convergence. Finally, some numerical examples are carried out to demonstrate the eﬀectiveness of the CPINNs intuitively.

\---

## Paper ID 708

**Record number:** 330  
**Paper ID:** 708  
**DOI:** 10.1016/j.fbp.2024.02.004  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0960308524000191

### Exact abstract

A coupled physics informed neural network (CPINN) was used to simulate liquid diffusion controlled drying, an energy intensive process in the food industry. The architecture of the CPINN was designed to permit the prediction of thermo-physical properties and key source and sink terms at the solution boundaries which cause the solution to be highly coupled. The CPINN structure improves upon limitations of using PINNs in low-temperature food drying simulations, most notably allowing multiple and highly coupled variables to be simulated in additional to ensuring dynamic thermo-physical properties updates. The CPINN successfully solved a system 1-D partial differential equations (PDEs), capturing phenomena such as transient moisture diffusion and heat conduction, evaporative and convective heat transfer at the drying surface and moisture loss to the drying air. A benchmark simulation was used to compare the CPINN predicted product temperature, ̂𝑇𝑝, and predicted moisture content, ̂𝑋𝑝, against a numeric solution. The mean absolute error for the respective comparisons was 0.12 ◦C and 0.0035 kg𝑚kg−1 𝑠. Training the CPINN for the first time was the rate limiting step, requiring the greatest time to solve when compared to the numeric solution, with solution times of 𝑡𝑐𝑝𝑖𝑛𝑛= 321 min and 𝑡𝑟𝑘= 82.7 min, respectively, or a time reduction fraction of 𝑡𝑟= 3.9, due to generalised initialisation of the CPINN parameters. By utilising a staged transfer learning approach, 𝑡𝑟was reduced to a range of 0.28–0.027 whilst maintaining solution accuracy, representing a 3 to 37 times faster solution. By saving a library of CPINN models, solutions at key drying conditions of interest can be rapidly evaluated at run time, meaning the saved CPINN effectively acted as a method to compress solutions of PDEs. The techniques used here show how CPINNs can be applied to coupled and multi-scale PDEs using a physics-based approach to problems in the food processing and other sectors.

\---

## Paper ID 709

**Record number:** 331  
**Paper ID:** 709  
**DOI:** 10.3934/mbe.2023512  
**Publisher URL:** https://doi.org/10.3934/mbe.2023512

### Exact abstract

Pressure in arteries is difficult to measure non-invasively. Although computational fluid dynamics (CFD) provides high-precision numerical solutions according to the basic physical equations of fluid mechanics, it relies on precise boundary conditions and complex preprocessing, which limits its real-time application. Machine learning algorithms have wide applications in hemodynamic research due to their powerful learning ability and fast calculation speed. Therefore, we proposed a novel method for pressure estimation based on physics-informed neural network (PINN). An ideal aortic arch model was established according to the geometric parameters from human aorta, and we performed CFD simulation with two-way fluid-solid coupling. The simulation results, including the space-time coordinates, the velocity and pressure field, were obtained as the dataset for the training and validation of PINN. Nondimensional Navier-Stokes equations and continuity equation were employed for the loss function of PINN, to calculate the velocity and relative pressure field. Postprocessing was proposed to fit the absolute pressure of the aorta according to the linear relationship between relative pressure, elastic modulus and displacement of the vessel wall. Additionally, we explored the sensitivity of the PINN to the vascular elasticity, blood viscosity and blood velocity. The velocity and pressure field predicted by PINN yielded good consistency with the simulated values. In the interested region of the aorta, the relative errors of maximum and average absolute pressure were 7.33% and 5.71%, respectively. The relative pressure field was found most sensitive to blood velocity, followed by blood viscosity and vascular elasticity. This study has proposed a method for intra-vascular pressure estimation, which has potential significance in the diagnosis of cardiovascular diseases.

\---

## Paper ID 710

**Record number:** 332  
**Paper ID:** 710  
**DOI:** 10.1016/j.cma.2025.117851  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782525001239

### Exact abstract

Hemodynamic analysis is essential for assessing cardiovascular health. Computational fluid dynamics (CFD) methods, while precise, are computationally expensive and lack transfer learning capabilities, requiring recalculation for varying boundaries. Machine-learning methods, despite powerful data-fitting abilities, heavily rely on labeled datasets, limiting their use in clinical settings where data is scarce. To alleviate data dependency, Physics-Informed Neural Networks (PINNs) embed physical laws directly into the loss function, allowing model parameter transfer across varying geometries. However, traditional PINNs struggle with complex domains like stenosed vessels, leading to inefficiency and reduced accuracy. To tackle this challenge, we propose the Boundary Progressive PINN (BP-PINN). By introducing boundary complexity, BP-PINN reconstructs vascular boundaries at varying smoothness levels. Training begins with simple models and progressively incorporating boundary details to capture complex flow characteristics. Without any labeled data, BP-PINN was successfully applied to 22 patient-specific cases, achieving L2 errors of 0.036 for velocity and 0.057 for pressure compared to CFD ground truth. Furthermore, compared to fractional flow reserve (FFR), the invasive gold standard for diagnosing myocardial ischemia, the non-invasive FFR predicted by BP-PINN attained the highest overall diagnostic accuracy of 90.9 %, outperforming vanilla-PINNs (81.8 %). Additionally, BP- PINN leveraged pretrained models with similar boundary complexities, enabling efficient stent preoperative planning. The proposed method evaluated the effects of five stenting strategies on the hemodynamic environment, achieving an average computation time of under 3 min per case. Finally, the framework was extended to solve heat equation, Poisson equation and Helmholtz equation in irregular domains, demonstrating superior accuracy compared to baseline methods.

\---

## Paper ID 711

**Record number:** 333  
**Paper ID:** 711  
**DOI:** 10.1016/j.ynexs.2024.100016  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2950160124000147

### Exact abstract

Aortic dissection is a life-threatening event that is responsible for significant morbidity and mortality in individuals ranging in age from children to older adults. A better understanding of the complex hemodynamic environment inside the aorta enables clinicians to assess patient-specific risk of complications and administer timely interventions. In this study, we propose to develop and validate a new computational framework, warm-start physics-informed neural networks (WS-PINNs), to address the limitations of the current approaches in analyzing the hemodynamics inside the false lumen (FL) of type B aortic dissection vessels reconstructed from apolipoprotein null mice infused with AngII, thereby significantly reducing the amount of required measurement data and eliminating the dependency of predictions on the accuracy and availability of the inflow/outflow boundary conditions. Specifically, we demonstrate that the WS-PINN models allow us to focus on assessing the 3D flow field inside FL without modeling the true lumen and various branched vessels. Furthermore, we investigate the impact of the spatial and temporal resolutions of MRI data on the prediction accuracy of the PINN model, which can guide the data acquisition to reduce time and financial costs. Finally, we consider the use of transfer learning to provide faster results when looking at similar but new geometries. Our results indicate that the proposed framework can enhance the capacity of hemodynamic analysis in vessels with aortic dissections, with the promise of eventually leading to improved prognostic ability and understanding of the development of aneurysms.

\---

## Paper ID 716

**Record number:** 334  
**Paper ID:** 716  
**DOI:** 10.1098/rsta.2020.0093  
**Publisher URL:** https://royalsocietypublishing.org/doi/10.1098/rsta.2020.0093

### Exact abstract

Machine learning (ML) provides novel and powerful ways of accurately and efficiently recognizing complex patterns, emulating nonlinear dynamics, and predicting the spatio-temporal evolution of weather and climate processes. Off-the-shelf ML models, however, do not necessarily obey the fundamental governing laws of physical systems, nor do they generalize well to scenarios on which they have not been trained. We survey systematic approaches to incorporating physics and domain knowledge into ML models and distill these approaches into broad categories. Through 10 case studies, we show how these approaches have been used successfully for emulating, downscaling, and forecasting weather and climate processes. The accomplishments of these studies include greater physical consistency, reduced training time, improved data efficiency, and better generalization. Finally, we synthesize the lessons learned and identify scientific, diagnostic, computational, and resource challenges for developing truly robust and reliable physics-informed ML models for weather and climate processes.

\---

## Paper ID 721

**Record number:** 335  
**Paper ID:** 721  
**DOI:** 10.1109/TPWRS.2022.3162473  
**Publisher URL:** https://ieeexplore.ieee.org/document/9743327/

### Exact abstract

The advances of deep learning (DL) techniques bring new opportunities to numerous intractable tasks in power systems (PSs). Nevertheless, the extension of the application of DL in the domain of PSs has encountered challenges, e.g., high requirement for the quality and quantity of training data, production of physically infeasible/inconsistent solutions, and low generalizability and interpretability. There is a growing consensus that physics-informed neural networks (PINNs) can address these concerns by integrating physics-informed (PI) rules or laws into state-of-the-art DL methodology. This survey presents a systematic overview of the PINN in the domain of PSs. Specifically, several paradigms of PINN (e.g., PI loss function, PI initialization, PI design of architecture, and hybrid physics-DL models) are summarized. The applications of PINN in PSs in recent years, including state/parameter estimation, dynamic analysis, power flow calculation, optimal power flow, anomaly detection and location, and model and data synthesis, etc., are investigated in detail, followed by the summary and assessment of relevant works so far. Revolving around the characteristics of PSs and the state-of-the-art DL techniques, this paper outlines the potential research directions and attempts to shed light on the deeper and broader application of PINN on PSs.

\---

## Paper ID 723

**Record number:** 336  
**Paper ID:** 723  
**DOI:** 10.1093/imanum/drab093  
**Publisher URL:** https://academic.oup.com/imajna/article/43/1/1/6503953

### Exact abstract

Physics informed neural networks (PINNs) have recently been very successfully applied for efficiently approximating inverse problems for PDEs. We focus on a particular class of inverse problems, the so-called data assimilation or unique continuation problems, and prove rigorous estimates on the generalization error of PINNs approximating them. An abstract framework is presented and conditional stability estimates for the underlying inverse problem are employed to derive the estimate on the PINN generalization error, providing rigorous justification for the use of PINNs in this context. The abstract framework is illustrated with examples of four prototypical linear PDEs. Numerical experiments, validating the proposed theory, are also presented.

\---

## Paper ID 724

**Record number:** 337  
**Paper ID:** 724  
**DOI:** 10.1007/s11071-023-08975-w  
**Publisher URL:** https://link.springer.com/10.1007/s11071-023-08975-w

### Exact abstract

Physics-informed neural network (PINN) provides an effective way to learn numerical solutions of partial differential equations (PDEs) in the sampling domain, but usually shows poor performances beyond the domain from which the training points are sampled, i.e., the limited solution extrapolation ability. In this paper, we propose a symmetry-enhanced physicsinformed neural network (sePINN) to improve the extrapolation ability which incorporates the symmetry properties of PDEs into PINN. Specifically, we first explore the discrete and continuous symmetry groups of the PDEs under study, and then leverage them to further constrain the loss function of PINN to enhance the solution extrapolation ability. Numerical results of the sePINN method with different numbers of collocation pointsandneuronsperlayerforthemodifiedKortewegde Vries equation show that both the accuracies of solutions in and beyond the sampling domain are improved concurrently by the proposed sePINN method. In particular, the accuracies of extrapolated solutions take a tendency of flat fluctuations with, even superior to, the ones of solutions directly trained via the PINN method.

\---

## Paper ID 725

**Record number:** 338  
**Paper ID:** 725  
**DOI:** 10.1016/j.ensm.2024.103343  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2405829724001703

### Exact abstract

Monitoring the health of lithium-ion batteries’ internal components as they age is crucial for optimizing cell design and usage control strategies. However, quantifying component-level degradation typically involves aging many cells and destructively analyzing them throughout the aging test, limiting the scope of quantifiable degradation to the test conditions and duration. Fortunately, recent advances in physics-informed machine learning (PIML) for modeling and predicting the battery state of health demonstrate the feasibility of building models to predict the long-term degradation of a lithium-ion battery cell’s major components using only short- term aging test data by leveraging physics. In this paper, we present four approaches for building physics- informed machine learning models and comprehensively compare them, considering accuracy, complexity, ease-of-implementation, and their ability to extrapolate to untested conditions. We delve into the details of each physics-informed machine learning method, providing insights specific to implementing them on small battery aging datasets. Our study utilizes long-term cycle aging data from 24 implantable-grade lithium-ion cells subjected to varying temperatures and C-rates over four years. This paper aims to facilitate the selection of an appropriate physics-informed machine learning method for predicting long-term degradation in lithium-ion batteries, using short-term aging data while also providing insights about when to choose which method for general predictive purposes.

\---

## Paper ID 729

**Record number:** 339  
**Paper ID:** 729  
**DOI:** 10.1109/LCSYS.2023.3286303  
**Publisher URL:** https://ieeexplore.ieee.org/document/10153407/

### Exact abstract

We investigate a time and energy minimization optimal control problem for open quantum systems, whose dynamics is governed through the Lindblad (or GoriniKossakowski-Sudarshan-Lindblad) master equation. The dissipation is Markovian time-independent, and the control is governed by the Hamiltonian of a quantum-mechanical system. We are specifically interested to study the purity in a dissipative system constrained by state and control inputs. We deal with the state constraints through Gamkrelidze revisited method, while handling control constraints through the idea of saturation functions and system extensions. This is the first time that quantum purity conservation is formulated in such framework. We obtain the necessary conditions of optimality through the Pontryagin Minimum Principle. Finally, the resulted boundary value problem is solved by a Physics-Informed Neural Network (PINN) approach, a technique that is also new in quantum control context. We show that these PINNs play an effective role in learning optimal control actions.

\---

## Paper ID 731

**Record number:** 340  
**Paper ID:** 731  
**DOI:** 10.1103/PhysRevLett.132.010801  
**Publisher URL:** https://link.aps.org/doi/10.1103/PhysRevLett.132.010801

### Exact abstract

Quantum control is a ubiquitous research field that has enabled physicists to delve into the dynamics and features of quantum systems, delivering powerful applications for various atomic, optical, mechanical, and solid-state systems. In recent years, traditional control techniques based on optimization processes have been translated into efficient artificial intelligence algorithms. Here, we introduce a computational method for optimal quantum control problems via physics-informed neural networks (PINNs). We apply our methodology to open quantum systems by efficiently solving the state-to-state transfer problem with high probabilities, short-time evolution, and using low-energy consumption controls. Furthermore, we illustrate the flexibility of PINNs to solve the same problem under changes in physical parameters and initial conditions, showing advantages in comparison with standard control techniques.

\---

## Paper ID 733

**Record number:** 341  
**Paper ID:** 733  
**DOI:** 10.1016/j.jcp.2021.110683  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999121005787

### Exact abstract

We develop a distributed framework for the physics-informed neural networks (PINNs) based on two recent extensions, namely conservative PINNs (cPINNs) and extended PINNs (XPINNs), which employ domain decomposition in space and in time-space, respectively. This domain decomposition endows cPINNs and XPINNs with several advantages over the vanilla PINNs, such as parallelization capacity, large representation capacity, efficient hyperparameter tuning, and is particularly effective for multi-scale and multi-physics problems. Here, we present a parallel algorithm for cPINNs and XPINNs constructed with a hybrid programming model described by MPI + X, where X ∈{CPUs, GPUs}. The main advantage of cPINN and XPINN over the more classical data and model parallel approaches is the flexibility of optimizing all hyperparameters of each neural network separately in each subdomain. We compare the performance of distributed cPINNs and XPINNs for various forward problems, using both weak and strong scalings. Our results indicate that for space domain decomposition, cPINNs are more efficient in terms of communication cost but XPINNs provide greater flexibility as they can also handle timedomain decomposition for any differential equations, and can deal with any arbitrarily shaped complex subdomains. To this end, we also present an application of the parallel XPINN method for solving an inverse diffusion problem with variable conductivity on the United States map, using ten regions as subdomains.

\---

## Paper ID 735

**Record number:** 342  
**Paper ID:** 735  
**DOI:** 10.1016/j.ijheatfluidflow.2022.109073  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0142727X22001412

### Exact abstract

The state of turbulent, minimal-channel flow is estimated from spatio-temporal sparse observations of the velocity, using both a physics-informed neural network (PINN) and adjoint-variational data assimilation (4DVar). The performance of PINN is assessed against the benchmark results from 4DVar. The PINN is efficient to implement, takes advantage of automatic differentiation to evaluate the governing equations, and does not require the development of an adjoint model. In addition, the flow evolution is expressed in terms of the network parameters which have a far smaller dimension than the predicted trajectory in state space or even just the initial condition of the flow. Provided adequate observations, network architecture and training, the PINN can yield satisfactory estimates of the flow field, both for the missing velocity data and the entirely unobserved pressure field. However, accuracy depends on the network architecture, and the dependence is not known a priori. In comparison to 4DVar estimation which becomes progressively more accurate over the observation horizon, the PINN predictions are generally less accurate and maintain the same level of errors throughout the assimilation time window. Another notable distinction is the capacity to accurately forecast the flow evolution: while the 4DVar prediction depart from the true flow state gradually and according to the Lyapunov exponent, the PINN is entirely inaccurate immediately beyond the training time horizon unless re-trained. Most importantly, while 4DVar satisfies the discrete form of the governing equations point-wise to machine precision, in PINN the equations are only satisfied in an 𝐿2 sense.

\---

## Paper ID 739

**Record number:** 343  
**Paper ID:** 739  
**DOI:** 10.1021/acs.jpca.1c05102  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acs.jpca.1c05102

### Exact abstract

The recently developed physics-informed neural network (PINN) has achieved success in many science and engineering disciplines by encoding physics laws into the loss functions of the neural network such that the network not only conforms to the measurements and initial and boundary conditions but also satisfies the governing equations. This work first investigates the performance of the PINN in solving stiﬀchemical kinetic problems with governing equations of stiﬀordinary diﬀerential equations (ODEs). The results elucidate the challenges of utilizing the PINN in stiﬀODE systems. Consequently, we employ quasi-steady-state assumption (QSSA) to reduce the stiﬀness of the ODE systems, and the PINN then can be successfully applied to the converted non-/mild-stiﬀsystems. Therefore, the results suggest that stiﬀness could be the major reason for the failure of the regular PINN in the studied stiﬀchemical kinetic systems. The developed stiﬀ-PINN approach that utilizes QSSA to enable the PINN to solve stiﬀchemical kinetics shall open the possibility of applying the PINN to various reactiondiﬀusion systems involving stiﬀdynamics.

\---

## Paper ID 740

**Record number:** 344  
**Paper ID:** 740  
**DOI:** 10.1016/j.cma.2024.117075  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782524003311

### Exact abstract

This study explores the potential of physics-informed neural networks (PINNs) for the realization of digital twins (DT) from various perspectives. First, various adaptive sampling approaches for collocation points are investigated to verify their effectiveness in the mesh-free framework of PINNs, which allows automated construction of virtual representation without manual mesh generation. Then, the overall performance of the data-driven PINNs (DD-PINNs) framework is examined, which can utilize the acquired datasets in DT scenarios. Its scalability to more general physics is validated within parametric Navier–Stokes equations, where PINNs do not need to be retrained as the Reynolds number varies. In addition, since datasets can be often collected from different fidelity/sparsity in practice, multi-fidelity DD-PINNs are also proposed and evaluated. They show remarkable prediction performance even in the extrapolation tasks, with 42 ∼62% improvement over the single-fidelity approach. Finally, the uncertainty quantification performance of multi-fidelity DD-PINNs is investigated by the ensemble method to verify their potential in DT, where an accurate measure of predictive uncertainty is critical. The DDPINN frameworks explored in this study are found to be more suitable for DT scenarios than traditional PINNs from the above perspectives, bringing engineers one step closer to seamless DT realization.

\---

## Paper ID 742

**Record number:** 345  
**Paper ID:** 742  
**DOI:** 10.1016/j.fuel.2021.122693  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S001623612102559X

### Exact abstract

Physics-based simulators for multiphase flow in porous media emulate nonlinear processes with coupled physics, and usually require extensive computational resources for software development, maintenance and simulation execution. As a result, a huge demand exists for fast modeling of coupled processes in a wide range of subsurface applications including geological CO2 sequestration, hydrocarbon recovery and geothermal energy extraction. In this work, an efficient physics-constrained deep learning model is developed for solving multiphase flow in 3- Dimensional (3D) heterogeneous porous media. The model fully leverages the spatial topology predictive capability of convolutional neural networks, specifically U-Net with successive contracting and expansive steps, and is coupled with an efficient continuity-based smoother to predict flow responses that need spatial continuity. Furthermore, the transient regions are penalized to steer the training process such that the model can accurately capture flow in these regions. The model takes inputs including properties of porous media, fluid properties and well controls, and predicts the temporal-spatial evolution of the state variables (pressure and saturation). While maintaining the continuity of fluid flow, the 3D spatial domain is decomposed into 2D images for reducing training cost, and the decomposition results in an increased number of training data samples and better training efficiency. Additionally, a surrogate model is separately constructed as a postprocessor to calculate well flow rate based on the predictions of state variables from the deep learning model. We use the example of CO2 injection into saline aquifers, and apply the physics-constrained deep learning model that is trained from physics-based simulation data and emulates the physics process. The model performs prediction with a speedup of \~ 1400 times compared to physics-based simulations, and the average temporal errors of predicted pressure and saturation plumes are 0.27% and 0.099% respectively. Furthermore, water production rate is efficiently predicted by a surrogate model for well flow rate, with a mean error less than 5%. Therefore, with its unique scheme to cope with the fidelity in fluid flow in porous media, the physics-constrained deep learning model can become an efficient predictive model for computationally demanding inverse problems or other coupled processes.

\---

## Paper ID 743

**Record number:** 346  
**Paper ID:** 743  
**DOI:** 10.1038/s42256-021-00302-5  
**Publisher URL:** https://www.nature.com/articles/s42256-021-00302-5

### Exact abstract

It is widely known that neural networks (NNs) are universal approximators of continuous functions. However, a less known but powerful result is that a NN with a single hidden layer can accurately approximate any nonlinear continuous operator. This universal approximation theorem of operators is suggestive of the structure and potential of deep neural networks (DNNs) in learning continuous operators or complex systems from streams of scattered data. Here, we thus extend this theorem to DNNs. We design a new network with small generalization error, the deep operator network (DeepONet), which consists of a DNN for encoding the discrete input function space (branch net) and another DNN for encoding the domain of the output functions (trunk net). We demonstrate that DeepONet can learn various explicit operators, such as integrals and fractional Laplacians, as well as implicit operators that represent deterministic and stochastic differential equations. We study different formulations of the input function space and its effect on the generalization error for 16 different diverse applications.

\---

## Paper ID 744

**Record number:** 347  
**Paper ID:** 744  
**DOI:** 10.1021/acs.jctc.4c01570  
**Publisher URL:** https://pubs.acs.org/doi/10.1021/acs.jctc.4c01570

### Exact abstract

Electrochemical energy storage and conversion play increasingly important roles in electrification and sustainable development across the globe. A key challenge therein is to understand, control, and design electrochemical energy materials with atomistic precision. This requires inputs from molecular modeling powered by machine learning (ML) techniques. In this work, we have upgraded our pairwise interaction neural network Python package PiNN via introducing equivariant features to the PiNet2 architecture for fitting potential energy surfaces along with PiNet2-dipole for dipole and charge predictions as well as PiNet2-χ for generating atomcondensed charge response kernels. By benchmarking publicly accessible data sets of small molecules, crystalline materials, and liquid electrolytes, we found that the equivariant PiNet2 shows significant improvements over the original PiNet architecture and provides a state-of-the-art overall performance. Furthermore, leveraging on plug-ins such as PiNNAcLe for an adaptive learn-on-the-fly workflow in generating ML potentials and PiNNwall for modeling heterogeneous electrodes under external bias, we expect PiNN to serve as a versatile and high-performing ML-accelerated platform for molecular modeling of electrochemical systems.

\---

## Paper ID 746

**Record number:** 348  
**Paper ID:** 746  
**DOI:** 10.1109/TMAG.2024.3496695  
**Publisher URL:** https://ieeexplore.ieee.org/document/10750871/

### Exact abstract

Hysteresis modeling is crucial to comprehend the behavior of magnetic devices, facilitating optimal designs. Hitherto, deep learning-based methods employed to model hysteresis face challenges in generalizing to novel input magnetic fields. This article addresses the generalization challenge by proposing neural operators for modeling constitutive laws that exhibit magnetic hysteresis by learning a mapping between magnetic fields. In particular, three neural operators—deep operator network (DeepONet), Fourier neural operator (FNO), and wavelet neural operator (WNO)—are employed to predict novel first-order reversal curves and minor loops, where novel means that they are not used to train the model. In addition, a rate-independent FNO is proposed to predict material responses at sampling rates different from those used during training to incorporate the rate-independent characteristics of magnetic hysteresis. The presented numerical experiments demonstrate that neural operators efficiently model magnetic hysteresis, outperforming the traditional neural recurrent methods on various metrics and generalizing to novel magnetic fields. The findings emphasize the advantages of using neural operators for modeling hysteresis under varying magnetic conditions, underscoring their importance in characterizing magnetic material-based devices. The codes related to this article are available at github.com/chandratue/magnetic\_hysteresis\_neural\_operator.

\---

## Paper ID 747

**Record number:** 349  
**Paper ID:** 747  
**DOI:** 10.1007/s40304-018-0127-z  
**Publisher URL:** https://doi.org/10.1007/s40304-018-0127-z

### Exact abstract

We propose a deep learning-based method, the Deep Ritz Method, for numerically solving variational problems, particularly the ones that arise from partial differential equations. The Deep Ritz Method is naturally nonlinear, naturally adaptive and has the potential to work in rather high dimensions. The framework is quite simple and fits well with the stochastic gradient descent method used in deep learning. We illustrate the method on several problems including some eigenvalue problems.

\---

## Paper ID 748

**Record number:** 350  
**Paper ID:** 748  
**DOI:** 10.1016/j.cma.2021.114399  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0045782521006514

### Exact abstract

Partial differential equations (PDEs) play a fundamental role in modeling and simulating problems across a wide range of disciplines. Recent advances in deep learning have shown the great potential of physics-informed neural networks (PINNs) to solve PDEs as a basis for data-driven modeling and inverse analysis. However, the majority of existing PINN methods, based on fully-connected NNs, pose intrinsic limitations to low-dimensional spatiotemporal parameterizations. Moreover, since the initial/boundary conditions (I/BCs) are softly imposed via penalty, the solution quality heavily relies on hyperparameter tuning. To this end, we propose the novel physics-informed convolutional-recurrent learning architectures (PhyCRNet and PhyCRNet-s) for solving PDEs without any labeled data. Specifically, an encoder–decoder convolutional long short-term memory network is proposed for low-dimensional spatial feature extraction and temporal evolution learning. The loss function is defined as the aggregated discretized PDE residuals, while the I/BCs are hard-encoded in the network to ensure forcible satisfaction (e.g., periodic boundary padding). The networks are further enhanced by autoregressive and residual connections that explicitly simulate time marching. The performance of our proposed methods has been assessed by solving three nonlinear PDEs (e.g., 2D Burgers’ equations, the λ-ω and FitzHugh Nagumo reaction–diffusion equations), and compared against the start-of-the-art baseline algorithms. The numerical results demonstrate the superiority of our proposed methodology in the context of solution accuracy, extrapolability and generalizability.

\---

## Paper ID 750

**Record number:** 351  
**Paper ID:** 750  
**DOI:** 10.1016/j.jcp.2022.111301  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999122003631

### Exact abstract

Physics-informed neural networks (PINNs) have been proposed to learn the solution of partial differential equations (PDE). In PINNs, the residual form of the PDE of interest and its boundary conditions are lumped into a composite objective function as soft penalties. Here, we show that this specific way of formulating the objective function is the source of severe limitations in the PINN approach when applied to different kinds of PDEs. To address these limitations, we propose a versatile framework based on a constrained optimization problem formulation, where we use the augmented Lagrangian method (ALM) to constrain the solution of a PDE with its boundary conditions and any high-fidelity data that may be available. Our approach is adept at forward and inverse problems with multi-fidelity data fusion. We demonstrate the efficacy and versatility of our physics- and equality-constrained deep-learning framework by applying it to several forward and inverse problems involving multi-dimensional PDEs. Our framework achieves orders of magnitude improvements in accuracy levels in comparison with state-of-the-art physics-informed neural networks.

\---

## Paper ID 751

**Record number:** 352  
**Paper ID:** 751  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural network (PINN) has shown great potential in inverse and parametric designing problems in electrical engineering. Moreover, most existing works on PINN are dedicated to computational fluids, and very little attention has been paid to static and low-frequency electromagnetic near fields with multiple media in electrical engineering applications. In this work, a PINN for solving 2-D magnetostatic fields in electromagnetic devices and systems is proposed. The magnetic field intensity and the magnetic vector potential are solved by training a neural network (NN) which encodes partial differential equations (PDEs) and boundary conditions (BCs) as residuals. The computation of the spatial derivatives of media constitutive parameters, which negatively impacts the training of PINN, is eliminated. A mesh-assisted non-uniform sampling method for the selection of collocation points is proposed to further improve the performance of PINN. The proposed PINN is verified by comparing its results with those of the finite-element method (FEM) in two 2-D magnetostatic case studies. It is expected that this work will promote further applications of PINN in the modeling, numerical analysis, and parametric design of electromagnetic devices and systems.

\---

## Paper ID 752

**Record number:** 353  
**Paper ID:** 752  
**DOI:** 10.1109/TMAG.2023.3247023  
**Publisher URL:** https://ieeexplore.ieee.org/document/10056991/

### Exact abstract

Physics-informed neural networks (PINNs) have been successfully applied in electromagnetism (EM) for the solution of direct problems. However, since PINNs typically do not take system parameters (like geometry or material properties) as input, when embedded in inverse problems or adopted for parametrical studies, to output the solution of the governing equations, they require additional training for each new system parameter set. To overcome this issue, we propose a hypernetwork (HNN) that receives system parameters and outputs the network weights of a PINN, which in turn provides the solution of the direct problem. Therefore, once trained, the HNN acts as a parametrized real-time field solver that allows the fast solution of inverse problems, in which the objective(s) are defined a posteriori (i.e., after HNN’s training). This method is adopted for a coil optimal design task in magnetostatics.

\---

## Paper ID 755

**Record number:** 354  
**Paper ID:** 755  
**DOI:** 10.1109/JMMCT.2023.3236946  
**Publisher URL:** https://ieeexplore.ieee.org/document/10017131/

### Exact abstract

This article presents the coupling of the finitedifference time-domain (FDTD) method for electromagnetic field simulation, with a physics-informed neural network based solver for the heat equation. To this end, we employ a physics-informed U-Net instead of a numerical method to solve the heat equation. This approach enables the solution of general multiphysics problems with a single-physics numerical solver coupled with a neural network, overcoming the questions of accuracy and efficiency that are associated with interfacing multiphysics equations. By embedding the heat equation and its boundary conditions in the U-Net, we implement an unsupervised training methodology, which does not require the generation of ground-truth data. We test the proposed method with general 2-D coupled electromagnetic-thermal problems, demonstrating its accuracy and efficiency compared to standard finite-difference based alternatives.

\---

## Paper ID 756

**Record number:** 355  
**Paper ID:** 756  
**DOI:** 10.1109/TAP.2023.3242372  
**Publisher URL:** https://ieeexplore.ieee.org/document/10041848/

### Exact abstract

In this communication, we propose a new physicsconstrained approach to solve 2-D inverse scattering problems (ISPs) by extending physics-informed supervised residual learning (PhiSRL) with Born approximation (BA). By embedding the fixed-point iteration method in residual neural network (ResNet), PhiSRL aims to solve ISPs iteratively by applying the convolutional neural networks (CNNs) to learn the update rules of reconstructions. PhiSRL is employed to invert lossy scatterers by introducing BA to linearize ISPs and further reduce the computational burden of forward modeling. Both numerical and experimental results validate the effectiveness of the proposed approach.

\---

## Paper ID 757

**Record number:** 356  
**Paper ID:** 757  
**DOI:** 10.1109/TAP.2023.3331262  
**Publisher URL:** https://ieeexplore.ieee.org/document/10318053/

### Exact abstract

In this study, physics-informed graph residual learning (PhiGRL) is proposed as an effective and robust deep learning (DL)-based approach for 3-D electromagnetic (EM) modeling. Extended from physics-informed supervised residual learning (PhiSRL), PhiGRL emulates the computation of a fixed-point iteration method to iteratively modify a candidate solution until convergence by applying graph neural networks (GNNs) to predict modifications. The application of GNNs enables PhiGRL to adaptively deal with unstructured data and varying unknown numbers in 3-D EM modeling, where most off-the-shelf DL techniques are inapplicable. PhiGRL is first applied to solve the combined-field integral equations (CFIEs) of basic 3-D perfect electric conductor (PEC) targets, including spheroids, conical frustums, and hexahedrons, in both supervised and unsupervised learning manners. Its generalization abilities on different incident frequencies and target shapes are then verified separately. Numerical results show that PhiGRL can achieve good numerical precision with a significant reduction in computation time (online prediction). PhiGRL is further migrated to simulate more complicated 3-D PEC targets through transfer learning, including missilehead- and airplane-shaped targets. This study explores the possibility of applying DL together with EM physics for 3-D EM modeling.

\---

## Paper ID 758

**Record number:** 357  
**Paper ID:** 758  
**DOI:** 10.1109/LAWP.2022.3149889  
**Publisher URL:** https://ieeexplore.ieee.org/document/9709153/

### Exact abstract

Plasma parameter inversion is important for space plasma physics and applications, particularly for inhomogeneous magnetized plasmas. A physics-informed deep neural network for Maxwell’s plasma coupling system is proposed in this letter. The network architecture consists of inhomogeneous plasma parameter inversion and electromagnetic field reconstruction. We verified our physics-informed neural network method for one-dimensional (1-D) Maxwell’s plasma coupling system with inhomogeneous magnetized plasma parameters. The simulation results show that this meshless method can effectively achieve simultaneous inversion of inhomogeneous plasma parameter and global field based on sparse sampling. The physics-informed deep neural network for Maxwell’s plasma coupling system has a certain generalization ability, which may be applied for more complex plasma applications.

\---

## Paper ID 759

**Record number:** 358  
**Paper ID:** 759  
**DOI:** 10.1007/s40304-023-00338-6  
**Publisher URL:** https://link.springer.com/10.1007/s40304-023-00338-6

### Exact abstract

Green’s function plays a significant role in both theoretical analysis and numerical computing of partial differential equations (PDEs). However, in most cases, Green’s function is difficult to compute. The troubles arise in the following threefold. Firstly, compared with the original PDE, the dimension of Green’s function is doubled, making it impossible to be handled by traditional mesh-based methods. Secondly, Green’s function usually contains singularities which increase in the difficulty to get a good approximation. Lastly, the computational domain may be very complex or even unbounded. To override these problems, we develop a new framework for computing Green’s function leveraging the fundamental solution, boundary integral method and neural networks withreasonablyhighaccuracyinthis paper. Wefocus onGreen’s function of Poisson and Helmholtz equations in bounded domains, unbounded domains. We also consider Poisson equation and Helmholtz equations in domains with interfaces. Extensive numerical experiments illustrate the efficiency and accuracy of our method for solving Green’s function. In addition, Green’s function provides the operator from the source term and boundary condition to the PDE solution. We apply Green’s function to solve PDEs with different sources, and obtain reasonably high-precision solutions, which shows the good generalization ability of our method. However, the requirements for explicit fundamental solutions to remove the singularity of Green’s function hinder the application of our method in more complex PDEs, such as variable coefficient equations, which will be investigated in our future work.

\---

## Paper ID 760

**Record number:** 359  
**Paper ID:** 760  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Restricted Boltzmann machines were developed using binary stochastic hidden units. These can be generalized by replacing each binary unit by an infinite number of copies that all have the same weights but have progressively more negative biases. The learning and inference rules for these “Stepped Sigmoid Units” are unchanged. They can be approximated efficiently by noisy, rectified linear units. Compared with binary units, these units learn features that are better for object recognition on the NORB dataset and face verification on the Labeled Faces in the Wild dataset. Unlike binary units, rectified linear units preserve information about relative intensities as information travels through multiple layers of feature detectors.

\---

## Paper ID 766

**Record number:** 360  
**Paper ID:** 766  
**DOI:** 10.4208/cicp.OA-2023-0058  
**Publisher URL:** https://www.global-sci.com/cicp/article/view/7207

### Exact abstract

Physics-informed neural networks (PINNs) are known to suffer from optimization difficulty. In this work, we reveal the connection between the optimization difficulty of PINNs and activation functions. Specifically, we show that PINNs exhibit high sensitivity to activation functions when solving PDEs with distinct properties. Existing works usually choose activation functions by inefficient trial-and-error. To avoid the inefficient manual selection and to alleviate the optimization difficulty of PINNs, we introduce adaptive activation functions to search for the optimal function when solving different problems. We compare different adaptive activation functions and discuss their limitations in the context of PINNs. Furthermore, we propose to tailor the idea of learning combinations of candidate activation functions to the PINNs optimization, which has a higher requirement for the smoothness and diversity on learned functions. This is achieved by removing activation functions which cannot provide higher-order derivatives from the candidate set and incorporating elementary functions with different properties according to our prior knowledge about the PDE at hand. We further enhance the search space with adaptive slopes. The proposed adaptive activation function can be used to solve different PDE systems in an interpretable way. Its effectiveness is demonstrated on a series of benchmarks. Code is available at https://github.com/LeapLabTHU/AdaAFforPINNs.

\---

## Paper ID 768

**Record number:** 361  
**Paper ID:** 768  
**DOI:** 10.1186/s40537-016-0043-6  
**Publisher URL:** https://doi.org/10.1186/s40537-016-0043-6

### Exact abstract

Machine learning and data mining techniques have been used in numerous real-world applications. An assumption of traditional machine learning methodologies is the training data and testing data are taken from the same domain, such that the input feature space and data distribution characteristics are the same. However, in some real-world machine learning scenarios, this assumption does not hold. There are cases where training data is expensive or difficult to collect. Therefore, there is a need to create high-performance learners trained with more easily obtained data from different domains. This methodology is referred to as transfer learning. This survey paper formally defines transfer learning, presents information on current solutions, and reviews applications applied to transfer learning. Lastly, there is information listed on software downloads for various transfer learning solutions and a discussion of possible future research work. The transfer learning solutions surveyed are independent of data size and can be applied to big data environments.

\---

## Paper ID 769

**Record number:** 362  
**Paper ID:** 769  
**DOI:** 10.1631/FITEE.2200675  
**Publisher URL:** https://link.springer.com/10.1631/FITEE.2200675

### Exact abstract

Artificial intelligence (AI) has been a driving force for innovation and social progress in various domains (Pan, 2017). However, most of its industrial applications have focused on the signal processing domain, which relies on data generated and collected by different sensors. Recently, some researchers have suggested combining digital AI (DIAI) and physical AI (PAI), which could lead to a significant advancement in the theoretical foundation of AI. In this paper, we explore the concept of PAI and propose two subdomains: integrated PAI (IPAI) and distributed PAI (DPAI). We also discuss the challenges and opportunities for the sustainable development and governance of PAI. Since PAI requires continuous processing of signals from distributed sources across the edge, fog, and Internet of Things (IoT), it can be seen as an extension of the distributed computing continuum system in the field of AI.

\---

## Paper ID 773

**Record number:** 363  
**Paper ID:** 773  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Solving partial differential equations through deep learning has recently received wide attention, with physics- informed neural networks (PINNs) being successfully used and showing great potential. This study focuses on the development of an efficient PINN approach for structural vibration analysis in “long-duration” simulation that is still a technical but unresolved issue of PINN. The accuracies of the standard PINN (STD-PINN) and conventional time-marching PINN (CT-PINN) methods in solving vibration equations, especially free-vibration equations, are shown to decrease to varying degrees with the simulation time. To resolve this problem, an advanced time- marching PINN (AT-PINN) approach is proposed. This method is used to solve structural vibration problems over successive time segments by adopting four key techniques: normalization of the spatiotemporal domain in each time segment, a reactivating optimization algorithm, transfer learning and the sine activation function. To illustrate the advantages of the AT-PINN approach, numerical simulations for the forced and free vibration analysis of strings, beams and plates are performed. In addition, the vibration analysis of plates under multi- physics loads is also studied. The results show that the AT-PINN approach can provide accurate solutions with lower computational cost even in long-duration simulation. The techniques adopted are verified to effectively avoid the offset of the spatiotemporal domain, reduce the accumulative error and enhance the training efficiency. The present one overcomes the drawback of the existing PINN methods and is expected to become an effective method for solving time-dependent partial differential equations in long-duration simulation.

\---

## Paper ID 774

**Record number:** 364  
**Paper ID:** 774  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Vortex-induced vibration (VIV) is a common fluid–structure interaction phenomenon in practical engineering with significant research value. Traditional methods to solve VIV issues include experimental studies and numerical simulations. However, experimental studies are costly and time-consuming, while numerical simulations are constrained by low Reynolds numbers and simplified models. Deep learning (DL) can successfully capture VIV patterns and generate accurate predictions by using a large amount of training data. The Physics-Informed Neural Network (PINN), a subfield of DL, introduces physics equations into the loss function to reduce the need for large data. Nevertheless, PINN loss functions often include multiple loss terms, which may interact with each other, causing imbalanced training speeds and a potentially inferior overall performance. To address this issue, this study proposes an Adaptive Weight Physics-Informed Neural Network (AW-PINN) algorithm built upon a gradient normalization method (GradNorm) from multi-task learning. The AW-PINN regulates the weights of each loss term by computing the gradient norms on the network weights, ensuring the norms of the loss terms match predefined target values. This ensures balanced training speeds for each loss term and improves both the prediction precision and robustness of the network model. In this study, a VIV dataset of a cylindrical body with different degrees of freedom is used to compare the performance of the PINN and three PINN optimization algorithms. The findings suggest that, compared to a standard PINN, the AW-PINN lowers the mean squared error (MSE) on the test set by 50%, significantly improving the prediction accuracy. The AW-PINN also demonstrates an enhanced stability across different datasets, confirming its robustness and reliability for VIV modeling. Compared with existing methods in the literature, the AW-PINN achieves a comparable lift prediction accuracy using merely 1% of the training data, while simultaneously improving the prediction accuracy of the peak lift.

\---

## Paper ID 775

**Record number:** 365  
**Paper ID:** 775  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

In addressing the intricate dynamic responses of pipeline conveying fluid characterized by spatiotemporal multi- scales and multi-modal contributions, Fourier feature-embedded physics-information neural network (FF-PINN) is proposed. By introducing Fourier feature mapping to decompose the temporal and spatial scale information, FF-PINN precisely captures the relatively low-frequencies on the macroscopic time scale as well as the relatively high-frequencies on the microscopic scale of the pipeline’s vibration. This approach significantly overcomes the spectral bias encountered by PINN when learning high-frequency information. To verify the effectiveness and accuracy of this method, the proposed FF-PINN is applied to solve the pipeline conveying fluid model with fixed support at both ends. The relative L2 error between the obtained results and the reference solution is 1.8 × 10−2, concurrently with a significant reduction in computational time. Additionally, an analysis of hyperparameter σ selection is conducted to evaluate its impact on the performance of FF-PINN, while establishing the correspondence between hyperparameter and eigenvector frequency. The results demonstrate that choosing appropriate hyperparameters empowers FF-PINN to better learn the vibration of specific frequencies, enabling the accurate modeling of pipeline vibrations’ dynamic response. It provides a potent solution for solving spatiotemporal multi-scale complexity problems involving the superposition of high-and low-frequencies.

\---

## Paper ID 777

**Record number:** 366  
**Paper ID:** 777  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) have recently been utilized to tackle wave equation-based forward and inverse problems. However, they encounter challenges in accurately predicting the high-frequency wavefields, known as the spectral bias problem. Based on the previously used frequency upscaling (FU) and neuron splitting (NS) concepts to help with the high frequency wavefields, we present a sequence of strategies \[i.e., multiscale Fourier feature mapping (MFFM), frequency transferring (FT), a revised NS (RNS), and denser sampling (DS)] to overcome the spectral bias challenge of PINN in solving the frequency-domain acoustic wave equation. MFFM projects PINN inputs onto sinusoids with off-axis frequency distributions, characterizing the PINN wavefield by a Fourier decomposition. FT initializes the NN for higher frequency (e.g., 16 Hz) using the pretrained NN for the nearest lower frequency (e.g., 15 Hz), which is refined from FU (where the 16 Hz NN is initialized by that of 8 Hz). Thus, we show that FT is more effective than FU. We also introduce RNS, which is a modified strategy derived from NS by adding a small amount of random noise, drawn from a uniform distribution, to the replicated weights/biases to break the symmetry after replication, improving the NN’s representational capacity. Because MFFM, FT, and RNS alone are inadequate for generating high-frequency wavefields, we further develop DS to use a smaller spatial sampling interval within the same computational domain (the wavefield is more continuous and smoother). DS helps PINN simulate high-frequency components easier. The experiments on typical models validate the effectiveness of the introduced strategies. We share the codes and data through a public repository.

\---

## Paper ID 778

**Record number:** 367  
**Paper ID:** 778  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) represent a continuous and differentiable mapping function, approximating solution curves for given differential equations. Recent studies have demonstrated the significant potential of PINNs as an alternative or complementary approach to conventional numerical methods. However, their application in structural dynamics, such as cantilever dynamics and fluid-induced excitations, poses challenges. In particular, limited accuracy and robustness in resolving high-order differential equations, including fourth-order differential equations encountered in structural dynamics, are major problems with PINNs. To address these challenges, this study explores optimal strategies for constructing PINNs in the context of cantilever dynamics: (1) performing scaling analysis for the configuration, (2) incorporating the second-order non-linear term of the input variables, and (3) utilizing a neural network architecture that reflects a series solution of decomposed bases. These proposed methods have significantly enhanced the predictive capabilities of PINNs, showing an order-of-magnitude improvement in accuracy compared to standard PINNs in resolving the dynamic oscillation of cantilevers and fluid-induced excitation driven by added mass forces. Furthermore, this study extends to the domain of fluid-induced excitation in cantilever dynamics, representing an extreme case of coupled dynamics in fluid–structure interaction. This research is expected to establish crucial baselines for the further development of PINNs in structural dynamics, with potential applicability to high-order coupled differential equations.

\---

## Paper ID 779

**Record number:** 368  
**Paper ID:** 779  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Flow modeling based on physics-informed neural networks (PINNs) is emerging as a potential artificial intelligence (AI) technique for solving fluid dynamics problems. However, conventional PINNs encounter inherent limitations when simulating incompressible fluids, such as difficulties in selecting the sampling points, balancing the loss items, and optimizing the hyperparameters. These limitations often lead to non-convergence of PINNs. To overcome these issues, an improved and generic PINN for fluid dynamic analysis is proposed. This approach incorporates three key improvements: residual-based adaptive sampling, which automatically samples points in areas with larger residuals; adaptive loss weights, which balance the loss terms effectively; and utilization of the differential evolution optimization algorithm. Then, three case studies at low Reynolds number, Kovasznay flow, vortex shedding past a cylinder, and Beltrami flow are employed to validate the improved PINNs. The contribution of each improvement to the final simulation results is investigated and quantified. The simulation results demonstrate good agreement with both analytical solutions and benchmarked computational fluid dynamics (CFD) calculation results, showcasing the efficiency and validity of the improved PINNs. These PINNs have the potential to reduce the reliance on CFD simulations for solving fluid dynamics problems.

\---

## Paper ID 780

**Record number:** 369  
**Paper ID:** 780  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural network (PINN) architectures are recent developments that can act as surrogate models for fluid dynamics in order to reduce computational costs. PINNs make use of deep neural networks, where the Navier-Stokes equation and freestream boundary conditions are used as losses of the neural network; hence, no simulation or experimental data in the training of the PINN is required. Here, the formulation of PINN for fluid dynamics is demonstrated and critical factors influencing the PINN design are discussed through a low Reynolds number flow over a cylinder. The PINN architecture showed the greatest improvement to the accuracy of results from the increase in the number of layers, followed by the increase in the number of points in the point cloud. Increasing the number of nodes per hidden layer brings about the smallest improvement in performance. In general, PINN is much more efficient than computational fluid dynamics (CFD) in terms of memory resource usage, with PINN requiring 5–10 times less memory. The tradeoff for this advantage is that it requires longer computational time, with PINN requiring approximately 3 times more than that of CFD. In essence, this paper demonstrates the direct formulation of PINN without the need for data, alongside hyperparameter design and comparison of computational requirements.

\---

## Paper ID 781

**Record number:** 370  
**Paper ID:** 781  
**DOI:** 10.1016/j.petsci.2023.10.019  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S1995822623002947

### Exact abstract

Recent advances in deep learning have expanded new possibilities for fluid flow simulation in petroleum reservoirs. However, the predominant approach in existing research is to train neural networks using high-fidelity numerical simulation data. This presents a significant challenge because the sole source of authentic wellbore production data for training is sparse. In response to this challenge, this work introduces a novel architecture called physics-informed neural network based on domain decomposition (PINN-DD), aiming to effectively utilize the sparse production data of wells for reservoir simulation with large-scale systems. To harness the capabilities of physics-informed neural networks (PINNs) in handling small-scale spatial-temporal domain while addressing the challenges of large-scale systems with sparse labeled data, the computational domain is divided into two distinct sub-domains: the well-containing and the well-free sub-domain. Moreover, the two sub-domains and the interface are rigorously constrained by the governing equations, data matching, and boundary conditions. The accuracy of the proposed method is evaluated on two problems, and its performance is compared against state-of-theart PINNs through numerical analysis as a benchmark. The results demonstrate the superiority of PINNDD in handling large-scale reservoir simulation with limited data and show its potential to outperform conventional PINNs in such scenarios.

\---

## Paper ID 782

**Record number:** 371  
**Paper ID:** 782  
**DOI:** 10.1016/j.jcp.2018.08.029  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999118305527

### Exact abstract

High-dimensional PDEs have been a longstanding computational challenge. We propose to solve highdimensional PDEs by approximating the solution with a deep neural network which is trained to satisfy the diﬀerential operator, initial condition, and boundary conditions. Our algorithm is meshfree, which is key since meshes become infeasible in higher dimensions. Instead of forming a mesh, the neural network is trained on batches of randomly sampled time and space points. The algorithm is tested on a class of high-dimensional free boundary PDEs, which we are able to accurately solve in up to 200 dimensions. The algorithm is also tested on a high-dimensional Hamilton-Jacobi-Bellman PDE and Burgers’ equation. The deep learning algorithm approximates the general solution to the Burgers’ equation for a continuum of diﬀerent boundary conditions and physical conditions (which can be viewed as a high-dimensional space). We call the algorithm a “Deep Galerkin Method (DGM)” since it is similar in spirit to Galerkin methods, with the solution approximated by a neural network instead of a linear combination of basis functions. In addition, we prove a theorem regarding the approximation power of neural networks for a class of quasilinear parabolic PDEs.

\---

## Paper ID 783

**Record number:** 372  
**Paper ID:** 783  
**DOI:** 10.1073/pnas.1718942115  
**Publisher URL:** https://pnas.org/doi/full/10.1073/pnas.1718942115

### Exact abstract

Developing algorithms for solving high-dimensional partial differential equations (PDEs) has been an exceedingly difficult task for a long time, due to the notoriously difficult problem known as the “curse of dimensionality.” This paper introduces a deep learning-based approach that can handle general highdimensional parabolic PDEs. To this end, the PDEs are reformulated using backward stochastic differential equations and the gradient of the unknown solution is approximated by neural networks, very much in the spirit of deep reinforcement learning with the gradient acting as the policy function. Numerical results on examples including the nonlinear Black–Scholes equation, the Hamilton–Jacobi–Bellman equation, and the Allen–Cahn equation suggest that the proposed algorithm is quite effective in high dimensions, in terms of both accuracy and cost. This opens up possibilities in economics, finance, operational research, and physics, by considering all participating agents, assets, resources, or particles together at the same time, instead of making ad hoc assumptions on their interrelationships.

\---

## Paper ID 785

**Record number:** 373  
**Paper ID:** 785  
**DOI:** 10.1016/j.petrol.2021.109205  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0920410521008597

### Exact abstract

Due to the explosion of the digital age of data, deep learning applications for different physical sciences have gained momentum. In this paper, we implement a physics informed neural network (PINN) technique that incorporates information from the fluid flow physics as well as observed data to model the Buckley-Leverett problem. The classical problem of drainage of gas into a water-filled porous medium is used to validate our implementation. Several cases are tested that signify the importance of the coupling between observed data and physics-informed neural networks for different parameter space. Our results indicate that PINNs are capable of capturing the overall trend of the solution even without observed data but the resolution and accuracy of the solution are improved tremendously with observed data. Adding a small amount of diffusion to the PDE- constrained loss function improved the solution slightly only when observed data were used. Moreover, the PINN is used to solve the inverse problem and infer the most optimal multiphase flow parameters. The performance of the PINN is compared to that of an artificial neural network (ANN) without any physics. We show that the ANN performs comparably well to the PINN when the observed data used to train the ANN include times that span the early- and late-time behavior. As opposed to the PINN, the ANN is not able to predict the solution when only early-time saturation profiles are provided as observed data and extrapolation are needed.

\---

## Paper ID 788

**Record number:** 374  
**Paper ID:** 788  
**DOI:** 10.1615/JMachLearnModelComput.2020033905  
**Publisher URL:** https://doi.org/10.1615/JMachLearnModelComput.2020033905

### Exact abstract

Deep learning techniques have recently been applied to a wide range of computational physics problems. In this paper, we focus on developing a physics-based approach that enables the neural network to learn the solution of a dynamic fluid-flow problem governed by a nonlinear partial differential equation (PDE). The main idea of physics informed machine learning (PIML) approaches is to encode the underlying physical law (i.e., the PDE) into the neural network as prior information. We investigate the applicability of the PIML approach to the forward problem of immiscible twophase fluid transport in porous media, which is governed by a nonlinear first-order hyperbolic PDE subject to initial and boundary data. We employ the PIML strategy to solve this forward problem without any additional labeled data in the interior of the domain. Particularly, we are interested in nonconvex flux functions in the PDE, where the solution involves shocks and mixed waves (shocks and rarefactions). We have found that such a PIML approach fails to provide reasonable approximations to the solution in the presence of shocks in the saturation field. We investigated several architectures and experimented with a large number of neural-network parameters, and the overall finding is that PIML strategies that employ the nonlinear hyperbolic conservation equation in the loss function are inadequate. However, we have found that employing a parabolic form of the conservation equation, whereby a small amount of diffusion is added, the neural network is consistently able to learn accurate approximations of the solutions containing shocks and mixed waves.

\---

## Paper ID 795

**Record number:** 375  
**Paper ID:** 795  
**DOI:** 10.46690/ager.2023.04.04  
**Publisher URL:** https://www.yandy-ager.com/index.php/ager/article/view/653

### Exact abstract

Physical phenomenon in nature is generally simulated by partial differential equations. Among different sorts of partial differential equations, the problem of two-phase flow in porous media has been paid intense attention. As a promising direction, physics-informed neural networks shed new light on the solution of partial differential equations. However, current physics-informed neural networks’ ability to learn partial differential equations relies on adding artificial diffusion or using prior knowledge to increase the number of training points along the shock trajectory, or adaptive activation functions. To address these issues, this study proposes a physics-informed neural network with long short-term memory and attention mechanism, an ingenious method to solve the Buckley-Leverett partial differential equations representing two-phase flow in porous media. The designed network structure overcomes the dependency on artificial diffusion terms and enhances the importance of shallow features. The experimental results show that the proposed method is in good agreement with analytical solutions. Accurate approximations are shown even when encountering shock points in saturated fields of porous media. Furthermore, experiments show our innovative method outperforms existing traditional physics-informed machine learning approaches.

\---

## Paper ID 796

**Record number:** 376  
**Paper ID:** 796  
**DOI:** 10.1016/j.geoen.2024.212711  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2949891024000812

### Exact abstract

Solving hyperbolic partial differential equation is a challenging task due to the non-linear feature that requires to capture the shock wave. Numerical solution relies on discretization of both spatial and temporal domain, and iterative approach like Newton’s method is involved and time step size is crucial for stability and convergence in the presence of non-linearity. Physics-informed neural networks (PINNs) offer a new and versatile approach for solving partial different equations by minimizing the residual of governing equations and approaching to the initial and boundary conditions. Currently, most PINNs are built based on a simple fully connected neural network which exhibits some limitations to model complex non-linear partial differential equations. In this paper, a novel method is developed to combine Transformer model and PINNs approach (Tr-PINN) to solving a hyperbolic partial differential equation directly without any prior knowledge. Tr-PINN method is based on a series of Transformer blocks where self-attention mechanism is used to capture the non-linearity features of the solution. Unlike most PINNs models generate inputs with spatial and temporal vectors only, Tr-PINN introduces the non-linearity term mobility ratio as additional input vector. The method is tested on a classical hyperbolic problem, called Buckley-Leverett equation with non-convex flux function. We found that the Tr-PINN method can capture the water shock front effectively and provide a general solution for Buckley-Leverett equation under various mobility ratio conditions.

\---

## Paper ID 800

**Record number:** 377  
**Paper ID:** 800  
**DOI:** 10.26577/jpcsit2023v1i4a4  
**Publisher URL:** https://jpcsit.kaznu.kz/index.php/kaznu/article/view/96

### Exact abstract

. In recent years, the integration of modern information technologies has become pervasive across various industries, and the oil sector is no exception. The utilization of high-performance computing technologies, artificial intelligence algorithms, and advanced methods for data collection, processing, and storage has been instrumental in addressing challenges related to enhancing oil recovery. While deep learning has demonstrated significant advancements in diverse applications, its application to solving partial differential equations has recently gained prominence. A noteworthy strategy entails substituting conventional numerical techniques with neural networks that approximate solutions to partial differential equations. Physics-informed neural networks (PINNs) represent a significant development in this domain by incorporating partial differential equations directly within the loss function of neural network through automatic differentiation. This study presents a numerical algorithm and a PINNs to solve the one-dimensional equation describing the distribution of water and oil pressure within the context of the Buckley-Leverett mathematical model. The obtained results include the numerical solution and predictions derived from the PINN neural network to solve the pressure distribution. The insights gained from the comparative analysis underscore the promising role of PINNs as a robust and competitive tool for addressing intricate problems within the realm of complex fluid dynamics.

\---

## Paper ID 801

**Record number:** 378  
**Paper ID:** 801  
**DOI:** 10.1016/j.petrol.2022.110179  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0920410522000705

### Exact abstract

The physics-informed neural network (PINN) is a general deep learning framework for simulating physical processes and surrogate modeling without labeled data. The basic idea is to formulate the loss function according to the governing PDEs such that the neural network (NN) can be trained to minimize the PDE residual along with other misfits such as initial and boundary conditions. Following PINN, various networks have been developed for simulating steady and transient flows with or without labeled data. However, according to literature review, it is still not clear how to use NNs to simulate transient Darcy flows in highly heterogeneous reservoir models with source/sink terms in the absence of labeled data. In the current study, a physicsinformed deep convolutional neural network (PIDCNN) architecture for simulating and predicting such flows is presented. Convolutional neural network is found to be more efficient than fully-connected neural network since 2D variables can be regarded as images. The finite volume discretization scheme is adopted to build the loss function to approximate the PDE residual such that flux continuity between neighboring cells of different properties can be implemented conveniently using the two-point flux approximation. Test cases are used to show that PIDCNN can accurately simulate transient Darcy flows in homogeneous and heterogeneous reservoirs. Further, it is demonstrated that PIDCNN can be trained as a surrogate to predict the transient flow fields of reservoir models not included in training. In addition, the CNN structure in the current study can be trained as a surrogate with labels for a particular output for better accuracy. A workflow is presented to demonstrate that CNN can be trained as an accurate surrogate for production rates using labels generated by the PIDCNN-based solver such that the entire workflow is external-label-free.

\---

## Paper ID 802

**Record number:** 379  
**Paper ID:** 802  
**DOI:** 10.1016/j.jcp.2023.111919  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999123000141

### Exact abstract

The physics-informed neural network (PINN) is a general deep learning framework for simulating flows with limited or no labeled data. In the current study, we develop a physics-informed convolutional neural network (PICNN) for simulating transient two-phase Darcy flows in heterogeneous reservoir models with source/sink terms in the absence of labeled data, where the finite volume method (FVM) is adopted to approximate the PDE residual in the loss function such that flux continuity between neighboring cells of different properties is defined rigorously, and a well model is adopted to approximate the high pressure gradient near sources or sinks. The implicit-pressure explicit-saturation (IMPES) scheme is employed such that only a single CNN needs to be trained per time step. Dirichlet boundary conditions are not a mandatory requirement for PICNN-based implicit solver but act as labeled data that can help enhance accuracy. The proposed approach is validated in homogeneous and heterogeneous reservoirs and aspects including efficiency and accuracy are discussed. In addition, we demonstrate that the CNN structure can be trained as a data-driven surrogate for two-phase Darcy flows given sufficient labeled samples.

\---

## Paper ID 803

**Record number:** 380  
**Paper ID:** 803  
**DOI:** 10.2118/208602-PA  
**Publisher URL:** https://onepetro.org/SJ/article/27/02/1176/475096/Deep-Learning-of-Two-Phase-Flow-in-Porous-Media

### Exact abstract

A theory-guided neural network (TgNN) is proposed as a prediction model for oil/water phase flow in this paper. The model is driven by not only labeled data, but also scientific theories, including governing equations, boundary and initial conditions, and expert knowledge. Two independent neural networks (NNs) are built in the TgNN for oil/water phase flow problems, with one approximating pressure and the other approximating saturation. The two networks are connected by loss functions, which include a data mismatch term, as well as theory-guided terms. The desired parameters in NNs are trained by a certain optimization algorithm to decrease the value of the loss function. The training process uses a two-stage strategy as follows: (1) after one of the two NNs obtains a satisfactory result, parameters in the network with better performance are fixed in calculating the nonlinear terms and (2) the other NN continues to be trained until satisfactory performance is also obtained. The proposed TgNN offers an effective way to solve the coupled nonlinear two-phase flow problem. Numerical results demonstrate that the proposed TgNN achieves better accuracy than the traditional deep neural network (DNN). This is because the governing equation can constrain spatial and temporal derivatives, and other physical constraints (i.e., boundary and initial conditions, expert knowledge) can make the outputs more scientifically consistent. The effect of sparse data (including labeled data and collocation points) is tested, and the results show that more labeled data and collocation points lead to improved long-term prediction performance. However, the TgNN can also be successfully trained in the absence of labeled data by merely adhering to the above-mentioned scientific theories. In addition, several more complicated scenarios are tested, including the existence of data noise, changes in well condition, transfer learning, and the existence of different levels of dynamic capillary pressure. Compared with the traditional DNN, TgNN possesses superior stability with the guidance of theories for the considered complex situations.

\---

## Paper ID 804

**Record number:** 381  
**Paper ID:** 804  
**DOI:** 10.1063/5.0249560  
**Publisher URL:** https://pubs.aip.org/pof/article/37/1/013605/3329262/Physics-informed-radial-basis-function-neural

### Exact abstract

Physics-informed neural networks (PINNs) improve the accuracy and generalization ability of prediction by introducing physical constraints in the training process. As a model combining physical laws and deep learning, it has attracted wide attention. However, the training cost of PINNs is high, especially for the simulation of more complex two-phase Darcy flow. In this study, a physics-informed radial basis function neural network (PIRBFNN) is proposed to simulate two-phase Darcy flow of oil and water efficiently. Specifically, in each time step, oil phase and water phase equations are discretized based on the finite volume method, and then, the physics-informed loss is constructed according to the residual of their coupling equations, and the pressure is approximated by RBFNN. Based on the obtained pressure, another physicsinformed loss is constructed according to the residual of discrete water phase equation and the water saturation is approximated by another RBFNN. For boundary conditions, we use “hard constraints” to speed up the training of PIRBFNN. The straightforward structure of PIRBFNN also contributes to an efficient training process. In addition, we have simply proved the ability of RBFNN to fit continuous functions. Finally, the experimental results also verify the computational efficiency of PIRBFNN. Compared with physics-informed convolutional neural network, the training time of PIRBFNN is reduced by more than three times.

\---

## Paper ID 805

**Record number:** 382  
**Paper ID:** 805  
**DOI:** 10.1016/j.cma.2022.115100  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S004578252200295X

### Exact abstract

This paper aims to provide a machine learning framework to simulate two-phase flow in porous media. The proposed algorithm is based on Physics-informed neural networks (PINN). A novel residual-based adaptive PINN is developed and compared with the residual-based adaptive refinement (RAR) method and with PINN with fixed collocation points. The proposed algorithm is expected to have great potential to be applied to different fields where adaptivity is needed. In this paper, we focus on the two-phase flow in porous media problem. We provide two numerical examples to show the effectiveness of the new algorithm. It is found that adaptivity is essential to capture moving flow fronts. We show how the results obtained through this approach are more accurate than using RAR method or PINN with fixed collocation points, while having a comparable computational cost.

\---

## Paper ID 806

**Record number:** 383  
**Paper ID:** 806  
**DOI:** 10.26577/jpcsit2024-02i03-04  
**Publisher URL:** https://jpcsit.kaznu.kz/index.php/kaznu/article/view/150

### Exact abstract

. This paper presents an approach to constructing adaptive one-dimensional computational grids using the Beltrami equation and Physics-Informed Neural Networks (PINNs). The main focus is on exploring the potential for precise control of grid node density through the control function ω(s), which allows the grid to adapt to the local features of the problem. The Beltrami equation used, being a key component of the method, regulates the distribution of nodes by modifying the function’s derivatives depending on the values of the control function. The effectiveness of this approach is demonstrated through examples involving one and two regions of node clustering. The results showed that the PINN method combined with the Beltrami equation allows for the creation of computational grids with a high degree of adaptation to given conditions, providing detailed modeling in critical regions. This approach has advantages over traditional numerical methods, as integrating physical laws in the grid construction process minimizes numerical errors and improves modeling accuracy. The use of neural networks offers flexibility in model tuning and the ability to account for complex nonlinear dependencies. The discussion of the results highlights the potential of using PINNs for adaptive grid construction in various fields requiring precise and efficient modeling. In conclusion, this study confirms that the combination of the Beltrami equation and PINNs is a powerful tool for adaptive grid construction, opening new possibilities for numerical modeling of complex physical processes.

\---

## Paper ID 808

**Record number:** 384  
**Paper ID:** 808  
**DOI:** 10.1016/j.cageo.2024.105826  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0098300424003091

### Exact abstract

Simulating Darcy flows in porous media is fundamental to understand the future flow behavior of fluids in hydrocarbon and carbon storage reservoirs. Geological models of reservoirs are often associated with high uncertainly leading to many numerical simulations for history matching and production optimization. Machine learning models trained with simulation data can provide a faster alternative to traditional simulators. In this paper we present a single Fourier Neural Operator (FNO) surrogate that outperforms traditional reservoir simulators by the ability to predict pressures and saturations on varying permeability fields, well locations, well controls, and number of wells. The maximum-mean relative error of 95% of pressure and saturation predictions is less than 5%. This is achieved by employing a simple yet very effective data augmentation technique that reduces the dataset size by 75% and reduces overfitting. Also, constructing the input tensor in a binary fashion enables predictions on unseen well locations, well controls, and number of wells. Such model can accelerate history matching and reservoir characterization procedures by several orders of magnitude. The ability to predict on new well locations, well controls, and number of wells enables highly efficient reservoir management and optimization.

\---

## Paper ID 809

**Record number:** 385  
**Paper ID:** 809  
**DOI:** 10.2118/209223-PA  
**Publisher URL:** https://onepetro.org/SJ/article/27/03/1815/480880/Fourier-Neural-Operator-for-Solving-Subsurface-Oil

### Exact abstract

While deep learning has achieved great success in solving partial differential equations (PDEs) that accurately describe engineering systems, it remains a big challenge to obtain efficient and accurate solutions for complex problems instead of traditional numerical simulation. In the field of reservoir engineering, the current mainstream machine learning methods have been successfully applied. However, these popular methods cannot directly solve the problem of 2D two-phase oil/water PDEs well, which is the core of reservoir numerical simulation. Fourier neural operator (FNO) is a recently proposed high-efficiency PDE solution architecture that overcomes the shortcomings of the above popular methods, which can handle this type of PDE problem well in our work. In this paper, a deep-learning-based model is developed to solve three categories of problems controlled by the subsurface 2D oil/water two-phase flow PDE based on the FNO. For this complex engineering equation, we consider many factors, select characteristic variables, increase the dimension channel, expand the network structure, and realize the solution of the engineering problem. The first category is to predict the distribution of saturation and pressure fields by PDE parameters. The second category is the prediction of time series. The third category is for the inverse problem. It has achieved good results on both forward and inverse problems. The network uses fast Fourier transform (FFT) to extract PDE information in Fourier space to approximate differential operators, making the network faster and with greater physics significance. The model is mesh-independent and has good generalization, which also shows superresolution. Compared to the original FNO, we improve the network structure, add physical constraints to deal with boundary conditions (BCs), and use a shape matrix to control irregular boundaries. Also, we have improved the FFT module to make the transformation smoother. Compared with advanced deep learning-based solvers at different resolutions, the results show that this model overcomes some shortcomings of popular algorithms such as physics-informed neural networks (PINNs) and fully convolutional network (FCN) and has stronger accuracy and applicability. Our work has great potential in the replacement of traditional numerical methods with neural networks for reservoir numerical simulation.

\---

## Paper ID 811

**Record number:** 386  
**Paper ID:** 811  
**DOI:** 10.1063/5.0214646  
**Publisher URL:** https://pubs.aip.org/pof/article/36/7/073305/3300833/Self-adaptive-and-time-divide-and-conquer-physics

### Exact abstract

Physics-informed neural networks (PINNs) are emerging as a promising artificial intelligence approach for solving complex two-phase flow simulations. A critical challenge in these simulations is an accurate representation of the gas–liquid interface using interface tracking methods. While numerous studies in conventional computational fluid dynamics (CFD) have addressed this issue, there remains a notable absence of research within the context of PINNs-based two-phase flow simulations. Therefore, this study aims to develop a robust and generic PINNs for two-phase flow by incorporating the governing equations with three advanced interface tracking methods—specifically, the Volume of Fluid, Level Set, and Phase-Field method—into an improved PINN framework that has been previously proposed and validated. To further enhance the performance of the PINNs in simulating two-phase flow, the phase field constraints, residual connection and the time divideand-conquer strategies are employed for restricting neural network training within the scope of physical laws. This self-adaptive and time divide-and-conquer (AT) PINNs is then optimized by minimizing both the residual and loss terms of partial differential equation. By incorporating the three different interface tracking methods, it efficiently handles high-order derivative terms and captures the phase interface. The case of single rising bubble in two-phase flow is simulated to validate the robustness and accuracy of the AT PINNs. The simulation’s accuracy is evaluated by comparing its performance in terms of velocity, pressure, phase field, center of mass, and rising velocity with that of conventional PINNs and CFD benchmarks. The results indicate that the AT PINNs coupled with these interface tracking methods offers a satisfactory performance in simulating rising bubble phenomenon.

\---

## Paper ID 812

**Record number:** 387  
**Paper ID:** 812  
**DOI:** 10.1137/22M1517081  
**Publisher URL:** https://epubs.siam.org/doi/10.1137/22M1517081

### Exact abstract

In this paper, based on the physics-informed neural networks (PINNs) framework, a meshfree method using the deep neural network approach is developed for solving two kinds of two-phase interface problems governed by different dynamic partial differential equations on either side of the stationary interface with the jump and high-contrast coefficients. The first type of two-phase interface problem is the fluid-fluid (two-phase flow) interface problem modeled by Navier–Stokes equations with high-contrast physical parameters across the interface. The second one is the fluid-structure interaction problem modeled by Navier–Stokes equations on one side of the interface and the structural equation on the other side, where the fluid and the structure interact with each other via the kinematic and dynamic interface conditions across the interface. Following the PINNs framework, the DNN/meshfree method is respectively developed for two kinds of two-phase interface problems by approximating the solutions using different DNN’s structures in different subdomains and reformulating the interface problems as least-squares minimization problems based on a space-time sampling-point set (as the training dataset). Mathematically, the approximation error analyses are carried out for both interface problems, revealing an intrinsic strategy for efficiently sampling points to improve the accuracy. In addition, compared with traditional discretization approaches (e.g., finite element/volume/difference methods), the proposed DNN/meshfree method and its error analysis technique can be smoothly extended to many other dynamic interface problems with stationary interfaces. Numerical experiments illustrate the accuracy of the proposed method for the presented two-phase interface problems and validate theoretical results to some extent through two numerical examples.

\---

## Paper ID 814

**Record number:** 388  
**Paper ID:** 814  
**DOI:** 10.1016/j.petrol.2021.108644  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0920410521003041

### Exact abstract

Spontaneous imbibition is a natural process where the wetting phase spontaneously replaces the non-wetting phase due to the capillary force in porous media. This multiphase flow mechanism happens frequently in many natural processes such as during nonaqueous phase liquids transport, CO2 storage, soil infiltration, improved oil recovery, etc. Due to the nature of the capillary dominated flow, the imbibition rate is a natural consequence of the rock-fluid interaction and remains unknown from the problem configuration. This has made the solution to spontaneous imbibition unique and differentiates it from the traditional Buckley-Leverett type of displacement problems. While many attempts have been made in the literature to solve the spontaneous imbibition governing equations, most of them are quite mathematically involved even for the self-similar solution governed by an ordinary differential equation (ODE). Only a few more complex solutions exist for the transient spontaneous imbibition problems. In this research, we have adopted the concept and workflow of the deep physics-informed neural networks (PINN) to solve the spontaneous imbibition problems, both self-similar and transient. It focuses on learning the prior knowledge embedded within the governing differential equations rather than depending on input-output data pairs. The one-dimensional unsteady state immiscible, incompressible horizontal flow equations with a saturation-dependent dispersion coefficient under Lagrangian formulation is included in the workflow as the main loss function, along with the physics governed boundary conditions such as capillary end effect. The methodology represents a robust and straightforward function approximator for the solutions of this class, and the effectiveness of the proposed framework is demonstrated through two example calculations.

\---

## Paper ID 816

**Record number:** 389  
**Paper ID:** 816  
**DOI:** 10.1615/JMachLearnModelComput.2023046921  
**Publisher URL:** https://www.dl.begellhouse.com/journals/558048804a15188a,01cca90e1b73210a,04cad08313f652a7.html

### Exact abstract

Physics-informed neural networks (PINNs) have recently been applied to a wide range of computational physical problems. In this paper, we use PINNs to solve an inverse two-phase flow problem in heterogeneous porous media where only sparse direct and indirect measurements are available. The forward two-phase flow problem is governed by a coupled system of partial differential equations (PDEs) with initial and boundary conditions. As for inverse problems, the solutions are assumed to be known at scattered locations but some coefficients or variable functions in the PDEs are missing or incomplete. The idea is to train multiple neural networks representing the solutions and the unknown variable function at the same time such that both the underlying physical laws and the measurements can be honored. The numerical results show that our proposed method is able to recover the incomplete permeability field in different scenarios. Moreover, we show that the method can be used to forecast the future dynamics with the same format of loss function formulation. In addition, we employ a neural network structure inspired by the deep operator networks (DeepONets) to represent the solutions which can potentially shorten the time of the training process.

\---

## Paper ID 817

**Record number:** 390  
**Paper ID:** 817  
**DOI:** 10.1016/j.geoen.2022.211368  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S2949891022000562

### Exact abstract

The uncertainty quantification (UQ) of subsurface two-phase flow usually requires numerous executions of forward simulations under varying conditions. In this work, a novel coupled theory-guided neural network (TgNN) based surrogate model is built to facilitate computation efficiency under the premise of satisfactory accuracy. The core notion of this proposed method is to bridge two separate blocks on top of an overall network. They underlie the TgNN model in a coupled form, which reflects the coupling nature of pressure and water saturation in the two-phase flow equation. The TgNN model not only relies on labeled data, but also incorporates underlying scientific theory and experiential rules (e.g., governing equations, stochastic parameter fields, boundary and initial conditions, well conditions, and expert knowledge) as additional components into the loss function. The performance of the TgNN-based surrogate model for two-phase flow problems is tested by different numbers of labeled data and collocation points, as well as the existence of data noise. The proposed TgNN-based surrogate model offers an effective way to solve the coupled nonlinear two-phase flow problem, and shows good accuracy and strong robustness when compared with the purely data-driven surrogate model. By combining the accurate TgNN-based surrogate model with the Monte Carlo method, UQ tasks can be performed at a minimum cost to evaluate statistical quantities. Since the heterogeneity of the random fields strongly impacts the results of the surrogate model, corresponding variance and correlation length are added to the input of the neural network to maintain its predictive capacity. In addition, several more complicated scenarios are also considered, including dynamically changing well conditions and dynamically changing variance of random fields. The results show that the TgNN-based surrogate model exhibits satisfactory accuracy, stability, and efficiency in the UQ problem of subsurface two-phase flow.

\---

## Paper ID 818

**Record number:** 391  
**Paper ID:** 818  
**DOI:** \[Not available]  
**Publisher URL:** https://purl.stanford.edu/xy319cq8534

### Exact abstract

Uncertainty quantification is an increasingly important aspect of many areas of computational sci- ence, where the challenge is to make reliable predictions about the performance of complex physical systems in the absence of complete or reliable data. Multiphase flow and transport of fluids through subsurface reservoirs is an example of a complex system where prediction accuracy is of high demand. Reservoir simulation with realistic porous systems often involves large-scale and complex porous media, coupled with incomplete geological information due to scarce and expensive data acquisition processes. Nevertheless, reservoir simulation aims at predicting the state of the oil production at wells by, for example, providing the saturation fields at any given moment of the simulation. The uncertain properties of the media translate into significant uncertainties in how flow evolves with time, thus encouraging a stochastic treatment of the saturation fields, especially through the study of saturation probability density functions (PDF) and cumulative distribution functions (CDF), or saturation statistical moments. Stochastic treatment of subsurface flow has been an active area of research for a long time. Diﬀerent approaches have been developed so far for stochastic analysis of subsurface flow – Monte Carlo methods, statistical moment equations method, stochastic spectral methods, and probability distribution methods (i.e., PDF methods). However, in many practical applications computationally expensive Monte Carlo simulations remain the preferred option. Thus, the goal of this work is to develop computational methods for efficient uncertainty quantifi- cation of subsurface multiphase transport. Particularly, we focus on two methods – streamline-based probability distribution method, called FROST (Ibrahima et al., 2018), and physics informed ma- chine learning method (PIML). The distribution method is inspired by a Lagrangian approach of the stochastic transport problem and expresses the saturation cumulative distribution function in terms of a deterministic analytical mapping of scalar random fields. In many subsurface applications these random fields are smooth and can be estimated at low computational costs (e.g., using few Monte Carlo runs), thus making the distribution method computationally attractive. The following describes each contribution briefly. Natural subsurface systems often have highly heterogeneous multiscale features and complex geological structures. However, existing uncertainty quantification methods for stochastic subsurface flow are rarely tested on complex geostatistical models, while they often assume simple statistical models of the random fields describing input reservoir properties (e.g., log-Gaussian fields). Yet, geological realism is often a critical aspect of the uncertainty assessment in subsurface fluid flow simulations. Thus, in this thesis, we first study the performance of the streamline-based distribution method with regard to the complexity of the input geological distributions. Specifically, we are interested in channelized porous systems modeled by the methods of multipoint geostatistics. First, we study the behavior of travel time in these systems – the key variable that aﬀects the propagation of uncertainty to the saturation field within the framework of the FROST distribution method. Then, we demonstrate the application of the FROST method in the case of single-phase and nonlinear two-phase flow regimes. We compare the FROST results – the obtained water saturation CDFs and the statistical moments – with those of the standard Monte-Carlo approach. Two-phase displacement problems may also involve more than two components – in this case, we have to deal with multicomponent displacements, which are essential for modeling enhanced oil recovery and carbon-storage processes. The interaction between components usually leads to the hyperbolic system of coupled nonlinear equations governing the evolution of such systems. These compositional problems often have much more complex solutions (i.e., than oil-water displacements in standard Buckley-Leverett problem), and are already quite challenging for numerical modeling due to a large number of unknowns (e.g., multiple components, grid dimensions) and strong non- linear eﬀects. Hence, uncertainty quantification in such systems is usually particularly difficult and computationally expensive. However, the study of uncertainty propagation methods for this chal- lenging multicomponent setting is limited. So, in the second part of the thesis, we focus on extending the streamline-based uncertainty propagation method to two-phase multicomponent displacements. We also show that within the FROST framework one can obtain the joint probability distribution of any two compositions at specific spatial location and time. To illustrate the performance and applicability of the developed method we provide various numerical examples that include three- and four-component displacement problems in 1-D and three-component displacements in 2-D space subject to the random reservoir properties. In the past decades, machine learning (ML) methods achieved remarkable results across ap- plications and disciplines, including computer vision, speech recognition, robotics, and healthcare. Undoubtedly, the range of ML applications will grow and the impact of ML methods will continue to spread. Currently, there is a growing interest in employing ML strategies to solve forward and inverse computational physics problems. The physics informed machine learning (PIML) frame- works developed by (Raissi et al., 2019a) and (Zhu et al., 2019) are prominent examples. However, why these methods work or what are their limitations when applied to diﬀerent partial diﬀerential equations is not well understood yet and remains an open question. Thus, in the third part of the thesis, we study the physics informed machine learning framework for solving nonlinear hyperbolic PDEs describing immiscible two-phase transport. The basic idea of physics informed machine learning approaches is to encode the partial diﬀeren- tial equations (PDE) that govern the physics into the neural network. The encoding is achieved by enriching the loss function with the governing conservation equation. Using the initial and bound- ary conditions, the network learns the solution of the forward problem without any labeled data. The scarcity of site-specific “labeled” data presents a serious challenge to the modeling of fluid flow processes. Thus, if PIML approaches can be used to model the nonlinear flow and transport that govern these processes, then they could change the practice of reservoir simulation. In this work, we explore the application of a particular PIML approach to solving the nonlinear hyperbolic equation that describes the nonlinear immiscible two-phase flow in porous media. Specifically, we focus on the forward solution of a Riemann problem (i.e., a nonlinear conservation law together with piecewise constant data having a single discontinuity) with a non-convex flux function, which is notoriously hard to solve with standard numerical methods due to the emergence of saturation shocks in the domain. We have found that under the current implementation a PIML approach produces large errors in the presence of shocks in the saturation field. We investigated several architectures and experimented with a large number of neural-network parameters, but this had little impact on the overall performance of the method. However, we have found that by employing a parabolic form of the conservation equation or using a discrete form of the PDE residual, whereby a small amount of diﬀusion is added to the underlying transport PDE, the neural network is consistently able to learn an accurate approximation of the solutions containing shocks and mixed waves (i.e., shocks and rarefactions).

\---

## Paper ID 819

**Record number:** 392  
**Paper ID:** 819  
**DOI:** 10.1016/j.jcp.2024.113656  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999124009045

### Exact abstract

This study investigates the potential accuracy boundaries of physics-informed neural networks, contrasting their approach with previous similar works and traditional numerical methods. We find that selecting improved optimization algorithms significantly enhances the accuracy of the results. Simple modfications to the loss function may also improve precision, oﬀering an additional avenue for enhancement. Despite optimization algorithms having a greater impact on convergence than adjustments to the loss function, practical considerations often favor tweaking the latter due to ease of implementation. On a global scale, the integration of an enhanced optimizer and a marginally adjusted loss function enables a reduction in the loss function by several orders of magnitude across diverse physical problems. Consequently, our results obtained using compact networks (typically comprising 2 or 3 layers of 20-30 neurons) achieve accuracies comparable to finite diﬀerence schemes employing thousands of grid points. This study encourages the continued advancement of PINNs and associated optimization techniques for broader applications across various fields.

\---

## Paper ID 820

**Record number:** 393  
**Paper ID:** 820  
**DOI:** 10.1016/j.jcp.2025.113906  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0021999125001895

### Exact abstract

We present the hidden-layer concatenated physics informed neural network (HLConcPINN) method, which combines hidden-layer concatenated feed-forward neural networks, a modified block time marching strategy, and a physics informed approach for approximating partial differential equations (PDEs). We analyze the convergence properties and establish the error bounds of this method for two types of PDEs: parabolic (exemplified by the heat and Burgers’ equations) and hyperbolic (exemplified by the wave and nonlinear Klein-Gordon equations). We show that its approximation error of the solution can be effectively controlled by the training loss for dynamic simulations with long time horizons. The HLConcPINN method in principle allows an arbitrary number of hidden layers not smaller than two and any of the commonly-used smooth activation functions for the hidden layers beyond the first two, with theoretical guarantees. This generalizes several recent neural-network techniques, which have theoretical guarantees but are confined to two hidden layers in the network architecture and the tanh activation function. Our theoretical analyses subsequently inform the formulation of appropriate training loss functions for these PDEs, leading to physics informed neural network (PINN) type computational algorithms that differ from the standard PINN formulation. Ample numerical experiments are presented based on the proposed algorithm to validate the effectiveness of this method and confirm aspects of the theoretical analyses.

\---

## Paper ID 821

**Record number:** 394  
**Paper ID:** 821  
**DOI:** 10.1016/j.cpc.2024.109428  
**Publisher URL:** https://linkinghub.elsevier.com/retrieve/pii/S0010465524003515

### Exact abstract

Physics-informed neural networks (PINNs) gained widespread advancements in solving differential equations, where the performance tightly hinges on the choice of activation functions that are inefficient when selected manually. To tackle this issue, we propose two straightforward yet powerful adaptive activation functions: a weighted average function that adjusts activation functions by directly manipulating their weights, and a L2- normalization function that compresses learnable parameters. These methods ensure a consistent sum of weights for each activation function, thereby enhancing optimization efficiency. We assess the performance of these approaches across a range of differential equation problems, encompassing Poisson equation, Wave equation, Burgers equation, Navier-Stokes equation, and linear/nonlinear solid mechanics problems. Through comparisons with exact solutions, we demonstrate significant improvements in convergence rate and solution accuracy. Our results underscore the efficacy of these techniques, providing a simple yet promising pathway for augmenting PINNs performance across diverse applications. The source codes and software implementation are available at https://github.com/jzhange/AAF-for-PINNs.

\---

## Paper ID 824

**Record number:** 395  
**Paper ID:** 824  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Neural networks (NN) have been studied and used widely in the field of computational mechanics, especially to approximate material behavior. One of their disadvantages is the large amount of data needed for the training process. In this paper, a new approach to enhance NN training with physical knowledge using constraint optimization techniques is presented. Specific constraints for hyperelastic materials are introduced, which include energy conservation, normalization and material symmetries. We show, that the introduced enhancements lead to better learning behavior with respect to well known issues like a small number of training samples or noisy data. The NN is used as a material law within a finite element analysis and its convergence behavior is discussed with regard to the newly introduced training enhancements. The feasibility of NNs trained with physical constraints is shown for data based on real world experiments. We show, that the enhanced training outperforms state-of-the-art techniques with respect to stability and convergence behavior within FE simulations.

\---

## Paper ID 825

**Record number:** 396  
**Paper ID:** 825  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Data-driven methods are becoming an essential part of computational mechanics due to their advantages over traditional material modeling. Deep neural networks are able to learn complex material response without the constraints of closed-form models. However, data-driven approaches do not a priori satisfy physics-based mathematical requirements such as polyconvexity, a condition needed for the existence of minimizers for boundary value problems in elasticity. In this study, we use a recent class of neural networks, neural ordinary diﬀerential equations (N-ODEs), to develop data-driven material models that automatically satisfy polyconvexity of the strain energy. We take advantage of the properties of ordinary diﬀerential equations to create monotonic functions that approximate the derivatives of the strain energy with respect to deformation invariants. The monotonicity of the derivatives guarantees the convexity of the energy. The N-ODE material model is able to capture synthetic data generated from closed-form material models, and it outperforms conventional models when tested against experimental data on skin, a highly nonlinear and anisotropic material. We also showcase the use of the N-ODE material model in finite element simulations of reconstructive surgery. The framework is general and can be used to model a large class of materials, especially biological soft tissues. We therefore expect our methodology to further enable data-driven methods in computational mechanics.

\---

## Paper ID 826

**Record number:** 397  
**Paper ID:** 826  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics Informed Neural Networks (PINNs) have recently gained popularity for solving partial diﬀerential equations, given the fact they escape the curse of dimensionality. In this paper, we present Physics Informed Neural Networks as an underdetermined point matching collocation method then expose the connection between Galerkin Least Squares (GALS) and PINNs, to develop an a priori error estimate, in the context of elliptic problems. In particular, techniques that belong to the realm of least squares finite elements and Rademacher complexity analysis are used to obtain the error estimate.

\---

## Paper ID 827

**Record number:** 398  
**Paper ID:** 827  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Deep learning and the collocation method are merged and used to solve partial differential equations describing structures’ deformation. We have considered different types of materials: linear elasticity, hyperelasticity (neo-Hookean) with large deformation, and von Mises plasticity with isotropic and kinematic hardening. The performance of this deep collocation method (DCM) depends on the architecture of the neural network and the corresponding hyperparameters. The presented DCM is meshfree and avoids any spatial discretization, which is usually needed for the finite element method (FEM). We show that the DCM can capture the response qualitatively and quantitatively, without the need for any data generation using other numerical methods such as the FEM. Data generation usually is the main bottleneck in most data-driven models. The deep learning model is trained to learn the model’s parameters yielding accurate approximate solutions. Once the model is properly trained, solutions can be obtained almost instantly at any point in the domain, given its spatial coordinates. Therefore, the deep collocation method is potentially a promising standalone technique to solve partial differential equations involved in the deformation of materials and structural systems as well as other physical phenomena.

\---

## Paper ID 829

**Record number:** 399  
**Paper ID:** 829  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

In computational mechanics, the finite element method (FEM) is a very common discretization numerical technique. The complexity of numerical applications, however, is rising today. As a result, classic solution methods typically require more processing power and exhibit higher computational costs. To lower the computing cost associated with the numerical analysis, machine learning approaches can be coupled with the FEM and used as surrogate solvers or as a prediction tool. This alternative was examined in order to demonstrate the possibilities of fusing artificial NN with FEM for a biomechanical application. The proximal femur was used as a numerical example. Thus, distinct geometries were generated and to each discretized model different load cases were applied. Then, all the discrete models were analyzed with the FEM, and the initial conditions (geometry and load cases) and the obtained results (displacements and stresses) were organized as input and output data, respectively. The ANN was trained and then its accuracy was verified. It was observed that artificial NN can accurately forecast displacements and stresses while also saving a significant amount of computing time.

\---

## Paper ID 830

**Record number:** 400  
**Paper ID:** 830  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

This paper addresses the computational challenges inherent in the stochastic characterization and uncertainty quantification of Micro-Electro-Mechanical Systems (MEMS) capacitive accelerometers. Traditional methods, such as Markov Chain Monte Carlo (MCMC) algorithms, are often constrained by the computational intensity required for high-fidelity (e.g., finite element) simulations. To overcome these limitations, we propose to use supervised learning-based surrogate models, specifically artificial neural networks, to effectively approximate the response of MEMS capacitive accelerometers. Our approach involves training the surrogate models with data derived from initial high-fidelity finite element analyses (FEA), providing rich datasets to be generated in an offline phase. The surrogate models replicate the FEA accuracy in predicting the behavior of the accelerometer under a wide range of fabrication parameters, thereby reducing the online computational cost without compromising accuracy. This enables extensive and efficient stochastic analyses of complex MEMS devices, offering a flexible framework for their characterization. A key application of our framework is demonstrated in estimating the sensitivity of an accelerometer, accounting for unknown mechanical offsets, over-etching, and thickness variations. We employ an MCMC approach to estimate the posterior distribution of the device’s unknown fabrication parameters, informed by its response to transient voltage signals. The integration of surrogate models for mapping fabrication parameters to device responses, and subsequently to sensitivity measures, greatly enhances both backward and forward uncertainty quantification, yielding accurate results while significantly improving the efficiency and effectiveness of the characterization process. This process allows for the reconstruction of device sensitivity using only voltage signals, without the need for direct mechanical acceleration stimuli.

\---

## Paper ID 831

**Record number:** 401  
**Paper ID:** 831  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

The hierarchical deep-learning neural network (HiDeNN) (Zhang et al, Computational Mechanics, 67:207–230) provides a systematic approach to constructing numerical approximations that can be incorporated into a wide variety of Partial differential equations (PDE) and/or Ordinary differential equations (ODE) solvers. This paper presents a framework of the nonlinear finite element based on HiDeNN approximation (nonlinear HiDeNN-FEM). This is enabled by three basic building blocks employing structured deep neural networks: 1) A partial derivative operator block that performs the differentiation of the shape functions with respect to the element coordinates, 2) An r-adaptivity block that improves the local and global convergence properties and 3) A materials derivative block that evaluates the material derivatives of the shape function. While these building blocks can be applied to any element, specific implementations are presented in 1D and 2D to illustrate the application of the deep learning neural network. Two-step optimization schemes are further developed to allow for the capabilities of r-adaptivity and easy integration with any existing FE solver. Numerical examples of 2D and 3D demonstrate that the proposed nonlinear HiDeNNFEM with r-adaptivity provides much higher accuracy than regular FEM. It also significantly reduces element distortion and suppresses the hourglass mode.

\---

## Paper ID 832

**Record number:** 402  
**Paper ID:** 832  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

This paper introduces JAX-FEM, an open-source differentiable finite element method (FEM) library. Constructed on top of Google JAX, a rising machine learning library focusing on highperformance numerical computing, JAX-FEM is implemented with pure Python while scalable to efficiently solve problems with moderate to large sizes. For example, in a 3D tensile loading problem with 7.7 million degrees of freedom, JAX-FEM with GPU achieves around 10× acceleration compared to a commercial FEM code depending on platform. Beyond efficiently solving forward problems, JAX-FEM employs the automatic differentiation technique so that inverse problems are solved in a fully automatic manner without the need to manually derive sensitivities. Examples of 3D topology optimization of nonlinear materials are shown to achieve optimal compliance. Finally, JAX-FEM is an integrated platform for machine learning-aided computational mechanics. We show an example of data-driven multi-scale computations of a composite material where JAX-FEM provides an all-in-one solution from microscopic data generation and model training to macroscopic FE computations. The source code of the library and these examples are shared with the community to facilitate computational mechanics research.

\---

## Paper ID 833

**Record number:** 403  
**Paper ID:** 833  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Electroanatomical maps are a key tool in the diagnosis and treatment of atrial fibrillation. Current approaches focus on the activation times recorded. However, more information can be extracted from the available data. The fibers in cardiac tissue conduct the electrical wave faster, and their direction could be inferred from activation times. In this work, we employ a recently developed approach, called physics informed neural networks, to learn the fiber orientations from electroanatomical maps, taking into account the physics of the electrical wave propagation. In particular, we train the neural network to weakly satisfy the anisotropic eikonal equation and to predict the measured activation times. We use a local basis for the anisotropic conductivity tensor, which encodes the fiber orientation. The methodology is tested both in a synthetic example and for patient data. Our approach shows good agreement in both cases and it outperforms a state of the art method in the patient data. The results show a first step towards learning the fiber orientations from electroanatomical maps with physics-informed neural networks.

\---

## Paper ID 834

**Record number:** 404  
**Paper ID:** 834  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Accurately inferring underlying electrophysiological (EP) tissue properties from action potential recordings is expected to be clinically useful in the diagnosis and treatment of arrhythmias such as atrial fibrillation. It is, however, notoriously difficult to perform. We present EP-PINNs (Physics Informed Neural Networks), a novel tool for accurate action potential simulation and EP parameter estimation from sparse amounts of EP data. We demonstrate, using 1D and 2D in silico data, how EP-PINNs are able to reconstruct the spatio-temporal evolution of action potentials, whilst predicting parameters related to action potential duration (APD), excitability and diffusion coefficients. EP-PINNs are additionally able to identify heterogeneities in EP properties, making them potentially useful for the detection of fibrosis and other localised pathology linked to arrhythmias. Finally, we show EP-PINNs effectiveness on biological in vitro preparations, by characterising the effect of anti-arrhythmic drugs on APD using optical mapping data. EP-PINNs are a promising clinical tool for the characterisation and potential treatment guidance of arrhythmias.

\---

## Paper ID 836

**Record number:** 405  
**Paper ID:** 836  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Non-invasive assessment of the electrical activation pattern can significantly contribute to the diagnosis and treatment of cardiac arrhythmias, due to faster and safer diagnosis, improved surgical planning and easier follow-up. One promising path is to measure the mechanical contraction via echocardiography and utilize this as an indirect way of measuring the original activation pattern. To solve this demanding inversion task, we make use of physics-informed neural networks, an upcoming methodology to solve forward and inverse physical problems governed by partial differential equations. In this study, synthetic data sets were created, consisting of 2D excitation waves coupled to an isotropic and linearly deforming elastic medium. We show that for both focal and spiral patterns, the underlying excitation waves can be reconstructed accurately. We test the robustness of the method against Gaussian noise, reduced spatial resolution and projected tri-planar data. In situations where the data quality is heavily reduced, we show how to improve the reconstruction by additional regularization on the wave speed. Our findings suggest that physics-informed neural networks hold the potential to solve sparse and noisy bio-mechanical inversion problems and may offer a pathway to non-invasive assessment of certain cardiac arrhythmias.

\---

## Paper ID 837

**Record number:** 406  
**Paper ID:** 837  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) have emerged as a powerful framework for modeling complex physical systems by embedding governing equations into the learning process. For example, PINNs offer a promising approach to solving the inverse electrocardiographic imaging (ECGI) problem, which aims to reconstruct heart-surface electrical activity from body-surface potential measurements. However, existing PINN-based ECGI models face several challenges, including overfitting to sparsely sampled collocation points, unstable training dynamics, and limited network scalability-particularly when applied to high-dimensional spatiotemporal data. In this study, we propose a novel learning framework, i.e., physics-informed residual learning with spatiotemporal local support, to address these limitations. The method introduces two key innovations: (1) a numerical differentiation scheme that approximates spatial and temporal derivatives using local neighborhood information, enabling coherent spatiotemporal constraint enforcement, and (2) an adaptive residual network architecture with trainable skip connections that stabilizes optimization and improves model expressiveness. Experimental results on simulated body-heart geometries show that our method substantially outperforms traditional regularization-based inverse ECG approaches and previous PINN models, achieving higher reconstruction accuracy and improved robustness to sensor noise. This work advances the methodological foundation of broader implications for data-constrained modeling in complex dynamical systems.

\---

## Paper ID 838

**Record number:** 407  
**Paper ID:** 838  
**DOI:** 10.1115/1.4064449  
**Publisher URL:** https://doi.org/10.1115/1.4064449

### Exact abstract

Advancements in computing power have recently made it possible to utilize machine learning and deep learning to push scientific computing forward in a range of disciplines, such as fluid mechanics, solid mechanics, materials science, etc. The incorporation of neural networks is particularly crucial in this hybridization process. Due to their intrinsic architecture, conventional neural networks cannot be successfully trained and scoped when data are sparse, which is the case in many scientific and engineering domains. Nonetheless, neural networks provide a solid foundation to respect physics-driven or knowledge-based constraints during training. Generally speaking, there are three distinct neural network frameworks to enforce the underlying physics: (i) physics-guided neural networks (PgNNs), (ii) physics-informed neural networks (PiNNs), and (iii) physics-encoded neural networks (PeNNs). These methods provide distinct advantages for accelerating the numerical modeling of complex multiscale multiphysics phenomena. In addition, the recent developments in neural operators (NOs) add another dimension to these new simulation paradigms, especially when the real-time prediction of complex multiphysics systems is required. All these models also come with their own unique drawbacks and limitations that call for further fundamental research. This study aims to present a review of the four neural network frameworks (i.e., PgNNs, PiNNs, PeNNs, and NOs) used in scientific computing research. The state-of-the-art architectures and their applications are reviewed, limitations are discussed, and future research opportunities are presented in terms of improving algorithms, considering causalities, expanding applications, and coupling scientific and deep learning solvers.

\---

## Paper ID 839

**Record number:** 408  
**Paper ID:** 839  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) have emerged as a transformative methodology integrating deep learning with scientific computing. This review establishes a threedimensional analytical framework to systematically decode PINNs’ development through methodological innovation, theoretical breakthroughs, and cross-disciplinary convergence. The contributions include threefold: First, identifying the co-evolutionary path of algorithmic architectures from adaptive optimization (neural tangent kernel-guided weighting achieving 230% convergence acceleration in Navier-Stokes solutions) to hybrid numericaldeep learning integration (5× speedup via domain decomposition) and second, constructing bidirectional theory-application mappings where convergence analysis (operator approximation theory) and generalization guarantees (Bayesian-physical hybrid frameworks) directly inform engineering implementations, as validated by 72% cost reduction compared to FEM in high-dimensional spaces (p < 0.01, n = 15 benchmarks). Third, pioneering cross-domain knowledge transfer through application-specific architectures: TFE-PINN for turbulent flows (5.12 ± 0.87% error in NASA hypersonic tests), ReconPINN for medical imaging (△SSIM = +0.18 ± 0.04 on multi-institutional MRI), and SeisPINN for seismic systems (0.52 ± 0.18 km localization accuracy). We further present a technological roadmap highlighting three critical directions for PINN 2.0: neuro-symbolic, federated physics learning, and quantum-accelerated optimization. This work provides methodological guidelines and theoretical foundations for next-generation scientific machine learning systems.

\---

## Paper ID 840

**Record number:** 409  
**Paper ID:** 840  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) are widely used in the field of solid mechanics. Currently, PINNs are mainly used to solve problems involving single homogeneous materials. However, they have limited ability to handle the discontinuities that arise from multi-material, and they lack the capability to rigorously express complex material contact models. We propose a method for solving multi-material problems in solid mechanics using physics-informed neural networks. Inspired by domain decomposition technology, the calculation domain is divided according to the geometric distribution of materials, with different subnetworks applied to represent field variables. This study explains how the invariant momentum balance, kinematic relations, and different constitutive relations controlled by the material properties are incorporated into the subnetworks, and use additional regular terms to describe the contact relations between materials. Various test cases ranging from two-dimensional plane strain problems to three-dimensional stretching problems are solved using the proposed method. We introduce the concept of parameter sharing in multi-task learning (MTL) and incorporate it in the proposed method, which yields additional degrees of freedom in choosing the sharing structure and sharing mode. Compared with common physics-informed neural network algorithms, which are based on fully independent parameters, we develop a network structure with partial sharing structure and all-sharing mode that achieves higher accuracy when solving the example problems.

\---

## Paper ID 841

**Record number:** 410  
**Paper ID:** 841  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

In actual engineering, insufficient bearing samples for each fault category presents a substantial obstacle to the intelligent fault diagnosis of rolling bearings. To address sample imbalance, this work explores a novel bearing fault data–generation approach based on digital twin technique. First, an inverse physics–informed neural network (PINN) is built to recognize dynamic model parameters by embedding a bearing dynamic model into a neural network. In this network, a boundary loss is designed to quickly determine the approximate ranges of parameters that can accelerate network convergence, and a true value loss is constructed for the assessment of spectral discrepancy between simulated and actual data. Then, using an inverse PINN, a bearing fault dynamic model, and real vibration data, we propose a digital twin–based fault data–generation method for producing high-quality bearing fault samples under multiple working conditions and fault modes. Finally, the developed approach is applied to generate bearing fault vibration samples under a specific working condition. The samples are used for training the diagnostic network, thus solving the issue of sample imbalance. The comparison results of several experiments suggest that the developed data-generation method effectively improves the precision of cross-working-condition bearing fault diagnosis and surpasses multiple state-of-the-art methods.

\---

## Paper ID 842

**Record number:** 411  
**Paper ID:** 842  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

This study formulated a physics-informed neural network (PINN) to prognosticate the remaining useful life (RUL) of proton exchange membrane fuel cell (PEMFC), leveraging both prior knowledge of PEMFCs and aging test data. Governing equations elucidating membrane and catalyst degradation mechanisms were integrated into the PINN framework to assimilate the prior understanding of PEMFC degradation dynamics. Subsequently, operation time and current density were designated as input variables for the PINN to forecast output voltage, following a comprehensive analysis of PEMFC operational mechanisms and aging test data. Notably, a novel strategy involving replicating the current density from the training phase to the prediction phase was introduced, incorporating prior knowledge of PEMFC system variability into the PINN. Consequently, the proposed PINN demonstrated proficient prediction of PEMFC RUL while mitigating reliance on aging test data. This accomplishment, representing a 9.2 percentage points enhancement over the previously lowest reported data dependency of 35.2 %, substantiates the attainment of state-of-the-art status by the proposed PINN in reducing data dependency.

\---

## Paper ID 844

**Record number:** 412  
**Paper ID:** 844  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

The advancement of base isolation systems over recent years has been significant, enhancing the performance of structures under seismic conditions. A particularly effective system is the multi-stage friction pendulum, which offers a variety of effective pendula for energy dissipation. However, conducting nonlinear analyses of these structures using finite element analysis is computationally expensive and time-consuming due to the multiple sources of nonlinearity involved. This limitation poses a significant challenge for developing large-scale systems for post-earthquake rapid assessment. Accordingly, this research aims to address this challenge by developing a block-based physics-informed neural network (PINN) model as an alternative to finite element models for rapidly estimating the inelastic response of base-isolated structures. By embedding the governing physics into the neural network, the PINN model mitigates the data dependency issues associated with traditional artificial intelligence techniques and provides physically consistent predictions. Additionally, incorporating long short-term memory networks enhances the model’s predictive capabilities. The proposed technique operates in similar to general finite element models where it infers results specific to the structures it was trained on. This capability is crucial for applications requiring rapid post-earthquake assessment, making it suitable for integration into smart city infrastructure where fast earthquake damage detection systems are needed. The study demonstrates the effectiveness of the PINN model, showing superior performance compared to traditional data-driven models and partially informed PINNs, thereby offering a viable solution for overcoming the limitations of finite element analysis in rapid seismic response estimation.

\---

## Paper ID 845

**Record number:** 413  
**Paper ID:** 845  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Devising an effective control strategy to maximize the flexibility potential of electric water heaters (EWHs) requires a highly accurate and computationally inexpensive EWH model. Existing physics-based models are either too simplistic or computationally complex. This paper models EWHs using a physics-informed neural network (PINN) that integrates domain knowledge into the training process to ensure better physical consistency for capturing EWH thermal dynamics at a lower computational cost. Using a physics-based multizone (MZ) differential equation model (DEM), the EWH is discretized into multiple zones and modeled using a standard Multiple-Input-Multiple-Output (MIMO) PINN architecture to develop a generic and efficient EWH model. To improve the accuracy and interpretability further, a hybrid model that employs a Multiple-InputSingle-Output (MISO) PINN architecture together with physics derived features from the MZ DEM and a custom designed function for resolving temperature inversion is investigated in detail. Additionally, a customized recursive training strategy is developed to enable longer time-horizon simulations without performance degradation. Performance evaluations in both simulation and optimization frameworks using real-world data demonstrate the computational gains offered by PINN models over traditional MZ DEM.

\---

## Paper ID 846

**Record number:** 414  
**Paper ID:** 846  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

This forward-looking perspective introduces the current applications of AI in sustainable energy systems, focusing on machine learning (ML) in three key areas: (i) system modeling and prediction, (ii) energy operation and management, and (iii) anomaly detection and diagnostics. For future low-carbon, decentralized and multi-energy systems, increasing complexity and communication pose challenges for system forecasting, operational control, grid planning, and energy security. AI offers revolutionary solutions by enhancing renewable energy integration, optimizing energy storage, and improving fault detection and cybersecurity. However, AI methods face limitations, including dependence on extensive data, lack of physical interpretability, and issues of transferability and robustness, hindering broader adoption in the energy sector. Therefore, perspectives are offered on four aspects: (1) developing generative AI to provide synthetic energy data, (2) adopting physics-informed AI to mitigate inherent AI limitations, (3) utilizing AI-based control and energy planning to address multi-energy complexities, and (4) implementing layered AI-based cybersecurity measures to defend smart energy systems. Overall, this perspective provides insights into the evolving role of AI in future energy systems.

\---

## Paper ID 847

**Record number:** 415  
**Paper ID:** 847  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Building decarbonization is beneficial to improve energy efficiency and mitigate climate change worldwide, and it is necessary to accurately investigate building carbon emissions and identify the potential factors. A crucial challenge is that pioneer studies rarely explore the correlations between controllable parameters and building carbon emissions and are unable to estimate carbon emissions comprehensively. In this context, this work proposes a physics-informed encoder-decoder framework for predictive carbon emissions estimation. The input variables are transformed into sequences to extract essential features and time information in the encoder, where the decoder receives the sequence and makes a prediction. Simultaneously, the control-oriented physical laws are explored and integrated to update the conventional loss function. The proposed model has been applied to a high-rise commercial building in China. Results reveal that: (1) The model sees a significant prediction improvement by 9.24 % after considering physical laws and shows outstanding robustness under five dataset conditions; (2) The R2 for carbon emissions prediction is 0.963, while the accuracy for anomaly detection is 0.963; (3) Historical carbon emissions, supply water temperature and system operation status are the critical factors affecting carbon emissions. The proposed physics-informed deep learning model solves the performance dependencies on dataset size and can be directly used for control-oriented building modeling and decarbonization optimization.

\---

## Paper ID 848

**Record number:** 416  
**Paper ID:** 848  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Accurate prediction of endpoint carbon at the dynamic control stage in the converter is crucial for achieving smelting targets. Currently, there are two main methods for converter endpoint prediction: the data-driven method and the mechanism-based method. Data-driven methods exhibit high accuracy but are vulnerable to data quality variations and lack interpretability. Mechanism-based methods provide great interpretability but face challenges in precisely identifying key parameters in the mechanism formula. Inspired by the design concept of physics-informed neural networks (PINNs), an integrated data-driven and mechanism-based method for endpoint carbon prediction in BOF (dmPINNs, data-driven and mechanism-based physics-informed neural networks) is proposed, which has four parts: feature extraction, mechanism-based calculation, data-driven prediction, and integrated prediction. We identify key parameters of the mechanism formula through the neural network to obtain the specified formula for each heat and supervise the training process of the neural network through the mechanism formula to ensure interpretability. Experimental results show that, within the ±0.012% error range, the hit rate of endpoint carbon content using dmPINNs improved by 5.23% compared with the traditional data-driven method and has greater robustness with the supervision of the mechanism formula.

\---

## Paper ID 849

**Record number:** 417  
**Paper ID:** 849  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

In chemical engineering, process data are expensive to acquire, and complex phenomena are difficult to fully model. We explore the use of physics-informed neural networks (PINNs) for modeling dynamic processes with incomplete mechanistic semi-explicit differential–algebraic equation systems and scarce process data. In particular, we focus on estimating states for which neither direct observational data nor constitutive equations are available. We propose an easy-to-apply heuristic to assess whether estimation of such states may be possible. As numerical examples, we consider a continuously stirred tank reactor and a liquid–liquid separator. We find that PINNs can infer immeasurable states with reasonable accuracy, even if respective constitutive equations are unknown. We thus show that PINNs are capable of modeling processes when relatively few experimental data and only partially known mechanistic descriptions are available, and conclude that they constitute a promising avenue that warrants further investigation.

\---

## Paper ID 850

**Record number:** 418  
**Paper ID:** 850  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Explosion risk assessment (ERA) is essential for ensuring effective process safety and reliability management. Deep learning has been used to reduce the computational burden of computational fluid dynamics (CFD)-based ERA, but its ’black-box’ nature without considering relevant physics can lead to inaccuracies, especially in complex, obstructed scenarios. This paper develops a Physics-informed graph neural network approach, i.e., Physics\_GNN for real-time obstructed gas explosion simulation. An autoregressive GNN, namely GNN\_f is first applied to iteratively predict the spatiotemporal flame evolution. An ordinary differential equation (ODE) governing the interaction mechanism between the flame and blast wave propagation is used to predict the blast dynamics with the GNN\_f. A physical enhancement factor β is proposed to calibrate the overpressure dynamics prediction with congestions, which can be predicted by developing another GNN, namely GNN\_β. The integration of GNN\_f, GNN\_β and ODE leads to the final Physics\_GNN. A benchmark numerical dataset is constructed, using which Physics\_GNN and the state-of-the-art are then compared. The comparison demonstrates the superior accuracy of the proposed approach in real-time blast load prediction in congested scenarios. The Physics\_GNN approach also enables the description of the physical interactions between congestion, flame propagation, and blast load distribution. This paper provides an efficient and accurate approach to predict industrial explosion consequences, supporting robust ERA and risk-informed decision-makings about mitigation design of industrial facilities.

\---

## Paper ID 851

**Record number:** 419  
**Paper ID:** 851  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Renewable Power-to-Hydrogen (P2H2) system is an emerging decarbonization strategy for achieving global carbon neutrality. However, the propensity of hydrogen to leak and diffuse from the P2H2 facility poses great challenges to scaling up and safe applications. Accurate and efficient prediction of hydrogen jet and diffusion is critical to ensure the safety and efficacy of P2H2 system. Deep learning methods have shown promise in predicting gas jet and diffusion, but their generalization is limited, because of insufficient simulation data and excluding physical laws during the training process. This study develops a physics-informed graph neural network (Physics\_GNN) for hydrogen jet and diffusion prediction using sparse sensor data. Graph network is applied to model the spatial dependency between sensor data and governing equations, so the hydrogen jet and diffusion is immediately solved at each graph node. The computed residuals are then applied to constrain the training process of the graph network. Experimental data of subsonic and under-expanded hydrogen jet and diffusion are applied to validate the model. Results demonstrated Physics\_GNN exhibits 1000 times higher prediction accuracy compared to state-of-the-art physics-informed neural network and 100 times faster than CFD simulation. It enables accurate and rapid prediction of hydrogen jet and diffusion concentration and velocity, supporting safety design, operation management and rulemaking of P2H2 system in future.

\---

## Paper ID 852

**Record number:** 420  
**Paper ID:** 852  
**DOI:** \[Not available]  
**Publisher URL:** \[Not available]

### Exact abstract

Physics-informed neural networks (PINNs) are machine learning models that integrate data-based learning with partial differential equations (PDEs). In this work, for the first time we extend PINNs to model the numerically challenging case of astrophysical shock waves in the presence of a stellar gravitational field. Notably, PINNs suffer from competing losses during gradient descent that can lead to poor performance especially in physical setups involving multiple scales, which is the case for shocks in the gravitationally stratified solar atmosphere. We applied PINNs in three different setups ranging from modeling astrophysical shocks in cases with no or little data to data-intensive cases. Namely, we used PINNs (a) to determine the effective polytropic index controlling the heating mechanism of the space plasma within 1% error, (b) to quantitatively show that data assimilation is seamless in PINNs and small amounts of data can significantly increase the model’s accuracy, and (c) to solve the forward time-dependent problem for different temporal horizons. We addressed the poor performance of PINNs through an effective normalization approach by reformulating the fluid dynamics PDE system to absorb the gravity-caused variability. This led to a huge improvement in the overall model performance with the density accuracy improving between 2 and 16 times. Finally, we present a detailed critique on the strengths and drawbacks of PINNs in tackling realistic physical problems in astrophysics and conclude that PINNs can be a powerful complimentary modeling approach to classical fluid dynamics solvers.

\---

