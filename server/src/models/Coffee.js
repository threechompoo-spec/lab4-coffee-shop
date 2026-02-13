// ไฟล์ src/models/Coffee.js
module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name: DataTypes.STRING,
        price: DataTypes.STRING, // หรือใช้ DataTypes.INTEGER หากต้องการคำนวณ
        type: DataTypes.STRING,
        status: DataTypes.STRING
    })
    return Coffee
}