/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

// hint: check the syntax! is it missing something?
function getPriceInDollars(product) {
  let price = (product.priceInCents / 100).toFixed(2);
  return "$" + price
}

// `size` is a number between 0 and 16.
// hint: remember that length is a property and not a function
function checkIfSizeIsAvailable(product, size) {
  let sizes = [];
  for (let i = 0; i < product.availableSizes.length; i++) {
    if (product.availableSizes[i] === size) {
 
      sizes.push(product.availableSizes[i])
        if( sizes.length >0){
      }
  return true;
    }
  }

  return false;
  }


// hint: is the name of the function correct?
function getProductHeading(product) {
  let price = (product.priceInCents / 100).toFixed(2);
  return (
    product.name +
    ": $" +
    price +
    " (Available in " +
    product.availableSizes.length +
    " sizes!)"
  );
}
//const actual = getProductHeading(product);
      //const expected = "Court Sneaker: $98.00 (Available in 8 sizes!)";


  
      

  
  

module.exports = { getPriceInDollars, checkIfSizeIsAvailable, getProductHeading };
