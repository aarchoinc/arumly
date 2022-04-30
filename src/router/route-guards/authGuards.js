// import router from "@/router/router.js";
import store from "@/store/store.js";

export const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  } else next({ name: "login" });
  // } else next({ name: "home" });
};
