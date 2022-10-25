<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      {{item}}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  data: string[]
}>();
</script>

<style lang="scss" scoped>

</style>