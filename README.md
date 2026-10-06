# lathifaha.github.io

Professional academic + industry portfolio for **Lathifah Alfat**.

## Files

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── Lathifah_Alfat_CV_Academic.pdf
    └── Lathifah_Alfat_CV_Industry.pdf
```

## Deploy to GitHub Pages

1. Create (or use) the repository `lathifaha.github.io`.
2. Copy the contents of this folder to the repository root.
3. Add your industry CV to:
   `assets/Lathifah_Alfat_CV_Industry.pdf`
4. Commit and push to the `main` branch.
5. In GitHub: **Settings → Pages → Deploy from a branch → main / root**.
6. Open `https://lathifaha.github.io`.

## Important before publishing

The academic CV is already included in this package.

The industry CV was not uploaded in the source conversation, so add it manually using this exact filename:

`Lathifah_Alfat_CV_Industry.pdf`

## Easy customization

### Change colors
Edit CSS variables at the top of `css/style.css`:

```css
:root {
  --accent: #245b78;
  --dark: #0f2430;
}
```

### Change text
Most content is intentionally kept directly in `index.html` so it is easy to edit without a build system.

### Add a publication
Copy any `<article class="publication-card">...</article>` block.

Use one of these values for `data-category`:
- `rag`
- `nlp`
- `ml`
- `systems`

### Add a portfolio project
Copy a `.feature-card` in the `#projects` section.

### Add AI training evidence
Replace or expand the note under `#training` with:
- public-safe sample deck
- trainer guide
- interactive activities
- assessment
- outcome screenshots

## No framework required

This site uses plain HTML, CSS, and JavaScript and can be deployed to any static web server.
