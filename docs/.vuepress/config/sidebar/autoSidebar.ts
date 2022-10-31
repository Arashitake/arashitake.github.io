import fs from "fs";
import path from "path-browserify";
import type { SidebarConfig } from "vuepress-theme-gungnir";

/**
 * @param {String} rpath 目录路径
 * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
 * @param {Array} SuffixIncludes 需要处理的文件后缀
 * @returns {Array} filenameList 所有的文件地址
 */
const getAllFiles = (dirname: string = "docs", rpath: string, SuffixIncludes: string | string[]): Array<string> => {
  let filenameList: string[] = [];
  let temp = "";
  fs.readdirSync(rpath).forEach((file: string) => {
    let fileInfo = fs.statSync(rpath + "\\" + file);
    if (fileInfo.isFile()) {
      // 只处理固定后缀的文件
      if (SuffixIncludes.includes(file.split(".")[file.split(".").length - 1])) {
        //  过滤readme.md文件
        if (file === "readme.md" || file === "README.md") {
          file = "";
        } else {
          //  截取MD文档后缀名
          temp = path.join(rpath.slice(rpath.indexOf("/" + dirname)), file);
        }
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

const getAllDirs = (dirname: string = "docs", mypath: string = ".", unDirIncludes: Array<string>, SuffixIncludes: string | string[]) => {
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
          collapsible: true, // 可折叠
          children: getAllFiles(dirname, temp + "/" + d, SuffixIncludes),
        });
      }
    }
  });

  return result;
};

/**
 * @param {String} mypath 目录路径
 * @param {Array} unDirIncludes 需要排除的某些目录(文件夹)
 * @param {Array} SuffixIncludes 需要处理的文件后缀
 * @returns {Array} filenameList 所有的文件地址
 */
export const getAllDirsFiles = (
  dirname: string = "docs",
  mypath: string,
  unDirIncludes: Array<string>,
  SuffixIncludes: string | string[]
): SidebarConfig => {
  const dirs = getAllDirs(dirname, mypath, unDirIncludes, SuffixIncludes);

  let res: SidebarConfig = {};
  Object.entries(dirs).forEach(([key, val]) => {
    res["/" + dirname + "/" + key + "/"] = val;
  });

  return res;
};
