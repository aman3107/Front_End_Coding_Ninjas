// console.log("Hello World");

// var a =10;
// function foo(){
// var a = 20;
// console.log(a);
// console.log(window.a);    
// }
// console.log(a);
// window.foo();

// function foo(a){
//     a = 20;
//     console.log(a);
//     }
//     foo(10);    
//     console.log(a);

// var a =10;
// var b;
// function outer(){
//     var b = 30;
//     function inner(a){
//         var a = 30;
//         console.log(a++ ,b++)
//         }
//         console.log(a, ++b);
//         inner(a);
// }
// outer();
// console.log(a++,b++);

// var a =10;
// function outer(){
//     var a = 20;
//     var b = 30;
//     function inner(a){
//         var a = 30;
//         console.log(a++ ,b++)
//         }
//     console.log(a, ++b);
//     inner(a);
// }
// outer();
// console.log(a++);

// function greet(user) {
//     var user = "Dear " + user;
//     return function(greeting="Hello! ") {
//         console.log(greeting+user);
//     }
// }

// var sayHello = greet("Saloni");
// sayHello();
// function foo() {
//     var a = 8;
//     function bar() {
//         console.log(a);
//     }
//     var a = a+2;
//     return bar;
// }
// var fun = foo();
// fun();

// function cart() {
//     let items = 0;
//     return {
//        addItem: function () {
//             items++;
//         },
//         getItem: function () {
//             return items;
//         }
//     };
// }

// const closure = cart();
// closure.addItem();
// closure.addItem();
// closure.addItem();
// console.log(closure.getItem());

// var arguments = [1, 2, 3];
// var arr = () => arguments[2];
// arr();
// function foo(n) {
//   var f = () => arguments[0] + n; 
//   return f();
// }
// console.log(foo(3));    

// let People = function(person, age) { 
//     this.person = person; 
//     this.age = age; 
//     this.info = function() { 
//         console.log(this);  
//        setTimeout(() => {  
//         console.log(this.person + " is " + this.age + " years old"); 
//        }, 3000); 
//     } 
// }  
// let person1 = new People('John', 21); 
// person1.info();

// var Sequence = (function sequenceIIFE() {
//     var current = 0;
//     return {
//         getCurrentValue: function() {
//             return current;
//         },  
//         getNextValue: function() {
//             current = current + 1;
//             return current;
//         }
//    };
// }());
// console.log(Sequence.getNextValue());
// console.log(Sequence.getNextValue());
// console.log(Sequence.getCurrentValue());    

// function makeArmy() {
//     let shooters = [];
//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;    
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i ); 
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
//   let counter1 = makeCounter();
//   let counter2 = makeCounter();
//   console.log( counter1() ); 
//   console.log( counter1() ); 
//   console.log( counter2() ); 

// {
//     let message = "Hello";
//     console.log(message); 
//   }
//   console.log(message);

// let user = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function(){
//         return() => {
//             console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
//         }
//     }    
//  }
//  user.getFullName()();

// let user = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function(){
//         return function(){
//             console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
//         }
//     }    
//  }
//  user.getFullName()();

// console.log((function(x, f = () => x) {
//     var x;
//     var y = x;
//     x = 2;
//     return [x, y, f()];
//   })(1));

// var func = (
//     a,
//     b,
//     c
//   ) => (
//     1
//   );

// for(var a = 1; a < 5; a++){
//     setTimeout(function(){
//     console.log(a)}, 1000);
// } 

// var add = (function ( ) {
//     var counter = 0;
//     return function ( ) {
//          counter += 1; 
//          return counter;
//   }
//   })();    
//   console.log(add());
//   console.log(add());
//   console.log(add());

// function Adder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
//   var add5 = Adder(5);
//   var add10 = Adder(10);
//   console.log(add5(2));
//   console.log(add10(2));

// {
//     var a = 10 ;
//     let b = 20 ;
//     console.log(b);
// }
  
//   c = 30;
  
//   if(c===30){
//       let d = 50 ;
//       console.log(d) ;
//   }
//   else{
//        var e = 20;
//        console.log(e) ;
//   }

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(e);

// var a = (function(){
//     return typeof arguments;
//  })();
//  console.log(a);

// var a = 20;
// console.log(a);

var c = "script2" ;
console.log(c) ;