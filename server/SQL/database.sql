CREATE DATABASE lookinnabook;

CREATE TABLE book (
    b_isbn varchar(13),
    b_title varchar(50),
    b_version numeric(2,0),
    b_pages numeric(4,0), 
    b_price numeric(4,2),
    b_publisher varchar(20)
);

CREATE TABLE user (
    u_fname varchar(10),
    u_lname varchar(10),
    u_username varchar(20),
    u_password varchar(20), 
    u_email varchar(30),
    u_address varchar(50),
    u_bankinfo varchar(30)
);

CREATE TABLE publisher (
    p_name varchar(20),
    p_email varchar(30),
    p_number varchar(10)
);

CREATE TABLE author (
    a_fname varchar(20),
    a_lname varchar(20),
    a_isbn varchar(13)
);

CREATE TABLE cartItem (
    cI_isbn varchar(13),
    cI_orderID int,
    cI_quantity numeric(3,0),
    cI_price numeric(6,2)
);

CREATE TABLE cart (
    c_orderID varchar(13),
    c_ID int,
    c_date varchar(3,0),
    c_subtotal numeric(6,2),
    c_tax numeric(5,2),
    c_shippingcost numeric(5,2),
    c_shippingaddress varchar(30),
    c_total numeric(8,2),
    c_estimateddate varchar(50),
    c_actualdate varchar(50)
);

CREATE TABLE cartItem (
    cI_isbn varchar(13),
    cI_orderID int,
    cI_quantity numeric(3,0),
    cI_price numeric(6,2)
);

CREATE TABLE payment (
    p_card_number numeric(16,0),
    p_expiry_date varchar(4),
    p_cvv numeric(3),
    p_address varchar(50)
    p_name varchar(50)

);
