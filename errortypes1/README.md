# Understanding Error Types in JavaScript
* Syntax Errors - Errors that occur when you violate the rules of writing JavaScript.
* Type Errors - Errors that occur when you try to use the wrong types of variables, or access a variable that does not exist.
* Silent Errors - Errors that occur when your code does not throw any errors, but does not produce the expected result.
* Reference Errors - Errors that occur when you try to access a variable that does not exist.
* Range Errors - Errors that occur when you manipulate a variable outside of its valid range.
* Runtime Errors - Errors that occur when the script is running.
* Logic Errors - Errors that occur when the script does not do what it is meant to do.
<hr/>

The following code will throw a reference error because the variable is not defined:
```javascript
var x = 10;
console.log(y);
```
The following code will throw a type error because it is trying to use a string method on a number:
```javascript
var x = 10;
console.log(x.toUpperCase());
```
The following code will throw a syntax error because it is missing a closing parenthesis:
```javascript
var x = 10;
console.log(x.toUppercase();
```
The following code will throw a range error because it is trying to access an array element that does not exist:
```javascript
var x = [1, 2, 3];
console.log(x[3]);
```
The following code will throw a runtime error because it is trying to access a property of a variable that is undefined:
```javascript
var x;
console.log(x.y);
```
[link to code examples](error-types.js)
