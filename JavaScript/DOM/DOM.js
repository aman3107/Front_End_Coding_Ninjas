/* Accessing DOM */
// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(screen);
// console.log(window);
// console.log(document.body);
// console.log(window.screen);
// console.log(window.document);
// console.log(window.location);
// console.log(window.location === document.location);
// function test() {
//   return this;
// }

// console.log(test());

// console.log(test() == window);

/* Fetching Elements */

/*
var heading = document.getElementById("one");
heading.style.color = "red";
heading.style.backgroundColor = "green";

var headings = document.getElementsByTagName("h1");
console.log(headings);
headings[1].innerText = "Second Heading";

var para = document.getElementsByClassName("para");
para[0].style.backgroundColor = "cyan";

var query = document.querySelector("#one");
query.style.color = "yellow";
*/

/* Event Handling */

/*
function sayHello() {
  alert("Hello");
}

function sayBye() {
  alert("Bye!");
}
var helloButton = document.getElementById("btn2");
helloButton.addEventListener("click", sayHello);
helloButton.addEventListener("click", sayBye);

var box = document.getElementById("box");
var clickCount = document.getElementById("click-count");
var count = 0;


box.addEventListener("click", function () {
  count++;
  console.log(count);
  clickCount.innerText = count + " ";
});
*/

// var outerDiv = document.getElementById("outer");
// outerDiv.addEventListener("mouseover", function () {
//   console.log("Mouse Over");
// });

// outerDiv.addEventListener("mouseout", function () {
//   console.log("Mouse Out");
// });


console.log(typeof(number));

var arr1 = [1,2,-1,undefined,0,7];
var arr2 =  [];
for(var i in arr1){
  if(typeof(arr1[i]) === 'number' && arr1[i] > 0){
    arr2.push(arr1[i]*2);
  }
}

console.log(arr2);