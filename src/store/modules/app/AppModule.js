/* eslint-disable prettier/prettier */

export const namespaced = true;

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development") {
  var devUrl = "http://127.0.0.1:3000/api/v1";
}
if (NODE_ENV === "production") {
  var prodUrl = "https://iixoa-api-usc1-nhajfxfhra-uc.a.run.app/api/v1";
  var prodFileUrl = "https://iixoa-api-usc1-nhajfxfhra-uc.a.run.app/api/v1"; // bucket
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
