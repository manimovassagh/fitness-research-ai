---
sidebar_position: 0
slug: /
title: Fitness Research AI
description: A Docusaurus library for saved fitness research, starting with English and Persian research pages.
---

# Fitness Research AI

This site keeps the original saved HTML inside `static/research/` and serves it through Docusaurus pages. The first two entries are the English and Persian research pages, and the rest of the site is a simple place to add future topics.

## Featured Research

<div className="card-grid">
  <a className="card-link" href="/supplements-vs-steroids">
    <div className="card-kicker">English research</div>
    <h3>Supplements vs Steroids</h3>
    <p>Evidence-based comparison of legal supplements and anabolic steroids, shown inside the Docusaurus site.</p>
  </a>

  <a className="card-link" href="/mokammel-shabe-esteroeid-fa">
    <div className="card-kicker">Persian research</div>
    <h3>مکمل شبه استروئید</h3>
    <p>The Persian version of the saved research, embedded as a first-class page.</p>
  </a>

  <a className="card-link card-link-muted" href="/more-research">
    <div className="card-kicker">Future work</div>
    <h3>More Research</h3>
    <p>A placeholder area for later research, documentation-style pages, and future researchers.</p>
  </a>
</div>

## How New Research Fits In

1. Put the exported HTML file in `static/research/`.
2. Create a small `.mdx` wrapper in `docs/`.
3. Add the new doc id to `sidebars.js`.
4. Point the wrapper at the matching file with `ResearchFrame`.

Example wrapper:

```mdx
---
sidebar_position: 4
title: My New Research
description: Saved HTML research page.
---

import ResearchFrame from '@site/src/components/ResearchFrame';

# My New Research

<ResearchFrame src="/research/my-new-research.html" title="My New Research" />
```

## Local Commands

```bash
npm start
npm run build
npm run serve
```
