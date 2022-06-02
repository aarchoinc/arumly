import router from "@/router/router.js";
import { mapState, mapGetters } from "vuex";

export const baseUrl = {
  computed: {
    ...mapState({
      baseUrl: (state) => state.AppModule.apiUrl,
      baseFileUrl: (state) => state.AppModule.apiFileUrl,
    }),
  },
};

export const loggedInUser = {
  computed: {
    ...mapState({
      loggedUser: (state) => state.Auth.loggedInUser,
    }),
    ...mapGetters(["isAuthenticated"]),
  },
};

export const uids = {
  computed: {
    ...mapState({
      uid: (state) => state.Auth.loggedInUser.uid,
      pageUid: (state) => state.Auth.loggedInUser.pages[0].page_uid,
    }),
  },
};

export const flags = {
  computed: {
    ...mapState({
      uid: (state) => state.Auth.loggedInUser.uid,
      pageUid: (state) => state.Auth.loggedInUser.pages[0].page_uid,
    }),
  },
};

export const methodsComputed = {
  methods: {
    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    },
  },
};

export const routing = {
  methods: {
    isRoutePath(path) {
      return this.$route.path.includes(path);
    },
    isRouteExactPath(path) {
      return this.$route.path.match(path);
    },
    isRouteName(routeName) {
      return this.$route.name.includes(routeName);
    },
    navigateTo(routeName) {
      if (this.$route.name !== routeName) {
        this.$router.push({ name: routeName });
      }
    },

    openUpItem(item) {
      if (item) {
        router.push({
          name: "view-smcard",
          params: { item_uid: item.item_uid },
        });
      }
    },
  },
};
