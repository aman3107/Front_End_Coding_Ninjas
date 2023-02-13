console.log("Hello World");
var a = 10;
console.log(a);

/* Variables */
var av = 10;
console.log(av);
var bv = 10.6;
console.log(bv);

/* Null vs Identified */
var ai;
console.log(ai);
var address = null;
console.log(address);

/* type of Operator */

var inf = 1 / 0;
console.log(inf);
console.log(inf + 1);
console.log(inf * 1);
console.log(1 / inf);

console.log(Math.pow(10, 1000));
console.log(Number.MAX_VALUE);
console.log(Math.sqrt(-1));
console.log(parseInt("aaaaaa"));

var at = 10;
console.log(typeof at);
at = true;
console.log(typeof at);
at = null;
console.log(typeof at);
console.log(typeof inf);
at = NaN;
console.log(typeof at);

/* Swap the value */
var asw = 10;
var bsw = 20;
asw = asw + bsw;
bsw = asw - bsw;
asw = asw - bsw;
console.log(asw, bsw);

/* Operators */
console.log(10 + 2);
console.log(13 / 2);
console.log(15.5 % 2);
var ao = 10;
ao += 2;
console.log(ao);
ao++;
console.log(ao);
var bo = 100;
console.log(ao == bo);
console.log(ao < 30 && bo >= 100);

/* Type Coercion */
console.log("Hello " + "World");
console.log("Hello " + 2);
console.log("1" + 1);
console.log("1" - 1);
console.log("1" * 5);
console.log("1" / 2);
console.log("1" > 0);

/* ==, === */

var ae = 10;
var be = "10";
console.log(ae - be === 0);

/* Conditionals */

var af = -1;
if (af > 0) {
  console.log("Positive");
} else if (af < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

/* For Loop */

var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

for (var j = 1; j <= 5; j++) {
  console.log(j);
}

/* Calculate BMI */

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
