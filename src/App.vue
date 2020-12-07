<template>
  <!-- App.vue -->

  <v-app>
    <!-- <main-sidebar></main-sidebar> -->

    <!-- Sizes your content based upon application components -->
    <v-main class="grey-bg">
      <main-header v-if="mainRoute" @view-cart="viewCartDetails"></main-header>
      <sub-header v-if="subRoute"> </sub-header>
      <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>

      <main-footer></main-footer>
    </v-main>
    <side-details v-if="details"> </side-details>
  </v-app>
</template>

<script>
import routes from "./mixins/routes";
import global from "./mixins/global";
import pusher from "./mixins/pusher";
import data from "./mixins/data";
import fetchers from "./mixins/fetchers";

import SideDetails from "@/sections/SideDetails";
import MainHeader from "@/sections/MainHeader";
import SubHeader from "@/sections/SubHeader";
import MainFooter from "@/sections/MainFooter";
// import MainSidebar from "@/components/MainSidebar.vue";

export default {
  name: "App",
  mixins: [routes, global, pusher, data, fetchers],
  data: () => ({
    details: null
  }),
  components: {
    // MainSidebar,
    SideDetails,
    MainFooter,
    MainHeader,
    SubHeader
  },
  methods: {
    viewCartDetails() {
      this.details = true;
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.grey-bg {
  background: #f4f5f7;
}

.white-bg {
  background: #fff;
}
.sub-header {
  border-bottom: 1px solid #d9d9db;
}
.login-cont {
  /* border: 1px solid green; */
  min-height: 100vh;
}
.restaurant-cont,
.category-cont {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08) !important;
}
.restaurant-cont,
.categories-cont .v-card,
.shop-cont {
  cursor: pointer;
}

/* featured restaurant */
.sale-cont {
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px 10px;
  background: #ff7d49d6;
  color: #fff;
}
.status-cont {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 10px;
  background: #ffffff85;
}

/* cart item */
.item-row:hover {
  background: #f4f5f7;
}
</style>
