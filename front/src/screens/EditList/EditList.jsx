import React from 'react'
import { ProductsList } from "../../components"
import { useCustomContext } from '../../ContextManager/ContextProvider'
import Masonry from 'react-masonry-css'
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