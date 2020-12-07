<template>
  <div class="cart-items">
    <div class="" v-for="cartItem in cartItems" :key="cartItem.name">
      <h4 class="my-4  title">
        Order From <span class="warning--text">{{ cartItem.shopName }}</span>
      </h4>
      <v-row class="item-row" v-for="item in cartItem.shopItems" :key="item.id">
        <v-col cols="12" class="mb-2">
          <div class="d-flex align-center justify-space-between">
            <div class="product-info">
              <span class="product-name font-weight-bold">{{ item.name }}</span>
              <p class="body-2 mb-0">{{ item.description }}</p>
            </div>
            <div class="d-flex ">
              <span class="product-price body-1">PHP {{ item.price }}</span>
              <v-btn x-small text class="ml-2" color="error">
                <v-icon small>
                  mdi-delete
                </v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cartItems: [
      {
        shopName: "Pizza Hut",
        delivery: 50,
        shopItems: [
          {
            id: "1",
            name: "Peperoni Pie",
            description: "test description",
            img: "",
            price: "120.00",
            quantity: 3
          },
          {
            id: "2",
            name: "Cheeze Pie",
            description: "New description",
            img: "",
            price: "99.00",
            quantity: 3
          }
        ]
      }
    ]
  })
};
</script>

<style></style>
