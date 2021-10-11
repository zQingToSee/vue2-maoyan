<template>
  <!-- 这里的if用于判断数据是否已请求成功，成功后再渲染页面，避免undefined情况 -->
  <div v-if="detailInfo.nm">
    {{ detailInfo.nm }}
    <button @click="guess">猜你喜欢</button>
    <img :src="detailInfo.img | formaturl" alt="" />
  </div>
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
  methods: {
    getData(id) {
      fetch("http://www.pudge.wang:3080/api/movies/detail", {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          // console.log(res);
          this.detailInfo = res.result;
        });
    },
    guess() {
      this.$router.push("/detail/1240838");
    },
  },
  filters: {
    formaturl(val) {
      return val.split("/w.h").join("/100.200");
    },
  },
  beforeRouteEnter(to, from, next) {
    NProgress.start();
    fetch("http://www.pudge.wang:3080/api/movies/detail", {
      method: "POST",
      body: JSON.stringify({
        id: to.params.id,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        NProgress.done();
        return response.json();
      })
      .then((res) => {
        next((vm) => {
          vm.detailInfo = res.result;
        });
      });
  },
  //* 猜你喜欢要用到beforeRouteUpdate方法
  beforeRouteUpdate(to, from, next) {
    this.getData(to.params.id);
    next();
  },
};
</script>

<style lang="less" scoped></style>
