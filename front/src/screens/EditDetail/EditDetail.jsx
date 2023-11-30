import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './EditDetail.css'

const EditDetail = () => {

    const { id } = useParams()

    const { getProductById, isInCart, getProductCartById } = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

    useEffect(() => {

        const fetchProductDetails = async () => {
            const product = getProductById(id)
            setProductDetail(product)
        };

        fetchProductDetails()
    }, [id, getProductById])

    if (!productDetail) {
        return <p>Cargando...</p>
    }

    return (
        <article id={productDetail._id} className='detailsProduct'>
            <header>
                <h2>{productDetail.title}</h2>
                <h3 className='category'>{productDetail.category}</h3>
            </header>
            <div className='imgPriceContainer'>
                <img src={productDetail.image} alt="" />
                <p className='priceDetail'>${productDetail.price}</p>
                <p className='stockDetail'>Stock: {productDetail.stock}</p>
            </div>
            <button className='btn'>Guardar</button>
            <button className='btn'>Eliminar</button>
        </article>
    )
}

export default EditDetail