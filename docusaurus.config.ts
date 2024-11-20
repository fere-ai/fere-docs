import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import path from 'path';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'FereAI',
  tagline: 'Your ultimate crypto assistant',
  favicon: 'img/icon.ico',

  // Set the production url of your site here
  url: 'https://docs.fereai.xyz',
  baseUrl: '/',

  organizationName: 'merokudao', // Usually your GitHub org/user name.
  projectName: 'fere_docs', // Usually your repo name.

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
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",
          exclude: ['README.md'],
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1',
            },
          },
        },
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
    'docusaurus-plugin-openapi-docs',
    {
      id: "monk", // plugin id
      docsPluginId: "classic", // configured for preset-classic
      config: {
        monk: {
          specPath: "static/monk.json",
          outputDir: "docs/api/Monk",
          proxy: "https://api.fereai.xyz/ta",
          baseUrl: "https://api.fereai.xyz/ta",
          sidebarOptions: {
            groupPathsBy: "tagGroup",
            categoryLinkSource: "auto",
          },
          hideSendButton: false,
        } satisfies OpenApiPlugin.Options,
      }
    }],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    image: 'img/fere_logo_black.png',
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a href="https://www.fereai.xyz/" target="_blank" rel="noopener"><span>Join <strong>FereAI</strong> now and get 200 FREE credits. →</span></a>',
      isCloseable: false,
    },
    metadata: [
      { name: 'keywords',
        content: 'AI for Crypto, FereAI'
      },
      { name: 'og:image',
        content: 'https://d17amglcmpxxe9.cloudfront.net/assets/logo/gradient.png'
      },
      {
        name: 'twitter:domain',
        content: 'docs.fereai.xyz',
      },
      {
        name: 'twitter:creator',
        content: 'fere_ai',
      },
      {
        name: 'twitter:site',
        content: '@fere_ai',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'FereAI Docs',
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'FereAi.xyz Logo',
        srcDark: 'img/black_small.png',
        src: 'img/white_small.png',
        href: '/',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          position: 'right',
          sidebarId: 'developers',
          label: 'Developers',
        },
        {
          href: 'https://discord.com/invite/3fsm5XJNW8',
          label: 'Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'Developers',
              to: '/docs/api/api-introduction',
            }
          ],
        },
        {
          // title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/3fsm5XJNW8',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/fere_ai',
            },
          ],
        },
        {
          // title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/docs/legal/privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: '/docs/legal/terms-of-service',
            },
            {
              label: 'Content Policy',
              to: '/docs/legal/content-policy',
            }
          ],
        }
      ],
      copyright: `Fere AI. Made with 💙💙 by 🐵🐵 and 🤖🤖`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
    ]
  } satisfies Preset.ThemeConfig,
};

export default config;
