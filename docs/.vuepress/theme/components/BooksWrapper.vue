<template>
  <div class="books-wrapper">
    <div v-for="(group, groupId) in booksData" :key="`link-group-${groupId}`" class="book-section">
      <h2>{{ group.title }}</h2>
      <div class="book-group">
        <div v-for="(item, itemId) in group.items" :key="`link-${itemId}`" class="book-item">
          <div class="content">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <img class="book-cover" :src="withBase(item.img)" />
              <span class="bookname">
                {{ item.bookname }}
              </span>
            </a>
            <div class="desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { withBase } from "@vuepress/client";
import type {
  BookGroup,
} from "../shared";
import "../styles/books_wrapper.scss";

defineProps<{
  booksData: Array<BookGroup>
}>();

</script>