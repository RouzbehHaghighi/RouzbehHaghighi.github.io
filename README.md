# Rouzbeh Haghighi — Personal Website

Source for [rouzbehhaghighi.github.io](https://rouzbehhaghighi.github.io), the academic website of Rouzbeh Haghighi, Ph.D. candidate in Electrical & Computer Engineering at the University of Michigan-Dearborn.

The pages, styles, and text in this repository are written for this site. See `LICENSE`.

## Where things live

| Page or item          | Edit this                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Profile, bio, links   | `data/authors/me.yaml`                                                                        |
| Profile photo         | `assets/media/authors/me.png`                                                                 |
| About (home) page     | `content/_index.md` and `layouts/index.html`                                                  |
| CV page               | `content/cv.md` and `data/authors/me.yaml`                                                    |
| Publications          | one folder per paper in `content/publications/` with `index.md` and `cite.bib`                |
| Manuscripts in review | `content/publications/_index.md`                                                              |
| Projects              | one folder per project in `content/projects/`                                                 |
| Professional service  | `content/professional-services.md`                                                            |
| Teaching              | `content/teaching.md`                                                                         |
| News                  | one folder per item in `content/blog/`                                                        |
| Menu                  | `config/_default/menus.yaml`                                                                  |
| Colors and type       | `assets/css/site.css`                                                                         |
| Page HTML             | `layouts/`                                                                                    |

## Preview locally

From this folder:

```bash
hugo server
```

## Deployment

Every push to `main` runs the **Deploy site** workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to the `gh-pages` branch. GitHub Pages serves that branch.

## Contact

haghighi@umich.edu · [Google Scholar](https://scholar.google.com/citations?user=D66vE80AAAAJ) · [LinkedIn](https://www.linkedin.com/in/haghighirouzbeh/) · [ORCID](https://orcid.org/0009-0006-7710-1266)
