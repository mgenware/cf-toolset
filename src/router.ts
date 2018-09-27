import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: 'toolset',
  routes: [
    {
      path: '/url-data-encoder-decoder',
      name: 'url-data-encoder-decoder',
      component: () => import(/* webpackChunkName: "URLDataEncoderDecoder" */ './toolset/URLDataEncoderDecoder.vue'),
    },
  ],
});
