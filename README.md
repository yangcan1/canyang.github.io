# Can Yang — Personal Website

Plain HTML and CSS, no JavaScript, no build step. Scroll effects use CSS
scroll-driven animations; browsers without them, and readers who prefer
reduced motion, get the same page laid out flat.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000> in your browser. Stop the server with `Ctrl+C`.

## Editing

- `index.html`: all page content — hero, statement, project, education, contact.
- `style.css`: layout, colors, typography, scroll-driven animation, responsive
  and print styles.
- `assets/`: favicon and the hero portrait. Replace `photo-placeholder.svg`
  with a real photo and update the `<img>` `src` and `alt` in `index.html`.

## GitHub Pages

The site is served as static files. In **Settings → Pages**, set the publishing
source to **GitHub Actions**. The workflow in `.github/workflows/pages.yml`
publishes the website whenever changes are pushed to `main`; no build command
is required. You can also run **Deploy GitHub Pages** manually from **Actions**.

The deployment includes only `index.html`, `style.css`, `assets/`, and
`.nojekyll`. After a push, check the workflow's deployment result before
refreshing the live site.
