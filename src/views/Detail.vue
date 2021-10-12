<template>
  <!-- 这里的if用于判断数据是否已请求成功，成功后再渲染页面，避免undefined情况 -->
  <div v-if="detailInfo.nm">
    {{ detailInfo.nm }}
    <button @click="guess">猜你喜欢</button>
    <img :src="detailInfo.img | formaturl" alt="" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
    };
  },
  computed: {
    ...mapState({
      detailInfo: (state) => state.detail.detailInfo,
    }),
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetailDataAsync({ id: this.id }); // 数据请求
  },
  methods: {
    ...mapActions("detail", ["getDetailDataAsync"]),
    guess() {
      this.$router.push("/detail/1240838");
    },
  },
  filters: {
    formaturl(val) {
      return val.split("/w.h").join("/100.200");
    },
  },
  //* 猜你喜欢要用到beforeRouteUpdate方法
  beforeRouteUpdate(to, from, next) {
    this.getDetailDataAsync({ id: to.params.id });
    next();
  },
};
</script>

<style lang="less" scoped></style>
