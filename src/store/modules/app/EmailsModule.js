import api from "@/store/api/api.js";

const state = {};

const getters = {};

const actions = {
  newsletterMain({ dispatch }, newsletterData) {
    api
      .post("/email/newsletter-main/", {
        email: newsletterData.email,
        first_name: newsletterData.first_name,
        returnSecureToken: true,
      })
      .then(() => {
        const notification = {
          type: "success",
          message: "Newsletter Signup Complete!",
        };

        dispatch("addNotification", notification, { root: true });
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

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
