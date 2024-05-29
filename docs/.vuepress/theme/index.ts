import { gungnirThemeOptions } from "../config/gungnirThemeConfig";
import { path } from "@vuepress/utils";
// import { searchPlugin } from "@vuepress/plugin-search";

export default {
  name: "vuepress-theme-leo",
  extends: gungnirThemeOptions,
  layouts: {
    // pages layout
    HomePage: path.resolve(__dirname, "layouts/HomePage.vue"),
    404: path.resolve(__dirname, "layouts/404.vue"),
    Categories: path.resolve(__dirname, "layouts/Categories.vue"),
    Notes: path.resolve(__dirname, "layouts/Notes.vue"),
    About: path.resolve(__dirname, "layouts/About.vue"),

    // pages template
    Layout: path.resolve(__dirname, "layouts/Layout.vue"),
    Post: path.resolve(__dirname, "layouts/Post.vue"),
    Book: path.resolve(__dirname, "layouts/Book.vue"),
    // TimeLine: path.resolve(__dirname, "layouts/Timeline.vue"),
    Tags: path.resolve(__dirname, "layouts/Tags.vue"),
    // Links: path.resolve(__dirname, "layouts/Links.vue"),
  },
};
