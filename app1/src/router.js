import Router from 'vue-router'
import Menu from '@/views/menu.vue'
import Manage from '@/views/manage.vue'

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Menu,
    },
    {
      path: '/manage',
      component: Manage,
    },
  ]
})
