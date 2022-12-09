DELETE from lookinnabook.book;
DELETE from lookinnabook.user;
DELETE from lookinnabook.payment;
DELETE from lookinnabook.usercc;
DELETE from lookinnabook.publisher;
DELETE from lookinnabook.author;
DELETE from lookinnabook.cartItem;
DELETE from lookinnabook.cart;
DELETE from lookinnabook.order;
DELETE from lookinnabook.shipping;

insert into lookinnabook.user values ('Zhangjason308@gmail.com', 'Carleton123', 'Jason', 'Zhang', '308 Ardmore Street, Manotick, Ontario, K4M0E2',10002000300040005,true);
insert into lookinnabook.user values ('jasonzhang9@cmail.carleton.com', 'Ottawa613', 'Lucas', 'Craston', '123 Bloof Street, Nepean, Ontario, K1V2A1',1234567890123456,false);
insert into lookinnabook.user values ('triton10@cmail.carleton.com', 'Tritoncool', 'Triton', 'Trap', '1400 Bridgemeadow Crescent, Nepean, Ontario, K2T5D1',8008765634959203,false);
insert into lookinnabook.user values ('caleb8@cmail.carleton.com', 'Calebsad123', 'Caleb', 'Ultimate', '1 Jane Street, Markham, Ontario, K8L2M9',1238574839405928,false);

insert into lookinnabook.book values ('9780763645762', 'The Knife of Never Letting Go','Thriller',560,46.50,2.5,60);
insert into lookinnabook.book values ('9781408834961', 'Harry Potter and the Philosophers Stone','Adventure',224,35.00,4.25,80);
insert into lookinnabook.book values ('9780300138238', 'Hamlet','Thriller',560,46.50,2.5,60);

insert into lookinnabook.author values ('9780763645762', 'Patrick','Ness');
insert into lookinnabook.author values ('9781408834961', 'J.K.','Rowling');
insert into lookinnabook.author values ('9780300138238', 'William','Shakespeare');

insert into lookinnabook.publisher values ('9780763645762', 'Candlewick Press','Candlewick@gmail.com',8007333000,2345678947564739);
insert into lookinnabook.publisher values ('9781408834961', 'Bloomsbury Publishing','weborders@mpsvirginia.com',8883308477,0987098709870987);
insert into lookinnabook.publisher values ('9780300138238', 'Yale University Press','YaleUniversityPress@gmail.com',2034321345,1111222233334444);

insert into lookinnabook.usercc values('Zhangjason308@gmail.com',10002000300040005);
insert into lookinnabook.usercc values('Zhangjason308@gmail.com',10002000300040006);
insert into lookinnabook.usercc values('jasonzhang9@cmail.carleton.com',1234567890123456);
insert into lookinnabook.usercc values('triton10@cmail.carleton.com',8008765634959203);
insert into lookinnabook.usercc values('caleb8@cmail.carleton.com',1238574839405928);

insert into lookinnabook.payment values(10002000300040005, 0426, 560, '308 Ardmore Street, Manotick, Ontario, K4M0E2','Jason Zhang');
insert into lookinnabook.payment values(10002000300040006,0328,430,'308 Ardmore Street, Manotick, Ontario, K4M0E2','Jason Zhang');
insert into lookinnabook.payment values(1234567890123456,0224,002,'123 Bloof Street, Nepean, Ontario, K1V2A1', 'Lucas Craston');
insert into lookinnabook.payment values(8008765634959203,2829,579,'1430 Betting Crescent, Nepean, Ontario, K2T5D1','Triton Trap');
insert into lookinnabook.payment values(1238574839405928, 1323, 402,'1 Jane Street, Markham, Ontario, K8L2M9', 'Caleb Ultimate');
