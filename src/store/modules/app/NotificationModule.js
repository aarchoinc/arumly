/* eslint-disable prettier/prettier */
// import oariiApi from "@/store/api/oarii_api.js";

export const namespaced = true;

const state = {
  notifications: [],
  notificationsPhat: [],
};

const getters = {
  getNotifications: state => state.notifications,
  getNotificationsPhat: state => state.notificationsPhat,
};

const actions = {
  addNotification({ commit }, notification) {
    commit("PUSH", notification);
  },
  removeNotification({ commit }, notificationToRemove) {
    commit("DELETE", notificationToRemove);
  },

  addNotificationPhat({ commit }, notification) {
    commit("PUSH_PHAT", notification);
  },
  removeNotificationPhat({ commit }, notificationToRemove) {
    commit("DELETE_PHAT", notificationToRemove);
  },
};

let nextId = 1;

const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++,
    });
  },
  PUSH_PHAT(state, notification) {
    state.notificationsPhat.push({
      ...notification,
      id: nextId++,
    });
  },

  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    );
  },

  DELETE_PHAT(state, notificationToRemove) {
    state.notificationsPhat = state.notificationsPhat.filter(
      notification => notification.id !== notificationToRemove.id
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
