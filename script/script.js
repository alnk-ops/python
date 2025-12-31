// import {add ,PI } from "./script2.js";

// console.log(add(2,3));
// console.log(PI);

class animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }

}
class dog extends animal{
    constructor(name,sound,breed){
        super(name,sound);
        this.breed=breed;
    }       

}
let dog1=new dog("tommy","bark","bulldog");
console.log(dog1);

// function showmessage(){
//     console.log("hello world");
// }
// setTimeout(showmessage,2000);
// setTimeout(function(){
//     console.log("hello world");
// },3000);

// printing numbers from 1 to 5 after every 1 second
// for(let i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);      
// }

// setInterval
// let count=1;
// let intervalId=setInterval(function(){
//     console.log("count: "+count);
//     count++;
// },1000);

// to stop the interval after 5 counts
// setTimeout(function(){
//     clearInterval(intervalId);
//     console.log("Interval cleared");
// },16000);

const output=document.getElementById("Heading").innerHTML = "Hello World!";
const box=document.querySelector(".Box").innerHTML = "This is a box.";
const paragraph=document.getElementsByTagName("p")[0].innerHTML = "This is the first paragraph.";
console.log(output);
console.log(box);
console.log(paragraph);
// document.write("this is the end");

function saymyname(){
    alert("Your name is Haridath");
}
function details(){
    alert("Haridath is a student of ABC school. He loves coding and playing football.");
}
let button=document.getElementById("myButton");
button.addEventListener("click",details);




