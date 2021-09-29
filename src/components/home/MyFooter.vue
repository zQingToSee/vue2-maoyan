<template>
  <footer>
    <ul>
      <li
        v-for="(item, index) in footerList"
        :key="index"
        :class="{ active: index == active }"
        @click="handleClick(index)"
      >
        <span class="iconfont" :class="'icon-' + item.icon"></span>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        {
          icon: "dianying",
          title: "电影/影院",
        },
        {
          icon: "shipin",
          title: "视频",
        },
        {
          icon: "xiaoshipinyingshi48",
          title: "小视频",
        },
        {
          icon: "yanchu-xianxing2-0",
          title: "演出",
        },
        {
          icon: "wode",
          title: "我的",
        },
      ],
      active: 0,
    };
  },
  methods: {
    handleClick(i) {
      this.active = i;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid @border-color;

  ul {
    display: flex;
    font-size: @xs-font;
    height: 100%;

    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .iconfont {
        font-size: 24px;
      }
    }
    .active {
      color: @theme-color;
    }
  }
}
</style>
