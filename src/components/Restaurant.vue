<template>
  <div class="product-section" cla>
    <div class="category-menu pa-0">
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
  </div>
</template>

<script>
export default {
  data: () => ({
    currentCategory: null,
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
