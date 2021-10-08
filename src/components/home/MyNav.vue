<template>
  <nav>
    <div class="city" @click="gotoCity">杭州</div>
    <ul>
      <li
        v-for="(item, index) in navList"
        :key="item.url"
        :class="{ active: index === active }"
        @click="liClick(index, item.url)"
      >
        {{ item.title }}
      </li>
    </ul>
    <span class="iconfont icon-sousuo"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // navList: ["热映", "影院", "待映", "经典电影"],
      navList: [
        {
          title: "热映",
          url: "/hot",
        },
        {
          title: "影院",
          url: "/cinema",
        },
        {
          title: "待映",
          url: "/wait",
        },
        {
          title: "经典电影",
          url: "/classic",
        },
      ],
      active: 0,
    };
  },
  methods: {
    liClick(i, url) {
      this.active = i;
      this.$router.push("/home/movies" + url);
    },
    gotoCity() {
      this.$router.push("/city");
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

    li:nth-last-child(1) {
      flex: 1.5;
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
