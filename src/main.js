import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import vueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(vueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCpnMlHp851GjKeFRBOMqhFgdG9pLycuiI"
  },
  installComponents: true
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
