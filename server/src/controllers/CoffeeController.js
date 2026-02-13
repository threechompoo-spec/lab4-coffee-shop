// ไฟล์ src/controllers/CoffeeController.js
const { Coffee } = require('../models')

module.exports = {
    // ดึงข้อมูลกาแฟทั้งหมด (Get all coffees)
    async index (req, res) {
        try {
            const coffees = await Coffee.findAll()
            res.send(coffees)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the coffees'
            })
        }
    },
    
    // สร้างเมนูใหม่ (Create coffee)
    async create (req, res) {
        try {
            const coffee = await Coffee.create(req.body)
            res.send(coffee.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the coffee'
            })
        }
    },
    
    // แก้ไขข้อมูล (Edit coffee)
    async put (req, res) {
        try {
            await Coffee.update(req.body, {
                where: {
                    id: req.params.coffeeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the coffee'
            })
        }
    },
    
    // ลบข้อมูล (Delete coffee)
    async remove (req, res) {
        try {
            const coffee = await Coffee.findOne({
                where: {
                    id: req.params.coffeeId
                }
            })
            if (!coffee) {
                return res.status(403).send({
                    error: 'The coffee information was incorrect'
                })
            }
            await coffee.destroy()
            res.send(coffee)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete the coffee'
            })
        }
    },
    
    // ดูข้อมูลรายเมนู (Show coffee by id)
    async show (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.coffeeId)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to show the coffee'
            })
        }
    }
}