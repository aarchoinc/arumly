// LAYOUT
import Header from "@/Apps/App/layout/header/Header.vue";
import FooterPhat from "@/Apps/App/layout/footer/FooterPhat.vue";

import NotFound from "@/Apps/App/layout/errors/NotFound";
import NetworkIssues from "@/Apps/App/layout/errors/NetworkIssues";
import NotAuthorized from "@/Apps/App/layout/errors/NotAuthorized";
import ServerError from "@/Apps/App/layout/errors/ServerError";

// VIEWS
import Home from "@/Apps/Gen/views/Home.vue";
const Shop = () => import("@/Apps/Shop/views/Shop.vue");
const Events = () => import("@/Apps/Events/views/Events.vue");
const About = () => import("@/Apps/Gen/views/About.vue");
const Contact = () => import("@/Apps/Gen/views/Contact.vue");

export default [
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/403",
    name: "403",
    component: NotAuthorized,
    props: true,
  },
  {
    path: "/server-error",
    name: "5XX",
    component: ServerError,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssues,
    props: true,
  },
  // {
  //   path: "*",
  //   redirect: { name: "404", params: { resource: "page" } },
  // },

  /* ====== VIEWS ====== */

  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      default: About,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },
  },

  {
    path: "/shop",
    name: "shop",
    components: {
      default: Shop,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },

    children: [
      {
        path: "",
        name: "shop-all-products",
        component: () =>
          import(
            /* webpackChunkName: "shop" */ "@/Apps/Shop/components/ShopAllProducts.vue"
          ),
      },
      {
        path: "notebooks",
        name: "shop-notebooks",
        component: () =>
          import(
            /* webpackChunkName: "shop" */ "@/Apps/Shop/components/ShopNotebooks.vue"
          ),
      },
      {
        path: "paper",
        name: "shop-paper",
        component: () =>
          import(
            /* webpackChunkName: "shop" */ "@/Apps/Shop/components/ShopPaper.vue"
          ),
      },
      {
        path: "writing-tools",
        name: "shop-writing-tools",
        component: () =>
          import(
            /* webpackChunkName: "shop" */ "@/Apps/Shop/components/ShopWritingTools.vue"
          ),
      },
      {
        path: "paint",
        name: "shop-paint",
        component: () =>
          import(
            /* webpackChunkName: "shop" */ "@/Apps/Shop/components/ShopPaint.vue"
          ),
      },
    ],
  },

  {
    path: "/events",
    name: "events",
    components: {
      default: Events,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      default: Contact,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },
  },
];
