<template>
  <div class="list-ticket">
    <div class="list-block clearfix" v-for="item in ticketList" :key="item._id">
      <img :src="item.img | imgUrl" alt="" />
      <div class="content">
        <h2>{{ item.nm }}</h2>
        <p v-if="item.sc == 0">暂无评分</p>
        <p v-else>
          观众评 <span>{{ item.sc }}</span>
        </p>
        <p>主演 {{ item.star }}</p>
        <p>{{ item.showInfo }}</p>
      </div>
      <div class="btn">购票</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticketList: [],
    };
  },
  // 在生命周期的created中请求数据
  created() {
    fetch("http://www.pudge.wang:3080/api/movies/list")
      .then((response) => response.json())
      .then(async (res) => {
        if (res.status == 0) {
          this.ticketList = res.result;
          await this.$nextTick();
          this.$emit("addBs");
        }
      })
      .catch((err) => console.log(err));
  },
  filters: {
    imgUrl(img) {
      return img.split("/w.h").join("/64.90");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/var.less";
.list-ticket {
  background: #fff;
  padding: 0 15px;

  .list-block {
    position: relative;
    img {
      margin-top: 12px;
      float: left;
    }

    .content {
      margin-left: 74px;
      height: 114px;
      padding: 12px 80px 12px 0;
      border-bottom: 1px solid #e9e2e2;

      h2 {
        width: 100%;
        font-size: 17px;
        color: #333;
        font-weight: 700;
        margin-bottom: 8px;
        .ellipsis();
      }

      p {
        width: 100%;
        margin-top: 6px;
        font-size: 13px;
        color: #666;
        .ellipsis();

        span {
          font-weight: 700;
          color: #faaf00;
          font-size: 15px;
        }
      }
    }
    .btn {
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
