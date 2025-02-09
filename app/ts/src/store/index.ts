import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  modules: {
    robots: robotsModule, usersModule,
  },
  getters: {
  },
});
