import Vue from 'vue';
import router from './router';
import ls from './ls';
import NavBarView from './coldfunction/NavBarView.vue';
import App from './App.vue';

Vue.prototype.$ls = ls;
Vue.config.productionTip = false;

if (document.getElementById('m_nav_menu_app')) {
  new Vue({
    router,
    render: (h) => h(NavBarView),
  }).$mount('#m_nav_menu_app');
}

if (document.getElementById('main-body')) {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#main-body');
}
