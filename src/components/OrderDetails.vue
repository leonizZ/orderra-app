<template>
  <div class="order-details">
    <v-row no-gutters>
      <v-col>
        <v-card color="grey darken-2" class="" tile dark flat height="400px">
          <Map></Map>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-4">
      <v-col cols="6">
        <div class="d-flex">
          <v-icon>
            mdi-clock
          </v-icon>
          <span class="ml-2">
            <small>Estimated arrival</small>
            <p class="body-1 mb-0 font-weight-bold">13min</p>
          </span>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="d-flex">
          <v-icon>
            mdi-google-maps
          </v-icon>
          <span class="ml-2">
            <small>Distance</small>
            <p class="body-1 mb-0 font-weight-bold">3.6 km</p>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-4">
      <v-col cols="2" class="pr-1">
        <v-progress-linear
          color="orange darken-2"
          rounded
          value="100"
          height="5"
        ></v-progress-linear>
      </v-col>
      <v-col cols="3" class="pr-1">
        <v-progress-linear
          color="orange darken-2"
          rounded
          value="100"
          height="5"
        ></v-progress-linear>
      </v-col>
      <v-col cols="7">
        <v-progress-linear
          color="orange darken-2"
          rounded
          value="50"
          height="5"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <!-- order status -->
    <div class="order-status">
      <v-row no-gutters class="mx-4 my-2">
        <v-col>
          <div class="d-flex align-center">
            <v-icon>
              mdi-clock
            </v-icon>
            <span>
              <p class="body-2 mb-0 ml-3">Delivered</p>
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters class="mx-4 my-2">
        <v-col>
          <div class="d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon color="warning">
                mdi-check
              </v-icon>
              <span>
                <p class="body-2 mb-0 ml-3">On the way</p>
              </span>
            </div>
            <span>
              <p class="mb-0 body-2">12:00</p>
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters class="mx-4 my-2">
        <v-col>
          <div class="d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon color="warning">
                mdi-check
              </v-icon>
              <span>
                <p class="body-2 mb-0 ml-3">Food is Ready</p>
              </span>
            </div>
            <span>
              <p class="mb-0 body-2">12:00</p>
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-spacer></v-spacer>
    <div class="order-help">
      <v-row no-gutters class="mx-4 my-2">
        <v-col cols="3">
          <span class="flex-shirk-0">
            <v-btn>
              <v-icon>
                mdi-chat
              </v-icon>
            </v-btn>
          </span>
        </v-col>
        <v-col cols="9">
          <span class="flex-grow-1">
            <v-btn color="primary" block>
              Call
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
  data: () => ({
    //
    ShowDetails: false
  }),
  components: {
    Map
  }
};
</script>

<style></style>
