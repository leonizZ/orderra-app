<template>
  <div class="header">
    <v-container>
      <v-row class="mt-3">
        <v-col cols="6" class=" " sm="6" md="6">
          <a href="/">
            <v-img src="/orderra-logo.png" class="logo-img"></v-img>
          </a>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <div class="d-flex justify-end">
            <v-btn class="mr-3" dark text>Register Restaurant</v-btn>
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
      <v-row no-gutters class="justify-center align-center mt-12 ">
        <v-col cols="10" sm="8" md="8" class="">
          <form action=" ">
            <v-card class="pa-3 search-cont" flat color="#ffffff42">
              <v-text-field
                placeholder="Search a shop or restaurant here.."
                prepend-inner-icon="mdi-magnify"
                solo
                dense
                flat
                hide-details="auto"
                background-color="#fafafa"
                clearable
              ></v-text-field>
            </v-card>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
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
    ]
  }),
  methods: {
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false;
      });
    },
    viewCart() {
      this.$emit("view-cart");
      console.log("view-cart");
    }
  }
};
</script>

<style>
.header {
  min-height: 350px;
  background: linear-gradient(45deg, #f6993f, #ec2712a6), url("/city-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}

.logo-img {
  width: 130px;
}
.menu-list {
  width: 215px;
}
</style>
