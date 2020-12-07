<template>
  <v-row no-gutters class="">
    <v-col
      cols="12"
      sm="6"
      md="4"
      class="py-3 "
      v-for="featured in featuredApps"
      :key="featured.id"
    >
      <div class="d-flex align-center shop-cont">
        <v-card flat class="pa-1">
          <v-img
            :src="'./shops/' + featured.img"
            min-height="70"
            height="70"
            max-width="75"
            contain
            class="thumb-img "
          ></v-img>
        </v-card>

        <!-- <v-avatar class="" size="75" tile>
          <v-img :src="'./shops/' + featured.img"></v-img>
        </v-avatar> -->
        <div class="ml-3 flex-grow-1">
          <h6 class="body-1">{{ featured.name }}</h6>

          <div class="d-flex ">
            <span class="mr-2">
              <v-icon color="orange" size="17">
                mdi-star
              </v-icon>
              <small class="ml-1">4.8(1234)</small>
            </span>
            <span class="mr-2">
              <v-icon color="grey" size="17"
                >{{ featured.category.icon }}
              </v-icon>
              <small class="ml-1">{{ featured.category.name }}</small>
            </span>
            <span>
              <v-icon color="grey" size="17">
                mdi-currency-usd
              </v-icon>
              <small class="ml-1">$$</small>
            </span>
          </div>
          <div class="">
            <span class="">
              <v-btn x-small text color="warning" class="text-capitalize">
                {{ featured.tag }}
              </v-btn>
            </span>

            <span>
              <v-icon color="grey" size="17">
                mdi-crosshairs
              </v-icon>
              <small class="ml-1">{{ featured.distance }}</small>
            </span>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    featuredApps: [
      {
        id: 1,
        img: "shop(1).png",
        name: "Chowking ",
        category: {
          name: "food",
          icon: "mdi-silverware"
        },
        tag: "Free Delivery",
        distance: "12km"
      },
      {
        id: 2,
        img: "shop(3).png",
        name: "Southstar",
        category: {
          name: "food",
          icon: "mdi-pharmacy"
        },
        tag: "Free Delivery",
        distance: "12km"
      },
      {
        id: 3,
        img: "shop(1).jpg",
        name: "Watsons ",
        category: {
          name: "food",
          icon: "mdi-silverware"
        },
        tag: "Free Delivery",
        distance: "12km"
      },
      {
        id: 4,
        img: "shop(2).jpg",
        name: "Mercury Drug",
        category: {
          name: "food",
          icon: "mdi-silverware"
        },
        tag: "Free Delivery",
        distance: "12km"
      },
      {
        id: 5,
        img: "shop(4).jpg",
        name: "Jollibee",
        category: {
          name: "food",
          icon: "mdi-silverware"
        },
        tag: "Free Delivery",
        distance: "12km"
      },
      {
        id: 6,
        img: "shop(2).png",
        name: "Greenwich",
        category: {
          name: "food",
          icon: "mdi-silverware"
        },
        tag: "Free Delivery",
        distance: "12km"
      }
    ]
  })
};
</script>

<style>
.thumb-img {
  background: #fff;
}
</style>
