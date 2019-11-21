import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token') || '',
    loggingIn: false,
    loginError: null
  },
  mutations: {
    loginStart: state => (state.loggingIn = true),
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout: state => {
      state.accessToken = null;
    }
  },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');

      axios
        .post('%API CALL TO LOGIN ENDPOINT%', {
          ...loginData
        })
        .then(response => {
          localStorage.setItem(
            'access_token',
            JSON.parse(JSON.stringify(response.data.access_token))
          );
          commit('loginStop', null);
          commit(
            'updateAccessToken',
            JSON.parse(JSON.stringify(response.data.access_token))
          );
          router.push('/user');
        })
        .catch(error => {
          commit(
            'loginStop',
            JSON.parse(JSON.stringify(error.response.data.Message))
          );
          commit('updateAccessToken', null);
        });
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('access_token'));
    },
    logout({ commit }) {
      localStorage.removeItem('access_token');
      commit('logout');
      router.push('/login');
    }
  }
});
