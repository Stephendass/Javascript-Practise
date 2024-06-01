//Eg1
var price = 5000000;
var product = 'BMW'
const tax = 18;

// console.log(product)
// var total = price + tax;

// console.log(total)
// Eg2

var fruitName = "Apple"
var count = 2
var priceOfFruit = 100;

var total = count * priceOfFruit;

console.log(fruitName)
console.log(total)

let x = 5;

console.log(x);
let y = ++x;


console.log(x);
console.log(y);

var a = 10;
var b = 20;
function add() {
    return a + b;
}
add();
// let result = add();
console.log(add());


//Eg.1 ==> Print using JS Functions
var favActor = "Kamal Hasan";
var favPlayer = "MS Dhoni";
var movie = "Anbe Sivam";
function favDetails() {
    console.log("Favourite Actor: " + favActor)
    console.log("Favourite Player: " + favPlayer)
    console.log("Favourite Movie: " + movie)
}
favDetails();

//Eg.2 ==> Print using JS Functions
function area(a, b) {
    console.log(a * b);
}
area(10, 20)

//Eg: Javascript Return Type
// The return statement stops the execution of a function and returns a value.

let a = 10;
let b = 20;
function add(a, b) {
    return a + b;
}
let total = add(a, b);
console.log(total);


//Conditional Statement

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

function testNum(l) {
    let result;
    if (l > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
  // Expected output: "NOT positive"