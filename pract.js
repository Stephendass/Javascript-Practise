var a = 10;
var b = 20;
console.log(a+b);

let c = 20;
console.log(c);

{
    var d = 10;
}
console.log(d);

{
    let e = 35;
}
// console.log(e);
// Let is block-scoped. 
// Var can be declared and accessed globally.

// const f = 15;
// f = 20;
// console.log(f);
// a keyword used to declare a variable that cannot be reassigned a new value.


/* 
    1.Create a variable named "Price" and set it toa specific Price value.
    2.Create a variable named "Product" and set it to a product name.
    3.Create a varibale named "Tax" and set it to a specifi tax value.
    4.Print the name of the Product.
    5.Calculate the total price amount, inlucding tax(total=Price + Tax) and then print it.
*/
var price = 20;
var product = "Raja";
var tax = 18
console.log(product);
total = price + tax;
console.log(total);

/**
* Declare a variable named fruitName
* Declare a variable named "Count"
* Declare a varibale named "Price" and set it to the price of the fruit.
* Declare a variable named "total" and calculate it by multiplying the "Count" by the "Price"
* Print the name of the fruit.
* Print the total price of th fruits.  
 */

var fruitName = "Apple"
var count = 10
var price = 100
var total = count * price;
console.log(fruitName)
console.log(total)

var a = 10;
a++;

console.log(a);


function samsung()
{
    var a = 10;
    var b = 20;
    console.log(a + b);
}
samsung();

var fActor = "Vijay";
var player = "Dhoni";
var movie = "Soorarai Potru";

function favourite(){
    console.log("Favourite Actor: " + fActor);
    console.log("Favourite Player : " + player);
    console.log("Favourite Movie : " + movie);
}
favourite();


/*Parameters
    In Javascript, Parameters => variable or placeholders that you define 
    when declaring a function. These parameters serve as inputs to hte function and allow you to pass data into
    th funtion when you call it..
*/
function add(a, b){
    console.log(a+b)
}
add(15, 30)