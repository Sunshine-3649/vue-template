import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';

import modules from './modules';

Vue.use(Router);

export const RouterMap = [
  {
    path: '/',
    component: HelloWorld,
    hidden: true, // 路由中定义的boolean值
    // redirect: '/welcome', // 重定向，浏览器地址名称变化
    children: modules
  },
  {
    path: '/login',
    hidden: true,
    component: Login
  }
];

export default new Router({
  mode: 'history', // 匹配history模式，路由路径好看
  routes: RouterMap
});
