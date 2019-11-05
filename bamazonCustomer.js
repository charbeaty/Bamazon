var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3000,

    user: "root",

    password: "P@izley2013",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer 
    .prompt({
        name: "product",
        message: "What is the ID of the product(s) you would like to buy?"
    })
}