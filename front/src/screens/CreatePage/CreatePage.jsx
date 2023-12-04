import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './createPage.css'
import Swal from 'sweetalert2'

const CreatePage = () => {

  const {isDark} = useCustomContext()

  const addDataTheme = () => {
    let modal = document.getElementsByClassName('swal2-popup')
    console.log(modal[0])
    if (isDark) {
      modal[0].setAttribute('data-theme', 'dark')
    } else {
      modal[0].setAttribute('data-theme', 'light')
    }
  }

  const handleSubmitCreate = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`http://localhost:3040/api/products/`, {
        method: 'POST',
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
          title: 'El producto creado correctamente',
          didOpen: addDataTheme,
          didClose: () => location.replace('/')
        },)
        console.log('El producto creado correctamente');
      } else {
        console.error('Error al crear el producto');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }

  }

  const urlAction = `/api/products/`

  return (
    <>
      <article>
        <form action={urlAction} method='POST' onSubmit={handleSubmitCreate} className='detailsProduct createProduct'>
          <header>
            <input type="text" className='titleInput' name='title' placeholder='Título del producto' />
            <input type="text" className='categoryInput' name='category' placeholder='Categoría'/>
          </header>
          <div className='imgPriceContainer'>
              <label htmlFor="image" className='inputURLlabel'>Escriba una URL
                <input type="text" placeholder='imagen.png' name='image' id='image' className='inputURL' />
              </label>
              <label className='priceDetail' htmlFor='price'>$
                <input type="number" className='priceDetailInput' name='price' id='price' placeholder='ej: 50' />
              </label>
              <label className='stockDetail' htmlFor='stock'>Stock:
                <input type="number" className='stockDetailInput' name='stock' id='stock' placeholder='ej: 5'/>
              </label>
          </div>
          <div className='descBtnContainer'>
            <label htmlFor="description" className='descriptionDetail'>Descripción
              <textarea name="description" id="description"></textarea>
            </label>
            <button className='btn'>Guardar</button>
          </div>
        </form>
      </article>
    </>
  )
}

export default CreatePage