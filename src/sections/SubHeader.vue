<template>
  <v-row no-gutters class="white-bg sub-header justify-center align-center">
    <v-col cols="2" class="">
      <a href="/">
        <v-img src="/orderra-logo.svg" class="logo-img ml-4"></v-img>
      </a>
    </v-col>
    <v-col cols="10" class="">
      <v-row class="justify-center align-center">
        <v-col cols="6" class="">
          <v-select
            v-model="address"
            :items="addresses"
            menu-props="auto"
            label="Dumaguete City"
            background-color="#f4f5f7 "
            solo
            flat
            hide-details
            prepend-icon="mdi-target primary--text"
            single-line
          ></v-select>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-end pr-4">
            <!-- <v-btn class="info " @click="goTo('/login')">
              <v-icon> mdi-account-outline </v-icon>
              Login
            </v-btn> -->

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="info" dark v-bind="attrs" v-on="on">
                  <v-icon> mdi-account-outline </v-icon>
                  Leonil
                </v-btn>
              </template>
              <v-list class="menu-list">
                <v-list-item
                  v-for="(item, index) in menuItems"
                  :key="index"
                  @click="goTo('/' + item.link)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

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
    menuItems: [
      {
        title: "My Orders",
        link: "/order"
      },
      {
        title: "Profile",
        link: "/profile"
      },
      {
        title: "Address",
        link: "/address"
      },
      {
        title: "Logout",
        link: "/logout"
      }
    ],
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
    },
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false;
      });
    }
  }
};
</script>

<style lang="sass">

.filter-btn, .cart-btn
    min-width: 45px !important
</style>
