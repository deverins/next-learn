import React from 'react'


/**
 * @typedef {object} params
 * @property {string} productId
 */

/**
 * 
 * @param {{params:params}} props 
 */
const ProductDetails = ( { params }) => {
  return (
    <>
        <div>
            <h1>Product details {params.productId}</h1>
        </div>
    </>
  )
}

export default ProductDetails