<template>
  <div class="container">
    <div class="tab">
      <button v-for="tab in tabs" @click="tab.onClick">{{ tab.content }}</button>
    </div>
    <div class="content">
      <View />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { nextTick } from 'vue'
import { useViews } from './app';

// setTimeout(() => {
//   console.log(88)
// }, 0);

// nextTick(() => {
//   console.log(99)
// })

const { tabs, View } = useViews();
</script>

<style lang="scss">
.container {
  overflow: auto;
}
ul {
  list-style: none;
}
</style>
