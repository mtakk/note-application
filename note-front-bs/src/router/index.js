import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Top from '../components/Top.vue'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article',
    component: ArticleList
  },
  {
    path: '/article/:id',
    component: Article,
    props: route => ({ id: Number(route.params.id)}) // functionモードでURL内のidを数値に変換
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  }
]

const router = new VueRouter({
  routes
})

export default router
