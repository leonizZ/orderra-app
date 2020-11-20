<template>
  <v-navigation-drawer
    v-model="ShowDetails"
    absolute
    temporary
    right
    width="450px"
    class=""
  >
    <!-- <order-details></order-details> -->
    <cart></cart>
  </v-navigation-drawer>
</template>

<script>
// import OrderDetails from "@/components/OrderDetails.vue";'
import Cart from "@/components/Cart.vue";
export default {
  data: () => ({
    //
    ShowDetails: true
  }),
  components: {
    // OrderDetails
    Cart
  }
};
</script>

<style></style>
