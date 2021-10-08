<template>
  <!-- 首页 -->
  <div>
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "@/components/public/MyFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyFooter,
  },
};
</script>
<style lang="less" scoped></style>
