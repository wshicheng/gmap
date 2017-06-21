import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from './router-config.js'
Vue.use(Router)
export default new Router({
  routes: routeConfig,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
