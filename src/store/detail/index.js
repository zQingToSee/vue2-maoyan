import NProgress from "nprogress";

const detailmodule = {
  namespaced: true,
  state: {
    // 详情页的数据
    detailInfo: {},
  },
  mutations: {
    // 详情页数据同步改变
    changeDetail(state, payload) {
      state.detailInfo = payload.result;
    },
  },
  actions: {
    // 详情页的接口请求
    getDetailDataAsync({ commit }, payload) {
      NProgress.start();
      fetch("http://www.pudge.wang:3080/api/movies/detail", {
        method: "POST",
        body: JSON.stringify({
          id: payload.id,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          NProgress.done();
          return response.json();
        })
        .then((res) => {
          commit("changeDetail", res);
        });
    },
  },
};

export default detailmodule;
