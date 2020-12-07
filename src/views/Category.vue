<template>
  <v-row class="ma-3">
    <v-col cols="12">
      <div class="my-3">
        <h3 class="headline mb-3">Sample</h3>
      </div>

      <featured-shops></featured-shops>
    </v-col>
  </v-row>
</template>

<script>
import FeaturedShops from "@/components/FeaturedShops";
export default {
  components: {
    FeaturedShops
  }
};
</script>

<style></style>
