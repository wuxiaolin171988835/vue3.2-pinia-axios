<template>
  <div>
    <ul class="flex flex-wrap justify-center">
      <li
        v-for="item in categoryData"
        :key="item.img"
        class="w-1/3 text-center"
      >
        <img
          :src="`/src/assets/image/` + item.img"
          alt=""
          class="h-[64px] mx-auto rounded-full"
        />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { categoryData } from "../../../utils/commonData";
</script>

<style lang="scss" scoped></style>
