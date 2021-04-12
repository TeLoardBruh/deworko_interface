import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Instruction from '../views/Instruction.vue'
import Learn from '../views/Learn.vue'
import Train from '../views/Train.vue'

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/instruction/:page',
    name: 'Instruction',
    component: Instruction
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/train',
    name: 'Train',
    component: Train
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router