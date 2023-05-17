<template>
  <div>
    <ul class="flex flex-wrap -ml-2">
      <li
        v-for="v in products"
        :key="v.product_id"
        class="w-1/2 pl-2 pb-2 mb-2"
      >
        <router-link
          :to="`/detail/${v.product_id}`"
          class="block w-full pb-[100%]"
          :style="{
            backgroundImage: `url(${v.product_img_url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }"
        ></router-link>
        <h4 class="line-clamp-2">{{ v.product_name }}</h4>
        <div class="flex justify-between mt-2">
          <span>
            <i>￥</i>
            <b>{{ v.product_uprice }}</b>
          </span>
          <span
            class="w-[24px] h-[24px] rounded-full bg-red-600 flex justify-center items-center"
            @click="addBasket(v)"
          >
            <i class="iconfont icon-gouwuche text-white text-sm"></i>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useBasketStore } from "../../../store/basket";
import { IProduct } from "../../../utils/interface";
const { products } = defineProps<{
  products: Array<IProduct>;
}>();
const basketStore = useBasketStore();
const addBasket = (v) => basketStore.addBasket(v);
</script>

<style lang="scss" scoped></style>
