import React, {useState} from 'react'
import { Button, FormLabel, TextField, Box } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [inputs, setinputs] = useState({
    email: '',
    password: '',
    valid: ''
});

const handleChange = (e) => {
  setinputs((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value

  }))
};

const sendRequest = async() => {
   const valid = await axios.put("http://localhost:5000/login",{
    email: String(inputs.email),
    password: String(inputs.password)
  }).then(res=>res.data);
  if ({valid}){
    console.log("yes");
  }
  else {
    console.log("nooon");
  }
  //window.location.href='http://localhost:3000/books';
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  sendRequest().then(() => {
    
  });
  //window.location.reload(false);
};
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <Box displays="flex" flexDirection="row" maxWidth={700} margin="auto">
        <FormLabel>Email</FormLabel>
        <TextField value={inputs.email} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="email"/>
        <FormLabel>Password</FormLabel>
        <TextField value={inputs.password} onChange={handleChange} margin="normal" fullWidth variant="outlined" name ="password"/>
        <Button  variant="contained" type="submit" width={500}>Login</Button>
        <a href="http://localhost:3000/register"><Button width={500}>Don't Have an Account</Button></a>
        
    </Box>

      </form>
    </div>
  )
};

export default Login