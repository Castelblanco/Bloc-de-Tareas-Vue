// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Router from "vue-router"

import todas from "./components/todas"
import imcompletas from "./components/imcompletas"
import completas from "./components/completas"

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: todas
    },
    {
      path: "/imcompletas",
      component: imcompletas
    },
    {
      path: "/completas",
      component: completas
    }
  ]
})

new Vue({
  components: { App },
  template: '<App/>',
  router
}).$mount("#app");


