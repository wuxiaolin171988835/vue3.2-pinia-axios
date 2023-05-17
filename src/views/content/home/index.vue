<!--
 * @Author: wuxiaolin xiaolin.wu@eeoa.com
 * @Date: 2023-03-21 16:14:28
 * @LastEditors: wuxiaolin xiaolin.wu@eeoa.com
 * @LastEditTime: 2023-03-31 18:45:26
 * @FilePath: /vite-project/src/views/content/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <category />
    <lists :products="products" class="mt-4" />
  </div>
</template>

<script setup>
import Lists from "./lists.vue";
import Category from "./category.vue";
import { getLists } from "../../../api/api";
import { onMounted, ref } from "vue";
const products = ref([]); //列表页数据
onMounted(async () => {
  products.value = await getLists();
});
</script>

<style lang="scss" scoped></style>
