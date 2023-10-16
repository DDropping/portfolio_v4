import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./views/Home.vue";
import Project from "./views/Project.vue";
import ProjectDetails from "./views/ProjectDetails.vue";
import About from "./views/About.vue";

import "./index.css";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/project", name: "projects", component: Project },
  { path: "/project/:id", name: "projectDetails", component: ProjectDetails },
  { path: "/about", name: "about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
