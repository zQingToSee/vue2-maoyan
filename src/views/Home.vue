<template>
  <!-- 首页 -->
  <div>
    <!-- 头部组件 -->
    <MyHeader title="猫眼电影" :isMenu="true" />
    <!-- logo组件 -->
    <MyLogo />
    <!-- 导航栏 -->
    <my-nav />
    <!-- 中间列表组件 -->
    <my-list />
    <!-- 底部bar -->
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "@/components/home/MyHeader";
import MyLogo from "@/components/home/MyLogo.vue";
import MyNav from "@/components/home/MyNav.vue";
import MyFooter from "@/components/home/MyFooter.vue";
import MyList from "@/components/home/MyList.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyLogo,
    MyNav,
    MyFooter,
    MyList,
  },
};
</script>
<style lang="less" scoped></style>
