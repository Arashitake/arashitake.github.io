import { Page } from "@vuepress/core";
import type { notelistType } from "../utils/timelineType";

/**
 * @description 判断为笔记页面
 * @author Arashitake
 * @param {string} path 路径
 */
const judgeCurPage = (path: string, type: string) => {
  // 结尾为 .html
  let index = path.lastIndexOf(".");
  let endType = path.slice(index + 1);
  // 是 post 的
  index = path.slice(1).indexOf("/");
  let pageType = path.slice(1, index + 1);

  if (path === "/404.html" || endType !== "html") {
    return false;
  }

  if (type === "note" && pageType === "posts") {
    return false;
  }
  return true;
};

/**
 * @description 排除不需要的页面
 * @author Arashitake
 * @param {Page} item
 * @param {string} pathType
 * @param {notelistType[]} arr
 */
const excludePage = (item: Page, pathType: string, arr: notelistType[]) => {
  if (judgeCurPage(item.path, pathType)) {
    let temp: notelistType = {
      year: item.date.slice(0, 4),
      date: item.date,
      path: item.data.path,
      title: item.data.title,
      frontmatter: item.data.frontmatter,
    };
    if (pathType === "note" && item.data.path.slice(1, 5) === "note") {
      let cate = item.data.path.slice(6).slice(0, item.data.path.slice(6).indexOf("/"));
      temp["category"] = cate;
    }
    arr.push(temp);
  }
};

/**
 * @description 筛选页面
 * @author Arashitake
 * @param {{ pages: Page[] }} app
 */
const filterPage = (app: { pages: Page[] }) => {
  const notes: notelistType[] = [];
  const lists: notelistType[] = [];
  const cateNumberMap = new Map<string, number>(); // 每个分类的数量
  let notesIndex = 0,
    homeIndex = 0;
  app.pages.forEach((item: Page, index) => {
    // 排除不需要的页面
    excludePage(item, "list", lists);
    excludePage(item, "note", notes);
    // 筛选出note的分类
    if (item.data.path.slice(1, 5) === "note") {
      let cate = item.data.path.slice(6).slice(0, item.data.path.slice(6).indexOf("/"));

      if (cateNumberMap.get(cate)) {
        let temp = cateNumberMap.get(cate);
        cateNumberMap.set(cate, (temp == undefined ? 0 : temp) + 1);
      } else {
        cateNumberMap.set(cate, 1);
      }
    }
    if (item.path === "/pages/notes/") {
      notesIndex = index;
    }
    if (item.path === "/") {
      homeIndex = index;
    }
  });
  // 传递给 notes
  if (app.pages[notesIndex].path === "/pages/notes/") {
    app.pages[notesIndex].data["notes"] = notes;
    app.pages[notesIndex].data["cateMap"] = [...cateNumberMap];
  }

  // 传递给 /
  if (app.pages[homeIndex].path === "/") {
    app.pages[homeIndex].data["lists"] = lists;
    app.pages[homeIndex].data["listsNum"] = lists.length - notes.length;
    app.pages[homeIndex].data["notesNum"] = notes.length;
    app.pages[homeIndex].data["catesNum"] = [...cateNumberMap].length;
    // app.pages[homeIndex].data["pageInfo"] = {
    //   listsNum: lists.length - notes.length,
    //   notesNum: notes.length,
    //   catesNum: [...cateNumberMap].length,
    // };
  }

  // lists根据时间排个序
  notes.sort((a, b) => {
    return +new Date(b.date) - +new Date(a.date);
  });
  lists.sort((a, b) => {
    return +new Date(b.date) - +new Date(a.date);
  });
};

const pagePlugin = () => {
  return {
    name: "vuepress-plugin-page",
    extendsPage: (page: Page) => {
      // 传递给 notes
      if (page.frontmatter.layout == "Notes") {
        page.data["notes"] = [];
        page.data["cateMap"] = [];
      }
      // 传递给 /
      if (page.title === "Home" && page.path === "/") {
        page.data["lists"] = [];
        // page.data["pageInfo"] = {};
        page.data["listsNum"] = 0;
        page.data["notesNum"] = 0;
        page.data["catesNum"] = 0;
      }
    },
    onInitialized: (app: { pages: Page[] }) => {
      filterPage(app);
    },
  };
};

export default pagePlugin;
