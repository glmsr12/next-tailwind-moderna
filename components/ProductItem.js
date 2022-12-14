/* eslint-disable @next/next/no-img-element */
import { Rating } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <Rating value={product.rating} readOnly></Rating>
        <p>${product.price}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
