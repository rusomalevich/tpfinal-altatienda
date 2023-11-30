import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './EditDetail.css'
import Swal from 'sweetalert2'


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

    const handleChangeUpdate = (e) => {
    }

    const handleDeleteProduct = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:3040/api/products/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Swal.fire({
                    title: 'El producto fue eliminado correctamente',
                })
                console.log('El producto fue eliminado correctamente');
            } else {
                console.error('Error al actualizar el producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }

    }

    const handleSubmitUpdate = async (e) => {
        e.preventDefault()
    
        try {
            const response = await fetch(`http://localhost:3040/api/products/edit/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: e.target.title.value,
                    category: e.target.category.value,
                    image: e.target.image.value,
                    price: e.target.price.value,
                    stock: e.target.stock.value,
                    description: e.target.description.value
                }),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'El producto fue modificado correctamente',
                })
                console.log('El producto fue modificado correctamente');
            } else {
                console.error('Error al actualizar el producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }


    }
    const urlAction = `/api/products/edit/${id}`

    return (
        <article id={productDetail._id} className='detailsProduct'>
            <form action={urlAction} method='PUT' onSubmit={handleSubmitUpdate}>
                <header>
                    <input type="text" className='titleInput' name='title' defaultValue={productDetail.title} onChange={handleChangeUpdate} />
                    <input type="text" className='categoryInput' name='category' defaultValue={productDetail.category} onChange={handleChangeUpdate} />
                </header>
                <div className='imgPriceContainer'>
                    <img src={productDetail.image} alt="" />
                    <input type="text" defaultValue={productDetail.image} name='image' />
                    <span className='priceDetail'>$</span><input type="number" className='priceDetailInput' name='price' defaultValue={productDetail.price} onChange={handleChangeUpdate} />
                    <p className='stockDetail'>Stock: {productDetail.stock}</p>
                    <span className='stockDetail'>Stock: </span><input type="number" className='stockDetailInput' name='stock' defaultValue={productDetail.stock} onChange={handleChangeUpdate} />
                    <textarea name="description" id="" cols="30" rows="10" defaultValue={productDetail.description}></textarea>
                </div>
                <button className='btn'>Guardar</button>
                <button className='btn' onClick={handleDeleteProduct}>Eliminar</button>
            </form>
        </article>
    )
}

export default EditDetail