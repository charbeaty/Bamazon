DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_sales DECIMAL(10,2) DEFAULT 0,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stretch Arm Strong", "Toys", 15.00, 50),
("Hatchimals", "Toys" 47.89, 200),
("Girl, Stop Apologizing", "Books", 19.98, 50),
("Pet In a Bag", "Toys", 10.00, 200),
("The Iron Butterfly", "Books", 18.95, 50),
("Anne of Green Gables", "Movies", 19.95, 60),
("Inspector Gadget", "Movies", 19.95, 60),
("Hocus Pocus", "Movies", 19.95, 60),
("Suspect", "Books", 12.00, 50),
("Safe Haven", "Movies", 19.95, 50);

