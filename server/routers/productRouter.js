const express = require('express')
const { createProduct, getProducts } = require('../dao/controllers/productController')
const productRouter = express.Router()

productRouter.get('/', (req, res) => {
    res.json({ok:true, products: []})
})
productRouter.post('/', async (req, res) => {
    const {title, category, image, price, stock, description, quantity} = req.body
    await createProduct({ title, category, image, price, stock, description, quantity })
    res.json({ok:true, products: getProducts()})
})

/*     title: String, 
    category: String,
    image: String,
    price: Number, 
    stock: Number, 
    description: String,
    quantity: Number */

module.exports = productRouter