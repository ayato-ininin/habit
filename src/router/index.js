import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/Main.vue'
import store from "../store/index"
import Total from '../views/Total.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component:Signup
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth:true,
    }
  },
  {
    path: '/total',
    name: 'Total',
    component: Total,
    meta: {
      requiresAuth:true,
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth:true,
    }
  },
  {
    path: '/detail/:id',
    name: "Detail",
    component: Detail,
    meta: {
      requiresAuth:true,
    },
    props:true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
