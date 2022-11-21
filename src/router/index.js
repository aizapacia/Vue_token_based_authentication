import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/DashboardView.vue'
import Register from '../views/auth/RegisterView.vue'
import Login from '../views/auth/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requireAuth: true },
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  //To change the tab title authomatically for each page
  document.title = `${to.name} | ${process.env.VUE_APP_TITTLE}`

  if (to.matched.some((record) => record.meta.requireAuth) && !loggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})
export default router
