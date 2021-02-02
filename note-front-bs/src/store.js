import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: null,
    userPass: null
  },
  mutations: {
    login_success(state, payload){
      state.userName = payload.userName;
      state.password = payload.password;
    }
  },
  actions: {
    login({ commit }, { userName, password }) {
      commit('login_success', {
        userName: userName,
        password: password
      });
      console.log('store.js' + userName + password)
      return true;
    }
  }
})
