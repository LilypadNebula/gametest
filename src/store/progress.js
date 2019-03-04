import db from "../db";

const progress = {
  namespaced: true,
  state: {
    initialized: false,
    currentDay: 0,
    successfulHacks: 0,
    failedHacks: 0,
    itemsOwned: 0
  },
  mutations: {
    setStarted(state, started) {
      state.initialized = started;
    },
    setDay(state, number) {
      state.currentDay = number;
    },
    hackSuccess(state) {
      state.successfulHacks++;
    },
    hackFail(state) {
      state.failedHacks++;
    }
  },
  actions: {
    initGame(context) {
      context.commit("setStarted", true);
      db.progress.put({ name: "initialized", value: "true" });
    },
    async getStartedStatus(context) {
      const temp = await db.progress.get("initialized");
      context.commit("setStarted", temp);
    }
  }
};

export default progress;
