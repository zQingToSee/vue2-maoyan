import { getCityListApi } from "../../utils/api";

const actions = {
  // 城市列表接口的请求
  async getCityListAsync({ commit }) {
    const res = await getCityListApi({ a: 3, b: 4 });
    commit("changeCityList", res);
  },
};

export default actions;
