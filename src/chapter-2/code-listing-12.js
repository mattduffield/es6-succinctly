let shoppingCart = [
  {id: 0, product: "DVD", price: 21.99},
  {id: 1, product: "CD", price: 11.99}
];

for (let i = 0; i < shoppingCart.length; i++) {
  let item = shoppingCart[i];
  console.log("Item: " + item.product + " - Price: " + item.price);
}