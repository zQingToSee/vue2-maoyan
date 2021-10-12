<template>
  <div class="rated">
    <p class="title">最受好评电影</p>
    <div class="wrapper">
      <ul>
        <li v-for="item in ratedList" :key="item._id">
          <div class="img-wrap">
            <img :src="item.imgUrl" alt="" />
            <p v-if="item.score">观众评分 {{ item.score }}</p>
            <p v-else>{{ item.wishNum }} 人想看</p>
          </div>
          <p class="item-title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ratedList: (state) => state.rated.ratedList,
    }),
  },
  created() {
    this.getRatedListAsync().then(() => {
      new BetterScroll(".wrapper", {
        scrollX: true,
        scrollY: false,
        click: true,
      });
    }); // 请求数据
  },
  methods: {
    ...mapActions("rated", ["getRatedListAsync"]),
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.rated {
  height: 200px;
  background: #fff;
  padding: 12px 15px 12px 15px;
  margin-bottom: 10px;

  .title {
    margin: 0;
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }

  ul {
    height: 145px;
    // 设置成行内的弹性盒，可以撑开盒子
    display: inline-flex;

    li:nth-child(1) {
      margin-left: 0;
    }

    li {
      width: 85px;
      height: 140px;
      margin-left: 10px;
      flex-shrink: 0;

      .img-wrap {
        width: 85px;
        height: 115px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        p {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: @xxs-font;
          color: #faaf00;
          font-weight: 900;
          width: 100%;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6)
          ); //背景色渐变
        }
      }

      .item-title {
        font-size: 13px;
        width: 100%;
        .ellipsis();
        font-weight: 900;
        padding: 6px 0 3px 0;
      }
    }
  }
}
</style>
