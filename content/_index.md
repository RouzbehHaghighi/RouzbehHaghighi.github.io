---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-09-30
type: landing

sections:
  - block: resume-biography-3
    content:
      # Profile to display: a file name in `data/authors/` (without .yaml)
      username: me
      text: ''
      button:
        text: View CV
        url: cv/
      headings:
        about: 'Professional Summary'
        education: 'Education'
        interests: 'Interests'
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: markdown
    id: research
    content:
      title: 'Research'
      subtitle: ''
      text: |-
        My work asks whether the grid can carry what comes next, from two directions.

        **AI for the grid.** Fine-tuned and multi-agent large language models and reinforcement learning as operational decision-makers: surrogate scheduling, economic dispatch, decentralized Volt/VAR control, and reliability-oriented clustering of DER-rich active distribution networks.

        **The grid for AI.** Hosting-capacity and reliability frameworks for large, uncertain AI data-center loads, with grid-aware load coordination and energy-storage strategies that expand hosting capacity while preserving reliability.

        I also work on reliability assessment under high inverter-based-resource penetration, resilience of interdependent infrastructure, and game-theoretic models of carbon policy and second-life battery investment, and I contribute to NSF Award #2321661.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 5
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: date-title-summary
      spacing:
        padding: [0, 0, 0, 0]
---
