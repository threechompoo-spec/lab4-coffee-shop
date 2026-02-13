<template>
  <div>
    <h1>Show Coffee</h1>
    <p>id: {{ coffee.id }}</p>
    <p>ชื่อเมนู: {{ coffee.name }}</p>
    <p>ราคา: {{ coffee.price }}</p>
    <p>ประเภท: {{ coffee.type }}</p>
    <p>สถานะ: {{ coffee.status }}</p>
    <p>
      <button v-on:click="navigateTo('/coffee/edit/'+ coffee.id)">แก้ไขข้อมูล</button>
      <button v-on:click="navigateTo('/coffees')">กลับ</button>
    </p>
  </div>
</template>

<script>
import CoffeeService from '../../services/CoffeeService'
export default {
  data () {
    return {
      coffee: null
    }
  },
  async created () {
    try {
      let coffeeId = this.$route.params.coffeeId
      this.coffee = (await CoffeeService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
</style>