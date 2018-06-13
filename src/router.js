import Vue from 'vue'
import Router from 'vue-router'
import Author from './views/Author.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/author',
      name: 'author',
      component: Author
    }
  ]
})
