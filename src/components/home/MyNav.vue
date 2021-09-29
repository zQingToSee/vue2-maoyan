<template>
  <nav>
    <div class="city">杭州</div>
    <ul>
      <li
        v-for="(item, index) in navList"
        :key="item"
        :class="{ active: index === active }"
        @click="liClick(index)"
      >
        {{ item }}
      </li>
    </ul>
    <span class="iconfont icon-sousuo"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: ["热映", "影院", "待映", "经典电影"],
      active: 0,
    };
  },
  methods: {
    liClick(i) {
      this.active = i;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
nav {
  height: 45px;
  border-bottom: 1px solid @border-color;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .city {
    width: 80px;
    font-size: @m-font;
    .center();
  }

  ul {
    flex: 1;
    height: 100%;
    display: flex;
    font-size: @s-font;

    li {
      flex: 1;
      .center();
      font-weight: 600;
      color: #666;
    }

    .active {
      font-size: @m-font;
      color: #000;
      position: relative;
      &::after {
        content: "";
        width: 20px;
        height: 3px;
        background: @theme-color;
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2px;
      }
    }
  }

  .iconfont {
    width: 40px;
    .center();
  }
}
</style>
