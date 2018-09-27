import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './ls/en.js';
import ls from './ls';
import 'bulma/css/bulma.css';

Vue.prototype.$ls = ls;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
