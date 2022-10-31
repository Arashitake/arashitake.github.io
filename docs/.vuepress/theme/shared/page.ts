import type { ReadingTime } from "@renovamen/vuepress-plugin-reading-time";
import type { GitPluginPageData } from "@vuepress/plugin-git";
import { notelistType } from "../../utils/timelineType";
import type { NavLink, SidebarConfig } from "./nav";

export interface GungnirThemePageData extends GitPluginPageData {
  filePathRelative: string | null;
  readingTime?: ReadingTime;
}

export interface HomePageData extends GitPluginPageData {
  lists: notelistType[];
  listsNum: number;
  notesNum: number;
  catesNum: number;
}

export interface NotesPageData extends GitPluginPageData {
  notes: notelistType[];
  cateMap: Map<string, number>;
}

export interface GungnirThemePageFrontmatter {
  navbar?: boolean;
  pageClass?: string;
  search?: boolean;
}

export interface GungnirThemeNormalPageFrontmatter extends GungnirThemePageFrontmatter {
  title?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  contributors?: boolean;
  sidebar?: "auto" | false | SidebarConfig;
  sidebarDepth?: number;
  prev?: string | NavLink;
  next?: string | NavLink;
  giscus?: boolean;
}

// posts
export interface GungnirThemePostFrontmatter extends GungnirThemePageFrontmatter {
  title: string;
  subtitle?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  useHeaderImage?: boolean;
  author?: string;
  date?: string;
  headerImage: string;
  headerMask?: string;
  headerImageCredit?: string;
  headerImageCreditLink?: string;
  catalog?: boolean;
  tags?: string[];
  hide?: boolean;
}

// links
interface LinkItem {
  sitename: string;
  url: string;
  img: string;
  desc: string;
}

interface LinkGroup {
  title: string;
  items: Array<LinkItem>;
}

export interface GungnirThemeLinksPageFrontmatter extends GungnirThemePageFrontmatter {
  title?: string;
  links: Array<LinkGroup>;
}

// categories
interface CateItem {
  catename: string;
  url: string;
  img: string;
  desc: string;
}

export interface CateGroup {
  title: string;
  items: Array<CateItem>;
}

export interface GungnirThemeCatePageFrontmatter extends GungnirThemePageFrontmatter {
  title?: string;
  cates?: Array<CateGroup>;
  books?: Array<BookGroup>;
}

// book
interface BookItem {
  bookname: string;
  url: string;
  img?: string;
  bctext?: string;
  bgcolor?: string;
  desc?: string;
  author?: string;
}

export interface BookGroup {
  title: string;
  items: Array<BookItem>;
}
export interface GungnirThemeCatePageFrontmatter extends GungnirThemePageFrontmatter {
  title?: string;
  books?: Array<BookGroup>;
}

// cartoon
