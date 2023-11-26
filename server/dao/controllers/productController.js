const Product = require('../models/productModel')

const createProduct = async (product) => {
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

const deleteProduct = async (pid) => {
    console.log(pid)
    try {
        const deletedProduct = await Product.findByIdAndDelete(pid)
        if (deleteProduct) {
            return { ok: true, deletedProduct }
        } else {
            return { error: 'Producto no encontrado' }
        }
    }
    catch(err){
        return {error: 'id no válido'}
    }
    
}

module.exports = { createProduct, getProducts, deleteProduct }