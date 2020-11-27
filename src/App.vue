<template>
  <!-- App.vue -->

  <v-app>
    <main-sidebar></main-sidebar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <order-details v-if="sidedetails"> </order-details>
  </v-app>
</template>

<script>
import OrderDetails from "@/sections/SideDetails";
import MainSidebar from "@/components/MainSidebar.vue";
export default {
  name: "App",
  data: () => ({
    sidedetails: false
  }),
  components: {
    MainSidebar,
    OrderDetails
  },
  methods: {}
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
