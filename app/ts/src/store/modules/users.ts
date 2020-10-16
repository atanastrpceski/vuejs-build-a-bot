import axios from 'axios';
import { Module } from 'vuex';

const usersModule: Module<any, any> = {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state: any, user: any) {
      state.user = user;
    },
  },
  getters: {
  },
  actions: {
    signIn({ commit }: {commit: any}) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};

export default usersModule;
