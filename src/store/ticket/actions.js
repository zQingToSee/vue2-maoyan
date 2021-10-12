const actions = {
  getData({ commit }) {
    return new Promise((resolve) => {
      fetch("http://www.pudge.wang:3080/api/movies/list")
        .then((response) => response.json())
        .then((res) => {
          if (res.status == 0) {
            commit("changeData", res);
            resolve();
          }
        })
        .catch((err) => console.log(err));
    });
  },
  getMore({ commit, state }, payload) {
    return new Promise((resolve) => {
      const arr = state.ids.slice(state.startId, state.startId + payload.size); // 截取下一次的电影id
      const str = arr.join();

      // fetch的post请求
      fetch("http://www.pudge.wang:3080/api/movies/more", {
        method: "POST",
        body: JSON.stringify({
          ids: str,
        }), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
          if (response.status == 0) {
            commit("changeMore", response);
            resolve();
          }
        });
    });
  },
};

export default actions;
