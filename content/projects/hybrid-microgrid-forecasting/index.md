---
title: "Forecasting for Hybrid PV/Wind/Battery Microgrids"
date: 2026-09-30
weight: 6
summary: "Machine-learning forecasts of wind, solar, load, and battery state of charge for microgrid energy management."
tags:
  - "AI for the Grid"
  - "Renewable Integration"
tech_stack:
  - "Time-series forecasting"
  - "Machine learning"
  - "Energy management"
  - "Hybrid PV/wind/battery systems"
status: "Completed"
featured: false
figures:
  - src: fig-1.png
    caption: "Hybrid PV/wind/battery microgrid, with the PV array and battery bank on the DC bus and the wind turbine and AC load on the AC bus."
  - src: fig-2.png
    caption: "Aerodynamic forces on a turbine blade: lift, drag, relative wind, and the angle of attack."
  - src: fig-3.png
    caption: "Actuator-disk model of the wind stream through a turbine rotor, with area, velocity, and pressure upstream, at the rotor, and downstream."
  - src: fig-4.png
    caption: "Wind-turbine energy conversion system and its dynamic model, from wind speed and pitch angle through the gearbox and generator to electrical power."
  - src: fig-5.png
    caption: "Mechanical and power model of a wind turbine, from wind speed through torque, inertia, and the power coefficient to generator speed and the load."
  - src: fig-6.png
    caption: "Hybrid PV–wind–battery system model: a 600 kW PV array, a 3 MW wind turbine, the load, and a 1500 Ah battery with its management system."
---

A microgrid can only be controlled as well as its inputs can be predicted. My M.Sc. thesis at Amirkabir University of Technology (2022) developed short- and medium-term forecasting models for wind speed, solar irradiance, load, and battery state of charge, and integrated them into the energy management strategy of a hybrid PV/wind/battery microgrid.

Feeding the forecasts into the controller improved the system's energy efficiency and dynamic control performance compared with operation on measured values alone.
