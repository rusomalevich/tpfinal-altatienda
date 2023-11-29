import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='bigFooter'>
        <div className='footerColumn footerFullWidth'>
            <h4>altaTienda</h4>
            <p className='address'>Av. Dr. Ricardo Balbín 2100,<br />San Miguel,<br />Buenos Aires, Argentina</p>
        </div>
        <div className='footerColumn'>
            <a href="#">Ventas corporativas</a>
            <a href="#">Sugerencias</a>
            <a href="#">Trabajos</a>
            <a href="#">Noticias</a>
            <a href="#">Reglas de ventas</a>
            <a href="#">Programa de partners</a>
        </div>
        <div className='footerColumn'>
            <a href="#">Promos</a>
            <a href="#">Gift Сards</a>
            <a href="#">Verificación de pagos</a>
            <a href="#">Préstamos</a>
            <a href="#">Delivery</a>
            <a href="#">Centros de servicio</a>
        </div>
        <div className='footerColumn footerHide'>
            <a href="#">Cómo comprar</a>
            <a href="#">Formas de pago</a>
            <a href="#">Cambio y devolución</a>
            <a href="#">Garantía</a>
            <a href="#">Estado de tu pedido</a>
            <a href="#">FAQ - Preguntas Frecuentes</a>
        </div>
        <div className='footerColumn copyright footerFullWidth'>
            <p>2023. Todos los derechos resevados.</p>
            <a href="#">Términos y condiciones</a>
            <a href="#">Políticas de privacidad</a>
        </div>
    </footer>
  )
}

export default Footer