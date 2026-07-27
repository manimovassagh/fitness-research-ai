# Fitness Research AI

A Docusaurus site for organizing saved fitness research HTML files and publishing them with GitHub Pages.

## Local

```bash
npm install
npm start
```

Local URL:

```text
http://localhost:3000/fitness-research-ai/
```

## Build

```bash
npm run build
npm run serve
```

## Add A Research File

1. Save the exported HTML in `static/research/`.
2. Add a wrapper page in `docs/`.
3. Add the wrapper id to `sidebars.js`.

Example:

```mdx
---
sidebar_position: 4
title: New Topic
description: Saved HTML research page.
---

import ResearchFrame from '@site/src/components/ResearchFrame';

# New Topic

<ResearchFrame src="/research/new-topic.html" title="New Topic" />
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds Docusaurus and deploys the `build/` folder through GitHub Pages Actions.

Repository setting:

```text
Settings -> Pages -> Source -> GitHub Actions
```

Published URL:

```text
https://manimovassagh.github.io/fitness-research-ai/
```
