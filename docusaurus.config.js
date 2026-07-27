// @ts-check

const config = {
  title: 'Fitness Research AI',
  tagline: 'Evidence-based fitness research powered by LLMs',
  favicon: 'img/favicon.ico',

  url: 'https://yourusername.github.io',
  baseUrl: '/fitness-research-ai/',
  organizationName: 'yourusername',
  projectName: 'fitness-research-ai',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/yourusername/fitness-research-ai/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/yourusername/fitness-research-ai/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Fitness Research AI',
      logo: {
        alt: 'Fitness Research',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Research',
        },
        { to: '/blog', label: 'Updates', position: 'left' },
        {
          href: 'https://github.com/yourusername/fitness-research-ai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Research',
          items: [
            {
              label: 'Supplements vs Steroids',
              to: '/docs/supplements-vs-steroids',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername/fitness-research-ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fitness Research AI. Built with Docusaurus by Meta.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;
