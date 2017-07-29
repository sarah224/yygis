import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }

  ]
})
