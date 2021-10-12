import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
const ticketmodule = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default ticketmodule;
