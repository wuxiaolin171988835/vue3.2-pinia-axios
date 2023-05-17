import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; //数据十持久化
const pinia = createPinia();
pinia.use(piniaPluginPersist);

createApp(App).use(router).use(pinia).mount("#app");
