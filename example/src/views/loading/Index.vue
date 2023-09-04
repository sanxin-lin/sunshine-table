<template>
  <div>
    <vxe-loading v-model="flag" text="加载中" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const flag = ref(true);
setTimeout(() => {
  flag.value = false
}, 2000);
</script>
