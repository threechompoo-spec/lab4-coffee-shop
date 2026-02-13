import { createRouter, createWebHistory } from 'vue-router'

// Import Component ให้ครบ 4 หน้าตามโจทย์
import Index from '@/components/Coffees/Index.vue'
import CreateCoffee from '@/components/Coffees/CreateCoffee.vue'
import EditCoffee from '@/components/Coffees/EditCoffee.vue'
import ShowCoffee from '@/components/Coffees/ShowCoffee.vue' // 1. เพิ่มบรรทัดนี้

const routes = [
  { path: '/', redirect: '/coffees' },
  { path: '/coffees', component: Index },
  { path: '/coffee/create', component: CreateCoffee },
  { path: '/coffee/edit/:coffeeId', component: EditCoffee },
  { path: '/coffee/:coffeeId', component: ShowCoffee } // 2. เพิ่ม Route นี้สำหรับดูรายละเอียด
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router