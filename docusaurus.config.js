// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Volans',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.volans.builders',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'volans-plugin', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      de: {
        htmlLang: 'de-DE',
      },
    }
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editLocalizedFiles: true,
          editUrl:
            'https://github.com/volans-plugin/documentation/tree/main/',
        },
        blog: {
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/volans-plugin/documentation/tree/main/',
          postsPerPage: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Volans',
        logo: {
          alt: 'Volans Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: "overview",
            position: 'left',
            activeBasePath: "docs",
            label: 'Documentation',
          },
          {to: 'changelog', label: 'Changelog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/volans-plugin/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Documentation',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.volans.builders',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/TheMeinerLP',
              },
            ],
          },
          {
            title: 'Changelog',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/volans-plugin/documentation',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Imprint',
                href: 'imprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Volans`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
