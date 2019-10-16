import Router from 'vue-router'
import index from '@/views/index.vue'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/index',
          component: index,
        },
        
      ],
    },
  ]
})
