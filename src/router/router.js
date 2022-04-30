import Vue from "vue";
import VueRouter from "vue-router";
import mainRoutes from "@/router/routes/app/mainRoutes.js";

Vue.use(VueRouter);

var allRoutes = [];
allRoutes = allRoutes.concat(mainRoutes);

const routes = allRoutes;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active-exact",
});

export default router;
