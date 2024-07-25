import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/buzzs-ui',
  publicPath: process.env.NODE_ENV === 'production' ? '/buzzs-ui/' : '/',
  outputPath: 'docs-dist',
  favicons: [
    process.env.NODE_ENV === 'production' ? '/buzzs-ui/logo.png' : '/logo.png',
  ],
  themeConfig: {
    rtl: true,
    socialLinks: {
      github: 'https://github.com/Leexiaop/buzz-ui',
    },
    sourceLink: 'https://github.com/Leexiaop/buzz-ui',
    logo:
      process.env.NODE_ENV === 'production'
        ? '/buzzs-ui/logo.png'
        : '/logo.png',
    nav: [
      {
        title: '设计',
        link: '/design',
      },
      {
        title: '研发',
        link: '/devlop',
      },
      {
        title: '组件',
        link: '/components/progress',
      },
      {
        title: 'Github',
        link: 'https://github.com/Leexiaop/buzz-ui',
      },
    ],
  },
});
