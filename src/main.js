import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import Landing from "./views/Landing.vue";

import "./index.css";

const routes = [{ path: "/", name: "home", component: Landing }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);
app.mount("#app");
