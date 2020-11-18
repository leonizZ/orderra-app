<template>
  <v-row class="ma-3">
    <v-col cols="12">
      <search-filter></search-filter>

      <div class="my-3">
        <h3 class="headline mb-3">Categories For You</h3>
      </div>

      <featured-categories></featured-categories>
    </v-col>
  </v-row>
</template>

<script>
import SearchFilter from "@/components/SearchFilter.vue";
import FeaturedCategories from "@/components/FeaturedCategories";
export default {
  components: {
    SearchFilter,
    FeaturedCategories
  }
};
</script>

<style></style>
