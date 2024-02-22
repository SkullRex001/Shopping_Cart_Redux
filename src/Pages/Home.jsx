import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'
import './Pro.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../store/productSlice'

const Body = () => {
  // const [product , setProduct] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{
    // const apiCall = async ()=>{
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json()
    //   setProduct([...product , ...data])
    //   console.log(data)

    // }
    // apiCall()
////////////////////////////////////////////////////////////////////////////////////////////////////////
    dispatch(fetchProduct())


  } , [])

    const {product , pending , error } = useSelector(state => state.product)
    // console.log(product)
    // console.log(pending)
    // console.log(error)

    if(pending) {
      return(
        <div className='loading'>
        Loading
        </div>
      )
    }

    if(error){
     return(
      <div className='loading'> 
        {error.message}
      </div>
     )
    }



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