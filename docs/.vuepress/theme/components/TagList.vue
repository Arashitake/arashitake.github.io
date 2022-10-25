<template>
  <div class="taglist">
    <span v-for="(item, index) in tags" :key="index" class="article-tag" :class="[
      item.name === currentTag && 'active',
      item.path === tagMap.path && 'tag-all'
    ]" :style="[item.tagColor ? { backgroundColor: item.tagColor } : {}]" @click="router.push(item.path)">
      {{ item.name }}
      <sup v-if="item.path == tagMap.path">{{ posts.length }}</sup>
      <sup v-else>{{ item.pages.length }}</sup>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import {
  useBlog,
  useTagMap,
  useTags,
  useThemeLocaleData
} from "../composables";

defineProps({
  currentTag: {
    type: String,
    default: ""
  }
});

const themeLocale = useThemeLocaleData();
const router = useRouter();

const tagMap = useTagMap();
const { tagsWithColor } = useTags();
const { posts } = useBlog();

const tags = computed(() => {
  return [
    {
      name: themeLocale.value.showAllTagsText,
      path: tagMap.value.path,
      tagColor: null,
      pages: []
    },
    ...tagsWithColor.value
  ];
});

</script>

<style lang="scss" scoped>
.taglist {
  margin: 0 auto;
  padding-bottom: 48px;
  padding-left: 40px;
  max-width: 860px;
}
</style>