---
title: "Storage Investment and Carbon Policy under AI Load Growth"
date: 2026-09-30
weight: 3
summary: "Game-theoretic and deep-RL models of second-life battery investment, EV charging, and carbon regulation."
tags:
  - "Planning & Markets"
  - "Grid for AI"
tech_stack:
  - "Stackelberg–Bayesian games"
  - "Capacity markets"
  - "Deep reinforcement learning (SAC)"
  - "Second-life batteries"
  - "EV charging stations"
status: "Completed"
featured: false
figures:
  - src: fig-1.png
    caption: "Soft actor-critic framework for operating an EV charging station with second-life battery storage under uncertain EV arrivals and grid prices."
    source: 2025-pesgm-drl-second-life-battery-ev-charging
  - src: fig-2.png
    caption: "Three-layer Stackelberg–Bayesian game: a regulator, an ISO capacity market, and technology-specific investors, with second-life batteries competing for capacity revenue."
    source: 2026-naps-stackelberg-bayesian-capacity-market
related:
  - 2026-naps-stackelberg-bayesian-capacity-market
  - 2025-pesgm-drl-second-life-battery-ev-charging
---

How should storage investment and carbon policy respond to AI-driven load growth? This project combines game theory and deep reinforcement learning to study second-life battery (SLB) investment, EV-charging operation, and carbon regulation, linking sustainability incentives to system-level cost and reliability.

The NAPS 2026 paper builds a three-level Stackelberg–Bayesian game. A regulator sets carbon penalties and subsidies, an ISO capacity market clears against a generation-expansion energy balance, and technology-specific investors decide capacity and operation under incomplete information, yielding a Bayesian Nash equilibrium. AI load growth enters as an additional growth factor on a greenfield expansion, and SLB storage competes with first-life storage for capacity revenue. The model quantifies how a carbon tax, a renewable subsidy, and an SLB subsidy reshape the investment mix, emissions, and profit.

The PESGM 2025 paper presents a deep-reinforcement-learning planning framework for EV charging stations with SLB-based battery storage. A soft actor-critic agent is trained on a year of data, covering seasonal variation, weekdays, and holidays, with a tailored reward that allows real-time operation under uncertain EV arrival and departure times and variable grid prices.
