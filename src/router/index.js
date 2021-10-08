import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 路由表
const routes = [
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/detail/:id", // 动态路由，传参
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/city",
    component: () => import("../views/City.vue"),
  },
  // 404页面
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];
// 路由实例
const routers = new VueRouter({
  routes, // routes: routes,
});

export default routers;
