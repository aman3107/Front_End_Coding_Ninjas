// var a = 10;
// console.log(a);

// window.alert("Hello Aman");
// window.alert("jai Shree Ram");
var a = 5;
var b = 10;
/*Do not change the code above*/

//Write your code here
a = a + b;
console.log(a);
b = a - b;
console.log(b);
a = a - b;

/***********Do not change the code below 👇*******/
console.log("a is " + a);
console.log("b is " + b);

/* Null and Undefined */
var address;
console.log(address);
address = null;
console.log(address);

/* Type Of */

var a = 1 / 0;
console.log(a);

console.log(Math.pow(10, 2));
console.log(Math.pow(10, 100));
console.log(Math.pow(10, 1000));
console.log(Number.MAX_VALUE);
console.log(Math.sqrt(-1));
console.log(parseInt("100"));
console.log(parseInt("aaa"));

/* Operators */
console.log(10 + 2);
console.log(13 / 2);
console.log(15.5 % 2);
var o = 10;
o += 2;
console.log(o);
o *= 2;
console.log(o);
o /= 2;
console.log(o);
o++;
console.log(o);
++o;
console.log(o);
o--;
console.log(o);
--o;
console.log(o);
console.log("Hello" + " World");
console.log("Hello" + 1);
console.log("1" + 1);
console.log("1" - 1);

/* == === */
console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");

/* Conditionals */

var x = null;

if (x) {
  console.log("True");
} else {
  console.log("False");
}

// if (x > 0) {
//   console.log("Positive");
// } else if (x < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

/* Loops */
var i;
if (typeof i) {
  console.log("true");
} else {
  console.log("false");
}

/*while (i <= 5) {
  console.log(i);
  i++;
}
*/

/*for (i = 1; i <= 5; i++) {
  console.log(i);
}
*/

var yourWeight = 58;
var yourHeight = 1.6;

var bmi = yourWeight / yourHeight ** 2;

console.log("Your Body Mass Index is: " + bmi + " and");

if (bmi < 18.5) {
  console.log("You are Underweight.");
} else if (bmi >= 18.6 && bmi <= 24.9) {
  console.log("You are Healthy.");
} else if (bmi >= 25 && bmi <= 25.9) {
  console.log("You are Overweight.");
} else if (bmi >= 30) {
  console.log("You are Obese.");
} else {
  console.log("Invalid input.");
}
