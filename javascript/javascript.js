// document.write("This is an external JavaScript file!");
// var a=10;
// var b="abhijith";
// var c=20;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a+c);
// console.log(a-c);
// console.log(a*c);
// console.log(a/c);

// // comparison operators
// console.log(a==c);
// console.log(a!=c);
// console.log(a===c);
// console.log(a!==c);
// console.log(a>c);
// console.log(a<c);
// console.log(a>=c);
// console.log(a<=c);

// // logical operators

// console.log((a<c) && (a==c));
// console.log((a<c) || (a==c));
// console.log(!(a<c));

let score = 60;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
}
console.log(`Your score is : ${score}`);

let e=20;
if(e%2==0){
    console.log("even number");
}else{
    console.log("odd number");
}

console.log(`the number is :${e}`)

let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
}
console.log("--ternary operator--");
let age=18;
let eligibility= (age>=18) ? "eligible to vote" : "not eligible to vote";
console.log(eligibility);

for(let i=1;i<=5;i++){
    console.log(`Iteration number: ${i}`);
} 
do{
    console.log(`Do-While Iteration number: ${e}`);
    e++;
}   while(e<25);

console.log("--object syntax and structure --");
let person={
    name:"Dheeraj",
    age:22, 
    city:"kochi"

};
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`City: ${person.city}`);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
// modifying object properties
person.age=23;
console.log(`Updated Age: ${person.age}`);
// adding new property
person.address="keralavarma";
console.log(`address: ${person.address}`);
console.log(person);
// deleting property
delete person.city;
delete person.address;
console.log(person);
console.log("--array syntax and structure --");
let fruits=["apple","banana","orange","mango","grapes"];
console.log(fruits);
console.log(`First fruit: ${fruits[0]}`);
console.log(`Second fruit: ${fruits[1]}`);
console.log(`Third fruit: ${fruits[2]}`);
console.log(`Fourth fruit: ${fruits[3]}`);
console.log(`Fifth fruit: ${fruits[4]}`);

// modifying array element
fruits[2]="Guava";
console.log(`Modified Third fruit: ${fruits[2]}`);
console.log(fruits);
console.log(`Array Length: ${fruits.length}`);
// adding new element
fruits.push("Pineapple");
console.log(fruits);
// removing last element
fruits.pop();
console.log(fruits);
// removing first element
fruits.shift();
console.log(fruits);
// for loop through array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// for each loop
fruits.forEach(function(fruit){
    console.log(fruit);
});