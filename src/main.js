import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import RouterTab from "../lib";
// import "vue-router-tab/dist/lib/vue-router-tab.css";

const app = createApp(App);

app.use(RouterTab);
// app.use(store);
app.use(router);
app.mount("#app");
