import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './counter.css'
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'


const Counter = ({initialValue, stock, id, deleteItem }) => {
    const {addProductCart, isDark } = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    let location = useLocation();
   

    const addDataTheme = () => {
      let modal = document.getElementsByClassName('swal2-popup')
      console.log(modal[0])
      if (isDark) {
        modal[0].setAttribute('data-theme', 'dark')
      } else {
        modal[0].setAttribute('data-theme', 'light')
      }
    }


    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        if(location.pathname=='/cart'){
          Swal.fire({
            title: 'El producto fue modificado correctamente',   
            didOpen: addDataTheme
          })
        } else {
          Swal.fire({
            title: 'El producto fue agregado correctamente',   
            didOpen: addDataTheme,
          })
        }
    }

    const handleAddBtn = () => {
      setQuantity(quantity > 1 ? quantity - 1 : quantity)
    }

    const handleSubBtn = () => {
      setQuantity(quantity === stock ? qantity : quantity + 1)
    }

  return (
    <div className='counter'>
        <button className='addBtn' onClick={handleAddBtn}>-</button>
        <span className='quantityInCart'>{quantity}</span>
        <button className='subBtn' onClick={handleSubBtn}>+</button>
        {
        location.pathname == '/cart'
        ?
          <button className='deleteBtn' onClick={deleteItem}><Trash /></button>
        :
          <></>
        }
        {
          location.pathname=='/cart'
          ?
          <button onClick={onClickAddProduct} className='btn'>Modificar carrito</button>
          :
          <button onClick={onClickAddProduct} className='btn'>Agregar al carrito</button>
        }

    </div>
  )
}

export default Counter