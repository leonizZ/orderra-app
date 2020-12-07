<template>
  <v-row no-gutters class="white-bg mx-4">
    <v-col cols="2" class="ma-0 px-3">
      <a href="/">
        <v-img src="/orderra-logo.svg" class="logo-img"></v-img>
      </a>
    </v-col>
    <v-col cols="10" class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col cols="6" class="">
          <v-select
            v-model="address"
            :items="addresses"
            menu-props="auto"
            label="Dumaguete City"
            solo
            flat
            dense
            hide-details
            prepend-icon="mdi-target primary--text"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-end">
            <v-btn class="info " @click="goTo('/login')">
              <v-icon> mdi-account-outline </v-icon>
              Login
            </v-btn>
            <v-btn class="ml-3" @click="viewCart">
              <v-icon size="18" left>
                mdi-cart-outline
              </v-icon>
              Cart
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    location: null,
    address: null,
    orderType: null,
    deals: null,
    category: null,
    cart: [],

    addresses: ["Dumaguete City", "Daro Highway", "Aldea Homes"],
    orderTypeOptions: ["Pick up", "Delivery"],
    ourDeals: ["Free Delivery", "Best Deals", "On Sale"]
  }),
  methods: {
    viewCart() {
      this.$emit("show-details");
      console.log("toggle");
    }
  }
};
</script>

<style lang="sass">

.filter-btn, .cart-btn
    min-width: 45px !important
</style>
