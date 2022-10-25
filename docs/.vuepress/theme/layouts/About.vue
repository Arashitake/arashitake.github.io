<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <PageM :key="page.path" class="post-content">
        <!-- <template #bottom>
          123123
          <slot name="page-content-bottom" />
        </template> -->
      </PageM>
    </template>
  </Common>

</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import Common from "@theme/Common.vue";
import PageM from "../components/PageM.vue";
import PageHeader from "../components/PageHeader.vue";
import { usePageData } from "@vuepress/client";
import { aboutPageInfo } from '../../config/pageInfo';

// 头部图片和文字
const pageInfo = computed(() => aboutPageInfo);

const page = usePageData();
</script>

<style lang="scss" scoped>
.page {
  padding-top: 0;
}
</style>
