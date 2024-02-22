import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const Cart = useSelector(state => state.cart)
  return (
    <div className='Navbar'>
        <p>E-Shop</p>
        <div className="links">
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart</Link>
        </div>
        <p>Cart items : {Cart.length}</p>
    </div>
  )
}

export default Navbar