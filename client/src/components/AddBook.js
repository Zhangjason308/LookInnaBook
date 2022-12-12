import { Button, FormLabel, TextField, Box } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddBook = () => {
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        title: '',
        isbn: '',
        genre: '',
        pages: '',
        price: '',
        royalty: '',
        quantity: '',
        a_fname: '',
        a_lname: ''
    });

    const handleChange = (e) => {
        setinputs((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    };

    const sendRequest = async() => {
        await axios.put("http://localhost:5000/books",{
            
            isbn: String(inputs.isbn),
            title: String(inputs.title),
            genre: String(inputs.genre),
            pages: String(inputs.pages),
            price: String(inputs.price),
            royalty: String(inputs.royalty),
            quantity: Number(inputs.quantity),
            a_fname: String(inputs.a_fname),
            a_lname: String(inputs.a_lname)
        }).then(res=>res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => {
            return history("/books");
        });
        //window.location.href='http://localhost:3000/books';
    };
    return (
  <div>
    <h1>Add Book to Inventory</h1>
    <form onSubmit={handleSubmit}>
        <Box displays="flex" flexDirection="row" maxWidth={700} margin="auto">
    <FormLabel>Title</FormLabel>
    <TextField value={inputs.title} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="title"/>
    <FormLabel>ISBN</FormLabel>
    <TextField value={inputs.isbn} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="isbn"/>
    <FormLabel>Author First Name</FormLabel>
    <TextField value={inputs.a_fname} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="a_fname"/>
    <FormLabel>Author Last Name</FormLabel>
    <TextField value={inputs.a_lname} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="a_lname"/>
    <FormLabel>Genre</FormLabel>
    <TextField value={inputs.genre} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="genre"/>
    <FormLabel>Pages</FormLabel>
    <TextField value={inputs.pages} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name ="pages"/>
    <FormLabel>Price</FormLabel>
    <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name ="price"/>
    <FormLabel>Royalty</FormLabel>
    <TextField value={inputs.royalty} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name ="royalty"/>
    <FormLabel>Quantity</FormLabel>
    <TextField value={inputs.quantity} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name ="quantity"/>
    <Button  variant="contained" type="submit" width={500}>Add Book</Button>
    </Box>
</form>

  </div>)
  
};

export default AddBook