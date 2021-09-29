<template>
  <!-- 首页 -->
  <div>
    <MyHeader title="猫眼电影" :isMenu="1" />
    <MyLogo />
    <my-nav />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "@/components/home/MyHeader";
import MyLogo from "@/components/home/MyLogo.vue";
import MyNav from "@/components/home/MyNav.vue";
import MyFooter from "@/components/home/MyFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyLogo,
    MyNav,
    MyFooter,
  },
};
</script>
<style lang="less" scoped></style>
