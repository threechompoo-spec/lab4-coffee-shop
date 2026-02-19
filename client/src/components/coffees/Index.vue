<template>
  <div class="container mt-4">
    <h2>รายการเมนูกาแฟ</h2>
    <p><button class="btn btn-primary" v-on:click="navigateTo('/coffee/create')">สร้างเมนูใหม่</button></p>
    
    <div v-for="coffee in coffees" v-bind:key="coffee.id" class="coffee-list">
      <div class="card mb-3 p-3">
        <div style="display: flex; align-items: center;">
          <img 
            v-if="coffee.image && coffee.image !== 'null'"
            :src="'http://localhost:8081/assets/uploads/' + coffee.image" 
            style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin-right: 20px; border: 2px solid #eee;"
            alt="coffee image"
          >
          <div v-else style="width: 60px; height: 60px; border-radius: 50%; background: #ddd; margin-right: 20px;"></div>

          <div>
            <h4 style="margin: 0;">{{ coffee.name }}</h4>
            <p class="text-muted" style="margin: 0;">ราคา: {{ coffee.price }} บาท | ประเภท: {{ coffee.type }}</p>
          </div>
        </div>

        <div class="mt-3">
          <button class="btn btn-info btn-sm" v-on:click="navigateTo('/coffee/'+ coffee.id)">ดูข้อมูล</button>
          <button class="btn btn-warning btn-sm" v-on:click="navigateTo('/coffee/edit/'+ coffee.id)">แก้ไข</button>
          <button class="btn btn-danger btn-sm" v-on:click="deleteCoffee(coffee)">ลบ</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CoffeeService from '../../services/CoffeeService'

export default {
  data () {
    return {
      coffees: []
    }
  },
  async created () {
    this.coffees = (await CoffeeService.index()).data
  },
  methods: {
    // ฟังก์ชันนี้แหละที่ปุ่ม "สร้างเมนูใหม่" เรียกใช้
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteCoffee (coffee) {
      // ... โค้ดลบข้อมูล ...
    }
  }
}
</script>