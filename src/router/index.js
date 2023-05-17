import { createRouter, createWebHashHistory } from "vue-router";
// import { useMainStore } from "../store";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/content/home/index.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/content/detail.vue")
    // meta: {
    //   isShowNav: false
    // }
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/content/search.vue")
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("../views/content/shopping.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/content/mine.vue")
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
// router.beforeEach((to, from, next) => {
//   const store = useMainStore();
//   if (to.meta.isShowNav === false) {
//     store.$patch((state) => (state.isShowNav = false));
//   } else {
//     store.$patch((state) => (state.isShowNav = true));
//   }
//   next();
// });
