import Vue from 'vue'
import VueRouter from 'vue-router'
import PostListView from '@/views/PostListView.vue'
import PostDetailView from '@/views/PostDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'post-list',
    component: PostListView
  },
  {
    path: '/posts/:id',
    name: 'post-detail',
    component: PostDetailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
