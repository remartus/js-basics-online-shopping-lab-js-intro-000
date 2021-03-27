var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemObject = {
    itemName: item,
    itemPrice:price
  }
  cart[cart.length] = itemObject
  return item + " has been added to your cart."
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }

  else{
    var response = "In your cart, you have "
    for(let i = 0; i < cart.length - 1; i++){
      response = response + cart[i]
    }
    return response
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
