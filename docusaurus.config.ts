import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FereAI.xyz',
  tagline: 'Your all in one crypto assistant',
  favicon: 'img/favicon.ico',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          exclude: ['README.md'],
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1',
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
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
      title: 'FereAI.xyz',
      logo: {
        alt: 'FereAi.xyz Logo',
        src: 'img/icon_white_small.png',
        href: '/',
        target: '_self',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/gJ8vC3wE7P',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/gJ8vC3wE7P',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/fere_ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FereAi.xyz`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
