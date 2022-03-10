import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import {getAuthToken} from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    loggedIn: process.env.NODE_ENV === 'development' ? true : false,
    // pending: true,
  },
  mutations: {
    setLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
      console.log(state.loggedIn)
    },
    updateUserData(state, userData) {
      state.data = userData;
      console.log(state.data)
    }
  },
  actions: {
    login({ commit }, user) {
      commit('LOGIN', user);
    },
    


    async handleLogin({commit}) {
      // const token = 'yk9ye5zmqbn2fiuid0qg60iqkrtkosu6'
      // const axiosConfig = {
      //   headers: {
        
      //   "Cookie": document.cookie
      //   },
      //   credentials: "same-origin"
      //   };
      const useResponse = await axios
        .get(process.env.VUE_APP_BASE_API + '/account');
      commit('updateUserData', useResponse.data);
      commit('setLoggedIn', true)
      
    }
    // async localLogin({commit}) {

    // }

  },
  modules: {
  },
  // getters: {
  //   authToken(state) {
  //     return state.data?.['auth_token'];
  //   }
  // }
})
