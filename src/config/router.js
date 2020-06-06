import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../components/login/login')), 'login');
const register = r => require.ensure([], () => r(require('../components/login/register')), 'register');

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})

