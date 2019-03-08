import Vue from "vue";
import Vuex from "vuex";

import db from "../db";

//Modules
import progress from "./progress";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funds: 0,
    storeItems: [],
    ownedItems: [],
    currentScreen: "home",
    currentApp: "console"
  },
  mutations: {
    setFunds(state, amount) {
      state.funds = amount;
    },
    setStoreItems(state, items) {
      state.storeItems = [...items];
    },
    setOwnedItems(state, items) {
      state.ownedItems = [...items];
    },
    addOwnedItem(state, item) {
      state.ownedItems.push(item);
    },
    buyStoreItem(state, id) {
      const temp = state.storeItems.findIndex(e => e.id === id);
      temp.bought = true;
    },
    setCurrentScreen(state, screen) {
      state.currentScreen = screen;
    },
    setCurrentApp(state, app) {
      state.currentApp = app;
    }
  },
  actions: {
    async initGame({ state, commit, dispatch }) {
      await dispatch("progress/getStartedStatus");
      if (state.progress.initialized) {
        let temp;
        temp = await db.storeItems.toArray();
        commit("setStoreItems", temp);
        temp = await db.ownedItems.toArray();
        commit("setOwnedItems", temp);
        temp = await db.amounts.get("funds");
        commit("setFunds", temp.amount);
      }
    },
    firstLoad({ commit, dispatch }) {
      commit("setFunds", 1500);
      db.amounts.add({ name: "funds", amount: 1500 });
      const baseStore = [
        { id: 1, name: "Bass Guitar", price: 600 },
        { id: 2, name: "New Laptop", price: 2200 },
        { id: 3, name: "New Game", price: 60 }
      ];
      db.storeItems.bulkAdd(baseStore);
      commit("setStoreItems", baseStore);
      dispatch("progress/initGame");
    }
  },
  modules: {
    progress
  }
});
