<template>
  <div class="">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="ma-0 pa-0">
          <!-- <search-filter @show-details="testEmit"> </search-filter> -->
          <div class="my-3">
            <div class="d-flex justify-space-between align-center">
              <h3 class="headline mb-3">Explore Categories</h3>
              <div class="">
                <v-btn
                  text
                  class="text-capitalize"
                  @click="goTo('/categories')"
                >
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

            <featured-restaurants></featured-restaurants>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import global from "@/mixins/global.js";

// import SearchFilter from "@/components/SearchFilter.vue";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedShops from "@/components/FeaturedShops";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";

export default {
  mixins: [global],
  data: () => ({
    isVisible: false
  }),
  components: {
    // SearchFilter,
    FeaturedCategories,
    FeaturedShops,
    FeaturedRestaurants
  },
  methods: {
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false;
      });
    },
    testEmit() {
      this.details = true;
    }
  }
};
</script>

<style></style>
