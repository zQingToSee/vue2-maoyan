<template>
  <header>
    {{ title }}
    <span class="iconfont icon-ziyuan" v-if="isMenu"></span>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "猫眼电影",
    },
    isMenu: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/var.less");

header {
  width: 100%;
  height: 51px;
  background: @theme-color;
  font-size: @l-font;
  color: #fff;
  .center();
  position: relative;

  .iconfont {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: @xxl-font;
  }
}
</style>
