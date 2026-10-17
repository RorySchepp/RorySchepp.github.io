# schepp.ca

Personal website of Rory Schepp, built with Jekyll and hosted on GitHub Pages.

Live at **[schepp.ca](https://schepp.ca)**.

## Editing content

All the words on the site live in the `_data/` folder, one file per section.
Edit a file, commit, push — GitHub Pages rebuilds the site in a minute or two.

| File | What it controls |
| --- | --- |
| `_data/profile.yml` | Name, tagline, email, CV, portrait, About text, photos, footer links |
| `_data/research.yml` | Research projects |
| `_data/education.yml` | Degrees |
| `_data/talks.yml` | Talks |
| `_data/awards.yml` | Awards table |
| `_data/teaching.yml` | Teaching positions and the courses table |
| `_data/service.yml` | Service roles |
| `_data/navigation.yml` | Top menu, and the order sections appear on the page |

To add an entry, copy an existing one (from the `-` down to just before the
next `-`), paste it at the top and change the text. Keep the indentation the
same — YAML uses spaces, not tabs.

`details` lines are joined with " · " and can contain Markdown links, e.g.
`"Supervisor: [Dr. Neil J. Ross](https://www.mathstat.dal.ca/~neilr/)"`.
Wrap a line in quotes if it contains a colon.

## Other files

- `index.html` – the page skeleton (hero + loops over the sections)
- `_layouts/default.html` – the page shell: head, top bar, footer
- `_includes/` – templates for each section (`sections/<id>.html`) and shared pieces
- `assets/css/style.css` – all styles (colours are at the top)
- `assets/js/site.js` – copy-email button; opens outside links in a new tab
- `images/` – photos
- `cv.pdf` – CV, linked from the "CV (PDF)" button
- `CNAME` – points GitHub Pages at the schepp.ca domain

## Previewing locally (optional)

```sh
gem install jekyll
jekyll serve
```

Then open http://localhost:4000.
