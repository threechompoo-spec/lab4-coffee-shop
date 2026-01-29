import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/' // หรือพอร์ตที่ Server คุณรันอยู่ (ปกติคือ 8081)
  })
}