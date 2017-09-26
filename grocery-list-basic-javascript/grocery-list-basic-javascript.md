## Instructions

Your millennial bestie needs you to pick up some groceries. Let's create a program that will list what we need to pick up! Your bestie told you that you need 5 apples, 2 avocados, and 4 beers, but they forgot to tell you how much kale to get. Each apple costs $0.50, each avocado costs $2.00, each beer cost 2.50, and each bunch of kale is $2.00.

### Getting Set Up

```no-highlight
$ et get grocery-list-basic-javascript
$ cd grocery-list-basic-javascript
```

Open the `index.html` file in your browser. In the browser, open up the JavaScript console. You will be saving your code in main.js. Then, you can refresh the page in order to see your changes.

## Meeting Expectations Requirements

* Create a `GroceryItem` class within the `src/GroceryItem.js` file.
* A new `GroceryItem` should take three arguments, the name of the item, the price of the item, and the quantity.
* If the quantity is omitted when creating a new `GroceryItem`, it should default to `1`.
* In `main.js` write code to create four different `GroceryItems` and store those `GroceryItems` objects in an **array** called `groceryList`.
* Create a `summary` function that prints out the following to the console:

```no-highlight
Dear Bestie,

I bought you:

5 apples - $2.50
2 avocados - $2.00
4 beers - $10.00
1 kale - $2.00

You owe me $16.50.
```

### Tips

* Focus on meeting one requirement at a time.
* Use the JavaScript console in your browser and `console.log` statements to
  troubleshoot your code.
* **DO NOT** start the requirements necessary to Exceed Expectations until you
  have completed the requirements necessary to Meet Expectations.

## Exceeding Expectations Requirements

Extract the logic for handling "Grocery Lists" into its own class.

Your app must satisfy the following requirements:

* In the `src` directory create a `GroceryList.js` file .
* In `GroceryList.js` create a `GroceryList` class that takes 2 arguments, the `name` of the person the list belongs to, and an array of `GroceryItem`s .
* In the `main.js` under the Exceeds Expectations section there is an inventory object with a list of the groceries available at your local bodega.
* Create a method that checks to see if your local bodega has enough of each `GroceryItem` on a `GroceryList` for you to get everything on your list.
* If the bodega has enough of everything on the list, your method should print out the following in the console:
```no-highlight
The bodega has it all! You can get everything on your list here
```
* If the bodega doesn't have enough of everything on the list, your method should tell you what items the bodega doesn't have enough of.
* Create a `GroceryList` from the list your bestie gave you and use the method you created to see if everything on the list is available. Your method should print the following in the console:

```no-highlight
Sorry the bodega doesn't have enough of the following:

beer
avocado

You'll have to go someplace else to get these.
```
