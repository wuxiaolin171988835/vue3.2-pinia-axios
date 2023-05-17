<template>
  <ul>
    <li
      v-for="v in basketData"
      class="flex py-3 items-center border-blue-gray-500 border-b"
    >
      <div
        class="w-20 h-20 flex-shrink-0 mr-1"
        :style="{
          backgroundImage: `url(${v.product_img_url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }"
      ></div>
      <div class="overflow-hidden">
        <h4 class="truncate">{{ v.product_name }}</h4>
        <span>￥{{ v.product_price }}</span>
        <p>数量：{{ v.num }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useBasketStore } from "../../store/basket";

const basketStore = useBasketStore();
const { basketData } = storeToRefs(basketStore);
</script>

<style lang="scss" scoped></style>
