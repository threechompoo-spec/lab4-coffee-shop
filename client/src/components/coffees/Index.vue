<template>
  
  <div>
    <h2>รายการเมนูกาแฟ</h2>

    <router-link to="/coffee/create">
      เพิ่มเมนูกาแฟ
    </router-link>

    <table border="0.9">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Type</th>
        <th>Action</th>
      </tr>

      <tr v-for="coffee in coffees" :key="coffee.id">
        <td>{{ coffee.id }}</td>
        <td>{{ coffee.name }}</td>
        <td>{{ coffee.price }}</td>
        <td>{{ coffee.type }}</td>
        <td>
          <router-link :to="`/coffee/edit/${coffee.id}`">
            แก้ไข
          </router-link>
          |
          <button @click="deleteCoffee(coffee)">ลบ</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import CoffeesService from '@/services/CoffeesService'

export default {
  data () {
    return {
      coffees: []
    }
  },
  async mounted () {
    this.fetchCoffees()
  },
  methods: {
    async fetchCoffees () {
      const response = await CoffeesService.index()
      this.coffees = response.data
    },
    async deleteCoffee (coffee) {
      if (confirm('คุณแน่ใจว่าต้องการลบเมนูนี้?')) {
        await CoffeesService.delete(coffee)
        this.fetchCoffees()
      }
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

th {
  background: #6f4e37;
  color: white;
  padding: 12px;
}

td {
  padding: 10px;
  text-align: center;
}

tr:nth-child(even) {
  background: #f7f3ef;
}

button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

a {
  color: #6f4e37;
  font-weight: bold;
}
</style>