<template>
  <section v-for="(item, index) in data" :key="index">
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
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { GungnirThemePostData } from "../../shared";

defineProps({
  data: {
    type: Array as PropType<Array<{ year: string; data: GungnirThemePostData[] }>>,
    default: () => [],
  },
});

// 转换时间格式
const convertTimeFormat = (date) => {
  return new Date(date).toLocaleDateString().replace(new RegExp('/', "gm"), '-');
}
</script>

<style lang="scss" scoped>
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
    font-family: 'Arvo';
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

.dark .post-time>p {
  color: #fff !important;
}

.dark .post-time>span::before {
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

    &>p {
      position: absolute;
      top: 58px;
      left: -5px;
      color: #404040;
      letter-spacing: 1px;
      font-family: 'Arvo';
      font-size: 16px;
      font-style: italic;
      font-weight: 300;
    }

    /* 分割线 */
    &>span {
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
        font-family: 'Arvo';
      }
    }

    &>ul {
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
</style>
