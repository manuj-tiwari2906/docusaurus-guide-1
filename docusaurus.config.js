// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unicaps',
  tagline: 'API Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://unicaps.io',
  baseUrl: '/docs/',
  trailingSlash: true,

  organizationName: 'unicaps', 
  projectName: 'unicaps-docs', 

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
          routeBasePath: '/',
          path: 'docs',
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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API v1',
          to: '/api',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiV2Sidebar',
          position: 'left',
          label: 'API v2',
          to: '/api-v2',
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
