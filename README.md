# OurKarigar Next.js website

Static Next.js website configured for GitHub Pages and the custom domain `ourkarigar.in`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static website is generated in `out/` and includes `.nojekyll`, `CNAME`, sitemap and robots files.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the `out/` directory. In repository settings, set Pages source to **GitHub Actions**. Ensure DNS for `ourkarigar.in` points to GitHub Pages.
