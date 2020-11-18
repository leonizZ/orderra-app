<template>
  <div class="restaurant-cont">
    <v-row no-gutters class="">
      <v-col cols="12" class="ma-0 pa-0">
        <search-filter></search-filter>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols=" ">
        <div class="restaurant-banner">
          <v-img
            src="/banners/or-banner7.jpg"
            height="250"
            position="center center"
          >
            <div class="ma-4">
              <v-tooltip>
                <v-btn small class="">
                  <v-icon color="">
                    mdi-heart-outline
                  </v-icon>
                </v-btn>
                <span>Add to Favorites</span>
              </v-tooltip>
            </div>
          </v-img>
        </div>
        <div class="restaurant-info pa-4">
          <v-row no-gutters>
            <v-col cols="12" md="6">
              <h2 class="title">Burger King</h2>
              <p class="body-2 mb-0">
                The quick brown fox jump over tha lazy dog near the river bank
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <div class="d-flex ">
                <v-btn
                  class="text-capitalize mr-2"
                  small
                  outlined
                  color="warning"
                >
                  Free Delivery
                </v-btn>
                <v-btn
                  class="text-capitalize mr-2"
                  small
                  outlined
                  color="warning"
                >
                  Buy 1 get 1 Free
                </v-btn>
                <v-btn class="text-capitalize" small outlined color="warning">
                  Opens at 10AM
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="d-flex ">
                <span class="mr-2">
                  <v-icon color="orange" size="20">
                    mdi-star
                  </v-icon>
                  <small class="ml-1">4.8(1234)</small>
                </span>
                <span class="mr-2">
                  <v-icon color="grey" size="20">mdi-silverware </v-icon>
                  <small class="ml-1">Burger</small>
                </span>
                <span class="mr-2">
                  <v-icon color="grey" size="20">
                    mdi-currency-usd
                  </v-icon>
                  <small class="ml-1">$$</small>
                </span>
                <span>
                  <v-icon color="grey" size="20">
                    mdi-target
                  </v-icon>
                  <small class="ml-1">12km (Address)</small>
                </span>
              </div>
            </v-col>
          </v-row>

          <!-- tabs -->
          <product-thumb></product-thumb>
        </div>
      </v-col>
      <!-- <v-col cols="4" class="cart-details">
        cart Here
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import SearchFilter from "@/components/SearchFilter";
import ProductThumb from "@/components/ProductThumb";
export default {
  components: {
    SearchFilter,
    ProductThumb
  }
};
</script>

<style>
.cart-details {
  border: 1px solid red;
}
</style>
