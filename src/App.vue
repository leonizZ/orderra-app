<template>
  <!-- App.vue -->

  <v-app>
    <navigation-drawer></navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <order-details></order-details>
  </v-app>
</template>

<script>
import OrderDetails from "@/sections/SideDetails";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
export default {
  name: "App",
  components: {
    NavigationDrawer,
    OrderDetails
  },

  data: () => ({
    //
  })
};
</script>

<style lang="sass">
html
    scroll-behavior: smooth
</style>
