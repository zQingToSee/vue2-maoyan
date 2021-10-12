const actions = {
  // 城市列表接口的请求
  getCityListAsync({ commit }) {
    fetch("http://www.pudge.wang:3080/api/area/list")
      .then((res) => res.json())
      .then((res) => {
        commit("changeCityList", res);
      })
      .catch((err) => console.log(err));
  },
};

export default actions;
