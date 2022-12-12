
CREATE TABLE book (
    isbn varchar(13),
    title varchar(50) NOT NULL,
    genre varchar(50) NOT NULL,
    pages varchar(50) NOT NULL, 
    price numeric(4,2) NOT NULL,
    royalty numeric(4,2),
    quantity int NOT NULL,

    PRIMARY KEY (isbn)

);

CREATE TABLE users (
    email varchar(50),
    password varchar(50) NOT NULL, 
    fname varchar(50),
    lname varchar(50),
    address varchar(100),
    cardinfo varchar(50),
    isOwner boolean,

    PRIMARY KEY (email)
);

CREATE TABLE payment (
    card_number varchar(50),
    expiry_date varchar(4) NOT NULL,
    cvv varchar(3) NOT NULL,
    address varchar(50) NOT NULL,
    name varchar(50) NOT NULL,

    PRIMARY KEY (card_number)
    
);

CREATE TABLE usercc(
    email varchar(30),
    card_number varchar(50),
    

    PRIMARY KEY (card_number),
    FOREIGN KEY (email) REFERENCES users(email),
    FOREIGN KEY (card_number) REFERENCES payment(card_number)

);



CREATE TABLE publisher (
    p_name varchar(50),
    p_email varchar(30),
    p_number varchar(50),
    p_bank varchar(50),

    PRIMARY KEY (p_name)

);

CREATE TABLE cart (
    c_cartID int,
    num_items int,

    PRIMARY KEY (c_cartID)
    
);

CREATE TABLE author (
    a_fname varchar(50),
    a_lname varchar(50),
    
    PRIMARY KEY(a_fname, a_lname)

);

CREATE TABLE cartItem (
    isbn varchar(13),
    cartID int,
    quantity int,
    price numeric(6,2),

   
    FOREIGN KEY (cartID) REFERENCES cart(c_cartID),
    FOREIGN KEY (isbn) REFERENCES book(isbn)
);



CREATE TABLE book_order (
    orderID int,
    order_date varchar(30),
    total numeric(6,2),
	
	PRIMARY KEY (orderID)
);

CREATE TABLE shipping (
    shippingID int,
    shipping_address varchar(100),
    estimatedate varchar(30),
    actualdate varchar(30),

    PRIMARY KEY (shippingID)
    
);

CREATE TABLE writes
(
  isbn varchar(13),
  a_fname varchar(50),
  a_lname varchar(50),
  FOREIGN KEY (isbn) REFERENCES book(isbn),
  FOREIGN KEY (a_fname, a_lname) REFERENCES Author(a_fname, a_lname)
);

CREATE TABLE publishes
(
  p_name varchar(50),
  p_isbn varchar(13),
  PRIMARY KEY (p_isbn),
  FOREIGN KEY (p_isbn) REFERENCES book(isbn),
  FOREIGN KEY (p_name) REFERENCES publisher(p_name)
);

CREATE TABLE usercart
(
  c_cartID int,
  email varchar(50),
  PRIMARY KEY (email),
  FOREIGN KEY (c_cartID) REFERENCES cart(c_cartID),
  FOREIGN KEY (email) REFERENCES users(email)
);

CREATE TABLE orders
(
  orderID int,
  email varchar(50),
  PRIMARY KEY (orderID),
  FOREIGN KEY (orderID) REFERENCES book_order(orderID),
  FOREIGN KEY (email) REFERENCES users(email)
);

CREATE TABLE shipped
(
  orderID int,
  shippingID int,
  PRIMARY KEY (orderID),
  FOREIGN KEY (orderID) REFERENCES book_order(orderID),
  FOREIGN KEY (shippingID) REFERENCES shipping(shippingID)
);


