<template>
  <div>{{ detailInfo.nm }}</div>
</template>

<script>
import NProgress from "nprogress";
export default {
  // props: ["id"],
  data() {
    return {
      id: "",
      detailInfo: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  beforeRouteEnter(to, from, next) {
    NProgress.start();
    fetch("http://www.pudge.wang:3080/api/movies/detail", {
      method: "POST",
      body: JSON.stringify({
        id: to.params.id,
      }), // data can be `string` or {object}!
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        NProgress.done();
        return res.json();
      })
      .catch((error) => console.error("Error:", error))
      .then((res) => {
        next((vm) => {
          vm.detailInfo = res.result;
        });
      });
  },
};
</script>

<style lang="less" scoped></style>
