import { GungnirThemePageOptions } from "vuepress-theme-gungnir";

export const notesPageInfo: GungnirThemePageOptions = {
  title: "Notes",
  subtitle: "timeline of notes",
  bgImage: {
    mask: "rgba(64,118,190,0.5)",
    path: "/img/homebg/1.jpg",
  },
};

export const postsPageInfo: GungnirThemePageOptions = {
  title: "Posts",
  subtitle: "tags",
  bgImage: {
    path: "/img/homebg/2.jpg",
    mask: "rgba(40, 57, 101, 0.4)",
    // mask: "rgba(211, 136, 37, .5)",
  },
};

export const categoriesPageInfo: GungnirThemePageOptions = {
  title: "Categories",
  subtitle: "book",
  bgImage: {
    path: "/img/pages/004.jpg",
    mask: "rgba(64, 118, 190, 0.4)",
  },
};

export const aboutPageInfo: GungnirThemePageOptions = {
  title: "About",
  subtitle: "About me.",
  bgImage: {
    path: "/img/pages/001.jpg",
    mask: "rgba(40, 57, 101, 0.2)",
  },
};
