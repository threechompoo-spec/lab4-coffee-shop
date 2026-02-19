import Api from './Api'

export default {
  upload (formData) {
    // ส่ง header 'multipart/form-data' เพื่อบอก Server ว่าเป็นการส่งไฟล์ [cite: 244-251]
    // เปลี่ยน endpoint เป็น 'coffee-upload' ให้ตรงกับ Route ฝั่ง Backend
    return Api().post('coffee-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}