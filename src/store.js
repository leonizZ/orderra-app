import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    knownRoutes: ["home", "categories"],
    subRoutes: ["restaurant", "orders", "category", "order"],
    exemptRoutes: [
      "register",
      "registered",
      "login",
      "forgot-password",
      "new-password",
      "verify",
      "landing"
    ],

    cart: [],

    categories: [
      {
        id: 1,
        icon: "mdi-silverware",
        title: "Restaurant",
        color: "#BA68C8",
        options: "200+ options"
      },
      {
        id: 2,
        icon: "mdi-basket-fill",
        title: "Groceries",
        color: "#42A5F5",
        options: "200+ options"
      },
      {
        id: 3,
        icon: "mdi-pharmacy",
        title: "Medicine",
        color: "#43A047",
        options: "200+ options"
      },
      {
        id: 4,
        icon: "mdi-food",
        title: "Snacks",
        color: "#FB8C00",
        options: "200+ options"
      },
      {
        id: 5,
        icon: "mdi-engine",
        title: "Hardware",
        color: "#43A047",
        options: "200+ options"
      },
      {
        id: 6,
        icon: "mdi-food",
        title: "Sample",
        color: "#FB8C00",
        options: "200+ options"
      }
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
      lock_message: null,
      video_url: null,
      description: null,
      name: null,
      status: null,
      slug: null,
      settings: {
        dp_url: null
      }
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
  getters: {},
  mutations: {},
  actions: {}
});
