import Vue from 'vue'
import Vuex from 'vuex'
import api from './api/axios'

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
      console.log('login_sucess in store.js')
    },
  },
  actions: {
    login({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
        api.login(userName, password).then(response => {
          console.log(response)
          if( response.data == 'success'){
            commit('login_success', {
              userName: userName,
              password: password
            });
            console.log('response is expected in store.js')
          }
          resolve(response)
        })
        .catch( error => {
          console.log("Error: " + error);
          reject("Invalid credentials!");
        })
      })
    }
  }
})
