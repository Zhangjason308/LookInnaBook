CREATE DATABASE lookinnabook;

CREATE TABLE book (
    b_isbn varchar(13),
    b_title varchar(50),
    b_version numeric(2,0),
    b_pages numeric(4,0), 
    b_price numeric(4,2),
);

CREATE TABLE user (
    u_fname varchar(10),
    u_lname varchar(10),
    u_username varchar(20),
    u_password varchar(20), 
    u_email varchar(30),
);