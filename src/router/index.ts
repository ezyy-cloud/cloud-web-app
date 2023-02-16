// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/landing/Landing.vue'),
    children: [
      {
        path: '',
        name: 'Landing',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "landing" */ '@/views/Landing.vue'),
      },
    ],
  },
  {
    path: '/store',
    component: () => import('@/layouts/store/Store.vue'),
    children: [
      {
        path: '/store/services',
        name: 'Services',
        component: () => import(/* webpackChunkName: "services" */ '@/views/store/Services.vue'),
      },
      {
        path: '/store/gadgets',
        name: 'Gadgets',
        component: () => import(/* webpackChunkName: "gadgets" */ '@/views/store/Gadgets.vue'),
      },
      {
        path: '/store/apps',
        name: 'Apps',
        component: () => import(/* webpackChunkName: "apps" */ '@/views/store/Apps.vue'),
      },
    ],
  },
  {
    path: '/classroom',
    component: () => import('@/layouts/classroom/Classroom.vue'),
    children: [
      {
        path: '/classroom/courses',
        name: 'Courses',
        component: () => import(/* webpackChunkName: "courses" */ '@/views/classroom/Courses.vue'),
      },
    ],
  },
  {
    path: '/authentication',
    component: () => import('@/layouts/authentication/Authentication.vue'),
    children: [
      {
        path: '/authentication/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/authentication/Login.vue'),
      },
      {
        path: '/authentication/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/authentication/Register.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
