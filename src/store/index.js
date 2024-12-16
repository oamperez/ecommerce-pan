require("es6-promise").polyfill();
import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    subscribe: Cookies.get("subscribe") || false,
    shopping: Cookies.get("shopping") || null,
  },
  mutations: {
    ONSUBSCRIBE(state, data) {
        state.subscribe = data;
        Cookies.set("subscribe", data);
    },
    ONAPPEND(state, item){
      const data = JSON.parse(state.shopping) || [];
      const index = data.findIndex((e) => e.id === item.id)
      if(index === -1){
        item.quantity = 1;
        item.total = item.price;
        data.push(item);
      }else{
        item.quantity = (item.quantity | 1) + 1;
        item.total = item.price * item.quantity;
        data[index] = item;
      }
      console.log(data);
      state.shopping = JSON.stringify(data);
      Cookies.set("shopping", state.shopping);
    },
    ONREMOVE(state, index){
      const data = JSON.parse(state.shopping) || [];
      data.splice(index, 1)
      state.shopping = JSON.stringify(data)
      Cookies.set("shopping", state.shopping);
    },
    ONCLEAR(state){
      state.shopping = null
      Cookies.set("shopping", state.shopping);
    }
  },
  actions: {
    SUBSCRIBE({ commit }, data) {
      commit("ONSUBSCRIBE", data);
    },
    APPEND({ commit }, data) {
      commit("ONAPPEND", data);
    },
    REMOVE({ commit }, index) {
      commit("ONREMOVE", index);
    },
    CLEAR({ commit }) {
      commit("ONCLEAR");
    },
  },
  getters: {
    subscribe: (state) => Boolean(state.subscribe),
    shopping: (state) => JSON.parse(state.shopping) || [],
  },
});

export default store;
