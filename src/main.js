import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router/router.js";
import store from "@/store/store";

Vue.config.productionTip = false;

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

/* ====== MIXINS ====== */
// eslint-disable-next-line
import {
  loggedInUser,
  uids,
  baseUrl,
  flags,
  methodsComputed,
  routing,
} from "@/mixins/appMixins";
Vue.mixin(loggedInUser);
Vue.mixin(uids);
Vue.mixin(baseUrl);
Vue.mixin(flags);
Vue.mixin(methodsComputed);
Vue.mixin(routing);

/* ====== FILTERS ====== */
import DateFilter from "./filters/date";
Vue.filter("date", DateFilter);

/* ===================
  AUTO BASE PLUGINS
====================== */

const requireComponent = require.context(
  "./Apps/App/layout/base", // The relative path of the components folder

  true, // Whether or not to look in sub-folders

  /Base[A-Z]\w+\.(vue|js)$/ // The regular expression used to match base component filenames
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
