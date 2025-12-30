function greeting(){
    console.log("Hello Bro");
}
greeting();
// function for passing name as parameter
function greet(name){
    console.log(`Hello ${name}`);
}
greet("Dheeraj");

// function for adding two numbers
let a=10;
let b=20;
function add(a,b){
    return a+b;
}
let sum=add(a,b);
console.log(`the sum of ${a} and ${b} is :${sum}`);

// function can be stored in a variable
let multiply=function(x,y){
    return x*y;
}

console.log("multiplication result is:",multiply(5,6));
// arrow function for subtracting two numbers
let subtract=(x,y)=>{
    return x-y;
}
console.log("subtraction result is:",subtract(10,4));

// hoisting example
console.log("The value of d is:",d);
var d=50;
console.log("The value of d after initialization is:",d);