<template>
  <div class="list-ticket">
    <div
      class="list-block clearfix"
      v-for="(item, index) in ticketList"
      :key="index"
      @click="gotoDetail(item.movieid)"
    >
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
      <div class="btn" v-if="item.showst === 4">预售</div>
      <div class="btn red" v-else>购票</div>
    </div>
    <p v-if="ticketList.length >= count" class="nomore">没有更多了</p>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {
      ticketList: [],
      ids: [],
      // 设置一次加载6条数据
      size: 6,
      // 开始的索引
      startId: 0,
      // 所有电影的条数
      count: 0,
    };
  },
  watch: {
    num() {
      this.getMore();
    },
  },
  // 在生命周期的created中请求数据
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetch("http://www.pudge.wang:3080/api/movies/list")
        .then((response) => response.json())
        .then(async (res) => {
          if (res.status == 0) {
            // 获取第一次的电影数据
            this.ticketList = res.result;
            // 获取所有电影的id
            this.ids = res.ids;
            // 拿到12条数据，下次从12开始
            this.startId = res.result.length;
            this.count = res.count;
            await this.$nextTick();
            this.$emit("addBs");
          }
        })
        .catch((err) => console.log(err));
    },
    getMore() {
      // 截取下一次的电影id
      const arr = this.ids.slice(this.startId, this.startId + this.size);
      const str = arr.join();

      // fetch的post请求
      fetch("http://www.pudge.wang:3080/api/movies/more", {
        method: "POST",
        body: JSON.stringify({
          ids: str,
        }), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then(async (response) => {
          if (response.status == 0) {
            this.ticketList = [...this.ticketList, ...response.result];
            // stratId需要重新计算
            this.startId = this.ticketList.length;
            await this.$nextTick();
            this.$emit("finish");
          }
        });
    },
    gotoDetail(id) {
      // 编程式导航，跳转到详情页
      this.$router.push("/detail/" + id);
    },
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
      background-color: #3c9fe6;
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
    .red {
      background-color: @theme-color;
    }
  }
  .nomore {
    font-size: 15px;
    text-align: center;
  }
}
</style>
