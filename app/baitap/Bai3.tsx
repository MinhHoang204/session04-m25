import React from 'react'
import { useParams } from 'react-router-dom';
export default function Bai3() {
    const { productId } = useParams<{ productId: string }>();
  return (
    <div>
      <h1>Product id: {productId}</h1>
    </div>
  )
}
