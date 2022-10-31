<template>
  <div class="cates-wrapper">
    <div v-for="(group, groupId) in catesData" :key="`link-group-${groupId}`" class="cate-section">
      <div :id="group.title" class="cates-title">
        <h2>{{ group.title }}</h2>
      </div>
      <div class="cate-group">
        <div v-for="(item, itemId) in group.items" :key="`link-${itemId}`" class="cate-item">
          <div class="content">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class="catebox">
                <img :src="withBase(item.img)" />
                <span class="catename">
                  {{ item.catename }}
                </span>
              </div>
              <div class="desc">
                {{ item.desc }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { withBase } from "@vuepress/client";
import type {
  CateGroup,
} from "../shared";
import "../styles/cates_wrapper.scss";

defineProps<{
  catesData: Array<CateGroup>
}>();

</script>