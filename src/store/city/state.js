const state = {
  cityName: localStorage.getItem("city")
    ? JSON.parse(localStorage.getItem("city")).name
    : "杭州",
  cityId: localStorage.getItem("city")
    ? JSON.parse(localStorage.getItem("city")).id
    : "330100",
  // 城市选择页的数据
  cityList: [],
};

export default state;
