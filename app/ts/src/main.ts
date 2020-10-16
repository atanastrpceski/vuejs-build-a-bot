import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './shared/pin-directive';
import './shared/currency-filter';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
