import Vue from 'vue';

Vue.filter('currency', (amount, symbol) => `${symbol}${amount.toFixed(2)}`);
