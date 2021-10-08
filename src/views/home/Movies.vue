<template>
  <div>
    <!-- 头部组件 -->
    <MyHeader title="猫眼电影" :isMenu="true" />
    <!-- logo组件 -->
    <MyLogo />
    <!-- 导航栏 -->
    <my-nav />
    <!-- 缓存组件 -->
    <keep-alive>
      <router-view v-if="!$route.meta.notRequireAlive" />
    </keep-alive>
    <router-view v-if="$route.meta.notRequireAlive" />
  </div>
</template>

<script>
import MyHeader from "@/components/public/MyHeader";
import MyLogo from "@/components/home/MyLogo.vue";
import MyNav from "@/components/home/MyNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyLogo,
    MyNav,
  },
};
</script>

<style lang="less" scoped></style>
