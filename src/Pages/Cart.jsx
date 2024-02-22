import React from 'react'
import { useSelector } from 'react-redux'
import Cartwrapper from '../components/CartWrapper'

const Cart = () => {
  const product = useSelector(state=>state.cart)
  console.log(product)
  return (
    <div className='ProDiv'>
    {
      product.map((item , index)=>{
      return <Cartwrapper  image={item.image} title={item.title} price={item.price} key={index} id={index}/>
      })

    }
</div>
  )
}

export default Cart