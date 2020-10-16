import axios from 'axios';
import { Module } from 'vuex';

const robotsModule: Module<any, any> = {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state: any, robot: any) {
      state.cart.push(robot);
    },
    updateParts(state: any, parts: any) {
      state.parts = parts;
    },
  },
  getters: {
    cartSaleItems(state: any) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
  actions: {
    getParts({ commit }: {commit: any}) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }: {commit: any, state: any}, robot: any) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
        .catch(console.error);
    },
  },
};

export default robotsModule;
