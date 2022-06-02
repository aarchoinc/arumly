// LAYOUT
import Header from "@/Apps/App/layout/header/Header.vue";
import FooterPhat from "@/Apps/App/layout/footer/FooterPhat.vue";

import NotFound from "@/Apps/App/layout/errors/NotFound";
import NetworkIssues from "@/Apps/App/layout/errors/NetworkIssues";
import NotAuthorized from "@/Apps/App/layout/errors/NotAuthorized";
import ServerError from "@/Apps/App/layout/errors/ServerError";

// VIEWS
import Home from "@/Apps/App/views/Home.vue";
const About = () => import("@/Apps/App/views/About.vue");
const Contact = () => import("@/Apps/App/views/Contact.vue");

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
    path: "/contact",
    name: "contact",
    components: {
      default: Contact,
      "Header-Main": Header,
      "Footer-Main": FooterPhat,
    },
  },
];
