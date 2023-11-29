import React, { useState, useEffect } from 'react'
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
    
    
    return (
        <>
            <h1>Productos</h1>
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
                        : products.map((product) => (
                                <ProductsList product={product} key={product._id} />
                        ))
                        }
                    </Masonry>

                <Filter />
            </div>
        </>
    )
}

export default HomePage