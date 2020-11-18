import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Order from "../views/Order.vue";
import Categories from "../views/Categories.vue";
import Restaurant from "../views/Restaurant";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/order",
    name: "order",
    component: Order
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: Restaurant
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
