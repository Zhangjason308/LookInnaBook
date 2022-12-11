import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { CartItem } from './CartItem';
import "../Book/Book.css"
const URL = "http://localhost:5000/cart";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data)
}

const Cart = () => {
const [cart, setCart] = useState();
useEffect(() => {
  fetchHandler().then(data => setCart(data))
}, []);
console.log(cart);

  return (
    <div>
        <ul>
            {cart && cart.map((cartitem,i) => (
                <div className='book' key={i}>
                    <CartItem cart={cartitem}/>
                </div>
            ))}
        </ul>
    </div>
  )
};

export default Cart;