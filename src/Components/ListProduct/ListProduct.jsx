import React from 'react'
import './ListProduct.css'

export const ListProduct = ({ products }) => {
    return (
      <ul className='List'>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    );
  };
  