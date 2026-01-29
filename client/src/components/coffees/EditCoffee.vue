<template>
  <div>
    <h2>แก้ไขเมนูกาแฟ</h2>

    <form @submit.prevent="updateCoffee">
      <p>
        Name:
        <input v-model="coffee.name">
      </p>
      <p>
        Price:
        <input type="number" v-model="coffee.price">
      </p>
      <p>
        Type:
        <input v-model="coffee.type">
      </p>
      <p>
        Description:
        <textarea v-model="coffee.description"></textarea>
      </p>

      <button type="submit">บันทึกการแก้ไข</button>
    </form>
  </div>
</template>

<script>
import CoffeesService from '@/services/CoffeesService'

export default {
  data () {
    return {
      coffee: {}
    }
  },
  async mounted () {
    const coffeeId = this.$route.params.coffeeId
    const response = await CoffeesService.show(coffeeId)
    this.coffee = response.data
  },
  methods: {
    async updateCoffee () {
      await CoffeesService.put(this.coffee)
      this.$router.push('/coffees')
    }
  }
}
</script>
<style scoped>
form {
  max-width: 400px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  margin-top: 15px;
  background: #6f4e37;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}
</style>