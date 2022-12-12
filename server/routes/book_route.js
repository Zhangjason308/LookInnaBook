const express = require("express");
//const { Pool } = require("pg");
const router = express.Router();
//const pool = require("../db");

//Get all the Books in the bookstore
    module.exports = pool => {
        

        //Show all Books
        router.get("/",async(req,res) => {
        try {
        const allBooks = pool.query("SELECT * FROM bookinfo");
        console.log((await allBooks).rows);
        res.json((await allBooks).rows);
        
        } catch (error) {
            console.log(error);
        }
        
        });
        
        //Add a Book
        router.put("/",async(req,res) => {
            
            try {
            const {isbn, title, genre, pages, price, royalty, quantity,a_fname,a_lname} = req.body;
            await pool.query(`INSERT INTO book VALUES (\'${isbn}\',\'${title}\',\'${genre}\',\'${pages}\',\'${price}\',\'${royalty}\',${quantity})`);
            //await pool.query(`INSERT INTO writes VALUES (\'${isbn}\',\'${a_fname}\',\'${a_lname}\')`);
            await pool.query(`INSERT INTO author VALUES (\'${a_fname}\',\'${a_lname}\')`);
            await pool.query(`INSERT INTO bookinfo VALUES (\'${isbn}\',\'${title}\',\'${genre}\',\'${pages}\',\'${price}\',\'${royalty}\',${quantity},\'${a_fname}\',\'${a_lname}\')`);
            console.log(req.body);

            } catch (error) {
                console.log(error);
            }
            
        });

        router.post("/",async(req,res) => {
            
            try {
            const {isbn, cartID, quantity, price} = req.body;
            
            await pool.query(`INSERT INTO cartItem VALUES (\'${isbn}\',\'${cartID}\',\'${quantity}\',\'${price}\')`);
            
            console.log(req.body);

            } catch (error) {
                console.log(error);
            }
            
        });

        //Delete a Book
        router.delete("/:id",async(req,res) => {
            
            try {
            const { id } = req.params;
            const {isbn, title, genre, pages, price, royalty, quantity,a_fname,a_lname} = req.body;
            await pool.query(`DELETE FROM book WHERE isbn = \'${id}\'`);
            await pool.query(`DELETE FROM bookinfo WHERE isbn = \'${id}\'`);
            console.log(id);
            res.json((await allBooks).rows);
            //console.log((await allBooks).rows);
            } catch (error) {
                console.log(error);
            }
            
        });
        
    
    return router;

    }
    

    
  
