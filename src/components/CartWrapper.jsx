import React from 'react'
import './Wrapper.css'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../store/cartSlice'

const Cartwrapper = ({image , title , price , id}) => {
const dispatch = useDispatch()
function remove(itemId) {
    dispatch(removeProduct(itemId))

    
}
  return (
    <div className='wrapper'>
        <img src={image} alt="prod img" />
        <p>{title}</p>
        <p>${price}</p>
        <button onClick={()=>{
            return remove(id)
        }}>Remove From Cart</button>
    </div>
  )
}

export default Cartwrapper