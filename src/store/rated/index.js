const ratedmodule = {
  namespaced: true,
  state: {
    // 主页最受欢迎电影的数据
    ratedList: [],
  },
  mutations: {
    // 受欢迎的同步改变
    changeRatedData(state, payload) {
      state.ratedList = payload.result;
    },
  },
  actions: {
    // 最受欢迎电影的接口请求
    getRatedListAsync({ commit }) {
      return new Promise((resolve) => {
        fetch("http://www.pudge.wang:3080/api/rated/list")
          .then((response) => response.json())
          .then((res) => {
            if (res.status == 0) {
              commit("changeRatedData", res);
              resolve(); // 一旦resolve之后就可以去then了
            }
          })
          .catch((err) => console.log(err));
      });
    },
  },
};

export default ratedmodule;
