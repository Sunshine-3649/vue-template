import * as types from '../mutationTypes';

// initial state
// shape: { name, identifier, idCard }
const state = {
  userInfo: {
    name: null,
    title: null,
    idCard: null
  }
};

// getters
const getters = {};

// actions
const actions = {
  saveUserInfo({ commit }) {
    commit(types.SAVE_USER_INFO, {});
  }
};

// mutations
const mutations = {
  [types.SAVE_USER_INFO](state, payLoad) {
    state.userInfo = payLoad || {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
