const express = require("express");
//const { Pool } = require("pg");
const router = express.Router();
//const pool = require("../db");

//Get all the Books in the bookstore
    module.exports = pool => {

        router.put("/",async(req,res) => {
            try {
                const {email, password} = req.body;
                const user = await pool.query(`SELECT email, password FROM users WHERE email=\'${email}\' AND password=\'${password}\' `);
                if (user.rows.length === 1) {
                    console.log("Login Successful");
                    res.json({valid: false});
                    valid = false;
                }
                else {
                    console.log("Email or Password is Incorrect");
                    res.json({valid: true});
                    valid = true;
                }
            
                
            
            } catch (error) {
                console.log(error);
            }
        });
        return router;
    }