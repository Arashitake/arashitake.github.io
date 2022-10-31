<template>
  <div class="cate-sidebar">
    <ul v-for="(item, iIndex) in cateTitleList" key="iIndex">
      <li @click="changeCurStyle(iIndex)">
        <a :href="'#' + item" :class="(curIndex === iIndex) ? 'cur' : ''">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  cateTitleList: Array<String>
}>();

// 当前点击的是哪一个
let curIndex = ref(0);
const changeCurStyle = (index: number) => {
  curIndex.value = index;
}
</script>

<style lang="scss" scoped>
.cate-sidebar {
  position: fixed;
  top: 270px;
  right: 10px;
  width: calc(var(--sidebar-width) * 0.88);
  background-color: var(--c-bg);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    border-left: 1px solid var(--c-text-sub);

    li {
      font-size: 15px;

      a {
        display: block;
        padding-left: 8px;
        margin-left: 2px;
        height: 32px;
        font-family: "Segoe Script";
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
        transition: all ease 0.2s;
        -webkit-transition: all ease 0.2s;
        -moz-transition: all ease 0.2s;
        -o-transition: all ease 0.2s;
        -ms-transition: all ease 0.2s;
      }
    }
  }
}

.cur {
  color: var(--c-text) !important;
  border-left: 5px solid var(--c-text-accent);
  transform: scale(1.05);
}
</style>