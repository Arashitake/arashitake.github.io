import { gungnirTheme } from "vuepress-theme-gungnir";
import { navbar } from "./index";
import { getAllDirsFiles } from "./sidebar/autoSidebar";
import path from "path-browserify";

const workspace = path.resolve(__dirname, "..");
let sidebarObject = getAllDirsFiles("note", path.join(workspace, "./docs/note"), [], ".md");

export const gungnirThemeOptions = gungnirTheme({
  personalInfo: {
    name: "Arashitake",
    avatar: "/img/wsjyy.png",
    description: "Learning how to love.",
    // 社交平台
    sns: {
      github: "Arashitake",
      email: "Arashitake@163.com",
    },
  },
  // navbarTitle: "HOME",
  // 首页
  homeHeaderImages: [
    {
      path: "/img/homebg/1.jpg",
      mask: "rgba(40, 57, 101, .4)",
    },
    {
      path: "/img/homebg/2.jpg",
      mask: "rgba(40, 57, 101, .4)",
    },
    {
      path: "/img/homebg/3.jpg",
      mask: "rgba(40, 57, 101, .4)",
    },
  ],
  pages: {
    // 标签页配置
    tags: {
      subtitle: "Post is classified according to tag",
      bgImage: {
        path: "/img/homebg/2.jpg",
        mask: "rgba(40, 57, 101, 0.4)",
        // mask: "rgba(211, 136, 37, .5)",
      },
    },
    // 链接页
    links: {
      subtitle: "notes",
      bgImage: {
        path: "/img/pages/links.jpg",
        mask: "rgba(64, 118, 190, 0.5)",
      },
    },
  },
  sidebarDepth: 0,
  locales: {
    "/": {
      navbar: navbar.navbar,
      // sidebar: sidebar.sidebar,
      sidebar: sidebarObject,
    },
  },
  footer: `
    &copy; <a href="https://github.com/Arashitake" target="_blank">Arashitake</a> 2022 ~ ${new Date().getFullYear()}
    <br>
    Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
  `,
  catalog: false,
  // 导航栏搜索
  searchText: "Search",
  searchIcon: "bi-search",
  themePlugins: {
    search: false, // 取消自带的搜索
    katex: true, // 数学公式
    chartjs: {
      // JavaScript 图表库 Chart.js
      token: "chart",
    },
    mermaid: {
      token: "mermaid",
      theme: "default", // 默认："default"
      darkTheme: "dark", // 默认："dark"
    },
    mdPlus: {
      // all: true, // 全部启用（默认：false）
      footnote: true, // 脚注
      mark: true, // 高亮标记
      sub: true, // 下标
      sup: true, // 上标
    },
    container: {},
  },
});
