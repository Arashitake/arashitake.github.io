<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
    </template>
  </Common>

</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import Common from "@theme/Common.vue";
import PageHeader from "../components/PageHeader.vue";
import { aboutPageInfo } from '../../config/pageInfo.ts';

// 头部图片和文字
const pageInfo = computed(() => aboutPageInfo);
</script>
