/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a set of docs in the sidebar
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '📖 Welcome',
    },
    {
      type: 'category',
      label: '🧪 Research',
      items: [
        'supplements-vs-steroids',
      ],
    },
    {
      type: 'category',
      label: '📚 Coming Soon',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'coming-soon/placeholder',
          label: 'More research topics in development...',
        },
      ],
    },
  ],
};

