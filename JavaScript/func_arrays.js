// function showAlert() {
//   window.alert("Jai Siya Ram");
// }

// showAlert();

function sum(a, b) {
  // console.log(a + b);
  console.log(a, b);
  return a + b;
}
var c = sum(5, 6, 7);
console.log(c);

/* Function Hoisting */
hoistDemo();
function hoistDemo() {
  console.log("Hoisted");
  console.log(i);
  var i = 10;
}
console.log(j);
var j = 10;

x = 5;
console.log(x);
var x;

function fib(n) {
  var c = 0;
  var m = n;
  if (n == 0) {
    console.log("true");
  } else if (n == 1) {
    console.log("true");
  } else {
    var f1 = 0;
    var f2 = 1;
    for (i = 2; i <= n; i++) {
      c = f1 + f2;
      f1 = f2;
      f2 = c;
      if (c == m) {
        console.log("true");
        return;
      }
    }
    console.log("false");
  }
}

// console.log(fib);

fib(13);

function multiply(x1, x2) {
  return x1 * x2;
}

console.log(multiply);

/* Functions and Scope */
var name1 = "scope";
console.log(name1);

function scopeDemo() {
  //var i1 = 10;
  //console.log(i1);
  //  var name1 = "function";
  console.log(name1);
}
scopeDemo();
//console.log(i1);
console.log(name1);

function c1() {
  console.log("Inside c");
}

function b() {
  c1();
  console.log("Inside b");
}

function a() {
  b();
  console.log("Inside a");
}

a();
console.log("Global Context");

/* Functions Within Functions */

var name2 = "aman";

function outer() {
  var outerVar = 10;
  var name2 = "Payal";
  function inner() {
    var innerVar = 20;
    var name2 = "Kajal";
    console.log(name2);
  }
  inner();
  console.log(name2);
}

outer();
console.log(name2);
function sqSum(a, b) {
  function ssquare(x) {
    return x * x;
  }
  return ssquare(a) + ssquare(b);
}

console.log(sqSum(1, 2));

/* Functions Expressions */
var factorial = function fact(n) {
  var ans = 1;
  for (i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};
console.log(factorial);

console.log(factorial(5));

var factorial2 = function (n) {
  var ans = 1;
  for (i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};

console.log(factorial2);

/* Function Declaration and Expressions */

/*console.log(fact(4));
factorial = function fact(n){
  var ans = 1;
  for(var i= 1; i <= n; i++){
    ans = ans *i;
  }
  return ans;
}
console.log(factorial(4));
function fact(n){
  var ans = 1;
  for(var i = 1;i <= n; i++){
    ans = ans *i;
  }
  return ans;
}

var factorial; 
= function fact(n){
  var ans = 1;
  for(var i= 1; i <= n; i++){
    ans = ans *i;
  }
  return ans;
}*/

function ncr(n, r, factorial) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(ncr(5, 2, factorial));
