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
    children: [
      {
        path: "/home",
        redirect: "/home/movies",
      },
      {
        path: "/home/movies",
        component: () => import("../views/home/Movies.vue"),
        children: [
          {
            path: "/home/movies",
            redirect: "/home/movies/hot",
          },
          {
            path: "/home/movies/hot",
            component: () => import("../views/home/movies/MyList.vue"),
            meta: {
              title: "猫眼电影",
            },
          },
          {
            path: "/home/movies/cinema",
            component: () => import("../views/home/movies/Cinema.vue"),
          },
          {
            path: "/home/movies/wait",
            component: () => import("../views/home/movies/Wait.vue"),
          },
          {
            path: "/home/movies/classic",
            component: () => import("../views/home/movies/Classic.vue"),
            meta: {
              notRequireAlive: true,
            },
          },
        ],
      },
      {
        path: "/home/video",
        component: () => import("../views/home/Video.vue"),
        meta: {
          title: "猫眼视频",
        },
      },
      {
        path: "/home/mini",
        component: () => import("../views/home/Mini.vue"),
        meta: {
          requireLogin: true,
          title: "猫眼小视频",
        },
      },
      {
        path: "/home/show",
        component: () => import("../views/home/Show.vue"),
        // meta表示路由元信息
        meta: {
          requireLogin: true,
          title: "猫眼演出",
        },
      },
      {
        path: "/home/mine",
        component: () => import("../views/home/Mine.vue"),
        meta: {
          title: "我的猫眼",
        },
      },
    ],
  },
  {
    path: "/detail/:id", // 动态路由，传参
    component: () => import("../views/Detail.vue"),
    props: true,
  },
  {
    path: "/city",
    component: () => import("../views/City.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
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

// 全局的前置守卫,当url一旦改变就会触发
routers.beforeEach((to, from, next) => {
  document.title = to.meta.title || "猫眼电影 - 娱乐看猫眼";
  // 必须调用next()方法表示放行
  // 路由鉴权
  if (to.meta.requireLogin) {
    if (localStorage.getItem("token")) {
      // 说明已经登录
      // next() 放行，next(false) 不放行，next("路径")表示重定向
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

// vue 解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default routers;
