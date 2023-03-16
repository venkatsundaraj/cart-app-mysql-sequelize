const express = require('express')

const app = express()

const path = require('path')

const rootDir = require('./utilities/path')

const adminRouter = require('./routes/admin')

const bodyParser = require('body-parser')

const ejs = require('ejs')

const sequelize = require('./utilities/database')

const Product = require('./module/model')
const User = require('./module/user')
const Cart = require('./module/cart')
const CartItem = require('./module/cart-item')
const Order = require('./module/order')
const OrderItem = require('./module/order-item')

app.set('view engine', 'ejs')
app.set('views', 'views')





app.use(express.static(path.join(rootDir, 'style')))

app.use(bodyParser.urlencoded({extended:false}))

// app.use('/', function(req,res,next){
//     res.write('<html><header><title>m</title></header><body><h1>This is your first html page</h1></body></html>')
// })

app.use((req,res,next)=>{
    User.findByPk(1).then(result=>{
        
        req.user = result
        next()
    } )
        .catch(err=>console.log(err))
})


app.use(adminRouter.router)

app.use((req,res,next)=>{
    res.status(404).render('404',{
        path : '',
        title: '404 Page'
    })
})
//One to many 
Product.belongsTo(User, {constrainst:true, onDelete:'CASCADE'})
User.hasMany(Product)

//One to one
Cart.belongsTo(User)
User.hasOne(Cart)

//Many to many
Cart.belongsToMany(Product, {through:CartItem})
Product.belongsToMany(Cart, {through: CartItem})

//One to one
Order.belongsTo(User)
User.hasMany(Order)

//Many to many
Order.belongsToMany(Product, {through:OrderItem})


sequelize.
// sync({force:true})
sync()
.then(result=>{
    return User.findByPk(1)
}).then(user=>{
    if(!user){
        return User.create({name:'Venkat', email:'test@gmail.com', password:'1531262'})
    }
    return user
})
.then(user=>{
    user.createCart()
})
.then(result=>{
    app.listen(4000, ()=>{console.log('Server started')})
})
.catch(err=>{
    console.log(err)
})


