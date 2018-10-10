import Vue from 'vue';
import Router from 'vue-router';
import rawRoutes from './routes.json';

Vue.use(Router);

const routes = rawRoutes.routes.map((r: any) => {
  const [fileName, urlName] = r;
  return {
    name: urlName,
    path: `/${urlName}`,
    component: () => import(/* webpackChunkName: "[request]" */ `./toolset/${fileName}.vue`),
  };
});

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? 'toolset' : undefined,
  routes,
});
