a=[1,2,3,4,5];
sum=0;
for(i=0;i<a.length;i++){
    sum+=a[i];
}
console.log(`the sum of array elements is :${sum}`);

//even numbers from an array
a=[1,2,3,4,5,6,7,8,9,10];
even_numbers=[];
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        even_numbers.push(a[i]);
    }
}
console.log(`the even numbers in the array are :${even_numbers}`);

//create an object for a student and check if the student has passed or failed
let student={
    name:"Alanraj",
    marks:75
};
if(student.marks>=50){
    console.log(`${student.name} has passed`);
}else{
    console.log(`${student.name} has failed`);
}

// print the name of employees whose salary is greater than 30000
let employees=[
    {name:"Alan", salary:25000},
    {name:"Dheeraj", salary:35000},
    {name:"Hari", salary:40000},
    {name:"Bilal", salary:28000}
];
for(i=0;i<employees.length;i++){
    if(employees[i].salary>30000){
        console.log(employees[i].name);
    }

}

// students that have greater than 50 marks
let students=[
    {name:"Alan", marks:45},
    {name:"Dheeraj", marks:55},
    {name:"Hari", marks:65},
    {name:"Bilal", marks:35}
];
for(i=0;i<students.length;i++){
    if(students[i].marks>50){
        console.log(students[i].name);
    }
}

