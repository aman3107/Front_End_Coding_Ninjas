var arr = [1, 2, 3, 4];
var arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr);
console.log(arr1);
arr[2] = 40;
arr1[3] = 90;

var arr2 = new Array();
var arr3 = new Array(2);
console.log(arr3);
var arr4 = new Array(2, 3);
console.log(arr4);

/* Functions on Arrays */
var arr = [10, "abc", 10.3, true];
console.log(arr);

var arr = [4, 5, 6, 7];
console.log(arr.length);
arr.push(8);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(0);
console.log(arr);
arr.shift(1);
console.log(arr);
arr.unshift(8);
console.log(arr);
arr.shift(10);
console.log(arr);

/* Splice Function */
var asp = [1, 2, 3, 4, 5, 6];
asp.splice(1, 2);
console.log(asp);
asp.splice(4, 0, 7, 8, 9);
console.log(asp);
asp.splice(2, 0, 10);
console.log(asp);
asp.splice(2, 3, 0, 2, 3);
console.log(asp);

/* Iterating Over Arrays */
var ai = [2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < ai.length; i++) {
//   console.log(ai[i]);
// }

function print(element, index, array) {
  console.log(element, index, array);
}

ai.forEach(print);
