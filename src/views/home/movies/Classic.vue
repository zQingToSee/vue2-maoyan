<template>
  <div>经典电影</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    console.log("渲染");
  },
  beforeDestroy() {
    console.log("销毁");
  },
};
</script>

<style lang="less" scoped></style>
