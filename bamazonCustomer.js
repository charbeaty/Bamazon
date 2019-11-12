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
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    //run the loadProducts function after connection is made
    // loadProducts();
    console.log('connected as id ' + connection.threadId);

    loadProducts();
});

// function to load table
function loadProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        customerPrompt(res);
    });
}

//function that prompts user with questions
var customerPrompt = function(res) {

    inquirer.prompt([{
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would like to purchase? [Quit with Q]",
            }]).then(function (answer) {
                var correct = false;
                if(answer.choice.toUpperCase()=="Q"){
                    process.exit();
                }
                for (var i = 0; i < res.length; i++) {
                    if (res[i].itemid === answer.choice) {
                        correct=true;
                        var product = answer.choice;
                        var id = i;
                        inquirer.prompt({
                            type: "input",
                            name: "quant",
                            message: "How many would you like to buy?",
                            validate: function (value) {
                                if (isNaN(value) === false) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        }).then(function (answer) {
                            if ((res[id].stockquantity - answer.quant) > 0) {
                                connection.query("UPDATE products SET stockquantity = '" + (res[id].stockquantity-
                                answer.quant) + "' WHERE itemid ='"+ product + "'", function(err, res2){
                                console.log("Product Bought!");
                                loadProducts();
                            })
                    } else {
                        console.log("Not a valid selection!");
                        customerPrompt(res);
                    }
                })
              }
            }
            if(i===res.length && correct===false){
                console.log("Not a valid selection!");
                customerPrompt(res);
            }
        })
    }
