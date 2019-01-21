import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/top'
import About from '@/pages/about'
import Blog from '@/pages/blog'
import Contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'test/vue-router-test',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
