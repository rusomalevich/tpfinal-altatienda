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

const getCategories = async() => {
    try {
        return await Product.distinct('category')
    }
    catch(err){
        return{error:'Error al buscar las categorías'}
    }
    
}

const getProductById = async (pid) => {
    try {
        const product = await Product.findById(pid)
        if (!product) {
            return { ok: false, error: 'Producto no encontrado' }
        }
        return {ok:true, product}
    }
    catch(err) {
        return{error:'Error al buscar el producto'}
    }
}

const updateProduct = async (pid, {title, category, image, price, stock, description}) => {
    try {
        const updatedProduct = await Product.updateOne(
            {
                "_id": pid,
            },
            {
                $set:{
                    title: title,
                    category: category,
                    image: image,
                    price: price,
                    stock: stock,
                    description: description
                }
            }
        )
        if (updateProduct) {
            return { ok: true, updatedProduct }
        } else {
            return { error: 'Producto no encontrado' }
        }
    }
    catch (err) {
        return { error: 'id no válido' }
    }

}

const deleteProduct = async (pid) => {

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

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, getProductById, getCategories }