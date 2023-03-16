const Sequelize = require('sequelize')

const sequelize = require('../utilities/database')


const OrderItem = sequelize.define('orderItem', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    quantity:Sequelize.INTEGER
},{timestamps:false})

module.exports = OrderItem