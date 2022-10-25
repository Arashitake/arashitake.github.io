<template>
  <section v-for="(item, index) in data" :key="index">
    <span class="year">{{ item.year }}</span>

    <div v-for="(mapItem, mapIndex) in item.data" :key="mapIndex" class="notelist">
      <div class="month-icon">
        {{convertMonthFormat(mapItem[0])}}
      </div>
      <div v-for="(subItem, subIndex) in mapItem[1]" :key="subIndex" class="notelist-month">
        <div class="item-icon"></div>
        <RouterLink :to="subItem.path">
          <div class="note-items">
            <div class="note-date">
              <img v-if="subItem.frontmatter.headerImage" :src="subItem.frontmatter.headerImage" alt="" />
              <p>
                <span>{{subItem.date.slice(subItem.date.indexOf('-')+1, subItem.date.lastIndexOf('-'))}}</span> /
                {{subItem.date.slice(subItem.date.lastIndexOf('-')+1)}}
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
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { notelistType } from "../../utils/timelineType.d.ts";
import type { GungnirThemePostData } from "../shared";

defineProps<{
  data: Array<notelistType>[]
}>();

// 字符串
const decodeURL = (path) => {
  return " 📚 " + decodeURIComponent(path.slice(1, path.lastIndexOf('/')).replace(new RegExp('/', "gm"), ' 🔜 '));
}

// 将月份的数字转换为英文
const convertMonthFormat = (month) => {
  let monthMap = new Map();
  let monthEnArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",]
  monthEnArr.forEach((item, index) => {
    monthMap.set(index + 1, item);
  });
  return monthMap.get(month);
}


</script>

<style lang="scss" scoped>
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
  font-family: 'Arvo';
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
    font-family: 'Segoe Print';
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
        content: '';
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
        font-family: 'Arvo';
        border-radius: 4px;
        overflow: hidden;
        z-index: 5;

        &>img {
          position: absolute;
          left: -15px;
          height: 60px;
          z-index: -1;
        }

        img+p {
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
          font-family: 'Segoe Script', 'Arvo';
        }
      }
    }
  }


}
</style>