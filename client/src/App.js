import React from "react";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import Register from "./components/Register";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login";

function App() {

  const authenticated = async() => {
    try {
      const res = await fetch('http://localhost:5000/login',{
        method: "PUT",
        body: JSON.stringify({"email": "Zhangjason308@gmail.com", "password" : "Carleton123"})
      });

      const parseres = await res.json();
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
  <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
      <Route path='/login' element={<Login/>} exact />
      <Route path='/register' element={<Register/>} exact />
        <Route path='/addBook' element={<AddBook/>} exact />
        <Route path='/books' element={<Books/>} exact />
        <Route path='/cart' element={<Cart />} exact />
        </Routes>
        
    </main>
  </React.Fragment>
  );  
  
}

export default App;
