/* eslint-disable prettier/prettier */

export const namespaced = true;

const state = {
  sideStatus: false,

  mobileMenuStep: "mm-main",
};

const getters = {};

const actions = {
  // TOGGLE SIDEBAR
  toggleSideStatus({ commit }) {
    commit("SIDE_STATUS");
  },

  // OPEN ONLY
  openSideStatus({ commit }) {
    commit("OPEN_SIDE_STATUS");
  },

  changeMobileMenuStep({ commit }, payload) {
    commit("SET_MOBILE_MENU_STEP", payload.step);
  },
};

const mutations = {
  SIDE_STATUS(state) {
    state.sideStatus = !state.sideStatus;
    state.sideMyGuidesStatus = false;
  },
  OPEN_SIDE_STATUS(state) {
    state.sideStatus = true;
    state.sideMyGuidesStatus = false;
  },

  SET_MOBILE_MENU_STEP(state, step) {
    state.mobileMenuStep = step;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
