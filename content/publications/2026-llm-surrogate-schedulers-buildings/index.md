---
title: "Fine-Tuned Large Language Models as Surrogate Schedulers for Smart Building Energy Management"
authors:
  - "me"
  - "Van-Hai Bui"
  - "Wencong Su"
date: '2026-08-01'
publication_types: ["article-journal"]
publication:
  name: "Energy and Buildings"
  volume: 364
  pages: "117588"
  publisher: "Elsevier"
abbr: "EnB"
authors_display: "R. Haghighi, V.-H. Bui, and W. Su"
peer_reviewed: true
abstract: "Buildings account for a substantial share of global energy consumption and associated carbon emissions, which has increased interest in net-zero energy buildings (NZEBs) and their efficient operation. In NZEB energy management, operational scheduling must coordinate distributed generation (DG), energy storage systems (ESSs), utility-grid power exchange, and thermal devices while minimizing operating cost under variable renewable generation and demand. Although mixed-integer linear programming (MILP) can provide optimal schedules, repeated online optimization may impose a considerable computational burden in real-time applications. This paper proposes a fine-tuned large language model (LLM) framework as a surrogate for MILP-based NZEB scheduling, with the aim of providing computationally efficient decision support and a flexible architecture for future smart-building energy management. The MILP model is first used to generate optimal set-points for DG dispatch, ESS charging/discharging power, grid buy/sell power, and heating/cooling device operation. These optimization-derived input-output pairs are then used to fine-tune the LLM so that it can directly predict near-optimal operational decisions without repeatedly solving the MILP problem. The proposed framework is evaluated against benchmark learning models using the same prediction-error metrics. The results show that the fine-tuned LLM achieves the best overall performance, with a test MAE of 0.0853 and RMSE of 0.286, outperforming both ANN and XGBoost under the same evaluation setting. Compared with ANN, the fine-tuned LLM reduces MAE and RMSE by 88.2% and 33.3%, respectively, while also improving over XGBoost by 79.7% in MAE and 24.7% in RMSE. In addition, the predicted schedules are assessed in terms of operational feasibility and system-level performance. These findings indicate that fine-tuned LLMs can serve as computationally efficient surrogates for near-optimal NZEB control."
tags:
  - "Large Language Models"
  - "Building Energy Management"
  - "Scheduling"
featured: true
doi: "10.1016/j.enbuild.2026.117588"
paper_url: "https://doi.org/10.1016/j.enbuild.2026.117588"
---
