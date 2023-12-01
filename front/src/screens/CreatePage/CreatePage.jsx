import React from 'react'
import './createPage.css'
import Swal from 'sweetalert2'

const CreatePage = () => {

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
      <article className='detailsProduct'>
        <form action={urlAction} method='POST' onSubmit={handleSubmitCreate}>
          <header>
            <input type="text" className='titleInput' name='title' placeholder='Título del producto' />
            <input type="text" className='categoryInput' name='category' placeholder='Categoría'/>
          </header>
          <div className='imgPriceContainer'>
            
            <input type="text" placeholder='Inserte una URL' name='image' />
            <label className='priceDetail' htmlFor='price'>$</label><input type="number" className='priceDetailInput' name='price' id='stock' placeholder='ej: 50' />
            <label className='stockDetail' htmlFor='stock'>Stock: </label><input type="number" className='stockDetailInput' name='stock' id='stock' placeholder='ej: 5'/>
            <label htmlFor="description">Descripción </label><textarea name="description" id="description" cols="30" rows="10" placeholder=''></textarea>
          </div>
          <button className='btn'>Guardar</button>
        </form>
      </article>
    </>
  )
}

export default CreatePage