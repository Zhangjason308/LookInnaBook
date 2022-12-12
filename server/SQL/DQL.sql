-- /books
-- Grab all info about the books

CREATE TABLE bookinfo AS 
SELECT book.*, writes.a_fname, writes.a_lname
FROM book, writes
WHERE book.isbn = writes.isbn;

-- create a userinfo table containing all userinfo

CREATE TABLE userinfo AS 
SELECT users.*, payment.card_number,payment.expiry_date, payment.cvv, payment.address AS p_address, payment.name AS p_name
FROM users, payment
WHERE users.cardinfo = payment.card_number

-- Listed SQL Queries below are not needed to Run as they are used in the HTTP Requests when you call them by clicking their button

-- Insert a new book
-- `INSERT INTO book VALUES (\'${isbn}\',\'${title}\',\'${genre}\',\'${pages}\',\'${price}\',\'${royalty}\',${quantity})`

-- Insert a new writes
--`INSERT INTO writes VALUES (\'${isbn}\',\'${a_fname}\',\'${a_lname}\')`

-- Insert a new author
--`INSERT INTO author VALUES (\'${a_fname}\',\'${a_lname}\')`

--Insert new bookinfo
--`INSERT INTO bookinfo VALUES (\'${isbn}\',\'${title}\',\'${genre}\',\'${pages}\',\'${price}\',\'${royalty}\',${quantity},\'${a_fname}\',\'${a_lname}\')`

--Insert a new cartItem
--`INSERT INTO cartItem VALUES (\'${isbn}\',\'${cartID}\',\'${quantity}\',\'${price}\')`

--Display whole cart
--`SELECT * FROM cartItem`

--Remove a Cart Item
--`DELETE FROM cartItem WHERE isbn = \'${id}\'

--Checks if the email and password are valid when logging in
--`SELECT email, password FROM users WHERE email=\'${email}\' AND password=\'${password}\'`

-- Insert new register into userinfo
-- `INSERT INTO userinfo VALUES (\'${email}\',\'${password}\',\'${fname}\',\'${lname}\',\'${address}\',\'${cardinfo}\', ${isowner},\'${card_number}\',\'${expiry_date}\',\'${cvv}\',\'${p_address}\',\'${p_name}\')`
-- `INSERT INTO users VALUES (\'${email}\',\'${password}\',\'${fname}\',\'${lname}\',\'${address}\',\'${cardinfo}\', ${isowner})`
-- `INSERT INTO payment VALUES (\'${card_number}\',\'${expiry_date}\',\'${cvv}\',\'${p_address}\',\'${p_name}\')`