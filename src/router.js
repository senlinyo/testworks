import Vue from 'vue';
import VueRouter from 'vue-router'
import layout from './views/layout.vue'
import agreement from './views/agreement.vue'
import privacy from './views/privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:layout
  },
  {
    path:'/agreement',
    component:agreement
  },
  {
    path:'/privacy',
    component:privacy
  }
]

const router = new VueRouter ({
  routes
})

export default router