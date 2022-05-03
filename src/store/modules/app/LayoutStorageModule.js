/* eslint-disable prettier/prettier */

export const namespaced = true;

const state = {
  shopStatus: false,

  mobileMenuStep: "mm-main",
};

const mutations = {
  SHOP_STATUS(state) {
    state.shopStatus = !state.shopStatus;
  },
  OPEN_SIDE_STATUS(state) {
    state.sideStatus = true;
    state.sideMyGuidesStatus = false;
  },

  SET_MOBILE_MENU_STEP(state, step) {
    state.mobileMenuStep = step;
  },
};

const getters = {};

const actions = {
  // TOGGLE SIDEBAR
  toggleShopStatus({ commit }) {
    commit("SHOP_STATUS");
  },

  // OPEN ONLY
  openSideStatus({ commit }) {
    commit("OPEN_SIDE_STATUS");
  },

  changeMobileMenuStep({ commit }, payload) {
    commit("SET_MOBILE_MENU_STEP", payload.step);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
