import Router from 'vue-router'
import layout from '@/views/layout.vue'
import index from '@/views/index.vue'
import book from '@/views/book.vue'
export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/',
          component: index,
        },
        {
          path: '/index',
          component: index,
        },
        
      ],
    },
    {
      path: '/book',
      component: book,
    },
  ]
})
