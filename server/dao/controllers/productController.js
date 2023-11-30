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
        //return await Product.find({}, ({ "category": 1 }))
        //return await Product.aggregate([{ $project: { category: '$category', _id: 0 } },])
        return await Product.distinct('category')
    }
    catch(err){
        return{error:'Error al buscar las categorías'}
    }
    
}

const getProductById = async (pid) => {
    return await Product.findById(pid)
}

const updateProduct = async (pid, {title, category, image, price, stock, description}) => {
    console.log(pid, { title, category, image, price, stock, description })
    try {
/*         const updatedProduct = await Product.findByIdAndUpdate(pid,
            {title: title}, 
            {category: category},
            {image: image},
            {price: price},
            {stock: stock},
            {description: description}
            ) */

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

module.exports = { createProduct, getProducts, updateProduct, deleteProduct, getProductById, getCategories }