import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductsList, Filter, Search } from "../../components"
import { useCustomContext } from '../../ContextManager/ContextProvider'
import Masonry from 'react-masonry-css'
import './homepage.css'

const HomePage = () => {
    const { products, filteredProducts } = useCustomContext()
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        576: 1
    };
    
    document.body.classList.remove('edit');    
    return (
        <>
            <h1>Productos</h1>
            {
                products.length > 0
                ? <></>
                : <p className='errorSinProductos'>Todavía no hay productos en la tienda. Podés ir al  <Link to="/edit">modo edición</Link> para agregarlos</p>
            }
            <div className='products'>

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='cardContainer'
                        columnClassName='cardContainer-column'

                    >
                        {
                            filteredProducts && filteredProducts.length > 0
                            ? filteredProducts.map((product) => (
                                <ProductsList product={product} key={product._id} />
                            ))
                            : 
                            products.map((product) => (
                                    <ProductsList product={product} key={product._id} />
                            ))
                        }
                    </Masonry>
                {
                    products.length > 0
                        ? <Filter />
                        : <></>
                }
                
            </div>
        </>
    )
}

export default HomePage