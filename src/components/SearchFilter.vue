<template>
  <v-row no-gutters class="search-filter ">
    <v-col cols="6" class="ma-0 px-3">
      <v-row no-gutters class="filter-cont">
        <v-col cols="6" class="ma-0 pa-0">
          <v-select
            v-model="location"
            :items="states"
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
        <v-col cols="3" class="ma-0 pa-0">
          <v-select
            v-model="delOption"
            :items="states"
            menu-props="auto"
            label="Pick Up"
            solo
            flat
            dense
            hide-details
            prepend-icon="mdi-shopping warning--text"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="3" class="ma-0 pa-0">
          <v-select
            v-model="category"
            :items="states"
            menu-props="auto"
            label="Best Deals"
            solo
            flat
            dense
            hide-details
            prepend-icon="mdi-sale amber--text text--accent-3"
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col cols="9" class="">
          <v-text-field
            placeholder="Search here.."
            prepend-inner-icon="mdi-magnify"
            solo
            dense
            flat
            background-color="#fafafa"
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn color="primary " class="filter-btn mx-3">
            <v-icon>
              mdi-filter-variant
            </v-icon>
          </v-btn>
          <v-btn
            text
            color="grey"
            class="cart-btn grey--text"
            @click="viewCart"
          >
            <v-badge overlap content="3" color="orange">
              <v-icon dark>
                mdi-cart-outline
              </v-icon>
            </v-badge>
          </v-btn>
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
    delOption: null,
    category: null,
    cart: [],

    states: ["Alabama", "Alaska", "American Samoa"]
  }),
  methods: {
    viewCart() {
      this.$emit("toggle-cart");
      console.log("toggle");
    }
  }
};
</script>

<style lang="sass">

.filter-btn, .cart-btn
    min-width: 45px !important
</style>
