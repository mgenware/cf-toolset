import Vue from 'vue';
import router from './router';
import ls from './ls';
import DevApp from './DevApp.vue';
import NavBarView from './coldfunction/NavBarView.vue';
import './bulmaSetup';

Vue.prototype.$ls = ls;
Vue.config.productionTip = false;

if (document.getElementById('m_nav_menu_app')) {
  new Vue({
    router,
    render: (h) => h(NavBarView),
  }).$mount('#m_nav_menu_app');
}

if (document.getElementById('cft_app')) {
  new Vue({
    router,
    render: (h) => h(DevApp),
  }).$mount('#cft_app');
}
