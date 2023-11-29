import React from 'react'
import './header.css'
import {Search, Menu} from './../'
import Logo from './../../assets/logo-altatienda.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='topHeader'>
        <NavLink to='/'>
            <img src={Logo} alt="altaTienda logo" className='logo'/>
        </NavLink>
        <Search />
        <Menu />
    </header>
  )
}

export default Header