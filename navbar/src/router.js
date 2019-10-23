import Router from 'vue-router'
import index from '@/views/index.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          redirect: index,
        },
        {
          path: 'index',
          name: 'index',
          component: index,
        },
      ],
    },
  ]
})
