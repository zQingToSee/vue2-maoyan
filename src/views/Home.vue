<template>
  <!-- 首页 -->
  <div>
    <transition name="fade">
      <router-view />
    </transition>
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
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
