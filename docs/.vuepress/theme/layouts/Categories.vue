<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <CatesWrapper v-if="frontmatter.cates" :catesData="frontmatter.cates" />
      <BooksWrapper v-if="frontmatter.books" :booksData="frontmatter.books" />
    </template>
  </Common>
</template>
      
<script setup lang="ts">
import Common from "../components/Common.vue";
import PageHeader from "../components/PageHeader.vue";
import CatesWrapper from "../components/CatesWrapper.vue";
import BooksWrapper from '../components/BooksWrapper.vue';
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";
import type {
  GungnirThemeCatePageFrontmatter,
} from "../shared";
import { categoriesPageInfo } from '../../config/pageInfo';

const frontmatter = usePageFrontmatter<GungnirThemeCatePageFrontmatter>();

const pageInfo = computed(() => categoriesPageInfo);

</script>

<style lang="scss" scoped>

</style>