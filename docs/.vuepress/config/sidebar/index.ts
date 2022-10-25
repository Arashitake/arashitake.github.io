import type { SidebarConfig } from "vuepress-theme-gungnir";
// import { filehelper } from "../../temp/getDocument";
import path from "path-browserify";

// let list = filehelper.getAllFiles(path.join(__dirname, "./docs/note/JS/01_JS高级"), "", ".md");

export const sidebar: SidebarConfig = {
  "/docs/": [
    {
      text: "Basic",
      children: ["/docs/basic/intro.md", "/docs/basic/installation.md", "/docs/basic/config.md", "/docs/basic/search.md", "/docs/basic/content.md"],
    },
    {
      text: "Advanced",
      children: [
        "/docs/advanced/comment.md",
        "/docs/advanced/analytics.md",
        "/docs/advanced/reading-time.md",
        "/docs/advanced/rss.md",
        "/docs/advanced/hitokoto.md",
        "/docs/advanced/icons.md",
      ],
    },
  ],
  "/note/JS": [
    {
      text: "JS高级",
      // children: list,
      children: [
        // list,
        "/note/JS/01_JS高级/01.EventLoop.md",
        "/note/JS/01_JS高级/02.this指向.md",
        "/note/JS/01_JS高级/04.迭代器_可迭代对象_生成器_.md",
      ],
    },
  ],
  "/note/vue": [
    {
      text: "interview",
      children: ["/note/vue/interview/00.vue相关面试知识点集合.md"],
    },
  ],
};
