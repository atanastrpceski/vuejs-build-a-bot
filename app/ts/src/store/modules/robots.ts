import axios from 'axios';

export default {
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
    getParts( { commit}: {commit: Function}) {
      axios.get('/api/parts')
        .then((result) => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobotToCart( { commit, state }: {commit: Function, state: Function}, robot: any) {
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot))
        .catch(console.error);
    },
  },
};
