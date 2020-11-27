<template>
  <v-navigation-drawer
    v-model="showDetails"
    absolute
    temporary
    right
    width="450px"
    class=""
  >
    <!-- <order-details></order-details> -->
    <cart v-on:hide-details="showDetails = !showDetails"></cart>
  </v-navigation-drawer>
</template>

<script>
// import OrderDetails from "@/components/OrderDetails.vue";'
import Cart from "@/components/Cart.vue";
export default {
  data: () => ({
    //
    showDetails: true
  }),
  components: {
    // OrderDetails
    Cart
  }
};
</script>

<style></style>
