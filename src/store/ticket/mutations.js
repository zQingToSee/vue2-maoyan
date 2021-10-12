const mutations = {
  changeData(state, payload) {
    state.ticketList = payload.result; // 获取第一次的电影数据
    state.ids = payload.ids; // 获取所有电影的id
    state.startId = payload.result.length; // 拿到12条数据，下次从12开始
    state.count = payload.count;
  },
  changeMore(state, payload) {
    state.ticketList = [...state.ticketList, ...payload.result];
    state.startId = state.ticketList.length; // stratId需要重新计算
  },
};

export default mutations;
