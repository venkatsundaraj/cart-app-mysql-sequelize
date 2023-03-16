const Sequelize = require('sequelize')

const sequelize= require('../utilities/database')

const CartItem = sequelize.define('cartIitem',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    quantity:Sequelize.INTEGER

})

module.exports = CartItem