<template>
  <!-- 改进版侧边目录 -->
  <ul class="ca">
    <li v-for="(item, index) in headers" :key="index" @click="tocLink">
      <p>{{ item.title }}</p>
      {{ item.slug }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { h } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const props = defineProps({
    headers: {
      type: Object,
      required: true,
      default: {},
    },
    activeLink: {
      type: String,
      default: "",
    },
  });

  const headers = props.headers;
  const activeLink = props.activeLink;

  const tocLink = () => {
    // console.log({ e });
    if (router.currentRoute.value.hash !== `#${header.slug}`) {
      console.log(111);

      router.push(`#${header.slug}`);
    }
  };

  // console.log({ props });
  // console.log('headers: ', props.headers);
  // console.log('activeLink: ', props.activeLink);
</script>

<style lang="scss">
  .ca {
    position: fixed;
    width: 10rem;
    height: 24rem;
    top: calc(50% - 12rem);
    right: 0;
    overflow-y: scroll;
    border: 1px solid #f00;

    & > li {
      border: 1px solid #0f0;
    }
  }
</style>
