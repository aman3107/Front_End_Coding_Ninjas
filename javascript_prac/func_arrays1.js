// function showAlert(msg){
//     alert(msg);
// }

// showAlert("Hello Aman!");

// function sum(a,b){
//     console.log(a,b);
//     return a+b;
// }

// console.log(sum(4,5,6));

/* Function Hoisting */

// j=10;
// console.log(j);

// function hoistDemo(){
//     console.log(i);
//     var i = 10;
// }

// hoistDemo();
// var j;

// hoistDemo1(20);

// function hoistDemo1(a){
//     console.log(a);
//     var a = 10;
// }

/* Functions and Scope */

// var name = "scope";
// console.log(name);

// function scopeDemo(){
//     var i = 10;
//     var name = "Aman";
//     console.log(name);
// }

// scopeDemo();
// console.log(name);
// console.log(i);

// function c(){
//     console.log("Inside c");
// }

// function b(){
//     c();
//     console.log("Inside b");

// }

// function a(){
//     b();
//     console.log("Inside a");
// }

// a();
// console.log("Global Context");

/* Fibonacci Series */

// function fib(n){
//     var c = 0;
//     var m = n;
//     if(n==0){
//         console.log("true");
//     }
//     else if(n==1){
//         console.log("true");
//     }
//     else{
//         var a = 0;
//         var b = 1;
//         for(var i = 2; i<=n;i++){
//             c = a+b;
//             a=b;
//             b=c;
//             if(c==n){
//                 console.log("true");
//                 return;
//             }
//         }
//         console.log("false")
//     }

// }

// fib(5);


/* Function Within Function */

// var name = "Global";

// function outer(){
//     var name = "outer";
//     var outerVar = 10;
//     function inner(){
//         var name = "inner";
//         var innerVar = 20;
//         console.log(name);
//     }
//     inner();
//     console.log(name);
// }

// outer();
// console.log(name);

/* Function Expressions */

// var factorial = function fact(n){
//     var ans = 1;
//     for(var i = 1; i <=n; i++){
//         ans = ans * i;
//     }
//     return ans;
// };

// var res = factorial(5);
// console.log(factorial)
// console.log(res);

// var factorial2 = function (n){
//     var ans = 1;
//     for(var i = 1; i <= n; i++){
//         ans = ans * i;
//     }
//     return ans;
// }

// console.log(factorial2);
// console.log(factorial2(5));


/* Function Declaration and Expression */

// console.log(fact(5));
// console.log(factorial(5));

// function fact(n){
//     var ans = 1;
//     for(var i = 1; i <= n; i++){
//         ans = ans * i;
//     }
//     return ans;
// }

// var factorial = function fact(n){
//     var ans = 1;
//     for(var i = 1; i <= n; i++){
//         ans = ans * i;
//     }
//     return ans;
// }

/* Passing Function as Arguments */

// function fact(n){
//     var ans = 1;
//     for(var i = 1; i <= n; i++){
//         ans = ans * i;
//     }

//     return ans;
// }

// function ncr(n,r,fact){
//     return fact(n)/(fact(r)*fact(n-r));
// }

// console.log(ncr(5,4,fact));

/* Arrays */

// var arr = [1,2,3,4,5,6];
// console.log(arr);
// var arr1 = new Array(1,2,3,4,5,6);
// console.log(arr1);
// console.log(arr[3]);
// console.log(arr[6]);
// arr[2] = 90;
// console.log(arr);
// arr[7] = 100;
// console.log(arr);

// var arr2 = new Array(2);
// console.log(arr2);

/* Functions on Arrays */

// var arr = ["abc",10,true,10.5];
// console.log(arr);

// var arr1 = new Array(1000);
// console.log(arr1);

// console.log(arr.length);
// arr.push(20);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);

/* Splice Function */

// var arr = [1,2,3,4,5,6];
// console.log(arr);
// arr.splice(0,1);
// console.log(arr);

// arr.splice(2,0,7);
// console.log(arr);

// arr.splice(2,2,30,40);
// console.log(arr);

/* Iterating Over Arrays */

var arr = [1,2,3,4,5,6];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

var c = 0;
function print(element){
    console.log(element);
}

function sum(element){
    c = c + element;
    console.log(c);

}

arr.forEach(print);
arr.forEach(sum);



