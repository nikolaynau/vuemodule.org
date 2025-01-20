import { defineConfig, type DefaultTheme } from 'vitepress';

export default defineConfig({
  title: 'Vue Module',
  description: 'Module Management for Vue.js',

  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' }
    ]
  ],

  lang: 'en-US',
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference()
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-PRESENT Nikolay Naumenkov'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nikolaynau/vue-module' }
    ]
  }
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/general',
      activeMatch: '/reference/'
    }
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        {
          text: 'What is Vue Module?',
          link: '/guide/what-is-vuemodule'
        },
        {
          text: 'Installation',
          link: '/guide/installation'
        }
      ]
    },
    {
      text: 'Essentials',
      collapsed: false,
      items: [
        {
          text: 'Getting Started',
          link: '/guide/'
        }
      ]
    }
  ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      collapsed: false,
      items: [
        {
          text: 'General',
          link: '/reference/general'
        }
      ]
    }
  ];
}
