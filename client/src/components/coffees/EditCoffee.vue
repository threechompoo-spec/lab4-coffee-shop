<template>
  <div>
    <h1>แก้ไขเมนู</h1>
    <form v-on:submit.prevent="editCoffee">
      <p>ชื่อเมนู: <input type="text" v-model="coffee.name"></p>

      <div v-if="coffee.image && coffee.image !== 'null'" style="margin-bottom: 20px;">
        <p>รูปภาพปัจจุบัน:</p>
        <img :src="'http://localhost:8081/assets/uploads/' + coffee.image" style="max-width: 200px; border-radius: 10px;" alt="coffee image" />
      </div>

      <upload-image @uploaded="onUploaded"></upload-image>

      <p>ราคา: <input type="text" v-model="coffee.price"></p>
      <p>ประเภท: <input type="text" v-model="coffee.type"></p>
      <p>สถานะ: <input type="text" v-model="coffee.status"></p>
      <p>
        <button type="submit">แก้ไขข้อมูล</button>
        <button type="button" v-on:click="navigateTo('/coffees')">กลับ</button>
      </p>
    </form>
  </div>
</template>

<script>
import CoffeeService from '../../services/CoffeeService'
import UploadImage from '../Utils/Upload.vue' // [เพิ่ม] 3. Import Component เข้ามา

export default {
  components: {
    UploadImage // [เพิ่ม] 4. ลงทะเบียน Component
  },
  data () {
    return {
      coffee: {
        name: '',
        price: '',
        type: '',
        status: '',
        image: 'null' // [เพิ่ม] 5. เตรียมฟิลด์สำหรับเก็บชื่อไฟล์รูปภาพ
      }
    }
  },
  methods: {
    // [เพิ่ม] 6. ฟังก์ชันรับชื่อไฟล์ใหม่ หากผู้ใช้อัปโหลดรูปมาเปลี่ยน
    onUploaded (filename) {
      this.coffee.image = filename
      console.log('Updated Coffee Image to:', filename)
    },
    async editCoffee () {
      try {
        await CoffeeService.put(this.coffee)
        this.$router.push({ name: 'coffees' })
      } catch (err) {
        console.log(err)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async created () {
    try {
      let coffeeId = this.$route.params.coffeeId
      // เมื่อดึงข้อมูลจาก Database มา ฟิลด์ image จะถูกใส่เข้ามาใน this.coffee ด้วยอัตโนมัติ
      this.coffee = (await CoffeeService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>