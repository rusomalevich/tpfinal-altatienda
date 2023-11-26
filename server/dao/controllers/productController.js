const Product = require('../models/productModel')

const createProduct = async (Product) => {
    const newProduct = new Product(product)
    try {
        return await newProduct.save()
    } catch(err) {
        console.error(err)
    }
}

const getProducts = async () => {
    return await Product.find({})
}

module.exports = { createProduct, getProducts }