import { Button } from '@mui/material';
//import axios from 'axios';
import React from 'react'
import "../Book/Book.css";
//import {useNavigate} from 'react-router-dom';

export const CartItem = (props) => {
  
    const {isbn, cartID, quantity, price} = props.cartItem;

    return (
    <div className='card'>
        
        <h5>ISBN: {isbn}</h5>
        <h5>cartID {cartID}</h5>
        <h6>Quantity: {quantity}</h6>
        <p>Price: ${price}</p>
    
        
        <Button  sx={{mt: "auto"}}>X</Button>

    </div>
  )
}
