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
  return "$" + (product.priceInCents / 100).toFixed(2);
}

//Syntax error: product.sizes is not a function: remove ().
//TypeError: Cannot read property 'length' of undefined: change to product.availableSizes.length
function checkIfSizeIsAvailable(product, size) {
  let sizes = [];
  //for(let i = 0; i <product.sizes(); i++){}
  for (let i =0; i<product.availableSizes.length; i++){
    if (product.availableSizes[i] === size){
      sizes.push(product.availableSizes[i])
      if(sizes.length > 0){
        return true;
      }
    }
    
    
  }
 return false;
}
//Reference error: getPrice is not defined: change to getPriceInDollars
function getProductHeading(product) {
  //let price = getPrice(product);
  let price = getPriceInDollars(product);
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
