let firstGroceryObject = new GroceryItem(`apples`, 0.50, 5);
let secondGroceryObject = new GroceryItem(`avocados`, 2.00, 2);
let thirdGroceryObject = new GroceryItem(`beers`, 2.50, 4);
let fourthGroceryObject = new GroceryItem(`kale`, 2.00, null);

var groceryList = [firstGroceryObject, secondGroceryObject, thirdGroceryObject, fourthGroceryObject];

function summary (groceryList) {
  console.log(`Dear Hungry Friend, I bought you:\n`);

  let total = 0;
  groceryList.forEach(function(item) {
    console.log(`${item.quantity} ${item.name} - $${item.total}`);
    total += item.total;
  });
  console.log(`\nYou owe me $${total}`);
}

summary(groceryList);

// // Exceeds Expectations
// let inventory = {
//   banana: 2,
//   coffee: 2,
//   kale: 5,
//   chocolateBar: 5,
//   apple: 10,
//   potato: 11,
//   tomatoe: 1,
//   beer: 3,
//   avocado: 1,
//   milk: 5
// };
