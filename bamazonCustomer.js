var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P@izley2013",
    database: "bamazon_db"
});
//connect to mysql server and database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    //run the loadProducts function after connection is made
    // loadProducts();
    console.log('connected as id ' + connection.threadId);

    loadProducts();
} );

// function to load table
function loadProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
    customerPrompt(res);
    });
}

//function that prompts user with questions
function customerPrompt(inventory) {

    inquirer
    .prompt( [
        {
            name: "choice",
            type: "input",
            message: "What is the ID of the item(s) you would like to purchase?",
           //validating that what was entered was a number
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }    
            },
        
        {
            name: "units",
            type: "input",
            message: "How many units of the item(s) would you like to purchase?", 
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ])
    .then(function(answer) {

        // var chosenUnit;
        // for (var i = 0; i < stock_quantity.length; i++) {
        //    if (stock_quantity[i].item_name === answer.units) {
        //     chosenUnit = results[i];
        //    } 
        // }
        //determine if there is enough stock to satisfy purchase
        if (stock_quantity < parseInt(answer.units)) {

            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: answer.units
                    },
                    {
                        price: chosenUnit.price
                    }
                ],
                function(error) {
                    if (error) throw err;
                    console.log("Your purchase has been submitted successfully!");
                    // customerPrompt();
                }
            );
            }
            else {
                //not enough stock to satisfy purchase
                console.log("Insufficient Quantity!");
                customerPrompt();
            }
        });
    }