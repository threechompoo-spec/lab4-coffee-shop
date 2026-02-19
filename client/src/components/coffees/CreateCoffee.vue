<template>
  <div>
    <h1>สร้างเมนูใหม่</h1>
    <form v-on:submit.prevent="createCoffee">
      <p>ชื่อเมนู: <input type="text" v-model="coffee.name"></p>
      
      <upload-image @uploaded="onUploaded"></upload-image>

      <p>ราคา: <input type="text" v-model="coffee.price"></p>
      <p>ประเภท: <input type="text" v-model="coffee.type"></p>
      <p>สถานะ: <input type="text" v-model="coffee.status"></p>
      <p><button type="submit">บันทึก</button></p>
    </form>
  </div>
</template>

<script>
import CoffeeService from '../../services/CoffeeService'
import UploadImage from '../Utils/Upload.vue' // [เพิ่ม] 1. Import Component เข้ามา

export default {
  components: {
    UploadImage // [เพิ่ม] 2. ลงทะเบียน Component ให้ Template รู้จัก
  },
  data () {
    return {
      coffee: {
        name: '',
        price: '',
        type: '',
        status: '',
        image: 'null' // [เพิ่ม] 3. เตรียมฟิลด์สำหรับเก็บชื่อไฟล์รูปภาพ
      }
    }
  },
  methods: {
    // [เพิ่ม] 4. ฟังก์ชันรับชื่อไฟล์จาก Component ลูกมาเก็บใน Object กาแฟ
    onUploaded (filename) {
      this.coffee.image = filename
      console.log('Coffee Image set to:', filename)
    },
    async createCoffee () {
      try {
        await CoffeeService.post(this.coffee)
        // เปลี่ยนจาก { name: 'coffees' } เป็น path: '/coffees' 
        this.$router.push('/coffees') 
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>