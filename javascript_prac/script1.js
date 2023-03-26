// var a = 10;
// setTimeout(function(){
// console.log(a);
// },1000);

// var c = "script1" ;
// console.log(c) ;

// function Student(name){
//     this.name = name ;
//     console.log(this) ;
// }
// var student1 = new Student("Raj") ;
// console.log(student1.name);

// const CN = {
//     name: "Coding Ninjas"
//  };
 
//  function print(){
//     console.log(this) ;
//  }
 
//  print.bind(CN)() ;

// var joe = {
//     name: "Joe"
//  }; 
 
//  function print(){
//     console.log(this) ; 
//  }

// print.bind(joe)();

// var joe = {
//     hello: function (){
//        console.log(this);
//     }
// }

// var globalHello1 = joe.hello.bind(joe) ;
// var globalHello2 = joe.hello ;
// globalHello1();
// globalHello2.bind(joe)();

// var joe = {
//     name: "Joe"
// }; 

// function print(){
//     console.log(this);
// }

// print(joe);

// var juliet = {
//     name: "Juliet",
//     hello: function(){
//         console.log("Hi, I am " + this.name);
//     }
// }

// juliet.hello();

// const billy = {
//     name: "Billy Jol", 
//     outer: function() {
//          function inner(){
//          console.log(this);
//        }     
//        inner();
//     }
//   }
//   billy.outer();

// new (joe.hello.bind(joe))();

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     return;
//     }
//     var user = User("Julie");
//     console.log(user);

// function User(name) {
//     this.isAdmin = false;
//   }
//   var user = new User("James");
//   console.log(user);

// function func1(){
//     var a = "I am func1";
//     console.log(a);
//  }



//  function func2(b) {
//     this.b = b;
//     return b;
//  }

//  function func3(){
//     this.c = "I am func3";
//     this.print = function(){
//        console.log(this);
//     }
// }

// function Person(name){
//     this.name = name;
//     this.print = function(){
//         console.log(this);
//     }
// }
// var a = new Person("A");
// var b = new Person("B");


// function Person(name) {
//     this.name = name;
//     }
//     var p1 = new Person("Joy");
//     var p2 = new Person("Julie");
//     Person.prototype.getName = function() { return this.name };
//     console.log(p1.getName() + " is friend with " + p2.getName());

// function Person(name) {
//     this.name = name;
//   }
//   var p1 = new Person("Joy");
//   var p2 = new Person("Julie");
  
//   Person.prototype.getName = function() { return this.name };
  
//   p1.getName = function() {return 'John'};
//   console.log(p1.getName() + " is friend with " + p2.getName());
//   p2.getName = function() {return 'Jonson'};

// var a = new Boolean();
// console.log(Object.getPrototypeOf(a));

// function Person(age) {
//     this.age = age;
//     }
//     var p1 = new Person(9);
//     console.log(Person.hasOwnProperty("name"));

// function A(){
//     this.name =  "A";
// }

// Object.prototype.color = "red";
// var d = new A();

// console.log(d.color) ;

// function A(){
//     this.name = "A";
//     this.color = "blue";
// }
// function B(){
//     this.name = "B";
// }
// function C(){
//     this.name =  "C";
// }

// let obj1 = new A() ;
// let obj2 = new B() ;
// let obj3 = new Object();
// let obj4 = new C();

// A.prototype.color = "red" ;
// B.prototype.color = "red" ;
// Object.prototype.color = "pink" ;

// console.log(obj1.color, obj2.color, obj4.color, obj3.color);

// const object1 = new Object();
// object1.property1 = 42;
// console.log(Object());

// const object1 = new Object();
// object1.property1 = 42;
// console.log(object1);

// class Person {
//     constructor(name) { this.name = name; }
//  }
//  console.log(typeof( Person));

// var Person = class {
//     constructor() {}
//     sayHello() {
//       return 'Hello!';
//     }
//   };
//   var instance = new Person();
//   console.log(instance.sayHello()+" "+Person.name);

// class Vehicle{
//     constructor ( doors, wheels){
//         this.doors = doors;
//         this.wheels = wheels;
//     }
//     }
//     class bus extends Vehicle{
//         constructor(windows){
//             this.windows = windows;
//         }
//     }
//     var b = new bus(10);
//     console.log(bus.windows);

// function bike() {
//     console.log(this.name);
//    }
//    var name = "Ninja";
//    bike();


// "use strict"
// function bike() {
//     console.log(this.name);
// }
// var name = "Ninja";
// bike();

// function Abc() {
//     "use strict"
//     this.a = 25;
//     return {a: 35, b: 44};
//     }
//     var obj = new Abc();
//     console.log(obj.a, obj.b);

// function User(name) {
//     this.isAdmin = false;
//     return name;
//     }
//     var user = User("Jack");
//     console.log(user);

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         this._name = value;
//     }
//     }
//     var person = new Person("James");

// var ninja = {
//     name: 'Ninja',
//     getName: function() {
//         var name = this.name;
//         return name;
//       }
//     };
//     var funcName = function(snack, hobby) {
//     console.log(this.getName() + ' loves ' + snack + ' and ' + hobby);
//     };
//     funcName.call(ninja,'sushi', 'algorithms'); 
//     funcName.apply(ninja,['sushi', 'algorithms']);

// function MyClass() {}

// const obj1 = new MyClass();
// const obj2 = MyClass();

// console.log(obj1);
// console.log(obj2);

// class MyClass {
//     constructor(x) {
//         console.log("constructor is called!");
//         this.x=x;
//     }
//  }
 
//  const obj = new MyClass();
//  console.log(obj.x);

// var x = new Promise(() => {})
// console.log(x)

// async function x() {
//     try{
//       await Promise.reject("Rejected!!")
//     } catch(e) {
//       console.log(e)
//     }
//   }

// x();

// const promise1 = new Promise((resolve,reject) => { setTimeout(() => { resolve('a') }) })

// const promise2 = new Promise((resolve,reject) => { resolve('b') })

// const promise3 = new Promise((resolve,reject) => { setTimeout(() => { resolve('c') },10) })

// Promise.all([promise1,promise2,promise3]) .then((msg) => { console.log(msg) })

// async function x() {
//     try{
//       await Promise.reject("Rejected!!")
//     } catch(e) {
//       console.log(e)
//     }
//   }
  
//   x()
//   .catch((msg) => {
//     console.log(msg)
//   })

// x((a,b,c) => {
//     return a+b+c
//   },2,3,6)
  
//   function x(callback,a,b,c) {
//     let str = ""
//     setTimeout(() => {
//       str += "x"
//     });
  
//     str += callback(a,b,c)
//     console.log(str)
//   }

// function x() {
//     Promise.reject('x')
//     return Promise.resolve('y')
//   }
  
//   async function log() {
//     const val =  await x()
//     console.log(val)
//   }
  
//   log()

// const promise = new Promise((resolve,reject) => {
//     resolve('a')
//   })
  
//   setTimeout(() => {
//     console.log('b')
//   })
  
//   promise.then((msg) => {
//     console.log(msg)
//   })

// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('a')
//     })
//   })
  
//   const promise2 = new Promise((resolve,reject) => {
//     resolve('b')
//   })
  
//   const promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('c')
//     },10)
//   })
  
  
//   Promise.race([promise1,promise2,promise3])
//   .then((msg) => {
//     console.log(msg)
//  })

var students = ['Simran', 'Sakshi', 'Komal', 'Ishita', 'Manya'];
var selected = students.slice(-4,-2);

let numbers = [-23,12, -17, 19, -20, 0, 1,-12, -5, 5, 20];
let even = numbers.filter(value => value%2==0);
console.log(even);

var greet = document.createElement("p");
greet.innerHTML = `Hello ${name}`;
var name = "Ninja";
document.body.append(greet);
document.body.append(`Nice to meet you, ${name}!`);