// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unicaps',
  tagline: 'API Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs/',
  trailingSlash: false,

  organizationName: 'unicaps', // Change to your organization
  projectName: 'unicaps-docs', // Change to your repo name

  onBrokenLinks: 'throw',
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
          routeBasePath: '/', // Ensures that /docs/ serves both versions
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Unicaps',
      logo: {
        alt: 'Unicaps',
        src: '/img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API v1',
          to: '/api/', // Ensures clicking "API v1" goes to the right page
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiV2Sidebar',
          position: 'left',
          label: 'API v2',
          to: '/api-v2/', // Ensures clicking "API v2" goes to the right page
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
