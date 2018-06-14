import Vue from 'vue'
import Router from 'vue-router'
import Author from './views/Author.vue'
import Article from './views/Article.vue'
import Relationship from './views/Relationship.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/author',
      name: 'author',
      component: Author
    },
    {
      path: '/article',
      name: 'ariticle',
      component: Article
    },
    {
      path: '/relationship',
      name: 'relationship',
      component: Relationship
    }
  ]
})
