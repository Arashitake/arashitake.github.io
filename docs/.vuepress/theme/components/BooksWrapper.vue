<template>
  <div class="books-wrapper">
    <div v-for="(group, groupId) in booksData" :key="`link-group-${groupId}`" class="book-section">
      <div :id="group.title" class="books-title">
        <h2>{{ group.title }}</h2>
      </div>
      <div class="book-group">
        <div v-for="(item, itemId) in group.items" :key="`link-${itemId}`" class="book-item">
          <div class="content">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">
              <div class="book-cover" :style="{ background: (item.bgcolor ? item.bgcolor : 'rgba(0,0,0,0)') }">
                <p v-if="!item.img" class="book-cover-p">
                  {{ item.bctext ? item.bctext : item.bookname }}
                </p>
                <img v-if="item.img" :src="withBase(item.img)" />
              </div>
              <span class="bookname">
                {{ item.bookname }}
              </span>
            </a>
            <div v-if="item.desc" class="desc">
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