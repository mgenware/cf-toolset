import Vue from 'vue';
import router from './router';
import ls from './ls';
import DevApp from './DevApp.vue';

Vue.prototype.$ls = ls;
Vue.config.productionTip = false;

if (document.getElementById('cft_app')) {
  new Vue({
    router,
    render: (h) => h(DevApp),
  }).$mount('#cft_app');
}
