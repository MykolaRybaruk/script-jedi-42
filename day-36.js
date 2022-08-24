// Promises Made me Broken
// https://www.codewars.com/kata/587593285448632b8d000143

async function submitOrder(user) {
  // Get the current user's shopping cart
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user).then(function (
    cart
  ) {
    return cart;
  });

  // Also look up the ZIP code from their profile
  const zipCode = await CustomerAPI.getProfileAsync(user).then(function (
    profile
  ) {
    return profile.zipCode;
  });

  // Calculate the shipping fees
  const shippingRate = calculateShipping(shoppingCart, zipCode);

  // Submit the order
  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate
  ).then(function (success) {
    return success;
  });

  return Your order ${
    orderSuccessful ? "was" : "was NOT"
  } placed successfully;
}





// [JEDI LEVEL] This isn't what you think!
// https://www.codewars.com/kata/5876a9f6b09010b1b4000191/train/javascript

ShoppingCart.prototype.addButtonClicked = function(item) {
  // Check if there's any of the item available
  // The first technique is using Hard binding with the `bind` method.
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function({item, quantity}) {
  // If the item was in stock, add one to our cart
  if (quantity > 0) {
    // The second technique is using an arrow function
    // which allows us to use the `this` keyword as a "lexical this"
    // according to @getify the arrow function doesn't have a `this`
    // in his scope, so it performs a lookup for the closest upper `this` defined.
    this.addToCartAsync(item, 1, (...params) => this.addButtonClicked2(...params));
  }
};

ShoppingCart.prototype.addButtonClicked2 = function(success) {
  // If it was added to the cart, then refresh the display
  if (success) {
    // The third technique is using the lexical scope with an explicit binding
    // using the `apply` method.
    var context = this;
    this.updateCartDisplayAsync(function(){
      context.addButtonClicked3.apply(context, arguments)
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function(success) {
  // Log the success or failure of our updates
  this.showMessage(`${success? "Successfully" : "Unsuccessfully"} added item to cart`);
};
