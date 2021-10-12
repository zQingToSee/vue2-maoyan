import { getRatedListApi } from "../../utils/api";

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
        getRatedListApi().then((res) => {
          commit("changeRatedData", res);
          resolve();
        });
      });
    },
  },
};

export default ratedmodule;
