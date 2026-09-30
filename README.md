# Rouzbeh Haghighi — Personal Website

Source for [rouzbehhaghighi.github.io](https://rouzbehhaghighi.github.io), the academic website of Rouzbeh Haghighi, Ph.D. candidate in Electrical & Computer Engineering at the University of Michigan-Dearborn (power systems, reliability and resilience, AI data-center grid integration, LLMs for grid operation).

## Contents

| Path                       | What it holds                                            |
| -------------------------- | -------------------------------------------------------- |
| `_config.yml`              | Site title, URL, SEO metadata, feature flags             |
| `_pages/about.md`          | Home page biography                                      |
| `_bibliography/papers.bib` | Publications (`selected = {true}` marks home-page items) |
| `_pages/publications.md`   | Publications page and manuscripts under review           |
| `_data/cv.yml`             | CV page content                                          |
| `_data/socials.yml`        | Email and profile links                                  |
| `_news/`                   | News items shown on the home page                        |
| `assets/img/prof_pic.jpg`  | Profile photo                                            |

## Deployment

Every push to `main` triggers the **Deploy site** GitHub Actions workflow, which builds the site and publishes it to the `gh-pages` branch. GitHub Pages serves that branch. Do not edit `gh-pages` directly.

## Contact

[haghighi@umich.edu](mailto:haghighi@umich.edu) · [Google Scholar](https://scholar.google.com/citations?user=D66vE80AAAAJ) · [LinkedIn](https://www.linkedin.com/in/haghighirouzbeh/) · [ORCID](https://orcid.org/0009-0006-7710-1266)

## Credits

Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll template, used under the MIT License (see `LICENSE`).
