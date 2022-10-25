import type { NavbarConfig } from "vuepress-theme-gungnir";

export const navbar: NavbarConfig = [
  {
    text: "Home",
    link: "/",
    icon: "fa-fort-awesome",
  },
  {
    text: "Tags",
    link: "/tags/",
    icon: "fa-tag",
  },
  // {
  //   text: "links",
  //   link: "/links/",
  //   icon: "fa-satellite-dish",
  // },
  // {
  //   text: "Posts",
  //   link: "/pages/posts/",
  //   icon: "fa-tag",
  // },
  {
    text: "Categories",
    link: "/pages/categories/",
    icon: "fa-satellite-dish",
  },
  {
    text: "Notes",
    link: "/pages/notes/",
    icon: "ri-book-2-fill",
  },
  {
    text: "About",
    link: "/pages/about/",
    icon: "ri-book-2-fill",
  },
];
