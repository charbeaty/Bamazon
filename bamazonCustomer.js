var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P@izley2013",
    database: "bamazon_db"
});

var id;
var product;
var correct;
//connect to mysql server and database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
 
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
var customerPrompt = function (res) {

    inquirer.prompt([
        {
            type: "input",
            name: "choice",
            message: "What is the ID of the item you would like to purchase? [Quit with Q]",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(function (answer) {
        correct = false;
        if (answer.choice.toUpperCase() === "Q") {
            process.exit();
        }
        // console.log(answer)

        checkInventory(res, answer)

        // console.log(id)
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
                    if ((res[id].stock_quantity - answer.quant) > 0) {
                        connection.query("UPDATE products SET stock_quantity = '" + (res[id].stock_quantity - answer.quant) + "' WHERE item_id ='" + product + "'", function (err, res2) {
                            console.log("Product Bought!");
                            loadProducts();
                        })
                    }
                })
        
    })
}

function checkInventory (res, answer) {
    for (var i = 0; i < res.length; i++) {1
        if (res[i].item_id === (answer.choice * 1)) {
            correct = true
            product = (answer.choice * 1);
            id =i
            
        }
    }
}
