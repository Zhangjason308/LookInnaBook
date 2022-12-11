import React, {useState} from 'react'
import { Button, FormLabel, TextField, Box } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const history = useNavigate();
  const [inputs, setinputs] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    address: '',
    cardinfo: '',
    cardName: '',
    cardexpiry: '',
    cardcvv: '',
    cardAddr: '',
    isowner: false
});

const handleChange = (e) => {
  setinputs((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value

  }))
};

const sendRequest = async() => {
  await axios.put("http://localhost:5000/register",{
    email: String(inputs.email),
    password: String(inputs.password),
    fname: String(inputs.fname),
    lname: String(inputs.lname),
    address: String(inputs.address),
    cardinfo: String(inputs.cardinfo),
    isowner: Boolean(false),
    card_number: String(inputs.cardinfo),
    expiry_date: String(inputs.cardexpiry),
    cvv: String(inputs.cardcvv),
    p_address: String(inputs.cardAddr),
    p_name: String(inputs.cardName)
  }).then(res=>res.data);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  sendRequest().then(() => {
      return history("/register");
  });
  window.location.reload(false);
};
  return (
    <div>
      <h1>Register an Account</h1>
      <form onSubmit={handleSubmit}>
      <Box displays="flex" flexDirection="row" maxWidth={700} margin="auto">
        <FormLabel>Email</FormLabel>
        <TextField value={inputs.email} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="email"/>
        <FormLabel>Password</FormLabel>
        <TextField value={inputs.password} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="password"/>
        <FormLabel>First Name</FormLabel>
        <TextField value={inputs.fname} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="fname"/>
        <FormLabel>Last Name</FormLabel>
        <TextField value={inputs.lname} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="lname"/>
        <FormLabel>Address ("Street name , City, Province, Postal Code" )</FormLabel>
        <TextField value={inputs.address} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="address"/>
        <FormLabel>Credit Card Number</FormLabel>
        <TextField value={inputs.cardinfo} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name ="cardinfo"/>
        <FormLabel>Card Name</FormLabel>
        <TextField value={inputs.cardName} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name ="cardName"/>
        <FormLabel>Card Expiry Date</FormLabel>
        <TextField value={inputs.cardexpiry} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name ="cardexpiry"/>
        <FormLabel>Card CVV</FormLabel>
        <TextField value={inputs.cardcvv} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name ="cardcvv"/>
        <FormLabel>Billing Address</FormLabel>
        <TextField value={inputs.cardAddr} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name ="cardAddr"/>
        
        <Button  variant="contained" type="submit" width={500}>Register</Button>
    </Box>

      </form>
    </div>
  )
};

export default Register