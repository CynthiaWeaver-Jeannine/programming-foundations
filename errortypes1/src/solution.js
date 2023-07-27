/*
  Syntax errors checking for things like missing or unnecessary commas, semicolons, or quotes.
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// parenthesis added before the math operation
function getPriceInDollars(product) {
  return ("$" + product.priceInCents / 100).toFixed(2);
}

// `size` is a number between 0 and 16.
// remooved the () from the if statement
function checkIfSizeIsAvailable(product, size) {
  let sizes = product.availableSizes;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] === size) {
      return true;
    }
  }

  return false;
}

// hint: is the name of the function correct?
function getProductHeading(product) {
  let price = getPrice(product);
  return (
    product.name +
    ": " +
    price +
    " (Available in " +
    product.availableSizes.length +
    " sizes!)"
  );
}

module.exports = { getPriceInDollars, checkIfSizeIsAvailable, getProductHeading };
