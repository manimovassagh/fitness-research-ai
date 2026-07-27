# Deployment Guide

## ✅ Setup Complete

Your Fitness Research AI site is fully configured with modern tooling and automated deployment.

### What's Included

1. **Docusaurus 3.10.2** - Meta's modern documentation framework
   - React-based with hot-reload dev server
   - Beautiful built-in theme
   - Markdown support for easy content creation
   - Video embedding & media-rich pages

2. **Research Content**
   - `docs/supplements-vs-steroids.md` - Comprehensive evidence-based research
   - Homepage with feature highlights
   - Blog section for updates

3. **GitHub Actions CI/CD Pipeline**
   - Automatic deployment on every push to main
   - Builds Docusaurus site
   - Deploys to GitHub Pages
   - Takes ~2-3 minutes per deployment

4. **Repository Structure**
   ```
   fitness-research-ai/
   ├── docs/                    # Your research documents
   ├── blog/                    # Blog posts
   ├── src/
   │   ├── css/custom.css       # Styling
   │   └── pages/index.js       # Homepage
   ├── .github/workflows/
   │   └── deploy.yml           # GitHub Actions workflow
   ├── docusaurus.config.js     # Configuration
   ├── package.json             # Dependencies
   └── README.md                # Full setup instructions
   ```

## 🚀 Next Steps

### 1. Enable GitHub Pages (One-time Setup)

1. Go to: https://github.com/manimovassagh/fitness-research-ai/settings/pages
2. Under "Source", select:
   - **Deploy from a branch**
   - **Branch:** `gh-pages`
   - **Folder:** `/(root)`
3. Click **Save**

Your site will be live at: **https://manimovassagh.github.io/fitness-research-ai/**

### 2. Add More Research

Create new research documents:

```bash
# Create a new markdown file
touch docs/your-topic.md
```

Add frontmatter:
```markdown
---
sidebar_position: 2
title: Your Research Title
description: Brief description
---

# Your Research Title

Your content here...
```

Update `sidebars.js`:
```javascript
tutorialSidebar: [
  {
    type: 'category',
    label: 'Research',
    items: [
      'supplements-vs-steroids',
      'your-topic',  // Add here
    ],
  },
],
```

Push to main:
```bash
git add .
git commit -m "Add new research: Your Topic"
git push origin main
```

### 3. Add Videos

Embed YouTube videos in markdown:

```markdown
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

Or use custom boxes:

```markdown
:::info Video Available
Check out our comprehensive explanation on [YouTube](link)
:::
```

## 📊 Monitor Deployments

**GitHub Actions Dashboard:**
https://github.com/manimovassagh/fitness-research-ai/actions

- View real-time build logs
- See deployment status
- Trigger manual deployments if needed

## 🛠️ Local Development

Test changes locally before pushing:

```bash
# Install dependencies
npm install

# Start dev server with hot-reload
npm start

# Visit http://localhost:3000
```

## 🎨 Customization

### Update Site Colors
Edit `src/css/custom.css` - Change primary color:
```css
--ifm-color-primary: #1d9e75;
```

### Update Navigation
Edit `docusaurus.config.js` - Modify navbar items

### Update Footer
Edit `docusaurus.config.js` - Modify footer links

## 📝 Research Standards

Every research document should include:

1. **Disclaimer** - Medical/safety disclaimers
2. **Evidence Levels** - Mark as STRONG, MODERATE, or WEAK
3. **Sources** - List LLMs used and peer-reviewed studies
4. **Limitations** - Scope and boundaries
5. **Clear Conclusion** - Actionable takeaway

Use info/warning/success boxes:

```markdown
:::info Information
General information box
:::

:::warning Caution
Important warning or disclaimer
:::

:::success Evidence Level: STRONG
Positive findings or verified information
:::
```

## 🔗 Useful Resources

- [Docusaurus Docs](https://docusaurus.io/docs)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🎯 Quick Commands

```bash
# Start local development
npm start

# Build for production
npm run build

# Preview production build
npm run serve

# Deploy to GitHub Pages
npm run deploy

# Clear cache
npm run clear
```

## ✨ You're All Set!

Your research platform is ready. Start creating amazing fitness research content! 🚀

Remember:
- Push frequently to see live updates
- Check GitHub Actions if builds fail
- Add more research in `docs/` folder
- Create videos and embed them in your research
- Share your research with the fitness community!
