<template>
  <div class="tagpost-box">
    <div class="scroll-ele" ref="targetElement"></div>
    <section v-for="(item, index) in curPageArr[curPage]" :key="index">
      <div class="tag-postlist">
        <span class="year">{{ item.year }}</span>
        <div v-for="(subItem, subIndex) in item.data" :key="subIndex" class="item">
          <div class="post-item">
            <div class="post-time">
              <p>{{ convertTimeFormat(subItem.info.date) }}</p>
              <span class="date-icon"></span>
            </div>
            <RouterLink :to="subItem.path">
              <div class="post-content">
                <div class="post-img">
                  <img v-if="subItem.info.headerImage" :src="subItem.info.headerImage" :alt="subItem.info.title" />
                </div>
                <div class="post-text">
                  <p class="title">
                    {{ subItem.info.title }}
                  </p>
                  <p v-if="subItem.info.subtitle" class="subtitle">
                    {{ subItem.info.subtitle }}
                  </p>
                </div>
                <ul>
                  <li v-for="(tagItem, tagIndex) in subItem.info.tags" :key="tagIndex">
                    {{ tagItem }}
                  </li>
                </ul>
              </div>
            </RouterLink>
          </div>
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
  import { PropType, ref, reactive, watch } from "vue";
  // import type { GungnirThemePostData } from "../../shared";
  import type { GungnirThemePostData } from "../shared";

  const props = defineProps({
    data: {
      type: Array as PropType<Array<{ year: string; data: Array<GungnirThemePostData> }>>,
      default: () => [],
    },
  });

  // 锚点
  const targetElement = ref<HTMLDivElement | null>(null);
  // 中间段开始页码
  const pageListStart = ref(2);
  // 当前页数
  const curPage = ref(0);
  // 分页[每7个]
  const perPageNumber = 7;
  const curPageArr = reactive<Array<Array<{ year: string; data: GungnirThemePostData[] }>>>([]);

  // 截取前7个
  const getCurPageArr = (arr: Array<{ year: string; data: GungnirThemePostData[] }>) => {
    let temp = 0;
    let tempArr: Array<{ year: string; data: GungnirThemePostData[] }> = [];

    for (let i = 0; i < arr.length; i++) {
      // 没满
      if (temp < perPageNumber) {
        tempArr.push({ year: arr[i].year, data: [] });
      }

      for (let j = 0; j < arr[i].data.length; j++) {
        if (temp < perPageNumber) {
          temp++;
          tempArr[tempArr.length - 1].data.push(arr[i].data[j]);
        }

        if (temp == perPageNumber) {
          // 一个分页面
          curPageArr.push(tempArr);
          tempArr = [];
          tempArr.push({ year: arr[i].year, data: [] });
          temp = 0;
        }
      }

      if (i == arr.length - 1 && tempArr[tempArr.length - 1].data.length != 0) {
        curPageArr.push(tempArr);
      }
    }
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

  // 转换时间格式
  const convertTimeFormat = (date) => {
    return new Date(date).toLocaleDateString().replace(new RegExp("/", "gm"), "-");
  };

  getCurPageArr(props.data);
</script>

<style lang="scss" scoped>
  .tagpost-box {
    position: relative;
  }
  .scroll-ele {
    position: absolute;
    top: -173px;
  }
  section {
    margin: 0;
  }

  .tag-postlist {
    margin: 0 0 0 40px;
    max-width: 860px;

    .year {
      display: block;
      position: relative;
      margin: 0;
      padding: 18px 0 20px 32px;
      width: 110px;
      font-family: "Arvo";
      font-style: italic;
      font-weight: bold;
      border-right: 1px solid #cbcbcb;

      // &::before {
      //   position: absolute;
      //   top: 75%;
      //   left: 0;
      //   content: '';
      //   width: 900px;
      //   height: 2px;
      //   border-bottom: 1px solid #cbcbcb;
      // }
    }
  }

  .dark .post-time > p {
    color: #fff !important;
  }

  .dark .post-time > span::before {
    border: 2px solid #2d3746 !important;
  }

  /* 每个模块 */
  .post-item {
    display: flex;
    margin: 0;
    padding: 0;
    height: 181px;
    align-items: center;
    // border: 1px solid #f00;

    /* 具体时间 */
    .post-time {
      position: relative;
      margin: 0 20px 0 22px;
      width: 100px;
      height: 181px;
      line-height: 181px;
      border-right: 1px solid #cbcbcb;

      & > p {
        position: absolute;
        top: 58px;
        left: -5px;
        color: #404040;
        letter-spacing: 1px;
        font-family: "Arvo";
        font-size: 16px;
        font-style: italic;
        font-weight: 300;
      }

      /* 分割线 */
      & > span {
        display: block;
        position: absolute;
        top: 78px;
        right: -10px;
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
    }

    /* 内容 */
    .post-content {
      position: relative;
      margin-left: 32px;
      width: 600px;
      height: 157px;
      background: #fff;
      border-radius: 10px;
      border: 1px solid #e7e7e7;
      transition: all ease 0.3s;
      -webkit-transition: all ease 0.3s;

      &:hover {
        transform: scale(1.02);
        box-shadow: 0 2px 8px 0 rgba(27, 35, 47, 0.25);
      }

      .post-img {
        position: absolute;
        top: 16px;
        left: 20px;
        width: 220px;
        height: 124px;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .post-text {
        position: absolute;
        top: 8px;
        left: 272px;
        width: 298px;

        .title {
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          color: #333333;
        }

        .subtitle {
          margin-left: 8px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          color: #404040;
          font-family: "Arvo";
        }
      }

      & > ul {
        position: absolute;
        bottom: -3px;
        left: 230px;
        list-style: none;
        // border: 1px solid #f00;

        li {
          padding: 0 8px;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #fff;
          background: var(--c-brand);
          border-radius: 999em;
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
