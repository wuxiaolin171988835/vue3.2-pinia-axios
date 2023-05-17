import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
  state: () => ({
    basketData: [] //购物车数据
  }),
  getters: {
    //store对象的计算属性
    totalCount() {
      return this.basketData.reduce((prev, next) => prev + next.num, 0);
    }
  },
  actions: {
    addBasket(item) {
      const target = this.basketData.find(
        (goods) => goods.product_id === item.product_id
      );
      if (target) {
        target.num++;
      } else {
        this.basketData.push({ ...item, num: 1 });
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["basketData"]
      }
    ]
  }
});
