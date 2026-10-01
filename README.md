# Rouzbeh Haghighi — Personal Website

Source for [rouzbehhaghighi.github.io](https://rouzbehhaghighi.github.io), the academic website of Rouzbeh Haghighi, Ph.D. candidate in Electrical & Computer Engineering at the University of Michigan-Dearborn.

The pages, styles, and text in this repository are written for this site. See `LICENSE`.

## Where things live

| Page or item            | Edit this                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| Profile, bio, links     | `data/authors/me.yaml`                                                                      |
| Profile photo           | `assets/media/authors/me.png`                                                               |
| About (home) page       | `content/_index.md` (lead sentence, research directions) and `layouts/index.html`           |
| Citation metrics        | `params.scholar` and `params.reviews` in `config/_default/config.yaml`                      |
| CV page                 | `content/cv.md` and `data/authors/me.yaml`                                                  |
| Publications            | one folder per paper in `content/publications/` with `index.md` (title, venue, DOI, abstract) |
| Manuscripts in review   | `content/publications/_index.md`                                                            |
| Projects                | one folder per project in `content/projects/` with `index.md` and figure images             |
| Professional service    | `content/professional-services.md`                                                          |
| Teaching                | `content/teaching.md`                                                                       |
| News                    | one folder per item in `content/blog/`                                                      |
| Menu                    | `config/_default/menus.yaml`                                                                |
| Colors and type         | `assets/css/site.css` (design tokens at the top, light and dark)                            |
| Page HTML               | `layouts/`                                                                                  |

### Publications

Each publication's title links to its DOI page (`paper_url`, or `doi` if `paper_url` is absent). Two actions appear under each entry: **Abstract** (from the `abstract` field; set `abstract_kind: summary` when the text is a summary rather than a published abstract) and **DOI**. Individual publication pages are not rendered.

### Projects

A project can list `figures` (image file in the project folder, caption, and the `source` publication slug used for attribution) and `related` publication slugs, which are rendered as a "Related publications" list. The first figure is used as the card image on the Projects page. The Projects page accepts a `?tag=` query parameter to pre-select a filter.

The `Publications/` folder holds local copies of the published PDFs used as source material for abstracts and figures. It is ignored by git and is not deployed.

## Deployment

Every push to `main` runs the **Deploy site** workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to the `gh-pages` branch. GitHub Pages serves that branch.

## Contact

haghighi@umich.edu · [Google Scholar](https://scholar.google.com/citations?user=D66vE80AAAAJ) · [LinkedIn](https://www.linkedin.com/in/haghighirouzbeh/) · [ORCID](https://orcid.org/0009-0006-7710-1266)
