# Rouzbeh Haghighi — Personal Website

Source for [rouzbehhaghighi.github.io](https://rouzbehhaghighi.github.io), the academic website of Rouzbeh Haghighi, Ph.D. candidate in Electrical & Computer Engineering at the University of Michigan-Dearborn.

Built with [Hugo](https://gohugo.io/) and the [HugoBlox academic-cv](https://github.com/HugoBlox/hugo-theme-academic-cv) template, with custom page layouts for the CV, Publications, and Teaching pages.

## Where things live

| Page or item          | Edit this                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Profile, bio, links   | `data/authors/me.yaml`                                                                        |
| Profile photo         | `assets/media/authors/me.png` (replace with your photo, square, same file name)               |
| About (home) page     | `content/_index.md`                                                                           |
| CV page               | `content/cv.md` (layout) and `data/authors/me.yaml` (education, experience, awards, service…) |
| Publications          | one folder per paper in `content/publications/` with `index.md` and `cite.bib`                |
| Manuscripts in review | `content/publications/_index.md`                                                              |
| Projects              | one folder per project in `content/projects/`; categories come from `tags`                    |
| Teaching              | `content/teaching.md`                                                                         |
| News                  | one folder per item in `content/blog/`                                                        |
| Menu                  | `config/_default/menus.yaml`                                                                  |
| Custom page layouts   | `layouts/_partials/hbx/blocks/` (`cv-itemized`, `pubs-list`, `teaching-list`)                 |

## Preview locally

```bash
pnpm install
hugo server
```

## Deployment

Every push to `main` runs the **Deploy site** workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to the `gh-pages` branch. GitHub Pages serves that branch. Do not edit `gh-pages` directly.

## Contact

haghighi@umich.edu · [Google Scholar](https://scholar.google.com/citations?user=D66vE80AAAAJ) · [LinkedIn](https://www.linkedin.com/in/haghighirouzbeh/) · [ORCID](https://orcid.org/0009-0006-7710-1266)
