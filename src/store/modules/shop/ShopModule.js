/* eslint-disable prettier/prettier */
import api from "@/store/api/api.js";
import router from "@/router/router.js";
export const namespaced = true;

const state = {
  allProducts: [],
  productsByTags: [],
  product: {},
};

const mutations = {
  SET_ALL_PRODUCTS_LIMIT(state, allProducts) {
    state.allProducts = allProducts;
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
  async fetchProductsByLIMIT({ commit }) {
    const query = router.app.$route.query;

    const { data } = await api.get(`/arumly/shop/products/${query.limit}`);
    commit("SET_ALL_PRODUCTS_LIMIT", data);
  },

  async fetchProductById({ commit }, payload) {
    const { data } = await api.get(`/arumly/shop/product/${payload.id}`);
    commit("SET_PRODUCT_BY_ID", data);
  },

  async fetchProductsByTags({ commit }, payload) {
    // const query = router.app.$route.query;

    const { data } = await api.get(
      `/arumly/shop/products/type/{${payload.obj_tags}}`
    );
    commit("SET_PRODUCTS_BY_TAGS", data);
  },

  async addObjToCart({ commit }, payload) {
    // const query = router.app.$route.query;

    const { data } = await api.get(
      `/arumly/shop/cart/add-object/{${payload.id}}`
    );
    commit("SET_PRODUCTS_BY_TAGS", data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
