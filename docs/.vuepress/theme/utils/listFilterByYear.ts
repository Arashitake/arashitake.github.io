import type { notelistType, notelistByYearType } from "../../utils/timelineType";

// 获取月份
const getMonth = (date: string) => {
  return parseInt(date.slice(date.indexOf("-") + 1, date.indexOf("-") + 3));
};

// 根据时间 filter
export const allListFilterByYear = (list: notelistType[]) => {
  let yearArr: string[] = [];
  let newList: notelistByYearType[] = [];

  for (let i = 0; i < list.length; i++) {
    if (i == 0) {
      newList.push({
        year: list[0].year,
        data: new Map<Number, notelistType[]>(),
      });
    }
    if (i != list.length - 1 && list[i].year != list[i + 1].year) {
      yearArr.push(list[i + 1].year);
      newList.push({
        year: yearArr[yearArr.length - 1],
        data: new Map<Number, notelistType[]>(),
      });
    }

    let month = getMonth(list[i].date);
    if (list[i].year == newList[newList.length - 1].year) {
      if (!newList[newList.length - 1].data.get(month)) {
        newList[newList.length - 1].data.set(month, [list[i]]);
      } else {
        newList[newList.length - 1].data.get(month)?.push(list[i]);
      }
    } else {
      if (!newList[newList.length - 2].data.get(month)) {
        newList[newList.length - 2].data.set(month, [list[i]]);
      } else {
        newList[newList.length - 2].data.get(month)?.push(list[i]);
      }
    }
  }

  return newList;
};
