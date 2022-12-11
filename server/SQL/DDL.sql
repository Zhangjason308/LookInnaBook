
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
    FOREIGN KEY (email) REFERENCES users(email)

);



CREATE TABLE publisher (
    p_isbn varchar(13),
    p_name varchar(50),
    p_email varchar(30),
    p_number varchar(50),
    p_bank varchar(50),
    

    PRIMARY KEY (p_name),
    FOREIGN KEY (p_isbn) REFERENCES book(isbn)
);

CREATE TABLE author (
    isbn varchar(13),
    a_fname varchar(50),
    a_lname varchar(50),
    
    PRIMARY KEY(a_fname, a_lname, isbn),
    FOREIGN KEY (isbn) REFERENCES book(isbn) on DELETE CASCADE
);

CREATE TABLE cartItem (
    isbn varchar(13),
    cartID int,
    quantity int,
    price numeric(6,2),

    PRIMARY KEY (cartID)
);

CREATE TABLE cart (
    c_cartID int,
    email varchar(30),

    PRIMARY KEY (c_cartID),
    FOREIGN KEY (c_cartID) REFERENCES cartItem(cartID),
    FOREIGN KEY (email) REFERENCES users(email)
);

CREATE TABLE orders (
    orderID int,
    order_date varchar(30),
    subtotal numeric(6,2),
    tax numeric(5,2),
	
	PRIMARY KEY (orderID)
);

CREATE TABLE shipping (
    shippingID int,
    shipping_address varchar(100),
    orderID int,
    estimatedate varchar(30),
    actualdate varchar(30),

    PRIMARY KEY (shippingID, orderID),
    FOREIGN KEY (orderID) REFERENCES orders(orderID)
);




