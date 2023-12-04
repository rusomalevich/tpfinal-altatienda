import React from 'react'
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './productslist.css'


const ProductsList = ({product, edit}) => {

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

      const handleDeleteProduct = async (id) => {

      try {
        const response = await fetch(`http://localhost:3040/api/products/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          Swal.fire({
            title: 'El producto fue eliminado correctamente',
            didOpen: addDataTheme,
            didClose: () => location.replace('/edit')
          })
          console.log('El producto fue eliminado correctamente');
        } else {
          console.error('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }

    }



  return (
    <>
      {
        edit
          ? 
          <div className='card'>
              <Link to={'/api/products/edit/' + product._id} title={product.title} className='cardLink'>
                <img src={'http://localhost:3040/img/'+product.image} alt={product.title} />
                <h3 className='category'>{product.category}</h3>
                <h2>{product.title}</h2>
                <p className='price'>${product.price}</p>
              </Link>
                <div className='btnContainerCard'>
              <Link to={'/api/products/edit/' + product._id} title={product.title} className='btn'><span className='cardPencilEditable'><PencilFill /></span>Editar</Link>
              <button className='btn' onClick={() => handleDeleteProduct(product._id)}><Trash3Fill />Eliminar</button>
                </div>
            </div>
          

          : 
            <div className='card'>
              <Link to={'/api/products/' + product._id} title={product.title} className='cardLink'>
                <img src={'http://localhost:3040/img/' + product.image} alt={product.title} />
                <h3 className='category'>{product.category}</h3>
                <h2>{product.title}</h2>
                <p className='price'>${product.price}</p>
              </Link>
            </div>
      }
    </>
  )
}

export default ProductsList