<template>
  <div class="product-section">
    <div class="category-menu pa-0">
      <v-row no-gutters>
        <v-col class="pa-3" cols="3">
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="category in categoryList" :key="category.id">
                <v-list-item-icon>
                  <v-icon v-text="category.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="category.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="9">
          <v-row no-gutters>
            <v-col class="pa-3" cols="">
              <v-chip-group active-class="warning--text" center-active>
                <v-chip v-for="category in categoryList" :key="category.id">
                  <a
                    :href="'#' + category.name"
                    class="text-capitalize font-weight-medium category-links"
                  >
                    {{ category.name }}
                  </a>
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <div
            class="test mb-4 mt-6"
            :id="category.name"
            v-for="category in categoryList"
            :key="category.id"
          >
            <h3 class="mb-0 text-capitalize">
              {{ category.name }}
            </h3>
            <v-row>
              <v-col
                cols="12"
                md="4"
                sm="6"
                v-for="product in category.child.products"
                :key="product.id"
                @click="addToCart(product)"
              >
                <v-card class="pa-3 product-tem added">
                  <div class="d-flex justify-space-between ">
                    <span>
                      <p class="body-1 mb-0">{{ product.title }}</p>
                      <small>P {{ product.price }}</small>
                    </span>
                    <img
                      :src="'./banners/' + product.img"
                      alt="product.title"
                      width="80"
                    />
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categoryList: [
      {
        id: "1",
        name: "Beverages",
        icon: "mdi-user",
        child: [
          {
            name: "Soft Drinks",
            icon: "",
            products: [
              {
                id: 1,
                title: "Coca Cola Regular",
                img: "or-banner1.jpg",
                price: "123.00"
              },
              {
                id: 2,
                title: "TeCoca Cola No Sugar",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 3,
                title: "Sprite PET | 2L",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 4,
                title: "Royal True-Orange PET",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 5,
                title: "Rite N Lite Cucumber | 250ml",
                img: "or-banner2.jpg",
                price: "123.00"
              }
            ]
          },
          {
            name: "Juice",
            icon: "",
            products: [
              {
                id: 1,
                title: "Coca Cola Regular",
                img: "or-banner1.jpg",
                price: "123.00"
              },
              {
                id: 2,
                title: "TeCoca Cola No Sugar",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 3,
                title: "Sprite PET | 2L",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 4,
                title: "Royal True-Orange PET",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 5,
                title: "Rite N Lite Cucumber | 250ml",
                img: "or-banner2.jpg",
                price: "123.00"
              }
            ]
          },
          {
            name: "Coffee",
            icon: "",
            products: [
              {
                id: 1,
                title: "Coca Cola Regular",
                img: "or-banner1.jpg",
                price: "123.00"
              },
              {
                id: 2,
                title: "TeCoca Cola No Sugar",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 3,
                title: "Sprite PET | 2L",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 4,
                title: "Royal True-Orange PET",
                img: "or-banner2.jpg",
                price: "123.00"
              },
              {
                id: 5,
                title: "Rite N Lite Cucumber | 250ml",
                img: "or-banner2.jpg",
                price: "123.00"
              }
            ]
          }
        ]
      }
    ]
  }),
  computed: {},
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    }
  },
  mounted() {}
};
</script>
styl

<style lang="sass" scoped>
.restaurant-info
    position: relative

.category-menu
    position: -webkit-sticky
    position: sticky
    top: 0
    z-index: 6
    background-color: #fff
    margin: -15px
    border-bottom:1px solid #8c8c8c45
.category-links
    text-decoration: none
    color: #383838


:target:before
    content: ""
    display: block
    height: 82px
    margin: -83px 0 0
</style>
