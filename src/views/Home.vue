<template>
  <!-- 首页 -->
  <div>
    <MyHeader title="猫眼电影" :isMenu="1" />
    <MyLogo />
    <my-nav />
  </div>
</template>

<script>
import MyHeader from "@/components/home/MyHeader";
import MyLogo from "@/components/home/MyLogo.vue";
import MyNav from "../components/home/MyNav.vue";
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
