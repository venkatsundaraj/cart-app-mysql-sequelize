const Sequelize = require('sequelize')

const sequelize = require('../utilities/database')


const Order = sequelize.define('order', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    
})

module.exports = Order