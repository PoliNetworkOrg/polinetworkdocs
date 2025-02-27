import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PoliNetwork Docs',
  tagline: 'Technical Documentation for PoliNetwork',
  favicon: 'img/favicon.ico',

  url: 'https://docs.polinetwork.org',
  baseUrl: '/',
  organizationName: 'polinetworkorg',
  projectName: 'docs',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/polinetworkorg/docs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PoliNetwork Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'infra',
          label: 'Infrastructure',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'polifemo',
          label: 'Polifemo (deprecated)',
        },
        {
          href: 'https://github.com/polinetworkorg/docs',
          label: 'GitHub',
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
          title: 'Main Links',
          items: [
            {
              label: 'Main Site',
              href: 'https://polinetwork.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/polinetworkorg', // Completed the GitHub link
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PoliNetwork APS - Built with Docusaurus`,
      logo: {
        src: 'img/logo.svg',
        alt: 'PoliNetwork Logo',
        href: 'https://polinetwork.org',
        height: '100px',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
