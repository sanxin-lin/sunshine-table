import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import StartInstall from "../views/start/Install.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/*",
    redirect: {
      name: "StartInstall",
    },
  },
  {
    path: "/",
    redirect: {
      name: "StartInstall",
    },
  },
  {
    path: "/table/start/install",
    name: "StartInstall",
    component: StartInstall,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
