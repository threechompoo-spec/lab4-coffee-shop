const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads') // เก็บไฟล์ไว้ในโฟลเดอร์ uploads
  },
  filename: function (req, file, cb) {
    // แอบเติมคำว่า coffee- นำหน้า Timestamp นิดนึง จะได้แยกออกง่ายๆ ว่ารูปไหนเป็นของกาแฟ
    cb(null, 'coffee-' + Date.now() + path.extname(file.originalname))
  }
})

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = allowedTypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb(new Error('Only images are allowed (jpeg, jpg, png, gif)'))
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // จำกัดขนาด 2MB
  fileFilter: fileFilter
}).single('image')

module.exports = upload