/* Objects */

// var student = {
//     name : "Aman",
//     rollNo : 1,
//     marks : 90
// };

// console.log(student);
// console.log(typeof(student['name']));
// console.log(student.marks);
// student.marks = 100;
// console.log(student);
// console.log(student.sem);
// student.sem = "2";
// console.log(student)

/* Square Bracket Notation */

// var student = {
//     "-name": "Aman",
//     rollNo: 20,
//     marks: 90,
//     "2": "two"
// };

// console.log(student);
// console.log(student['marks']);
// console.log(student);
// console.log(student["-name"]);
// console.log(student["2"]);

// function printProperty(obj, prop){
//     console.log(obj[prop]);
// }

// printProperty(student,"marks");
// console.log(student.-name);
// console.log(student.2);

/* Deleting Properties */

// delete student.marks;
// console.log(student);
// delete student["2"];
// console.log(student);


/* How are objects stored */

// var obj1 = {
//     p1: 10
// };

// var obj2 = obj1;

// console.log(obj1);
// console.log(obj2);
// obj2.p1 = 20;
// console.log(obj2);
// console.log(obj1);
// console.log(obj1 === obj2);
// obj2 = {
//     p1 : 20
// };

// console.log(obj1 == obj2);
// var obj3 = new Object(obj1);
// console.log(obj3);

/* Iterating Over Objects */

// var student = {
//     name: "Aman",
//     rollNo: 20,
//     marks: 100,
// };

// for(var prop in student){
//     console.log(prop,":",student[prop]);
// }

// var keys = Object.keys(student);
// var prop = Object.getOwnPropertyNames(student);
// console.log(keys);
// console.log(prop);

/* Nested Objects */

// var student = {
//     name: "Aman",
//     rollNo: 20,
//     marks: 100,
//     address:{
//         city: "Meerut",
//         PinCode: 250002,
//         Country: "India"
//     }
// };

// console.log(student);
// console.log(student.address);
// console.log(student.address.city);

/* Arrays and Objects */

// var arr = [10,20,30,40];
// console.log(arr);
// var arr1 = {
//     "0": 10,
//     "1": 20,
//     "2": 30,
// }

// console.log(arr1);
// console.log(arr1.length);
// console.log(arr.length);
// arr[6] = "Aman";
// console.log(arr.length);

// for(var i in arr){
//     console.log(i);
// }


/* Iterating over array using for in */

// var arr =[10,20,30,40];

// function print(element){
//     console.log(element);
// }

// var obj = {
//     "0": 10,
//     "1": 20,
//     "2":30,
//     "3":40
// };

// obj.prop1 = "demo";
// arr.prop1 = "demo";
// arr.forEach(print);

// for(var i in arr){
//     console.log(i);
// }

/* Timing Events */

// var sec = 10;

// function sayHello(){
//     console.log("Hello", sec);
//     sec--;
//     if(sec == 0){
//         clearInterval(id);
//     }
// }

// setTimeout(sayHello, 2000);
// var id = setInterval(sayHello,1000);

/* Countdown Timer */

// var count = 10;

// function timer(){
//     console.log(count);
//     count--;
//     if(count == 0){
//         clearInterval(id);
//     }
// }

// var id = setInterval(timer,1000);

/* Pass by value vs Pass by reference */

// function f(a,b,c){
//     a = 3;
//     b.push("bob");
//     c.first = "false";
// }

// var x = 4;
// var y = ["aman","payal"];
// var z = {
//     first:"true"
// };

// f(x,y,z);
// console.log(x,y,z);

/* Deep Copy and Shallow Copy */

// const a = 4;
// const b = a;
// let c = a;
// c = 10;

// var susan = {
//     name: "Susan",
//     age: 30,
// }

// var raj = susan;
// console.log(raj);
// raj.age = 40;
// console.log(raj);

// var aman = {...susan};
// aman.name = "Aman";
// console.log(aman);
// console.log(susan);

// var payal = Object.assign({},susan);
// payal.name = "Payal";
// console.log(payal);
// console.log(susan);

// var arr = [1,2,3,4];
// var arr1 = arr;
// arr1.push(5);
// console.log(arr);
// console.log(arr1);
// var arr2 = [...arr];
// arr2.push(6);
// console.log(arr);
// console.log(arr2);

// var arr3 = arr.map(el => el);
// arr3.pop();
// console.log(arr3);
// console.log(arr);

/* Create Timer */

function timer(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Hello Ninjas!");
}
timer()