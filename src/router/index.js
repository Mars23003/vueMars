import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import KeyinUser from "../components/KeyinUser";
import KeyinPswd from "../components/KeyinPswd";
import ChooseUser from "../components/ChooseUser";
import VerifyUser from "../components/VerifyUser";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children: [
      {
        path: 'keyinuser',
        name: 'KeyinUser',
        component: KeyinUser
      },
      {
        path: 'chooseuser',
        name: 'ChooseUser',
        component: ChooseUser
      },
      {
        path: 'keyinpswd',
        name: 'KeyinPswd',
        component: KeyinPswd
      },
      {
        path: 'verifyuser',
        name: 'VerifyUser',
        component: VerifyUser
      },
    ]
  }

  //   {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
