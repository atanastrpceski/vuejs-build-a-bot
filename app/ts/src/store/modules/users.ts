import axios from 'axios';
import { Commit } from 'vuex';

export default {
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
    signIn({ commit }: {commit: Function}) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
