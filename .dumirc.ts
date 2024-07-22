import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/favicon.png'],
  themeConfig: {
    rtl: true,
    logo: '/logo.png',
    nav: [
      {
        title: '设计',
        link: '/design'
      },
      {
        title: '研发',
        link: '/devlop'
      },
      {
        title: '组件',
        link: '/components',
      },
      {
        title: 'Github',
        link: 'https://github.com/Leexiaop/buzz-ui',
      },
    ],
  },
});
