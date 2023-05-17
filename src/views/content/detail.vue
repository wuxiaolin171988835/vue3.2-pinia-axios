<template>
  <div>
    <button @click="goBack">&lt;返回</button>
    <div class="mt-2 text-center">
      <div
        class="w-[200px] h-[200px] inline-block"
        :style="{
          backgroundImage: `url(${detail.product_img_url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }"
      ></div>
      <p class="mt-2">{{ detail.product_detail }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDetail } from "../../api/api";
import { useMainStore } from "../../store";
const route = useRoute();
const router = useRouter();
const detail = ref({});
const mainStore = useMainStore();
onMounted(async () => {
  detail.value = await getDetail(route.params.id);
  mainStore.$patch((state) => (state.isShowNav = false));
});
onUnmounted(() => {
  mainStore.$patch((state) => (state.isShowNav = true));
});

const goBack = () => router.push("/home");
</script>

<style lang="scss" scoped></style>
