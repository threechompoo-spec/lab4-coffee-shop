import { createRouter, createWebHistory } from 'vue-router'

// Import Component ให้ครบ 4 หน้า
import Index from '@/components/Coffees/Index.vue'
import CreateCoffee from '@/components/Coffees/CreateCoffee.vue'
import EditCoffee from '@/components/Coffees/EditCoffee.vue'
import ShowCoffee from '@/components/Coffees/ShowCoffee.vue' 

const routes = [
  { path: '/', redirect: '/coffees' },
  { 
    path: '/coffees', 
    name: 'coffees', // 👈 เพิ่ม name ตรงนี้ค่ะ ระบบจะได้รู้จัก
    component: Index 
  },
  { 
    path: '/coffee/create', 
    name: 'coffee-create', // เผื่อไว้ใช้ในอนาคต
    component: CreateCoffee 
  },
  { 
    path: '/coffee/edit/:coffeeId', 
    name: 'coffee-edit',
    component: EditCoffee 
  },
  { 
    path: '/coffee/:coffeeId', 
    name: 'coffee-show',
    component: ShowCoffee 
  } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router