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
        name: "item_id",
        type: "input",
        message: "What is the ID of the product(s) you would like to buy?"
    })
    .then(function(answer) {
        var query = "SELECT item_id FROM products WHERE ?"
        connection.query(query, {item_id: answer.item_id }, function(err, res) {
         for (var i = 0; i < res.length; i++) {
             console.log("Item ID: " + res[i].item_id);
         } 
         runSearch();  
        });
    });
  
} 

function itemQuantity() {
    inquirer
    .prompt({
        name: "unit",
        type: "input",
        message: "How many units of the product(s) would you like to buy?"
    })
    .then(function(answer) {
        var query = "SELECT stock_quantity FROM products WHERE ?"
        connection.query(query, {stock_quantity: answer.stock_quantity}, function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("Units Chosen: " + res[i].stock_quanity);
            }
            runSearch();
        });
    });
}
itemQuantity();
