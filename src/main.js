/* 这里是入口文件*/
 
// 引入vue包
import Vue from "vue";
// 引入app根组件
import App from "./App.vue";
// import router from "./router";
// import store from "./store";

// 引入css重置样式
import "./assets/css/reset.less";

// 用于设置根字体大小
import "amfe-flexible";

// 用于关闭生产环境下的警告
Vue.config.productionTip = false;

new Vue({
  // router: router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
