import React from 'react'
import './Wrapper.css'
import { useDispatch} from 'react-redux'
import { addProduct } from '../store/cartSlice'
const Wrapper = ({image , title , price , id , product}) => {
    const dispatch = useDispatch()

    function addToCart(index) {
        dispatch(addProduct(product[index]))    
    }
  return (
    <div className='wrapper'>
        <img src={image} alt="prod img" />
        <p>{title}</p>
        <p>${price}</p>
        <button onClick={()=>{return addToCart(id)}}>Add To Cart</button>
    </div>
  )
}

export default Wrapper