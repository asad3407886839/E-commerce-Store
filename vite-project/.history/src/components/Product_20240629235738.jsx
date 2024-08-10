
import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {id}=useParams();
  const [product,setproduct]=useState([]);
  const [loading,setloading]=useState(false);
  
  useEffect(()=>{
    const getProduct=async()=>{
      setloading(true);
    }
    getProduct();
  },[])
  return (
    <div>Product</div>
  )
}

export default Product