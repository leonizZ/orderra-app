<template>
  <v-row class="ma-3">
    <v-col cols="12">
      <div class="my-3">
        <h3 class="headline mb-3">Categories For You</h3>
      </div>

      <featured-categories></featured-categories>
    </v-col>
  </v-row>
</template>

<script>
import FeaturedCategories from "@/components/FeaturedCategories";
export default {
  components: {
    FeaturedCategories
  }
};
</script>

<style></style>
