const mutations = {
  changeCity(state, payload) {
    state.cityName = payload.name;
    state.cityId = payload.id;
    localStorage.setItem("city", JSON.stringify(payload));
  },
  // 城市列表同步改变
  changeCityList(state, payload) {
    state.cityList = payload.result;
  },
};

export default mutations;
