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
      },
      {
        title: '研发',
      },
      {
        title: '组件',
      },
      {
        title: 'Github',
      },
    ],
  },
});
