<template>
  <div>
    <section class="hot">
      <div class="title">热门城市</div>
      <ul>
        <li v-for="city in hotCities.cities" :key="city.cityId" class="li">
          {{ city.name }}
        </li>
      </ul>
    </section>
    <section v-for="item in otherCities" :key="item.prefix">
      <div class="title">{{ item.prefix | toUpperCase }}</div>
      <ul>
        <li v-for="city in item.cities" :key="city.cityId" class="li">
          {{ city.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
    };
  },
  created() {
    this.getCityList(); // 请求城市数据
  },
  computed: {
    hotCities() {
      return this.cityList[0];
    },
    otherCities() {
      return this.cityList.slice(1);
    },
  },
  filters: {
    toUpperCase(val) {
      return val.toUpperCase();
    },
  },
  methods: {
    getCityList() {
      fetch("http://www.pudge.wang:3080/api/area/list")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.cityList = res.result;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="less" scoped>
// section:first-child {
//   ul {
//     display: flex;
//     flex-wrap: wrap; // 换行

//     .li {
//       margin-left: 15px;
//       background: #fff;
//       width: 29%;
//       height: 33px;
//       line-height: 33px;
//       margin-top: 5px;
//       margin-bottom: 10px;
//       margin-left: 4%;
//       padding: 0 4px;
//       border: 1px solid #e6e6e6;
//       border-radius: 3px;
//       text-align: center;
//       font-size: 14px;
//       color: #333;
//     }
//     .li:nth-child(1),
//     .li:nth-child(2),
//     .li:nth-child(3) {
//       margin-top: 10px;
//     }
//   }
// }

.hot {
  ul {
    display: flex;
    flex-wrap: wrap; // 换行

    .li {
      margin-left: 15px;
      background: #fff;
      width: 29%;
      height: 33px;
      line-height: 33px;
      margin-top: 5px;
      margin-bottom: 10px;
      margin-left: 4%;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      text-align: center;
      font-size: 14px;
      color: #333;
    }
    .li:nth-child(1),
    .li:nth-child(2),
    .li:nth-child(3) {
      margin-top: 10px;
    }
  }
}
.title {
  padding-left: 25px;
  line-height: 30px;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
}

section:not(:first-child) .li {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
  font-size: 14px;
}
</style>
