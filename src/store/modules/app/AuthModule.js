import api from "@/store/api/api.js";
import router from "@/router/router.js";

export const namespaced = true;

const token = localStorage.getItem("idToken");

const state = {
  idToken: null,
  loggedInUser: {},
};

const getters = {
  getUser: (state) => state.user,
  getLoggedInUser: (state) => state.loggedInUser,
  isAuthenticated: (state) => !!state.idToken,
};

const actions = {
  /* ======= FETCH ======= */

  /* ======= CREATE ======= */
  createAccount({ commit, dispatch }, credentials) {
    return api
      .post("/rest-auth/account/create", {
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        email: credentials.email,
        password: credentials.password,

        returnSecureToken: true,
      })
      .then((res) => {
        commit("SET_AUTH_TOKEN", { token: res.data.token });
        router.push({ name: "account-sections" });
        dispatch("reloadApp");
      })
      .catch((error) => {
        // console.log(error.response.data);
        const errorMsg =
          error.response.data.msg ||
          error.response.data.message ||
          error.response.statusText;

        const notification = {
          type: "error",
          message: "Problem: " + errorMsg,
        };
        dispatch("addNotification", notification, { root: true });
      });
  },

  login({ commit, dispatch }, authData) {
    api
      .post("/rest-auth/login/", {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((res) => {
        commit("SET_AUTH_TOKEN", {
          token: res.data.token,
        });

        const now = new Date();
        const exp = new Date(now.getTime() + 604800000);
        localStorage.setItem("exp", exp);

        dispatch("loginTrigger");
        router.push(router.app.$route.query.redirect || { name: "my-locker" });
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message:
            error.response.data.message ||
            "Failed to authenticate, try again later.",
        };
        dispatch("addNotification", notification, { root: true });
      });
  },

  logout({ commit }) {
    commit("CLEAR_USER_DATA");
    router.push({ path: "/" });

    setTimeout(() => {
      localStorage.clear();
      localStorage.removeItem("usx");
      location.reload();
    }, 500);
  },

  /* ======= UPDATE ======= */
  updatePassword({ rootState, dispatch }, authData) {
    const uid = rootState.Auth.loggedInUser.uid;

    api
      .post(
        `/rest-auth/${uid}/change_pwd/`,
        {
          password: authData.password,
          new_password: authData.new_password,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        const notification = {
          type: "success",
          message: res.data.message,
        };
        dispatch("addNotification", notification, { root: true });
        router.push({ name: "security-sections" });
      })
      .catch((error) => {
        console.log(error.response);
        const notification = {
          type: "error",
          message: error.response.data.message,
        };
        dispatch("addNotification", notification, { root: true });
      });
  },

  /* ======= RAW ACTIONS ======= */

  async loginTrigger({ commit, dispatch }) {
    try {
      const { data } = await api.get(`/rest-auth/user/`);
      commit("GET_LOGGED_USER", data);
      dispatch("reloadApp");
    } catch (err) {
      const errorData = err.response.data.status;

      if (errorData === 401 || errorData === "Token Expired.") {
        console.log(err.response.data);
        commit("CLEAR_USER_DATA");
      }
    }
  },

  refreshTheToken({ rootState, commit, dispatch }) {
    const email = rootState.Auth.loggedInUser.email;
    const refreshToken = JSON.parse(
      localStorage.getItem("usxur")
    ).refresh_token;

    api
      .get(`/rest-auth/${email}/refresh-the-token/${refreshToken}`, {
        returnSecureToken: true,
      })
      .then((res) => {
        commit("SET_AUTH_TOKEN", {
          token: res.data.token,
        });

        const now = new Date();
        const exp = new Date(now.getTime() + 604800000);
        localStorage.setItem("exp", exp);

        dispatch("fetchLoggedInUser");
      })
      .catch((err) => {
        this.error = err.response.statusText;
        this.error = err.response.data.error;
      });
  },

  reloadApp({ commit }) {
    commit("RELOAD_APP");
  },

  setLogoutTimer({ commit }) {
    setTimeout(() => {
      commit("CLEAR_USER_DATA");
      router.push({ name: "home" });
    }, 604800000);
  },
};

const mutations = {
  SET_AUTH_TOKEN(state, userData) {
    const idToken = userData.token;
    state.idToken = idToken;
    console.log(userData.token);
    localStorage.setItem("idToken", idToken);

    api.defaults.headers.common["Authorization"] = `Token ${idToken}`;
  },

  CLEAR_USER_DATA() {
    localStorage.clear();
    localStorage.removeItem("usx");
  },
  RELOAD_APP() {
    location.reload();
  },

  GET_LOGGED_USER(state, loggedInUser) {
    state.loggedInUser = loggedInUser;
    localStorage.setItem("usxur", JSON.stringify(loggedInUser));
    localStorage.setItem("refresh_token", loggedInUser.refresh_token);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
