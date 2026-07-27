# Deployment

This repository deploys through GitHub Pages Actions.

## One-Time GitHub Setting

Set:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## Automatic Deploy

Every push to `main` runs `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run build`
3. Upload `build/` as a Pages artifact
4. Deploy to GitHub Pages

Live URL:

```text
https://manimovassagh.github.io/fitness-research-ai/
```
