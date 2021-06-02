import {
  createMemoryHistory,
  createRouter,
  // createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
// import Index from '~views/Index.vue'

const routes : RouteRecordRaw[] = [
  {
    path: '/index',
    component: () => import('~views/Index.vue'),
    // component: Index,
  },
  { path: '/', redirect: '/index' }
]

const router = createRouter({
  routes,
  history: createMemoryHistory(),
  // history: createWebHashHistory(),
})

export default router
