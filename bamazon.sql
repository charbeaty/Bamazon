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
VALUES ("Rocket Dog", "Shoes", 39.98, 200),
("Slim Fit Jeans", "Apparel", 21.00, 200),
("Adidas Running Shoes", "Shoes", 120.00, 160),
("Pampers Diapers", "Baby", 35.00, 180),
("Tom's Toothpaste", "Personal Care", 8.00, 450),
(""),
(""),
(""),
(""),
("");

CREATE TABLE departments(
    department_id INT AUTO-INCREMENT NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    over_head_costs DECIMAL(10,2) NOT NULL,
    primary key(department_id)
);

SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Shoes", )