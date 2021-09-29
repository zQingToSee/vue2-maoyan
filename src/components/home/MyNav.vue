<template>
  <nav>
    <div class="city">杭州</div>
    <ul>
      <li v-for="item in navList" :key="item">
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
    };
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
  }

  .iconfont {
    width: 40px;
    .center();
  }
}
</style>
