import React from 'react'
import { PencilFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './productslist.css'


const ProductsList = ({product, edit}) => {

  console.log(edit)
  return (
    <>
      {
        edit
          ? 
          <div className='card'>
            <Link to={'/api/products/edit/' + product._id} title={product.title} className='cardLink'><span className='cardPencilEditable'><PencilFill /></span></Link>
              <Link to={'/api/products/edit/' + product._id} title={product.title} className='cardLink'>
                <img src={product.image} alt={product.title} />
                <h3 className='category'>{product.category}</h3>
                <h2>{product.title}</h2>
                <p className='price'>${product.price}</p>
              </Link>
            </div>
          

          : 
            <div className='card'>
              <Link to={'/api/products/' + product._id} title={product.title} className='cardLink'>
                <img src={product.image} alt={product.title} />
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