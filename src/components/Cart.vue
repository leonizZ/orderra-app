<template>
  <div class="cart-container">
    <v-row v-if="cartHasList" no-gutters class="pa-4">
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <h4 class="title">My Cart (2 items)</h4>
        </div>
        <div class="d-flex align-center justify-space-between mb-4">
          <v-select
            v-model="location"
            :items="states"
            label="Deliver to"
          ></v-select>
        </div>

        <cart-items></cart-items>

        <div class="d-flex justify-space-between mt-4">
          <div class="cart-totals d-flex flex-column">
            <p class="body-1 mb-1">Subtotal</p>
            <p class="body-1 mb-1">Delivery fee</p>
            <p class="body-1 mb-1">Discount</p>
            <h3 class="font-weight-bold">
              Total <span class="font-italic">(Incl. VAT)</span>
            </h3>
          </div>
          <div class="text-right">
            <p class="body-1 mb-1">PHP 1,119.00</p>
            <p class="body-1 mb-1">PHP 29.00</p>
            <p class="body-1 mb-1">PHP 279.00</p>
            <h3 class="font-weight-bold">PHP 868.25</h3>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="mt-6">
        <v-btn block color="warning" class=""> Checkout</v-btn>
      </v-col>
    </v-row>
    <v-row v-else class="justify-center align-center    ">
      <v-col class="text-center mt-6">
        <h3 class="title">Order Anything !</h3>
        <p class="body-2 mb-0">
          Add items to your basket and place order here.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems.vue";

export default {
  data: () => ({
    cartHasList: true,
    location: null,
    delOption: null,
    category: null,

    states: ["Alabama", "Alaska", "American Samoa"]
  }),
  components: {
    CartItems
  },
  methods: {}
};
</script>

<style></style>
