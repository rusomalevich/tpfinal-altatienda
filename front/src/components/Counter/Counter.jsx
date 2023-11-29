import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './counter.css'
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'


const Counter = ({initialValue, stock, id, deleteItem }) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    let location = useLocation();
   
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        if(location.pathname=='/cart'){
          Swal.fire({
            title: 'El producto fue modificado correctamente',   
          })
        } else {
          Swal.fire({
            title: 'El producto fue agregado correctamente',   
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