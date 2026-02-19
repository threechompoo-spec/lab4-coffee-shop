// src/routes.js
const CoffeeController = require('./controllers/CoffeeController')
const UploadController = require('./controllers/UploadController') // [เพิ่ม] Import Upload Controller
const coffeeUploadMiddleware = require('./middleware/coffeeUpload') // [เพิ่ม] Import Middleware ของกาแฟที่เราเพิ่งสร้าง

module.exports = (app) => {
    // เส้นทางสำหรับจัดการเมนูกาแฟ (Coffee Routes)
    app.get('/coffees', CoffeeController.index)      // ดูเมนูทั้งหมด
    app.post('/coffee', CoffeeController.create)     // เพิ่มเมนู
    app.put('/coffee/:coffeeId', CoffeeController.put) // แก้ไขเมนู
    app.delete('/coffee/:coffeeId', CoffeeController.remove) // ลบเมนู
    app.get('/coffee/:coffeeId', CoffeeController.show) // ดูเมนูรายตัว

    // [เพิ่ม] Route สำหรับอัปโหลดรูปภาพเมนูกาแฟ 
    app.post('/coffee-upload', coffeeUploadMiddleware, UploadController.upload)
}