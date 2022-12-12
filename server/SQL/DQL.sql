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

    