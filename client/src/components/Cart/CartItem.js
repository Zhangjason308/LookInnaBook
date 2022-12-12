import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import "../Book/Book.css";

export const CartItem = (props) => {

  const deleteHandler = () => {
    axios.delete(`http://localhost:5000/cart/${isbn}`).then(res=>res.data);
    window.location.reload(false);
  };
  
    const {isbn, cartID, quantity, price} = props.cartItem;

    return (
    <div className='card'>
        
        <h5>ISBN: {isbn}</h5>
        <h5>cartID {cartID}</h5>
        <h6>Quantity: {quantity}</h6>
        <p>Price: ${price}</p>
    
        
        <Button onClick={deleteHandler} sx={{mt: "auto"}}>Remove from Cart</Button>

    </div>
  )
}
