<template>
  <v-row class="">
    <v-col
      cols="12"
      sm="4"
      lg="3"
      class="py-3 "
      v-for="featured in featuredApps"
      :key="featured.id"
    >
      <v-card flat class="restaurant-cont">
        <v-img :src="'./banners/' + featured.img" height="135"></v-img>
        <span class="sale-cont">
          <p class="mb-0 body-2">On Sale</p>
        </span>
        <span class="status-cont ">
          <p class="mb-0 body-2">12 min</p>
        </span>
        <div class="d-flex align-center">
          <div class="ml-3 flex-grow-1 py-2">
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
              <span>
                <v-icon color="grey" size="17">
                  mdi-crosshairs
                </v-icon>
                <small class="ml-1">{{ featured.distance }}</small>
              </span>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    featuredApps: [
      {
        id: 1,
        img: "or-banner1.jpg",
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
        img: "or-banner2.jpg",
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
        img: "or-banner3.jpg",
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
        img: "or-banner4.jpg",
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
        img: "or-banner5.jpg",
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
        img: "or-banner6.jpg",
        name: "Greenwich",
        category: {
          name: "food",
          icon: "mdi-silverware"
        },
        tag: "Free Delivery",
        distance: "12km"
      },
      {
        id: 7,
        img: "or-banner7.jpg",
        name: "Mercury Drug",
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

<style></style>
