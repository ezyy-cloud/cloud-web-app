import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/auth",
    name: "Auth",
    // route level code-splitting
    // this generates a separate chunk (auth.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth.vue")
  },
  {
    path: "/shop",
    name: "Shop",
    // route level code-splitting
    // this generates a separate chunk (auth.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
