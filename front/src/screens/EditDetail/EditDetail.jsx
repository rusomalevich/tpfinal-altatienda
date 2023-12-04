import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './EditDetail.css'
import Swal from 'sweetalert2'


const EditDetail = () => {

    const { id } = useParams()

    const { isDark, getProductById, isInCart, getProductCartById } = useCustomContext()

    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

    useEffect(() => {

        const fetchProductDetails = async () => {
            const product = getProductById(id)
            setProductDetail(product)
        };

        fetchProductDetails()
    }, [id, getProductById])

    if (productDetail === undefined) {
        return <p>ID de producto incorrecto. Podés <Link to="/edit">volver a la tienda para buscar el producto</Link>.</p>;
    } else if (!productDetail) {
        return <p>Cargando...</p>
    }

    const addDataTheme = () => {
        let modal = document.getElementsByClassName('swal2-popup')
        console.log(modal[0])
        if (isDark) {
            modal[0].setAttribute('data-theme', 'dark')
        } else {
            modal[0].setAttribute('data-theme', 'light')
        }
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
                    didOpen: addDataTheme,
                    didClose: () => location.replace('/')
                })
                console.log('El producto fue eliminado correctamente');
            } else {
                console.error('Error al eliminar el producto');
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
                    didOpen: addDataTheme,
                    didClose: () => location.replace('/')
                })
                console.log('El producto fue modificado correctamente');
            } else {
                console.error('Error al modificar el producto');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }


    }
    const urlAction = `/api/products/edit/${id}`

    return (
        <article id={productDetail._id}>
            <form action={urlAction} method='PUT' onSubmit={handleSubmitUpdate} className='detailsProduct editProduct'>
                <header>
                    <input type="text" className='titleInput' name='title' defaultValue={productDetail.title} onChange={handleChangeUpdate} />
                    <input type="text" className='categoryInput' name='category' defaultValue={productDetail.category} onChange={handleChangeUpdate} />
                </header>
                <div className='imgPriceContainer'>
                    <div className='imgContainer'>
                        <label htmlFor="image" className='inputURLlabel'>Escriba una URL
                            <input type="text" defaultValue={productDetail.image} name='image' className='inputURL' />
                        </label>
                        <img src={'http://localhost:3040/img/' + productDetail.image} alt={productDetail.title} className='imgProductEdit'/>
                    </div>
                    <div className='priceStockDetail'>
                        <label className='priceDetail' htmlFor='price'>$<input type="number" className='priceDetailInput' name='price' defaultValue={productDetail.price} onChange={handleChangeUpdate} /></label>
                        <label className='stockDetail' htmlFor='stock'>Stock:<input type="number" className='stockDetailInput' name='stock' defaultValue={productDetail.stock} onChange={handleChangeUpdate} /></label>
                    </div>
                </div>
                <div className='descBtnContainer'>
                    <label htmlFor="description" className='descriptionDetail'>Descripción
                        <textarea name="description" id="description" defaultValue={productDetail.description}></textarea>
                    </label>
                    <div className='btnContainer'>
                        <button className='btn'>Guardar</button>
                        <button className='btn' onClick={handleDeleteProduct}>Eliminar</button>
                    </div>
                </div>
            </form>
        </article>
    )
}

export default EditDetail