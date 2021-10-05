<template>
  <main class="wrap">
    <div>
      <MyListRated />
      <my-list-ticket @addBs="addBs" />
    </div>
  </main>
</template>

<script>
import MyListRated from "./MyListRated.vue";
import MyListTicket from "./MyListTicket.vue";
import BetterScroll from "better-scroll";

export default {
  data() {
    return {};
  },
  components: {
    MyListRated,
    MyListTicket,
  },
  methods: {
    addBs() {
      new BetterScroll(".wrap", {
        // ...... 详见配置项
        scrollY: true,
        scrollX: false,
        click: true,
      });
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
