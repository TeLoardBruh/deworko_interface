import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Instruction from '../views/Instruction.vue'
import Learn from '../views/Learn.vue'
import Train from '../views/Train.vue'
import ToDo from '../views/ToDo.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('authE'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/'); // go to '/login';
 }
}

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
    beforeEnter : guardMyroute,
    name: 'Train',
    component: Train
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/todo',
    beforeEnter : guardMyroute,
    name: 'ToDo',
    component: ToDo
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router