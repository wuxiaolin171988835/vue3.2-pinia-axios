import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    isShowNav: true, //是否显示底部导航
    num: 200
  })
});
