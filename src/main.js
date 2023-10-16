import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./views/Home.vue";
import Project from "./views/Project.vue";
import About from "./views/About.vue";

import "./index.css";

const routes = [
  { path: "/", component: Home },
  { path: "/project", component: Project },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
