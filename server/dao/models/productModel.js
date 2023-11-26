const mongoose = require('mongoose')

const Product = mongoose.model('product', {
    title: String, 
    category: String,
    image: String,
    price: Number, 
    stock: Number, 
    description: String,
    quantity: Number
})

module.exports = Product