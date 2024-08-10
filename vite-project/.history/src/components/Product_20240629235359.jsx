
import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const id=useParams();
  const [product,setproduct]=useState([];)
  return (
    <div>Product</div>
  )
}

export default Product