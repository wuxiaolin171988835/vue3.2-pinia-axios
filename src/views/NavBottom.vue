<template>
  <div class="fixed bottom-0 w-full px-4 py-2 bg-white">
    <div class="footer"></div>
    <div class="footer-seat">
      <div class="footer-list">
        <ul class="flex justify-between">
          <li v-for="item in navData" :key="item.path" class="relative">
            <router-link
              :to="item.path"
              class="flex flex-col text-center"
              active-class="text-blue-400"
            >
              <i class="iconfont" :class="item.icon"></i>
              <span>{{ item.title }}</span>
              <span
                v-if="item.path === '/shopping' && basketStore.totalCount"
                class="absolute -top-2 -right-2 w-[24px] h-[24px] rounded-full bg-red-600 flex justify-center items-center text-white"
                >{{ totalCount }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useBasketStore } from "../store/basket";
import { navData } from "../utils/commonData";
const basketStore = useBasketStore();
// storeToRefs 解构并使数据具有响应式
const { totalCount } = storeToRefs(basketStore);
</script>

<style lang="scss" scoped></style>
