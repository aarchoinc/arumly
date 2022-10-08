import Vue from "vue";
import Vuex from "vuex";

import AppModule from "./modules/app/AppModule";
import Auth from "./modules/app/AuthModule";
import AccountModule from "./modules/app/AccountModule";
import NotificationModule from "./modules/app/NotificationModule";
import Emails from "./modules/app/EmailsModule";
import LayoutStorageModule from "./modules/app/LayoutStorageModule";

import ShopModule from "@/store/modules/shop/ShopModule.js";
import CheckoutModule from "@/store/modules/shop/CheckoutModule.js";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "usx",
      paths: ["appModule", "Auth.idToken", "Auth.loggedInUser", "ShopModule"],
    }),
  ],

  modules: {
    AppModule,
    Auth,
    AccountModule,
    NotificationModule,
    Emails,
    LayoutStorageModule,
    ShopModule,
    CheckoutModule,
  },
});
