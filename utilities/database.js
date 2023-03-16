const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-project','root', 'Sv@1531262',{
    dialect:'mysql',
    host:'localhost',
    
})

module.exports = sequelize