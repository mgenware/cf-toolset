import Vue from 'vue';
import App from './ToolSetApp.vue';
import router from './router';
import ls from './ls';

Vue.prototype.$ls = ls;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
