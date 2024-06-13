import { notFound } from 'next/navigation'
import React from 'react'


/**
 * 
 * @typedef {object} params
 * @property {string}productId
 * @property {string}reviewId
 */
/**
 * 
 * @param {{params:params}} params
 * @returns 
 */
const page = ({ params }) => {
  if(parseInt(params.reviewId)>1000) {
    notFound()
  }
  return (
    <>
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    </>
  )
}

export default page