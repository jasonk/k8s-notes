module.exports = {
  title: "Jason's Kubernetes Notes",
  // tagline: 'The tagline of my site',
  url: 'https://jasonkohles.com',
  baseUrl: '/k8s-notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jasonk',
  projectName: 'k8s-notes',
  themeConfig: {
    navbar: {
      title: "Jason's Kubernetes Notes",
      // logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        {
          href: 'https://github.com/jasonk/k8s-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Jason Kohles`,
    },
  },
  presets: [
    [ '@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve( './sidebars.js' ),
        routeBasePath: '/',
        editUrl: 'https://github.com/jasonk/k8s-notes/edit/main/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    } ],
  ],
};
