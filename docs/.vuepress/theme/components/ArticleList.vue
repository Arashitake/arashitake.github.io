<template>
  <div class="article-box">
    <div class="scroll-ele" :style="{ top: scrollTopDistance + 'px' }" ref="targetElement"></div>
    <section v-for="(item, index) in Object.values(curPageArr)[curPage]" :key="index">
      <span class="year">{{ item.year }}</span>

      <div v-for="(mapItem, mapIndex) in item.data" :key="mapIndex" class="notelist">
        <div class="month-icon">
          {{ convertMonthFormat(mapItem[0]) }}
        </div>
        <div v-for="(subItem, subIndex) in mapItem[1]" :key="subIndex" class="notelist-month">
          <div class="item-icon"></div>
          <RouterLink :to="subItem.path">
            <div class="note-items">
              <div class="note-date">
                <img v-if="subItem.frontmatter.headerImage" :src="withBase(subItem.frontmatter.headerImage)" alt="" />
                <p>
                  <span>{{ subItem.date.slice(subItem.date.indexOf("-") + 1, subItem.date.lastIndexOf("-")) }}</span> /
                  {{ subItem.date.slice(subItem.date.lastIndexOf("-") + 1) }}
                </p>
              </div>
              <div class="note-content">
                <p class="title">
                  {{ subItem.title }}
                </p>
                <span v-if="subItem.date" class="subtitle">
                  {{ decodeURL(subItem.path) }}
                </span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    <ul v-if="curPageArr.length <= 7" class="pagelist">
      <li v-for="(item, index) in curPageArr.length" :key="index" @click="switchCurPage(item)">
        <span :class="item - 1 === curPage ? 'item-hover' : ''">{{ item }}</span>
      </li>
    </ul>
    <ul v-if="curPageArr.length > 7" class="pagelist">
      <button v-show="pageListStart !== 2" @click="decreasePageListStart">&lt;</button>
      <li @click="switchCurPage(1)"><span :class="curPage === 0 ? 'item-hover' : ''">1</span></li>
      <div v-show="pageListStart !== 2"><span>...</span><span v-show="pageListStart === curPageArr.length - 5">......</span></div>
      <li v-for="(item, index) in getPageList(pageListStart)" :key="index" @click="switchCurPage(item)">
        <span :class="item - 1 === curPage ? 'item-hover' : ''">{{ item }}</span>
      </li>
      <div v-show="pageListStart !== curPageArr.length - 5"><span>...</span><span v-show="pageListStart === 2">......</span></div>
      <li @click="switchCurPage(curPageArr.length)">
        <span :class="curPage === curPageArr.length - 1 ? 'item-hover' : ''">{{ curPageArr.length }}</span>
      </li>
      <button v-show="pageListStart !== curPageArr.length - 5" @click="increasePageListStart">&gt;</button>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, watch } from "vue";
  import type { notelistByYearType } from "../../utils/timelineType";
  import { withBase } from "@vuepress/client";

  const props = defineProps<{
    data: Array<notelistByYearType>;
    scrollTopDistance: Number;
  }>();

  // 锚点
  const targetElement = ref<HTMLDivElement | null>(null);
  // 中间段开始页码
  const pageListStart = ref(2);
  // 当前页数
  const curPage = ref(0);
  // 分页[每7个]
  const perPageNumber = 11;
  const curPageArr: notelistByYearType[][] = reactive([]);
  // 截取前7个
  const getCurPageArr = (arr: notelistByYearType[]) => {
    let temp = 0;
    let tempArr: notelistByYearType[] = [];

    for (let i = 0; i < arr.length; i++) {
      // 没满
      if (temp < perPageNumber) {
        tempArr.push({ year: arr[i].year, data: new Map() });
      }
      // 将 Map 对象的键转换为数组
      const keysArray = Array.from(arr[i].data.keys());
      let keyIndex = 0;
      for (let val of arr[i].data.values()) {
        let key = keysArray[keyIndex];
        for (let j = 0; j < val.length; j++) {
          if (temp < perPageNumber) {
            temp++;
            if (tempArr[tempArr.length - 1].data.has(key)) {
              const curValArr = tempArr[tempArr.length - 1].data.get(key) ?? [];
              curValArr.push(val[j]);
              tempArr[tempArr.length - 1].data.set(key, curValArr);
            } else {
              tempArr[tempArr.length - 1].data.set(key, [val[j]]);
            }
          }

          if (temp == perPageNumber) {
            // 一个分页面
            curPageArr.push(tempArr);
            tempArr = [];

            tempArr.push({ year: arr[i].year, data: new Map() });
            temp = 0;
          }
        }
        keyIndex++;
      }
      // 避免错误：在一年最后一月的最后一篇已经被截走了，但还是新增了这一年的一个新行{year:202x,data: map(0) }
      if (tempArr.length > 0 && tempArr[tempArr.length - 1].data.size == 0) {
        // console.log("year:", tempArr[tempArr.length - 1].year);
        tempArr.splice(-1);
      }
      // 最后一页
      if (i == arr.length - 1 && tempArr.length > 0 && tempArr[tempArr.length - 1].data.size != 0) {
        curPageArr.push(tempArr);
      }
    }

    // console.log("curPageArr:", Object.values(curPageArr));
  };

  let oldData = props.data;
  // 监听props.data的变化
  watch(
    () => props.data,
    (newData) => {
      if (oldData !== newData) {
        oldData = newData;
        curPageArr.length = 0; // 清空
        getCurPageArr(newData);
        curPage.value = 0; // 重置当前页数
      }
    },
    { immediate: true }
  );

  // 获取中间段页码函数（5个）
  const getPageList = (start: number) => {
    // const PageList = [...Array(end - start +1).keys()].map((i) => i + start)
    const end = curPageArr.length - 1;
    let tempPageList = [...Array(5).keys()].map((i) => i + start);
    if (start <= 2) {
      pageListStart.value = 2;
    }
    if (tempPageList[tempPageList.length - 1] >= end) {
      pageListStart.value = end - 4;
    }
    start = pageListStart.value;
    tempPageList = [...Array(5).keys()].map((i) => i + start);
    return tempPageList;
  };
  // 中间段开始页码变化
  // -5
  const decreasePageListStart = () => {
    pageListStart.value -= 5;
  };
  // +5
  const increasePageListStart = () => {
    pageListStart.value += 5;
  };

  // 切换页
  const switchCurPage = (page: number) => {
    curPage.value = page - 1;
    if (targetElement.value) {
      targetElement.value.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 字符串
  const decodeURL = (path) => {
    return " 📚 " + decodeURIComponent(path.slice(1, path.lastIndexOf("/")).replace(new RegExp("/", "gm"), " 🔜 "));
  };

  // 将月份的数字转换为英文
  const convertMonthFormat = (month) => {
    let monthMap = new Map();
    let monthEnArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    monthEnArr.forEach((item, index) => {
      monthMap.set(index + 1, item);
    });
    return monthMap.get(month);
  };

  getCurPageArr(props.data);
</script>

<style lang="scss" scoped>
  .article-box {
    position: relative;
  }
  .scroll-ele {
    position: absolute;
  }
  section {
    margin: 0;
    padding: 0;
    // border: 1px solid #0ff;
  }

  .dark .item-icon::before {
    border: 2px solid #2d3746 !important;
  }

  .year {
    display: block;
    position: relative;
    margin: 0;
    padding: 18px 0 20px;
    width: 112px;
    color: var(--c-brand);
    font-size: 22px;
    font-family: "Arvo";
    font-style: italic;
    font-weight: bold;
    border-right: 1px solid #cbcbcb;
  }

  .notelist {
    position: relative;
    left: 112px;
    border-left: 1px solid #cbcbcb;

    .month-icon {
      position: absolute;
      top: 24px;
      left: -21px;
      width: 42px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 15px;
      font-family: "Segoe Print";
      font-style: italic;
      background: var(--c-brand);
      border-radius: 100%;
      z-index: 5;
    }

    .notelist-month {
      width: 100%;
      display: flex;
      align-items: center;
      // border: 1px solid #f00;

      .item-icon {
        display: block;
        position: absolute;
        left: -9px;
        width: 18px;
        height: 18px;
        background: var(--c-brand);
        border-radius: 100%;
        // border: 5px double #fff;

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 2px;
          left: 2px;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          border: 2px solid #fff;
          z-index: 2;
        }
      }

      .note-items {
        display: flex;
        margin: 10px 0 10px 52px;
        width: 600px;
        height: 72px;
        border-radius: 4px;
        border: 1px solid #e7e7e7;
        background: #fafafa;
        transition: all ease 0.3s;
        -webkit-transition: all ease 0.3s;

        &:hover {
          transform: scale(1.02);
          box-shadow: 0 2px 8px 0 rgba(27, 35, 47, 0.25);
        }

        .note-date {
          position: relative;
          padding: 0px 8px;
          margin: 6px 8px;
          font-style: italic;
          font-size: 16px;
          font-family: "Arvo";
          border-radius: 4px;
          overflow: hidden;
          z-index: 5;

          & > img {
            position: absolute;
            left: -15px;
            height: 60px;
            z-index: -1;
          }

          img + p {
            color: #fff;
            text-shadow: 1px 1px 2px #333;
          }

          p {
            margin-top: 8px;
            color: #333333;

            // 月份
            span {
              font-size: 24px;
            }
          }
        }

        .note-content {
          width: calc(100% - 124px);
          position: relative;

          .title {
            display: -webkit-box;
            position: absolute;
            padding-left: 10px;
            width: 100%;
            height: 30px;
            line-height: 25px;
            top: -2px;
            left: 12px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            color: #333333;
            border-bottom: 1px solid #cccccc;
          }

          .subtitle {
            display: -webkit-box;
            position: absolute;
            width: 400px;
            top: 22px;
            left: 24px;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: #404040;
            font-size: 13px;
            font-family: "Segoe Script", "Arvo";
          }
        }
      }
    }
  }
  /* 页码模块 */
  .pagelist {
    display: flex;
    margin-top: 50px;
    justify-content: center;
    list-style-type: none;

    li {
      margin: 0 5px;
      span {
        display: block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        background-color: #377bb5;
        border: 1.5px solid #377bb5;
        border-radius: 50%;

        &:hover {
          color: #377bb5;
          background-color: #fff;
          border: 1.5px solid #377bb5;
          cursor: pointer;
        }
      }
    }

    button {
      margin: 0 10px;
      width: 30px;
      font-size: 20px;
      background: none;
      outline: none;
      border: none;
      border-radius: 5px;

      &:hover {
        color: #fff;
        background: #444;
        cursor: pointer;
      }
    }
  }
  .item-hover {
    color: #377bb5 !important;
    background-color: #fff !important;
  }
</style>
