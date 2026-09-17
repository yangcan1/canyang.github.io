# Can Yang — Personal Website

An English portfolio featuring Can Yang's interests in computer science,
selected projects, and education. Built with plain HTML, CSS, and JavaScript;
there are no dependencies or build steps.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000> in your browser. Stop the server with `Ctrl+C`.

## Editing

- `index.html`: page content, project links, education, and contact details.
- `style.css`: layout, colors, typography, and responsive styles.
- `script.js`: active navigation and the optional copy-email button.

All content and navigation remain available without JavaScript. The copy-email
button appears only when the browser supports the Clipboard API in a secure
context, such as HTTPS or localhost.

## GitHub Pages

The site is served as static files. In **Settings → Pages**, set the publishing
source to **GitHub Actions**. The workflow in `.github/workflows/pages.yml`
publishes the website whenever changes are pushed to `main`; no build command
is required. You can also run **Deploy GitHub Pages** manually from **Actions**.

The deployment includes only `index.html`, `style.css`, `script.js`,
`assets/`, and `.nojekyll`. After a push, check the workflow's deployment result
before refreshing the live site.
