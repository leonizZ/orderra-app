<template>
  <div class="cart-container">
    <v-row no-gutters class="pa-4">
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <h4>My Cart (2 items)</h4>
          <v-btn small>
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="d-flex align-center justify-space-between mt-4">
          <v-text-field
            label="Deliver to"
            placeholder="Dumaguete City"
          ></v-text-field>
          <v-btn class="" text small>
            <v-icon color="#a5a5a5">
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </div>

        <cart-items></cart-items>

        <div class="d-flex justify-space-between mt-4">
          <div class="cart-totals d-flex flex-column">
            <p class="body-1 mb-0">Subtotal</p>
            <p class="body-1 mb-0">Delivery fee</p>
            <p class="body-1 mb-0">Discount</p>
            <h3 class="font-weight-bold">
              Total <span class="font-italic">(Incl. VAT)</span>
            </h3>
          </div>
          <div class="">
            <p class="body-1 mb-0">1,119.00</p>
            <p class="body-1 mb-0">29.00</p>
            <p class="body-1 mb-0">279.00</p>
            <h3 class="font-weight-bold">PHP 868.25</h3>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="checkout-btn-cont">
      <div class="row pa-4">
        <v-col cols="12">
          <v-btn block color="warning" class=""> Checkout</v-btn>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import CartItems from "@/components/CartItems.vue";

export default {
  components: {
    CartItems
  }
};
</script>

<style>
.checkout-btn-cont {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
