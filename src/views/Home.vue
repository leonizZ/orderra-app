<template>
  <div class="">
    <v-row no-gutters class="ma-3">
      <v-col cols="12" class="ma-0 pa-0">
        <search-filter v-on:toggle-cart="viewCart"> </search-filter>
        <div class="my-3">
          <div class="d-flex justify-space-between align-center">
            <h3 class="headline mb-3">Explore Categories</h3>
            <div class="">
              <v-btn text class="text-capitalize" @click="goTo('/categories')">
                See All <v-icon small>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </div>

          <featured-categories></featured-categories>
        </div>
        <div class="my-3">
          <div class="d-flex justify-space-between align-center">
            <h3 class="headline mb-3">Feature Shops</h3>
            <div class="">
              <v-btn text class="text-capitalize">
                See All <v-icon small>mdi-arrow-right</v-icon></v-btn
              >
            </div>
          </div>
          <featured-shops></featured-shops>
        </div>

        <div class="my-3">
          <div class="d-flex justify-space-between align-center">
            <h3 class="headline mb-3">Restaurant</h3>
            <div class="">
              <v-btn text class="text-capitalize">
                See All <v-icon small>mdi-arrow-right</v-icon></v-btn
              >
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchFilter from "@/components/SearchFilter.vue";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedShops from "@/components/FeaturedShops";

export default {
  data: () => ({
    isVisible: false,
    sidedetails: false
  }),
  components: {
    SearchFilter,
    FeaturedCategories,
    FeaturedShops
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false;
      });
    },

    viewCart() {
      this.$emit("show-cart");
    }
  }
};
</script>

<style></style>
