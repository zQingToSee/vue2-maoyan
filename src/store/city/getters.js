const getters = {
  // 计算出两个城市列表
  hotCities(state) {
    return state.cityList[0];
  },
  otherCities(state) {
    return state.cityList.slice(1);
  },
};

export default getters;
