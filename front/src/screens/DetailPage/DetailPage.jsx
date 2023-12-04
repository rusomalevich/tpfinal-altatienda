import React, {useEffect, useState}  from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components/index'
import './detailpage.css'

const DetailPage = () => {

  const {id} = useParams()
 
  const {getProductById, isInCart, getProductCartById} = useCustomContext()
  const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))
  
  useEffect(() => {

    const fetchProductDetails = async () => {
      const product = getProductById(id)
      setProductDetail(product)
    };

    fetchProductDetails()
  }, [id, getProductById])


  if (productDetail === undefined) {
    return <p>ID de producto incorrecto. Podés <Link to="/">volver a la tienda para buscar el producto</Link>.</p>;
  } else if (!productDetail) {
    return <p>Cargando...</p>
  }

  return (
    <article id={productDetail._id} className='detailsProduct'>
        <header>
          <h2>{productDetail.title}</h2>
          <h3 className='category'>{productDetail.category}</h3>
        </header> 
        <div className='imgPriceContainer'>
        <img src={'http://localhost:3040/img/' + productDetail.image} alt="" />
          <p className='priceDetail'>${productDetail.price}</p>
          <p className='stockDetail'>Stock: {productDetail.stock}</p>
        </div>
        <div className='descBtnContainer'>
          <p>{productDetail.description}</p>
        {
          isInCart(id)
          ?
          <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail._id}/>
          :
          <Counter initialValue={1} stock={productDetail.stock} id={productDetail._id} />
        }
        </div>
    </article>
  )
}

export default DetailPage