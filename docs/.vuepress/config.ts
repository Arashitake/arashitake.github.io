import { defineUserConfig } from "vuepress";
import { Page } from "@vuepress/core";
import { searchPlugin } from "@vuepress/plugin-search";
import pagePlugin from "./plugins/page";
import leoTheme from "./theme";

export default defineUserConfig({
  base: "/",
  title: "Leo",
  description: "a new vuepress blog",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "leo",
      description: "VuePress 博客主题",
    },
  },
  theme: leoTheme,
  plugins: [
    pagePlugin(),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
      maxSuggestions: 10,
      isSearchable: (page: Page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout ? page.frontmatter.layout : "layout"),
    }),
  ],
});
