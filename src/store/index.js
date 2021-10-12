import Vue from "vue";
import Vuex from "vuex";
import citymodule from "./city";
import detailmodule from "./detail";
import ratedmodule from "./rated";
import ticketmodule from "./ticket";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    city: citymodule,
    detail: detailmodule,
    rated: ratedmodule,
    ticket: ticketmodule,
  },
});

export default store;
