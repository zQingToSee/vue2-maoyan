<template>
  <main class="wrap">
    <div>
      <MyListRated />
      <my-list-ticket @addBs="addBs" :num="num" @finish="finish" />
    </div>
  </main>
</template>

<script>
import MyListRated from "../../../components/home/MyListRated.vue";
import MyListTicket from "../../../components/home/MyListTicket.vue";
import BetterScroll from "better-scroll";
// 把bs定义成全局变量，这样可以在finish()中调用
let bs;
export default {
  data() {
    return {
      num: 1,
    };
  },
  components: {
    MyListRated,
    MyListTicket,
  },
  methods: {
    addBs() {
      bs = new BetterScroll(".wrap", {
        // ...... 详见配置项
        scrollY: true,
        scrollX: false,
        click: true,
        // 上拉加载
        pullUpLoad: {
          // 离底还有100px的时候触发上拉加载
          threshold: 100,
        },
      });

      bs.on("pullingUp", () => {
        this.num++;
      });
    },
    finish() {
      // 重新计算高度
      bs.refresh();
      // 允许下一次上拉加载
      bs.finishPullUp();
    },
  },
};
</script>

<style lang="less" scoped>
main {
  position: fixed;
  top: 156px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
