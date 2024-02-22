import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'
import './Pro.css'

const Body = () => {
  const [product , setProduct] = useState([])
  useEffect(()=>{
    const apiCall = async ()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProduct([...product , ...data])
      console.log(data)

    }
    apiCall()

  } , [])
  return (
    <div className='ProDiv'>
        {
          product.map((item , index)=>{
          return <Wrapper image={item.image} title={item.title} price={item.price} key={index} id={index} product={product}/>
          })

        }
    </div>
  )
}

export default Body