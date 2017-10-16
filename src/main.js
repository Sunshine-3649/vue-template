// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import filters from './filters'; // 全局vue filter
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

// const whiteList = ['/login']
// router.beforeEach(async (to, from, next) => {
//   NProgress.start()

//   if (whiteList.indexOf(to.path) !== -1) {
//     next()
//   } else {
//     next('/login') // 否则全部重定向到登录页
//   }
// })

// router.afterEach(() => {
//   NProgress.done()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
