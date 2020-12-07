import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    knownRoutes: ["home", "orders", "restaurants", "settings", "shops"],
    exemptRoutes: [
      "register",
      "registered",
      "login",
      "forgot-password",
      "new-password",
      "verify"
    ],
    user: {
      id: null,
      name: null,
      mobile: null,
      mobile_verified: null,
      credits: 0,
      is_stream_blocked: false,
      is_blocked: false
    },
    gameData: null,
    video: {
      lock: null,
      lock_msg: null,
      wss_url: null,
      hls_url: null
    },
    trendData: null,
    history: null,
    wallet: {
      deposits: null,
      withdrawals: null,
      transactions: null
    },
    walletModal: {
      show: false
    },
    outlets: {
      deposits: null,
      withdrawals: null
    },
    snackbar: {
      show: false,
      message: null,
      timeout: 5000,
      color: "green darken-2"
    },
    overlay: {
      show: false,
      button: true,
      message: null,
      type: null
    },
    win: {
      show: false,
      message: null,
      timeout: 10000
    },
    prompt: {
      show: false,
      message: null,
      type: null
    },
    appEvent: null,
    loading: false,
    responsive: false
  },
  getters: {
    game(state) {
      if (state.gameData && state.gameData.game_num) return state.gameData;
      return {
        game_num: null,
        name: "New Game",
        status: 0,
        winner: null,
        bets: [
          { side: 1, amount: "0.00", multi: 0 },
          { side: 2, amount: "0.00", multi: 0 },
          { side: 3, amount: "0.00", multi: 0 }
        ]
      };
    },
    trends(state) {
      if (state.trendData instanceof Array) return state.trendData;
      return Array(5)
        .fill(0)
        .map(() => Array(14).fill(0));
    },
    isOddUser(state) {
      return state.user.id % 2 !== 0;
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_GAME(state, payload) {
      state.gameData = payload;
    },
    SET_VIDEO(state, payload) {
      state.video = payload;
      state.video.lock = !!parseInt(payload.lock);
    },
    SET_TRENDS(state, payload) {
      state.trendData = payload;
    },
    SET_HISTORY(state, payload) {
      if (state.history && state.history.data instanceof Array) {
        if (payload.new_data) {
          state.history.data = payload.data;
          state.history.meta = payload.meta;
        } else {
          state.history.data = [
            ...new Set([].concat(...state.history.data, ...payload.data))
          ];
          state.history.meta.last_page = payload.meta.last_page;
          if (payload.meta.current_page > 1)
            state.history.meta.current_page = payload.meta.current_page;
        }
      } else {
        state.history = payload;
      }
    },
    SET_OUTLETS(state, payload) {
      state.outlets[payload.mode] = payload;
    },
    SET_WALLET(state, payload) {
      state.wallet[payload.mode] = payload;
    },
    SET_WALLET_MODAL(state, payload) {
      state.walletModal.show = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_RESPONSIVE(state, payload) {
      state.responsive = payload;
    },
    SET_SNACKBAR(state, payload) {
      if (payload.message) {
        state.snackbar.message = payload.message;
        state.snackbar.show = true;
      }

      payload.color
        ? (state.snackbar.color = payload.color)
        : (state.snackbar.color = "success");
    },
    SET_SNACKBAR_HIDE(state) {
      state.snackbar.show = false;
    },
    SET_OVERLAY(state, payload) {
      if (payload.message) {
        state.overlay.message = payload.message;
        state.overlay.button = payload.button;
        if (payload.type) state.overlay.type = payload.type;
        state.overlay.show = true;
      }
    },
    SET_OVERLAY_HIDE(state) {
      state.overlay.show = false;
    },
    SET_WIN(state, payload) {
      if (payload.message) {
        state.win.message = payload.message;
        state.win.show = true;
      }
    },
    SET_WIN_HIDE(state) {
      state.win.show = false;
    },
    SET_PROMPT(state, payload) {
      if (payload.message) {
        state.prompt.message = payload.message;
        state.prompt.show = true;
      }
    },
    SET_PROMPT_HIDE(state) {
      state.prompt.show = false;
    },
    SET_APP_EVENT(state, payload) {
      state.appEvent = payload;
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    setGame({ commit }, payload) {
      commit("SET_GAME", payload);
    },
    setVideo({ commit }, payload) {
      commit("SET_VIDEO", payload);
    },
    setTrends({ commit }, payload) {
      commit("SET_TRENDS", payload);
    },
    getTrends() {
      console.log("get trends");
    },
    setHistory({ commit }, payload) {
      commit("SET_HISTORY", payload);
    },
    getHistory() {
      console.log("get history");
    },
    getRandomHistory() {
      console.log("get random history");
    },
    setOutlets({ commit }, payload) {
      commit("SET_OUTLETS", payload);
    },
    setWallet({ commit }, payload) {
      commit("SET_WALLET", payload);
    },
    showWalletModal({ commit }) {
      commit("SET_WALLET_MODAL", true);
    },
    hideWalletModal({ commit }) {
      commit("SET_WALLET_MODAL", false);
    },
    loading({ commit }, payload) {
      commit("SET_LOADING", payload);
    },
    responsive({ commit }, payload) {
      commit("SET_RESPONSIVE", payload);
    },
    snackbar({ commit }, payload) {
      commit("SET_SNACKBAR", payload);
    },
    snackbarHide({ commit }) {
      commit("SET_SNACKBAR_HIDE");
    },
    overlay({ commit }, payload) {
      commit("SET_OVERLAY", payload);
    },
    overlayHide({ commit }) {
      commit("SET_OVERLAY_HIDE");
    },
    win({ commit }, payload) {
      commit("SET_WIN", payload);
    },
    winHide({ commit }) {
      commit("SET_WIN_HIDE");
    },
    prompt({ commit }, payload) {
      commit("SET_PROMPT", payload);
    },
    promptHide({ commit }) {
      commit("SET_PROMPT_HIDE");
    },
    appEvent({ commit }, payload) {
      commit("SET_APP_EVENT", payload);
    }
  }
});
