<template>
  <div class="product-section">
    <div class="category-menu pa-0">
      <v-row no-gutters>
        <v-col class="pa-3" cols="">
          <v-chip-group active-class="warning--text" center-active>
            <a
              :href="'#' + category.name"
              v-for="category in categoryList"
              :key="category.id"
            >
              <v-chip>
                <span class="text-capitalize font-weight-medium category-links">
                  {{ category.name }}
                </span>
              </v-chip>
            </a>
          </v-chip-group>
        </v-col>
      </v-row>
    </div>
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
          v-for="product in category.products"
          :key="product.id"
        >
          <v-card
            class="pa-3 product-tem added"
            @click="addToCart(product)"
            flat
          >
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

              <v-btn tile x-small class="warning plus-btn pa-0 ma-0">
                <v-icon size="18">
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>
            <span class="headline">Product Title </span>
            <v-spacer></v-spacer>
            <span>P123</span>
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-row class="variations">
              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <p class="body-1 mb-0" for="variations">
                    Select variations
                  </p>
                  <span class="option-desc text-uppercase">1 Required</span>
                </div>

                <v-radio-group v-model="variations">
                  <div
                    class="d-flex justify-space-between mb-1"
                    v-for="n in 3"
                    :key="n"
                  >
                    <v-radio :label="`Radio ${n} `" :value="n"> </v-radio>
                    <p class="mb-0 body-1">P120</p>
                  </div>
                </v-radio-group>
              </v-col>
              <v-col cols="12">
                <div class="d-flex justify-space-between">
                  <p class="body-1 mb-0" for="variations">Add-ons</p>
                  <span class="option-desc text-uppercase">Optional</span>
                </div>
                <p class="mb-0 body-2">Select up to 2 optional</p>

                <div
                  class="d-flex justify-space-between"
                  v-for="n in 4"
                  :key="n"
                >
                  <v-checkbox
                    class="my-2 "
                    v-model="addons"
                    :label="`Add-on ${n}`"
                    :value="n"
                    hide-details="auto"
                  ></v-checkbox>
                  <p class="mb-0 body-1">P120</p>
                </div>
              </v-col>
              <v-col cols="12">
                <p class="body-1 mb-0" for="variations">Instructions</p>
                <p class="body-2">
                  Any specific preferences? Let the restaurant know.
                </p>
                <v-textarea
                  solo
                  title=""
                  name="input-7-4"
                  label="Solo textarea"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-col cols="3">
                <div class="d-flex">
                  <v-btn x-small dark color="primary">
                    <v-icon> mdi-minus</v-icon>
                  </v-btn>
                  <v-text-field
                    dense
                    class="mt-0"
                    v-model="itemCount"
                    hide-details="auto"
                  >
                  </v-text-field>

                  <v-btn x-small dark color="pink">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="9">
                <v-btn block color="warning" @click="dialog = false">
                  ADD TO CART
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentCategory: null,
    dialog: false,
    itemCount: 1,
    variations: 1,
    addons: [],
    isIntersecting: false,
    activeCategory: null,
    categoryList: [
      {
        id: "1",
        name: "pie",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 4,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 5,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },
      {
        id: "2",
        name: "drinks",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },
      {
        id: "3",
        name: "Pasta",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },
      {
        id: "4",
        name: "Wazup",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },
      {
        id: "5",
        name: "Others",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },

      {
        id: "6",
        name: "test4",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },
      {
        id: "7",
        name: "test5",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          }
        ]
      },
      {
        id: "8",
        name: "test6",
        products: [
          {
            id: 1,
            title: "Pizza Mania",
            img: "or-banner1.jpg",
            price: "123.00"
          },
          {
            id: 2,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
          },
          {
            id: 3,
            title: "Test",
            img: "or-banner2.jpg",
            price: "123.00"
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
    background-color: #f4f5f7
    margin: -15px
    border-bottom:1px solid #8c8c8c45

    a
        text-decoration: none



//offset for category
:target:before
    content: ""
    display: block
    height: 82px
    margin: -83px 0 0

.plus-btn
    position: absolute
    bottom: 0
    right: 0
    min-width: 28px !important

.product-tem
    cursor: pointer
    border:1px solid #fff
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08) !important

.product-tem:hover
    border:1px solid orange
</style>
