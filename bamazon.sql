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
VALUES ()