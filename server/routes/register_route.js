const express = require("express");
//const { Pool } = require("pg");
const router = express.Router();
//const pool = require("../db");

//Get all the Books in the bookstore
    module.exports = pool => {

        router.put("/",async(req,res) => {
            try {
                const {email, password, fname, lname, address, cardinfo,isowner,card_number,expiry_date,cvv,p_address,p_name} = req.body;
                await pool.query(`INSERT INTO userinfo VALUES (\'${email}\',\'${password}\',\'${fname}\',\'${lname}\',\'${address}\',\'${cardinfo}\', ${isowner},\'${card_number}\',\'${expiry_date}\',\'${cvv}\',\'${p_address}\',\'${p_name}\')`);
                await pool.query(`INSERT INTO users VALUES (\'${email}\',\'${password}\',\'${fname}\',\'${lname}\',\'${address}\',\'${cardinfo}\', ${isowner})`);
                await pool.query(`INSERT INTO payment VALUES (\'${card_number}\',\'${expiry_date}\',\'${cvv}\',\'${p_address}\',\'${p_name}\')`);
                console.log(req.body);
            } catch (error) {
                console.log(error);
            }
        });
        return router;
    }