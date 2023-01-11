/* Objects */

var student = {
  name: "abc",
  rollNo: 1,
  marks: 90,
};
/*
console.log(student);
console.log(student.marks);
console.log(student.name);
console.log(student.sem);
student.sem = 4;
console.log(student);
*/

/* Square Bracket Notation */

// var obj = {}; //Object Creation
// var obj1 = new Object(); // Object Creation
console.log(student["marks"]);

var sq = {
  "-name1": "Aman",
  age: 20,
};

// Through . notation we cannot access -name1
//console.log(sq.-name1);

// Through [] notation we can access -name1
//console.log(sq["-name1"]);

function printProperty(obj, prop) {
  console.log(obj[prop]);
}

printProperty(student, "marks");

/* Deleting Properties */

console.log(delete sq["-name1"]);
console.log(delete sq.age);

/* How are Objects Stored */

var obj1 = {
  p1: 20,
};

var obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.p2 = 30;

var obj3 = new Object();
obj3 = obj1;
obj3.p3 = 40;

/* Iterating Over Objects */

//var keys = Object.getOwnPropertyNames(student);
var keys = Object.keys(student);

/*for (var prop in student) {
  console.log(student[prop]);
}
*/

/* Nested Objects */
var student = {
  name: "abc",
  rollNo: 1,
  marks: 90,
  address: {
    city: "Meerut",
    pinCode: 250002,
  },
};

console.log(student.address.city);
console.log(student.address["pinCode"]);

/* Arrays and Objects */

var arr = [20, 30, 40, 50];

var objA = {
  0: 20,
  1: 30,
  2: 40,
  3: 50,
};

/* Iterating Over Arrays using for in */

// arr.prop1 = "demo";
// console.log(arr);
// arr[10] = "man";
// console.log(arr);
for (var i in arr) {
  console.log(i);
}

/* Timing Events */
var sec = 1;
function sayHello() {
  console.log("hello", sec);
  sec++;
  if (sec == 6) {
    clearInterval(id);
  }
}

//setTimeout(sayHello, 3000);
var id = setInterval(sayHello);

/* Count Down Timer */
var count = 10;
function countDown() {
  console.log(count);
  count--;
  if (count == 0) {
    console.log("Times Up!");
    clearInterval(id1);
    return;
  }
}

var id1 = setInterval(countDown, 1000);

/* Pass By value and Pass by reference */

function f(a, b, c) {
  a = 3;
  b.push("bob");
  c.first = false;
}

var x = 4;
var y = ["raj", "rahul"];
var z = {
  first: true,
};

f(x, y, z);
console.log(x, y, z);

/* Deep Copy and Shallow Copy */

var susan = {
  name: "susan",
  age: 30,
};

//Shallow Copy
var raj = susan;
raj.name = "raj";
console.log(raj);

// Deep Copy

var aman = { ...susan };
aman.name = "aman";
console.log(aman);

// another way to create deep copy

var kane = Object.assign({}, susan);
kane.name = "kane";
console.log(kane);

var arrc = [1, 2, 3, 4];
var arrd = [...arrc];
arrd.push("20");

var arrm = arrc.map((el) => el);
