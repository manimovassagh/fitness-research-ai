# Fitness Research AI

Evidence-based fitness research powered by multiple LLMs (Claude, GPT-4, etc.) for personal knowledge base and documentation.

## 🚀 Quick Start

### Local Development

```bash
npm start
```

This command starts a local development server at `http://localhost:3000` with hot reload. Changes are reflected in the browser instantly.

### Build for Production

```bash
npm run build
```

This generates static content in the `build` directory that can be served by any static hosting service.

### Preview Production Build

```bash
npm run serve
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Or use the GitHub CLI:
```bash
gh repo set-topic fitness-research-ai research documentation fitness
gh workflow run deploy.yml  # if you set up GitHub Actions
```

## 📋 Setup for GitHub Pages

### 1. Update Configuration

Edit `docusaurus.config.js` and replace:
- `yourusername` with your GitHub username
- `fitness-research-ai` with your repository name

```javascript
url: 'https://yourusername.github.io',
baseUrl: '/fitness-research-ai/',
organizationName: 'yourusername',
projectName: 'fitness-research-ai',
```

### 2. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Docusaurus setup with fitness research"
```

### 3. Create GitHub Repository

```bash
gh repo create fitness-research-ai --public --source=. --remote=origin --push
```

### 4. Enable GitHub Pages

Option A: Using GitHub CLI
```bash
gh repo edit --enable-issues --enable-wiki --enable-projects
```

Option B: Manual
1. Go to GitHub repo Settings → Pages
2. Select "Deploy from a branch"
3. Branch: `gh-pages`
4. Folder: `/(root)`

### 5. Deploy

```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/fitness-research-ai/`

## 📚 Adding New Research

### Create a New Document

1. Create a file in `docs/` folder: `docs/your-research-topic.md`

2. Add frontmatter at the top:
```markdown
---
sidebar_position: 2
title: Your Research Title
description: Brief description of the research
---

# Your Research Title

Your content here...
```

3. Update `sidebars.js` to include the new doc:
```javascript
tutorialSidebar: [
  {
    type: 'category',
    label: 'Research',
    items: [
      'supplements-vs-steroids',
      'your-research-topic',  // Add here
    ],
  },
],
```

### Embedding Videos

Use standard HTML or Markdown:

```markdown
<div class="video-container">
  <iframe width="100%" height="600" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
</div>
```

Or Markdown:
```markdown
![Video Title](https://www.youtube.com/embed/VIDEO_ID)
```

### Using Custom Boxes

```markdown
:::info Information Box
This is an info box. Use for general information.
:::

:::warning Warning Box
This is a warning box. Use for cautions or disclaimers.
:::

:::success Success Box
This is a success box. Use for positive outcomes or verified information.
:::

:::danger Danger Box
This is a danger box. Use for critical warnings.
:::
```

## 📁 Project Structure

```
fitness-research-ai/
├── docs/                    # Research documents in Markdown
│   └── supplements-vs-steroids.md
├── blog/                    # Blog posts and updates
├── src/
│   ├── css/                # Custom CSS
│   ├── pages/              # Custom pages
│   └── components/         # React components
├── static/                 # Static assets (images, etc.)
├── docusaurus.config.js    # Configuration file
├── sidebars.js             # Sidebar navigation
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit `src/css/custom.css` to customize:
- Primary accent color: `--ifm-color-primary`
- Dark mode colors in `[data-theme='dark']`

### Navbar

Edit `docusaurus.config.js` → `themeConfig.navbar` to add/remove menu items.

### Fonts & Typography

Update `docusaurus.config.js` → `themeConfig` to customize fonts and other theme options.

## 🔗 Useful Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://docusaurus.io/docs/markdown-features)
- [GitHub Pages Deployment](https://docusaurus.io/docs/deployment#github-pages)
- [Custom Components](https://docusaurus.io/docs/using-plugins)

## 📝 Research Standards

All research should include:
1. **Disclaimer** - Medical/safety disclaimers where applicable
2. **Evidence Level** - Mark findings as STRONG, MODERATE, or WEAK
3. **Sources** - List LLMs used and cross-reference with peer-reviewed studies
4. **Limitations** - Acknowledge scope and limitations of the research
5. **Actionable Conclusion** - Clear takeaway for readers

## 🤝 Contributing

Found an error or have suggestions? You can:
1. Edit directly on GitHub (pencil icon)
2. Submit issues in the GitHub repo
3. Create pull requests with improvements

## 📄 License

This research is for personal educational use. Always consult professionals before making health/fitness decisions.

---

Built with [Docusaurus](https://docusaurus.io/) by Meta 🚀
