import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Order from "../views/Order.vue";
import Categories from "../views/Categories.vue";
import Category from "../views/Category.vue";
import Restaurant from "../views/Restaurant";
import Shop from "../views/Shop";
// Account
import Login from "../views/Login";
import Register from "../views/Register";
// Test
import Test from "../views/Test";

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
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/test",
    name: "test",
    component: Test
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: Restaurant
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories
  },
  {
    path: "/category/:id",
    name: "category",
    component: Category
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
