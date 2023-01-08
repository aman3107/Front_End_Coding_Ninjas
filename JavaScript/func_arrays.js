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
