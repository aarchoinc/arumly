// LAYOUT
import Header from "@/Apps/App/layout/header/Header.vue";
import FooterPhat from "@/Apps/App/layout/footer/FooterPhat.vue";

// VIEWS
const Shop = () => import("@/Apps/Shop/views/Shop.vue");
const Events = () => import("@/Apps/Events/views/Events.vue");
const Checkout = () => import("@/Apps/Checkout/views/Checkout.vue");
const Cart = () => import("@/Apps/Checkout/views/Cart.vue");

export default [
  {
    path: "/shop",
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
    path: "/cart",
    components: {
      default: Cart,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },

    children: [
      {
        path: "",
        name: "cart",
        component: () =>
          import(
            /* webpackChunkName: "cart" */ "@/Apps/Checkout/views/Checkout.vue"
          ),
      },
    ],
  },

  {
    path: "/checkout",
    components: {
      default: Checkout,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },

    children: [
      {
        path: "",
        name: "checkout",
        component: () =>
          import(
            /* webpackChunkName: "cart" */ "@/Apps/Checkout/views/Checkout.vue"
          ),
      },
    ],
  },
];
