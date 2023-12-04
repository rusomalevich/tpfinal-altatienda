import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import SweetAlert2 from 'react-sweetalert2'
import './contact.css'

const Contact = () => {

  const { isDark } = useCustomContext()
  const [swalSend, setSwalSend] = useState({})

  const addDataTheme = () => {
    let modal = document.getElementsByClassName('swal2-popup')
    console.log(modal[0])
    if (isDark) {
      modal[0].setAttribute('data-theme', 'dark')
    } else {
      modal[0].setAttribute('data-theme', 'light')
    }
  }

  const sendMail = (e) => {
    e.preventDefault()
    console.log(e.target)
    setSwalSend({
      show: true,
      title: 'El correo ha sido enviado',
      didOpen: addDataTheme
    })

    
  }
  document.body.classList.remove('edit');  
  
  return (
    <div className='contactPage'>
        <h1>Contacto</h1>
      <form action="" className="contactForm" onSubmit={sendMail}>
            <label htmlFor="fullName" className='required'>Nombre completo</label>
            <input type="text" name="fullName" id="fullName"  required/>
            <label htmlFor="email" className='required'>Correo electrónico</label>
            <input type="email" name="email" id="email"  required/>
            <label htmlFor="message" className='required'>Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            <button className='btn btnSend'>Enviar</button>
        </form>
            <SweetAlert2 {...swalSend} />
    </div>
  )
}

export default Contact