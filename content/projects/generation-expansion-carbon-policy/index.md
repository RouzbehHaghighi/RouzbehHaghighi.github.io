---
title: "Generation Expansion Planning with Carbon Policy"
date: 2026-09-30
weight: 8
summary: "Game-theoretic expansion planning with carbon tax, subsidies, and curtailment policies (M.Sc. research)."
tags:
  - "Planning & Markets"
tech_stack:
  - "Generation expansion planning"
  - "Game theory and Nash equilibrium"
  - "TLBO"
  - "Carbon tax and subsidy design"
status: "Completed"
featured: false
figures:
  - src: fig-1.png
    caption: "Candidate power-plant technologies in the generation expansion game, from gas turbines and nuclear to wind, solar, hydro, biomass, and geothermal."
    source: 2021-caie-generation-expansion-game-theory
  - src: fig-2.png
    caption: "Four strategies under government regulation: with and without a carbon tax, and with coordinated or non-coordinated players."
    source: 2021-caie-generation-expansion-game-theory
related:
  - 2021-caie-generation-expansion-game-theory
  - 2022-energies-tlbo-generation-expansion-planning
---

Long-term generation expansion planning (GEP) decides which plants to build and when, and carbon policy changes the answer. This project, carried out during my M.Sc. at Amirkabir University of Technology, modeled GEP as a game among power plants under government regulation.

In *Computers & Industrial Engineering* we formulated GEP with a game-theoretic approach that includes a carbon tax and a government subsidy, compared four strategies for carbon reduction on an Iranian case study, and ran a sensitivity analysis on the tax and subsidy levels.

In *Energies* we solved each player's expansion problem with the teaching–learning-based optimization (TLBO) algorithm, compared it with other metaheuristics, and developed a combined algorithm that reaches the Nash equilibrium among competing plants. Three scenarios evaluate the government's role in reducing carbon emissions.
