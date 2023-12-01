import React from 'react'
import { ProductsList } from "../../components"
import { useCustomContext } from '../../ContextManager/ContextProvider'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
import { PlusSquare } from 'react-bootstrap-icons'
import './editList.css'

const EditList = () => {
    const { products, filteredProducts } = useCustomContext()
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        576: 1
    };
  return (
    <>
        <h1>EDITAR</h1>
          <Masonry
              breakpointCols={breakpointColumnsObj}
              className='cardContainer'
              columnClassName='cardContainer-column'

          >
              <div className='card'>
                  <Link to={'/create/'} title='Crear producto' className='cardLink'>
                      <span className='iconoPlus'><PlusSquare /></span>
                    <h2>Nuevo Producto</h2>
                  </Link>
              </div>
              {
                  filteredProducts && filteredProducts.length > 0
                      ? filteredProducts.map((product) => (
                          <ProductsList product={product} key={product._id} edit="true" />
                      ))
                      : products.map((product) => (
                          <ProductsList product={product} key={product._id} edit="true" />
                      ))
              }
          </Masonry>
    </>
  )
}

export default EditList