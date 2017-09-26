class GroceryItem {
  constructor(name, price, quantity, total){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    if (quantity == null){
      this.quantity = 1;
    }
    this.total = this.price * this.quantity;
  }
}
