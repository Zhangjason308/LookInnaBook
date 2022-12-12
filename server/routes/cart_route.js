const express = require("express");
//const { Pool } = require("pg");
const router = express.Router();
//const pool = require("../db");

//Get all the Books in the bookstore
    module.exports = pool => {
        

        //Show all Books
        router.get("/",async(req,res) => {
        try {
        const cart =  await pool.query("SELECT * FROM cartItem");
        console.log((cart).rows);
        res.json((cart).rows);
        
        } catch (error) {
            console.log(error);
        }
        
        });

        router.delete("/:id",async(req,res) => {
            
            try {
            const { id } = req.params;
            const {isbn, cartID, quantity, price} = req.body;
            await pool.query(`DELETE FROM cartItem WHERE isbn = \'${id}\'`);
            console.log(id);
            res.json((await allBooks).rows);
            //console.log((await allBooks).rows);
            } catch (error) {
                console.log(error);
            }
            
        });
        
    
    return router;

    }