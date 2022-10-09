// LAYOUT
import FooterDashboard from "@/Apps/App/layout/footer/FooterSkinny.vue";

import Login from "@/Apps/App/views/Login.vue";
import Signup from "@/Apps/App/views/Signup.vue";

export default [
  // { path: "*", redirect: "/" },
  {
    path: "/login",
    name: "login",
    components: {
      default: Login,
      "footer-dashboard": FooterDashboard,
    },
  },
  {
    path: "/signup",
    name: "signup",
    components: {
      default: Signup,
      "footer-dashboard": FooterDashboard,
    },
  },
];
