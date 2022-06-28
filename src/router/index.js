import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookie from 'js-cookie';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/AdminPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/customer',
    component: () => import('@/views/CustomerPage.vue'),
    meta: { requireAuth: true },
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && Cookie.get('token')) {
    store.dispatch('setSelected', JSON.parse(localStorage.getItem('selected')) || []);
    const { getSelected } = store.getters;
    if (to.path === '/customer' && (!getSelected || !getSelected.length)) {
      next('admin');
    } else {
      next();
    }
  } else if (to.meta.requireAuth && !Cookie.get('token')) {
    next('/login');
  } else {
    Cookie.get('token') && to.path === '/login' ? next('admin') : next();
  }
});

export default router;
