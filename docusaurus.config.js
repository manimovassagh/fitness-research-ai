// @ts-check

const config = {
  title: 'Fitness Research AI',
  tagline: 'A personal research library for fitness, supplements, and training notes',

  url: 'https://manimovassagh.github.io',
  baseUrl: '/fitness-research-ai/',
  organizationName: 'manimovassagh',
  projectName: 'fitness-research-ai',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

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
          routeBasePath: '/',
          editUrl: 'https://github.com/manimovassagh/fitness-research-ai/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Fitness Research AI',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'researchSidebar',
          position: 'left',
          label: 'Research',
        },
        {
          to: '/more-research',
          label: 'More',
          position: 'left',
        },
        {
          href: 'https://github.com/manimovassagh/fitness-research-ai',
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
              label: 'English research',
              to: '/supplements-vs-steroids',
            },
            {
              label: 'Persian research',
              to: '/mokammel-shabe-esteroeid-fa',
            },
            {
              label: 'More research',
              to: '/more-research',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/manimovassagh/fitness-research-ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fitness Research AI.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;
