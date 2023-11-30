const express = require('express')
const { createProduct, getProducts, deleteProduct, getProductById, getCategories } = require('../dao/controllers/productController')
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    res.json({ ok: true, products: await getProducts()})
})

productRouter.get('/categories', async(req, res) => {
    res.json({ok:true, products: await getCategories()})
})

productRouter.get('/:pid', async(req, res) => {
    const {pid} = req.params
    let product = await getProductById(pid)
    if(product) {
        res.status(200).json({ok:true, product})
    } else {
        res.status(404).json({ok:false, error: 'producto no encontrado'})
    }
})

productRouter.post('/', async (req, res) => {
    const {title, category, image, price, stock, description} = req.body
    await createProduct({ title, category, image, price, stock, description })
    res.json({ok:true, products: await getProducts()})
})

productRouter.delete('/:pid', async (req, res)=>{
    const {pid} = req.params
    let result = await deleteProduct(pid)
    if(result.ok){
        return res.status(200).json({
            ok:true,
            products: await getProducts(),
            deleteProduct: result.deletedProduct
            }
        )
    } else {
        return res.status(404).json({ok: false, error: result.error})
    }
})

module.exports = productRouter