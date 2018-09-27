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
    {
      path: '/url-unicode-transformer',
      name: 'url-unicode-transformer',
      component: () => import(/* webpackChunkName: "URLUnicodeTransformer" */ './toolset/URLUnicodeTransformer.vue'),
    },
    {
      path: '/html-data-encoder-decoder',
      name: 'html-data-encoder-decoder',
      component: () => import(/* webpackChunkName: "HTMLDataEncoderDecoder" */ './toolset/HTMLDataEncoderDecoder.vue'),
    },
    {
      path: '/xml-data-encoder-decoder',
      name: 'xml-data-encoder-decoder',
      component: () => import(/* webpackChunkName: "XMLDataEncoderDecoder" */ './toolset/XMLDataEncoderDecoder.vue'),
    },
  ],
});
