<template>
  <div>演出页面</div>
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

<style lang="less" scoped></style>
