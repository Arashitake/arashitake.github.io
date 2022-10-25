import type { PageFrontmatter } from "@vuepress/shared";

export type notelistType = {
  year: string;
  date: string;
  path: string;
  title: string;
  frontmatter: PageFrontmatter;
  category?: string;
};

// 筛选之后的类型
export type notelistByYearType = {
  year: string;
  data: Map<Number, notelistType[]>;
};
