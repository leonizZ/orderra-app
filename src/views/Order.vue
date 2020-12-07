<template>
  <div class="">
    <v-row class="ma-3">
      <v-col cols="12">
        <div class="my-3">
          <h3 class="headline mb-3">Upcoming Orders</h3>

          <orders></orders>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Orders from "@/components/Orders.vue";
export default {
  components: {
    Orders
  }
};
</script>

<style></style>
