module.exports = {
  upload (req, res) {
    try {
      // ถ้าระบบไม่ได้แนบไฟล์มาให้
      if (!req.file) {
        return res.status(400).send({ error: 'Please upload a file' })
      }
      // ถ้าสำเร็จ ให้ส่งชื่อไฟล์ (filename) กลับไปให้หน้าบ้าน (Vue)
      res.send({
        filename: req.file.filename
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to upload the file'
      })
    }
  }
}