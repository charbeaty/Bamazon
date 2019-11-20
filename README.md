# Bamazon

Bamazon is an Amazon-like storefront using MySQL and Inquirer that takes in orders from customers and depletes stock from the store's inventory.

## Packages Used

*MySQL
*Inquirer

## How It Works

When the app is first opened, MySQL is used to load a table that shows the customer the store's current inventory. 
<!-- Insert pic of table here -->
![MySQL table](/images/prompt.png)

The customer is then prompted through inquirer to choose an item from the table. 

Once the customer has entered the item they would like to purchase, they are once again prompted through inquirer and asked the quantity of the item they would like to purchase.

After the customer has input the item and quantity, the stock quantity is updated.
<!-- Insert pic of stock that has been updated -->
![Updated stock](/images/secondPrompt.png)
## Links to the code
[GitHub Repo](https://github.com/charbeaty/Bamazon.git)