import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import { Link } from 'react-router-dom'
import SweetAlert2 from 'react-sweetalert2'
import './cart.css'

const Cart = () => {
  const {isDark, cart, getTotal, isInCart, removeFromCart } = useCustomContext()
  const [swalProps, setSwalProps] = useState({})


  const addDataTheme = () => {
    let modal = document.getElementsByClassName('swal2-popup')
    console.log(modal[0])
    if (isDark) {
      modal[0].setAttribute('data-theme', 'dark')
    } else {
      modal[0].setAttribute('data-theme', 'light')
    }
  }

  document.body.classList.remove('edit');  

  return (
    <div className='cartContainer'>
      <h1>Carrito</h1>
      {cart.length > 0
      ?
      <>
        <div className='cart'>
          {cart.map((product, index) => (
            <div key={product._id} id={product._id} className='card'>
              <img src={'http://localhost:3040/img/' + product.image} alt={product.title} />
                <div className='cartProductDetails'>
                <Link to={'/api/products/' + product._id} title={product.title}>
                    <h2>{product.title}</h2>
                  </Link>
                  <h3 className='category'>{product.category}</h3>
                  <p className='price'>${product.price}</p>
                  {
                    isInCart(product._id)
                    ?
                    <Counter initialValue={product.quantity} stock={product.stock} id={product._id} deleteItem={() => removeFromCart(product._id)} />
                    :
                    <Counter initialValue={1} stock={product.stock} id={product._id} deleteItem={() => removeFromCart(product._id)} />
                  }
                </div>
            </div>
            ))}
        </div>
        <div className='priceBtnContainer'>
          <p className='priceDetail'>
            ${getTotal()}
          </p>
            <button className='btn' onClick={() => {
              setSwalProps({
                show: true,
                title: '¡Tu compra fue realizada con éxito!',
                didOpen: addDataTheme
              })
            }} >Comprar</button>

          <SweetAlert2 {...swalProps} />
        </div>
      </>
      :
        <p className='errorSinProductos'>Tu carrito está vacío, podés agregar tus productos <NavLink to="/">aquí</NavLink></p>
      }
    </div>
  )
}

export default Cart
