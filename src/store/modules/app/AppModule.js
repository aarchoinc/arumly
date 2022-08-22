/* eslint-disable prettier/prettier */

export const namespaced = true;

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development") {
  var devUrl = "http://127.0.0.1:3004/api/v1";
}
if (NODE_ENV === "production") {
  var prodUrl = "https://projects-api.aarcho.com/api/v1";
  var prodFileUrl = "https://storage.googleapis.com/aarcho_bucket/arumly";
}

const state = {
  hamburgerStatus: false,
  apiUrl: devUrl || prodUrl,
  apiFileUrl: devUrl || prodFileUrl,
};

const mutations = {
  SHOW_HAMBURGER(state) {
    state.hamburgerStatus = !state.hamburgerStatus;
  },

  SET_APP_STATUSES() {
    // state.myOrganizers = myOrganizers;
    sessionStorage.setItem("organizerControlsStatus", JSON.stringify(true));
  },
};

const getters = {
  getSideMyLockerStatus: (state) => state.sideMyLockerStatus,
};

const actions = {
  showHamburger({ commit }) {
    commit("SHOW_HAMBURGER");
  },

  copySuccess({ dispatch }) {
    const notification = {
      type: "success",
      message: "Copied To Clipboard!",
    };
    dispatch("addNotification", notification, { root: true });
  },

  copyError({ dispatch }) {
    const notification = {
      type: "error",
      message: "Error Try Again",
    };
    dispatch("addNotification", notification, { root: true });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
