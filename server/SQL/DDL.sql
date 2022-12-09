CREATE DATABASE lookinnabook;

CREATE TABLE lookinnabook.book (
    isbn varchar(13),
    title varchar(50) NOT NULL,
    genre varchar(20) NOT NULL,
    pages numeric(4,0) NOT NULL, 
    price numeric(4,2) NOT NULL,
    royalty numeric(4,2),
    quantity numeric(3,0) NOT NULL,

    PRIMARY KEY (isbn)

);

CREATE TABLE lookinnabook.user (
    email varchar(30),
    password varchar(20) NOT NULL, 
    fname varchar(20),
    lname varchar(20),
    address varchar(1-0),
    cardinfo numeric(16,0),
    isOwner boolean,

    PRIMARY KEY (email)
);

CREATE TABLE lookinnabook.payment (
    card_number numeric(16,0),
    expiry_date varchar(4) NOT NULL,
    cvv numeric(3) NOT NULL,
    address varchar(50) NOT NULL,
    name varchar(50) NOT NULL,

    PRIMARY KEY (card_number),
    FOREIGN KEY (card_number) REFERENCES lookinnabook.user(cardinfo)
);

CREATE TABLE lookinnabook.usercc(
    email varchar(30),
    card_number numeric(16,0),
    

    PRIMARY KEY (card_number),
    FOREIGN KEY (email) REFERENCES lookinnabook.user(email)

);



CREATE TABLE lookinnabook.publisher (
    p_isbn varchar(13),
    p_name varchar(20),
    p_email varchar(30),
    p_number numeric(10,0),
    p_bank numeric(20,0),
    

    PRIMARY KEY (p_name),
    FOREIGN KEY (p_isbn) REFERENCES lookinnabook.book(isbn)
);

CREATE TABLE lookinnabook.author (
    isbn varchar(13),
    a_fname varchar(20),
    a_lname varchar(20),
    
    PRIMARY KEY(a_fname, a_lname, isbn),
    FOREIGN KEY (isbn) REFERENCES lookinnabook.book(isbn)
);

CREATE TABLE lookinnabook.cartItem (
    isbn varchar(13),
    cartID int,
    quantity numeric(3,0),
    price numeric(6,2),

    PRIMARY KEY (isbn, cartID)
);

CREATE TABLE lookinnabook.cart (
    c_cartID int,
    email varchar(30),

    PRIMARY KEY (c_cartID),
    FOREIGN KEY (c_cartID) REFERENCES lookinnabook.cartItem(cartID)
    FOREIGN KEY (email) REFERENCES lookinnabook.user(email)
);

CREATE TABLE lookinnabook.order (
    orderID int,
    order_date varchar(8,0),
    subtotal numeric(6,2),
    tax numeric(5,2),
);

CREATE TABLE lookinnabook.shipping (
    shippingID int,
    shipping_address varchar(100),
    orderID int,
    estimatedate varchar(8,0),
    actualdate varchar(8,0)

    PRIMARY KEY (shippingID, orderID),
    FOREIGN KEY (orderID) REFERENCES lookinnabook.order(orderID)
)




