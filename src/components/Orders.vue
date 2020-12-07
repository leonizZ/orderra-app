<template>
  <div class="">
    <v-row>
      <v-col cols="4">
        <v-card flat class="pa-4">
          <div class="d-flex justify-space-between ">
            <span>
              <p class="mb-0 title">Burger King</p>
            </span>
            <span>
              <p class="mb-0 body-1">#12334</p>
            </span>
          </div>
          <div class="d-flex justify-space-between ">
            <span class="d-flex">
              <v-icon>
                mdi-target
              </v-icon>
              <div class="ml-3">
                <small>Estimated arrival</small>
                <p class="body-1 mb-0">35 min</p>
              </div>
            </span>
            <span>
              <v-btn small color="primary">Track</v-btn>
            </span>
          </div>
          <div class="d-flex my-2">
            <v-row no-gutters>
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
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card flat class="pa-4">
          <div class="d-flex justify-space-between ">
            <span>
              <p class="mb-0 title">Burger King</p>
            </span>
            <span>
              <p class="mb-0 body-1">#12334</p>
            </span>
          </div>
          <div class="d-flex justify-space-between ">
            <span class="d-flex">
              <v-icon>
                mdi-target
              </v-icon>
              <div class="ml-3">
                <small>Estimated arrival</small>
                <p class="body-1 mb-0">35 min</p>
              </div>
            </span>
            <span>
              <v-btn small color="primary">Track</v-btn>
            </span>
          </div>
          <div class="d-flex my-2">
            <v-row no-gutters>
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
                  value="45"
                  height="5"
                ></v-progress-linear>
              </v-col>
              <v-col cols="7">
                <v-progress-linear
                  color="orange darken-2"
                  rounded
                  value="0"
                  height="5"
                ></v-progress-linear>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <h3 class="headline mb-3">Previous Orders</h3>
    <v-row>
      <v-col cols="4">
        <v-card color="#fafafa" flat class="pa-4">
          <div class="d-flex justify-space-between ">
            <span>
              <p class="mb-0 title">Burger King</p>
            </span>
            <span>
              <v-btn text color="success" class="" small>Completed</v-btn>
            </span>
          </div>

          <div class="d-flex justify-space-between ">
            <span class="d-flex">
              <div class="">
                <v-icon>
                  mdi-calendar
                </v-icon>
                <small>Nov. 10 2020</small>
              </div>
              <div class="">
                <v-icon>
                  mdi-clock
                </v-icon>
                <small>Estimated arrival</small>
              </div>
            </span>
          </div>
          <!-- order list -->
          <div class="">
            <div class="d-flex align-center">
              <span>
                <v-chip x-small label>3</v-chip>
              </span>
              <p class="mb-0 body-2">Sample test</p>
            </div>
            <div class="d-flex align-center">
              <span>
                <v-chip x-small label>3</v-chip>
              </span>
              <p class="mb-0 body-2">Sample test</p>
            </div>
          </div>

          <!-- end of oreder list -->

          <v-row no-gutters class="">
            <v-col cols="6" class="pr-2">
              <v-btn block class="text=capitalize" color="warning" small>
                Details
              </v-btn>
            </v-col>
            <v-col cols="6" class="pl-2">
              <v-btn block class="text-capitalize" color="secondary" small
                >Help</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style></style>
