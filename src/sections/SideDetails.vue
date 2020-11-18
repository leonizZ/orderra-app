<template>
  <v-navigation-drawer
    v-model="ShowDetails"
    absolute
    temporary
    right
    width="450px"
    class=""
  >
    <order-details></order-details>
  </v-navigation-drawer>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue";
export default {
  data: () => ({
    //
    ShowDetails: true
  }),
  components: {
    OrderDetails
  }
};
</script>

<style></style>
