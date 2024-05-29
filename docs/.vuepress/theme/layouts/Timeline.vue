<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <!-- <div class="notes-cate">
        <CategoryList :data="catelist" />
      </div> -->
      <ul class="notes-cate">
        <li :class="thisCate == '' ? 'active' : 'none'" :style="{ background: cateColorMap.get('all') }" @click="getCate()">
          <div>
            <span>{{ notelist.length }}</span>
            <p>all</p>
          </div>
        </li>
        <li
          :class="thisCate == item[0] ? 'active' : 'none'"
          v-for="(item, index) in catelist"
          :key="index"
          :style="{ background: cateColorMap.get(item[0]) }"
          @click="getCate(item[0])">
          <div>
            <span>{{ item[1] }}</span>
            <p>{{ item[0] }}</p>
          </div>
        </li>
      </ul>
      <div class="notes-wrapper">
        <ArticleList :data="allListFilterByYear(noteFilterByCate(notelist))" />
      </div>
    </template>
  </Common>
</template>
<script setup lang="ts">
  import { computed, ref } from "vue";
  import Common from "@theme/Common.vue";
  import PageHeader from "@theme/PageHeader.vue";
  import ArticleList from "../components/ArticleList.vue";
  import CategoryList from "../components/CategoryList.vue";
  import { usePageFrontmatter, usePageData } from "@vuepress/client";
  import type { notelistType, notelistByYearType } from "../../utils/timelineType.d.ts";
  import type { GungnirThemeLinksPageFrontmatter, GungnirThemePageOptions } from "../shared";
  import { allListFilterByYear } from "../utils";
  import { cateColorMap } from "../../utils/cateColors";
  import { notesPageInfo } from "../../config/pageInfo";

  // 头部图片和文字
  const pageInfo = computed(() => notesPageInfo);

  const page = usePageData();
  const notelist = ref(page.value.notes || []);
  const catelist = ref(page.value.cateMap || []);

  // 点击获取当前的 category
  const thisCate = ref("");
  const getCate = (item: string = "") => {
    thisCate.value = item;
  };

  // 通过当前的 category 筛选出来的数据
  const noteFilterByCate = (list: notelistType, cate?: string) => {
    if (!thisCate.value) {
      return list;
    }
    let newlist = list.filter((item) => {
      if (item.category == thisCate.value) {
        return true;
      } else {
        return false;
      }
    });
    return newlist;
  };
</script>

<style lang="scss">
  .navbar-item {
    color: #fff;
  }

  .notes-wrapper {
    max-width: 820px;
    margin: 0 auto;
    padding: 3.5rem 2.5rem 5rem;
  }

  /* 筛选数据 */
  .notes-cate {
    display: flex;
    flex-wrap: wrap;
    margin: 55px auto 0;
    width: 860px;
    list-style: none;

    .active {
      color: #377bb5;
      background: #f3f5f5 !important;
      font-weight: bold;
      box-shadow: 0 2px 8px 0 rgba(27, 35, 47, 0.5);
      transition: all ease 0.3s;
      -webkit-transition: all ease 0.3s;
    }

    .none {
      color: #111;
    }

    li {
      margin: 0 5px 8px;
      border-radius: 15px;

      div {
        position: relative;
        padding: 1px 30px 1px 15px;
        border-radius: 15px;

        &:hover {
          background: rgba(27, 35, 47, 0.15);
        }
      }

      &:hover {
        cursor: pointer;
      }

      span {
        position: absolute;
        top: 0;
        right: 8px;
        margin: 0;
        font-size: 13px;
        letter-spacing: -1px;
      }

      p {
        margin: 0;
      }
    }
  }
</style>
