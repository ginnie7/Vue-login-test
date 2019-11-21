import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (to.fullPath === '/user') {
    if (!store.state.accessToken) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (store.state.accessToken) {
      next('/user');
    }
  }
  next();
});

export default router;
