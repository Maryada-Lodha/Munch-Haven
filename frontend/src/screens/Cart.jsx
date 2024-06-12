import React from 'react'
import { useCart } from '../context/cart_context'
import CartTable from '../components/CartTable'
import CustomNavbar from '../components/CustomNavbar'

const Cart = () => {
    let data =  useCart()

    if (data.length === 0) {
        return (
            <>
                <CustomNavbar />
                <div>Cart is Empty</div>
            </>
        )
    }
    
    return (
        <>
            <CustomNavbar />
            <CartTable data = {data}/>
        </>
    )
}

export default Cart