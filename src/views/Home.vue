<template>
  <v-row no-gutters class="ma-3">
    <v-col cols="12" class="ma-0 pa-0">
      <search-filter></search-filter>
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
    </v-col>
  </v-row>
</template>

<script>
import SearchFilter from "@/components/SearchFilter.vue";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedShops from "@/components/FeaturedShops";
export default {
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
    }
  }
};
</script>

<style></style>
