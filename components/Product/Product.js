import React from 'react'

const Product = ({ product }) => {
  return (
    <div className='h-full w-full'>{product.name}</div>
  )
}

export default Product