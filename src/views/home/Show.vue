<template>
  <div class="home-page">演出页面</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.replace("/login");
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.home-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
}
</style>
