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
