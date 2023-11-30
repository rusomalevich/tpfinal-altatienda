import React from 'react'
import { HouseDoorFill, CartFill, EnvelopeFill, PencilFill } from 'react-bootstrap-icons'
import './menu.css'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'



const Menu = () => {
  const { cart } = useCustomContext()

  return (
    <>
    <nav className='menu'>
        <NavLink to='/' className='navItem navEdit'><HouseDoorFill /></NavLink>
        <NavLink to='/edit' className='navItem'><PencilFill /></NavLink>
        <NavLink to='/cart' className='navItem navCart'><CartFill />
          {
            cart.length > 0
              ? <span>{cart.length}</span>
              : <></>
          }
          
        </NavLink>
        <NavLink to='/contact' className='navItem'><EnvelopeFill /></NavLink>
    </nav>

    </>
  )
}

export default Menu