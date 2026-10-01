---
title: "Resilience of Distribution and Interdependent Infrastructure"
date: 2026-09-30
weight: 5
summary: "Stochastic damage evaluation and resilience enhancement for distribution networks and coupled infrastructures."
tags:
  - "Reliability & Resilience"
tech_stack:
  - "Fragility curves"
  - "Partition-based event trees"
  - "Reliability block diagrams"
  - "Remote-controlled switch placement"
  - "GIS-aware logistics"
status: "Ongoing"
featured: false
figures:
  - src: fig-1.png
    caption: "The Stochastic Infrastructure Damage Evaluation (SIDE) method: from fragility curves and network partitioning to scenario generation, reduction, and the failure probability of the whole system."
    source: 2024-tpwrd-infrastructure-damage-evaluation
  - src: fig-2.png
    caption: "Single-line diagram of the RBTS bus 4 test system with candidate locations for remote-controlled switches."
    source: 2024-tpwrd-infrastructure-damage-evaluation
related:
  - 2024-tpwrd-infrastructure-damage-evaluation
---

Earthquakes, storms, and floods damage distribution networks and the infrastructures that depend on them. This project quantifies that damage and finds cost-effective ways to limit it.

In *IEEE Transactions on Power Delivery* we proposed the Stochastic Infrastructure Damage Evaluation (SIDE) method, a partition-based event-tree approach that combines fragility curves with reliability block diagrams to estimate cumulative damage from a disaster. Partition-based modeling replaces traditional series equipment sets, and unlikely scenarios are pruned for efficiency. Applied to the RBTS bus 4 system under an earthquake scenario, SIDE matched Monte Carlo simulation, and sensitivity analysis over disaster severity and budget showed that beyond a certain budget the optimal locations of remote-controlled switches stop changing.

Ongoing work extends the approach to resilience assessment and enhancement by remote-controlled switch placement in distribution systems (under review at *IEEE Transactions on Reliability*) and to the electricity, water, and transportation nexus, with a GIS-aware logistics framework for last-mile delivery of solar relief packs (under review at *IEEE Transactions on Smart Grid*).
