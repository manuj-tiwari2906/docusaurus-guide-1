// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unicaps',
  tagline: 'API Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://unicaps.io',
  baseUrl: '/docs/',  // ✅ Ensures URLs are correct
  trailingSlash: false,

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
          routeBasePath: '/', // ✅ Ensures /docs/api and /docs/api-v2 work correctly
        },
        blog: {
          showReadingTime: true,
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
      title: 'Unicaps',
      logo: {
        alt: 'Unicaps',
        src: '/img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',  // ✅ API v1 Sidebar
          position: 'left',
          label: 'API v1',
          to: '/api/',  // ✅ Links directly to API v1
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiV2Sidebar',  // ✅ API v2 Sidebar
          position: 'left',
          label: 'API v2',
          to: '/api-v2/',  // ✅ Links directly to API v2
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
