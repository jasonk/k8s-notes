module.exports = {
  title: "Jason's Kubernetes Notes",
  // tagline: 'The tagline of my site',
  url: 'https://jasonk.github.io',
  baseUrl: '/k8s-notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jasonk',
  projectName: 'k8s-notes',
  themeConfig: {
    navbar: {
      title: "Jason's Kubernetes Notes",
    /*
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        {
          to: 'welcome',
          activeBasePath: 'welcome',
          label: 'Welcome',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'links',
          activeBasePath: 'links',
          label: 'Links',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/jasonk/k8s-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    */
    },
    footer: {
      style: 'dark',
      links: [
        /*
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/kubernetes',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jasonk/k8s-notes',
            },
          ],
        },
        */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jason Kohles`,
    },
  },
  presets: [
    [ '@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve( './sidebars.js' ),
        routeBasePath: '/',
        editUrl: 'https://github.com/jasonk/k8s-notes/edit/master/',
      },
      /*
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/jasonk/k8s-notes/edit/master/blog/',

      },
      */
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    } ],
  ],
};
