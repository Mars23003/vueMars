import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MaskMap from "../components/maskMap/MaskMap.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/maskmap',
    name: 'MaskMap',
    component: MaskMap
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
