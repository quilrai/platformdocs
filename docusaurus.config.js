// @ts-check

import { prismLight } from './src/themes/prismLight.js';
import { prismDark } from './src/themes/prismDark.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuilrAI Platform Docs',
  tagline: 'Customer-facing documentation for the QuilrAI platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://platform-docs.quilrai.dev',
  baseUrl: '/',

  organizationName: 'quilrai',
  projectName: 'platform-docs',

  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    format: 'mdx',
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // @ts-ignore
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      }),
    ],
  ],

  plugins: ['./plugins/doc-page-markdown.js'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        sitemap: {
          filename: 'sitemap.xml',
          ignorePatterns: ['/search'],
          lastmod: null,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/QuilrAi-Open-Graph.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'QuilrAI',
          src: 'img/QuilrAI-light.png',
          srcDark: 'img/QuilrAI-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Platform Docs',
          },
          {
            href: 'https://www.quilr.ai/resources',
            label: 'Resources',
            position: 'right',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Platform Docs',
                to: '/',
              },
              {
                label: 'Resources',
                href: 'https://www.quilr.ai/resources',
                target: '_blank',
                rel: 'noopener noreferrer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} QuilrAI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismLight,
        darkTheme: prismDark,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-diff-add-line',
            line: 'diff-add',
          },
          {
            className: 'code-block-diff-remove-line',
            line: 'diff-remove',
          },
        ],
      },
    }),
};

export default config;
