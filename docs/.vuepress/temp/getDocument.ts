import path from "path-browserify";
// import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import type { SidebarConfigArray } from "../theme/shared/nav";

// const __filenameNew = fileURLToPath(import.meta.url);

// const __dirnameNew = path.dirname(__filenameNew);
// 字符串工具类
const str = {
  /**
   * 两个字符串是否相同
   * @param {String} string 第一个字符串
   * @param {String} substr 第二个字符串
   * @param {Boolean} isIgnoreCase 是否忽略大小写
   * @returns {Boolean} 相同为真，不同为假
   */
  contains: (string, substr, isIgnoreCase) => {
    //  大小转换成小写
    if (isIgnoreCase) {
      // toLowerCase() :把字符串转换为小写
      string = string.toLowerCase();
      substr = substr.toLowerCase();
    }
    // 截取单个字符
    let startChar = substr.substring(0, 1);
    // 获取字符串长度
    let strLen = substr.length;
    for (let i = 0; i < string.length - strLen + 1; i++) {
      // charAt() :返回指定位置的字符
      if (string.charAt(i) === startChar) {
        // 如果从i开始的地方两个字符串一样,那就一样
        if (string.substring(i, i + strLen) === substr) {
          return true;
        }
      }
    }
    return false;
  },
};

// export const filehelper = {
//   /**
//    * @param {String} rpath 目录路径
//    * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
//    * @param {Array} SuffixIncludes 需要处理的文件后缀
//    * @returns {Array} filenameList 所有的文件地址
//    */
//   getAllFiles: (rpath: string, unDirIncludes: string | string[], SuffixIncludes: string | string[]) => {
//     let filenameList: string[] = [];
//     let temp = "";
//     fs.readdirSync(rpath).forEach((file: string) => {
//       let fileInfo = fs.statSync(rpath + "\\" + file);
//       if (fileInfo.isFile() && !unDirIncludes.includes(file) && !str.contains(file, "img", true)) {
//         // 只处理固定后缀的文件
//         if (SuffixIncludes.includes(file.split(".")[file.split(".").length - 1])) {
//           //  过滤readme.md文件
//           if (file === "readme.md" || file === "README.md") {
//             file = "";
//           } else {
//             //  截取MD文档后缀名
//             temp = path.join("./note/JS/01_JS高级", file);
//             file = file.replace(".md", "");
//           }
//           // filenameList.push(file);
//           filenameList.push("/" + temp);
//         }
//       }
//     });
//     //  排序
//     filenameList.sort();
//     return filenameList;
//   },
//   /**
//    * @param {String} mypath 当前的目录路径
//    * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
//    * @returns {Array} result 所有的目录
//    */
//   getAllDirs: function getAllDirs(mypath: string = ".", unDirIncludes: Array<string>): Array<any> {
//     // 获取目录数据
//     const items = fs.readdirSync(mypath);
//     let result: string[] = [];
//     // 遍历目录中所有文件夹
//     items.map((item) => {
//       let temp = path.join(mypath, item);
//       // isDirectory() 不接收任何参数,如果是目录(文件夹)返回true,否则返回false
//       // 如果是目录,且不包含如下目录
//       if (fs.statSync(temp).isDirectory() && !item.startsWith(".") && !unDirIncludes.includes(item)) {
//         result.push(mypath + "\\" + item + "\\");
//         result = result.concat(getAllDirs(temp, unDirIncludes));
//       }
//     });
//     console.log({ result });

//     return result;
//   },
// };

/**
 * @param {String} rpath 目录路径
 * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
 * @param {Array} SuffixIncludes 需要处理的文件后缀
 * @returns {Array} filenameList 所有的文件地址
 */
// const getAllFiles = (rpath: string, unDirIncludes: string | string[], SuffixIncludes: string | string[]) => {
//   let filenameList: string[] = [];
//   let temp = "";
//   fs.readdirSync(rpath).forEach((file: string) => {
//     let fileInfo = fs.statSync(rpath + "\\" + file);
//     if (fileInfo.isFile() && !unDirIncludes.includes(file) && !str.contains(file, "img", true)) {
//       // 只处理固定后缀的文件
//       if (SuffixIncludes.includes(file.split(".")[file.split(".").length - 1])) {
//         //  过滤readme.md文件
//         if (file === "readme.md" || file === "README.md") {
//           file = "";
//         } else {
//           //  截取MD文档后缀名
//           temp = path.join("./note/JS/01_JS高级", file);
//           file = file.replace(".md", "");
//         }
//         // filenameList.push(file);
//         filenameList.push("/" + temp);
//       }
//     }
//   });
//   //  排序
//   filenameList.sort();
//   return filenameList;
// };

const getAllFiles = (rpath: string, SuffixIncludes: string | string[]) => {
  let filenameList: string[] = [];
  let temp = "";
  fs.readdirSync(rpath).forEach((file: string) => {
    let fileInfo = fs.statSync(rpath + "\\" + file);
    if (fileInfo.isFile() && !str.contains(file, "img", true)) {
      // 只处理固定后缀的文件
      if (SuffixIncludes.includes(file.split(".")[file.split(".").length - 1])) {
        //  过滤readme.md文件
        if (file === "readme.md" || file === "README.md") {
          file = "";
        } else {
          //  截取MD文档后缀名
          temp = path.join(rpath.slice(rpath.indexOf("/note")), file);
          file = file.replace(".md", "");
        }
        // filenameList.push(file);
        filenameList.push(temp);
      }
    }
  });
  //  排序
  filenameList.sort();
  return filenameList;
};

/**
 * @param {String} mypath 当前的目录路径
 * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
 * @returns {Array} result 所有的目录
 */
// const getAllDirs = (mypath: string = ".", unDirIncludes: Array<string>): Array<any> => {
//   // 获取目录数据
//   const items = fs.readdirSync(mypath);
//   console.log({ items });
//   let result: string[] = [];
//   // 遍历目录中所有文件夹
//   items.map((item) => {
//     let temp = path.join(mypath, item);
//     // isDirectory() 不接收任何参数,如果是目录(文件夹)返回true,否则返回false
//     // 如果是目录,且不包含如下目录
//     if (fs.statSync(temp).isDirectory() && !item.startsWith(".") && !unDirIncludes.includes(item)) {
//       // result.push(mypath + "\\" + item + "\\");
//       result.push(mypath + "/" + item + "/");
//       result = result.concat(getAllDirs(temp, unDirIncludes));
//     }
//   });

//   return result;
// };

const getAllDirs = (mypath: string = ".", unDirIncludes: Array<string>, SuffixIncludes: string | string[]) => {
  // 获取目录数据
  let result = {};
  const items = fs.readdirSync(mypath);
  // 遍历目录中所有文件夹
  items.map((item) => {
    let temp = path.join(mypath, item);
    if (fs.statSync(temp).isDirectory() && !item.startsWith(".") && !unDirIncludes.includes(item)) {
      result[item] = [];
      // isDirectory() 不接收任何参数,如果是目录(文件夹)返回true,否则返回false
      // 排除以.开头的目录
      // 如果是目录,且不包含如下目录
      let dirs = fs.readdirSync(temp);
      for (let d of dirs) {
        result[item].push({
          text: d,
          children: getAllFiles(temp + "/" + d, SuffixIncludes),
        });
      }
    }
  });

  return result;
};
import type { SidebarConfig } from "vuepress-theme-gungnir";
const sidebar: SidebarConfig = {
  "/note/JS/": [
    {
      text: "01_JS高级",
      children: [
        // "lists",
        "/note/JS/01_JS高级/01.EventLoop.md",
        "/note/JS/01_JS高级/02.this指向.md",
        "/note/JS/01_JS高级/04.迭代器_可迭代对象_生成器_.md",
      ],
    },
  ],
  "/note/vue/": [
    {
      text: "interview",
      children: ["/note/vue/interview/00.vue相关面试知识点集合.md"],
    },
  ],
};

/**
 * @param {String} mypath 目录路径
 * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
 * @param {Array} SuffixIncludes 需要处理的文件后缀
 * @returns {Array} filenameList 所有的文件地址
 */
export const getAllDirsFiles = (mypath: string, unDirIncludes: Array<string>, SuffixIncludes: string | string[]) => {
  const dirs = getAllDirs(mypath, unDirIncludes, SuffixIncludes);

  let note = "/note/";
  let res: SidebarConfig = {};
  Object.entries(dirs).forEach(([key, val]) => {
    res[note + key + "/"] = val as SidebarConfigArray;
  });
  console.log(JSON.stringify(res));
  console.log(JSON.stringify(res["/note/JS/"]) === JSON.stringify(sidebar["/note/JS/"]));

  return res;
};

// export let list = path.join(__dirname, "../../../note/JS/01_JS高级");
// export let list = filehelper.getAllFiles(path.join(path.resolve(), "./docs/note/JS/01_JS高级"), "", ".md");
