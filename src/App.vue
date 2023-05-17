<template>
  <router-view class="p-4 pb-20"></router-view>
  <nav-bottom v-if="mainStore.isShowNav"></nav-bottom>
</template>
<script setup>
import { useMainStore } from "./store";
import NavBottom from "./views/NavBottom.vue";
const mainStore = useMainStore();
</script>
<style scoped></style>
