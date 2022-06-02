/* eslint-disable prettier/prettier */
import api from "@/store/api/api.js";
// import router from "@/router/router.js";
export const namespaced = true;

const state = {
  cartItems: [],
  cartTotal: {},

  productsByTags: [],
  product: {},
};

const mutations = {
  SET_CART_ITEMS(state, cartItems) {
    state.cartItems = cartItems;
  },
  SET_CART_TOTAL(state, cartTotal) {
    state.cartTotal = cartTotal;
  },

  SET_PRODUCT_BY_ID(state, product) {
    state.product = product;
  },
  SET_PRODUCTS_BY_TAGS(state, productsByTags) {
    state.productsByTags = productsByTags;
  },
};

const getters = {
  // getExercisesByType: (state) => state.productsByTags,
};

const actions = {
  async fetchCartItems({ commit }) {
    const { data } = await api.get(`/arumly/checkout/cart/cart-items`);
    commit("SET_CART_ITEMS", data);
  },

  async fetchCartTotal({ commit }) {
    const { data } = await api.get(`/arumly/checkout/cart/cart-total`);
    commit("SET_CART_TOTAL", data[0]);
  },

  addCartItem({ dispatch }, payload) {
    api
      .post(`/arumly/checkout/cart/create/cart-item`, {
        obj_uid: payload.obj_uid,
      })
      .then(() => {
        dispatch("fetchCartItems");
        dispatch("fetchCartTotal");
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message:
            "There was a problem updating settings: " +
            error.response.statusText,
        };
        dispatch("addNotification", notification, { root: true });
      });
  },

  removeCartItem({ dispatch }, payload) {
    api
      .delete(`/arumly/checkout/cart/delete/cart-item/${payload.id}`)
      .then(() => {
        dispatch("fetchCartItems");
        dispatch("fetchCartTotal");
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message:
            "There was a problem updating settings: " +
            error.response.statusText,
        };
        dispatch("addNotification", notification, { root: true });
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
