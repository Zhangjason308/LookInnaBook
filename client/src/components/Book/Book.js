import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import "./Book.css";
import {useNavigate} from 'react-router-dom';

export const Book = (props) => {
  const history = useNavigate();
    const {isbn, title, genre, pages, price, royalty, quantity, a_fname, a_lname} = props.bookinfo;
    const deleteHandler = () => {
      axios.delete(`http://localhost:5000/books/${isbn}`).then(res=>res.data).then(() => history("/")).then(()=> history("/books"));
      window.location.reload(false);
    };

    const addHandler = () => {
      axios.post(`http://localhost:5000/books/`,{isbn: `${isbn}`, cartID: '1',quantity: '1', price: `${price}`}).then(res=>res.data);;
      
    };
    return (
    <div className='card'>
        <h4>{title}</h4>
        <h5>ISBN: {isbn}</h5>
        <p>Author: {a_lname}, {a_fname}</p>
        <p>Genre {genre}</p>
        <p>Price: ${price}</p>
        <p>Pages: {pages}</p>
        <p>Royalty: {royalty}</p>
        <h6>Stock: {quantity}</h6>
        <Button onClick={addHandler} sx={{mt: "auto"}}>Add to Cart</Button>
        <Button onClick={deleteHandler} sx={{mt: "auto"}}>Remove</Button>

    </div>
  )
}
