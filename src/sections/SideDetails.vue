<template>
  <v-navigation-drawer
    v-model="details"
    absolute
    temporary
    right
    width="450px"
    class=""
  >
    <div class="close-btn">
      <v-btn fab x-small @click="details = !details">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </div>
    <order-details></order-details>
    <!-- <cart></cart> -->
  </v-navigation-drawer>
</template>

<script>
import OrderDetails from "@/components/OrderDetails.vue";
// import Cart from "@/components/Cart.vue";

export default {
  props: ["showDetails"],
  data: () => ({
    //
    details: true
  }),
  components: {
    OrderDetails
  },

  watch: {
    showDetails() {
      this.details = this.showDetails;
    }
  }
};
</script>

<style>
.close-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
