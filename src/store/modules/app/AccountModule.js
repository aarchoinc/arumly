import api from "@/store/api/api.js";
// import router from "@/router.js";

// export const namespaced = true;

const token = localStorage.getItem("idToken");

const state = {
  accountInfo: {},
};

const getters = {};

const actions = {
  /* ======= FETCH ======= */
  async fetchLoggedInUser({ commit }) {
    try {
      const { data } = await api.get(`/auth-user/user/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      commit("GET_LOGGED_USER", data);
    } catch (err) {
      const errorData = err.response.data.status;

      if (errorData === 401 || errorData === "Token Expired.") {
        console.log(err.response.data);
        // commit("CLEAR_USER_DATA");
      }
    }
  },

  async fetchAccountInfoSetup({ rootState, dispatch, commit }) {
    const uid = rootState.Auth.loggedInUser.uid;

    try {
      const { data } = await api.get(`/account/${uid}/view/info`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      commit("SET_ACCOUNT_INFO", data);
    } catch (error) {
      const notification = {
        type: "error",
        message:
          "There was a problem updating account: " + error.response.statusText,
      };
      dispatch("addNotification", notification, { root: true });
    }
  },

  async fetchAccountInfo({ rootState, dispatch, commit }) {
    const uid = rootState.Auth.loggedInUser.uid;

    try {
      const { data } = await api.get(`/account/${uid}/view/info`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      commit("SET_ACCOUNT_INFO", data);
    } catch (error) {
      const notification = {
        type: "error",
        message:
          "There was a problem updating account: " + error.response.statusText,
      };
      dispatch("addNotification", notification, { root: true });
    }
  },

  /* ======= UPDATE ======= */
  accountEdit({ rootState, dispatch }, authData) {
    const uid = rootState.Auth.loggedInUser.uid;

    api
      .patch(
        `/account/${uid}/update/info`,
        {
          email: authData.email,
          first_name: authData.first_name,
          last_name: authData.last_name,
          dob: authData.dob,
          gender: authData.gender,
          tel: authData.tel,
          country: authData.country,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        const notification = {
          type: "success",
          message: "Account successfully updated!",
        };
        dispatch("addNotification", notification, { root: true });
        dispatch("fetchAccountInfo");
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message:
            "There was a problem updating account: " +
            error.response.statusText,
          // error.response.data,
        };

        dispatch("addNotification", notification, { root: true });
      });
  },

  accountEditEmail({ rootState, dispatch }, payload) {
    const uid = rootState.Auth.loggedInUser.uid;

    api
      .patch(
        `/account/${uid}/update/email`,
        {
          email: payload.email,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        const notification = {
          type: "success",
          message: "Updated email successfully!",
        };
        dispatch("addNotification", notification, { root: true });
        dispatch("fetchAccountInfo");
      })
      .catch((error) => {
        console.log(error.response);

        const errorMsg1 = error.response.data.msg;
        const errorMsg2 = error.response.data.message;

        const notification = {
          type: "error",
          message: "Problem: " + errorMsg1 ? errorMsg1 : errorMsg2,
        };
        dispatch("addNotificationPhat", notification, { root: true });
      });
  },

  accountEditBirthday({ rootState, dispatch }, payload) {
    const uid = rootState.Auth.loggedInUser.uid;

    api
      .patch(
        `/account/${uid}/update/dob`,
        {
          month: payload.month,
          day: payload.day,
          year: payload.year,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        const notification = {
          type: "success",
          message: "Updated birthday successfully!",
        };
        dispatch("addNotification", notification, { root: true });
        dispatch("fetchAccountInfo");
      })
      .catch((error) => {
        console.log(error.response);

        const errorMsg1 = error.response.data.msg;
        const errorMsg2 = error.response.data.message;

        const notification = {
          type: "error",
          message: "Problem: " + errorMsg1 ? errorMsg1 : errorMsg2,
        };
        dispatch("addNotificationPhat", notification, { root: true });
      });
  },

  profileEdit({ rootState, dispatch }, profileData) {
    const uid = rootState.Auth.loggedInUser.uid;
    api
      .patch(`/social/update/profiles/${uid}/`, {
        avatar: profileData.avatar,
        banner: profileData.banner,
        bio: profileData.bio,
        // creator_type: profileData.creator_type,
        // creator_sub_type: profileData.creator_sub_type,

        // Headers
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(() => {
        const notification = {
          type: "success",
          message: "Account successfully updated!",
        };
        dispatch("addNotification", notification, { root: true });
        dispatch("fetchLoggedInUser");
        // location.reload();
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message:
            "There was a problem updating account: " +
            error.response.statusText,
        };
        dispatch("addNotification", notification, { root: true });
      });
  },

  updatePermissions(permData) {
    const userPermData = localStorage.getItem("loggedUserPermId");
    const userPermId = JSON.parse(userPermData);
    api.patch(`/u/user-profile-permissions/${userPermId}/`, {
      initiated_account: permData.initiated_account,
      initiated_perks: permData.initiated_perks,

      // Headers
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  },
};

const mutations = {
  SET_ACCOUNT_INFO: (state, accountInfo) => (state.accountInfo = accountInfo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
