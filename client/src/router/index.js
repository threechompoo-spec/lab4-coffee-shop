import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/components/Coffees/Index.vue'
import CreateCoffee from '@/components/Coffees/CreateCoffee.vue'
import EditCoffee from '@/components/Coffees/EditCoffee.vue'

const routes = [
  { path: '/', redirect: '/coffees' },
  { path: '/coffees', component: Index },
  { path: '/coffee/create', component: CreateCoffee },
  { path: '/coffee/edit/:coffeeId', component: EditCoffee }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router