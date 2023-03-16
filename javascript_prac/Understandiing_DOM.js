/* DOM */

// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(window);
// console.log(window.screen);
// console.log(window.document);

/* Fetching Elements */

// console.log(document.getElementById('one'));

// var heading = document.getElementById('one');
// console.log(heading);
// heading.style.color = 'red';
// heading.style.backgroundColor = 'cyan';

// var headings = document.getElementsByTagName('h1');
// console.log(headings);
// headings[1].style.backgroundColor = 'green';

// headings[1].innerText =  "Second Heading";

// var para = document.getElementsByClassName('para');
// console.log(para);
// para[0].style.backgroundColor = 'yellow';

// var heading1 = document.querySelector('#one');
// heading.innerText = 'Aman';

// var para1 = document.querySelector('.para');
// para1.innerText = "Jai Shree Ram";

// para1.innerHTML = "Kaise ho";

/* Event Handling */

// function hello(){
//     alert("Hello Aman");
// }

// function bye(){
//     alert("Bye Aman");
// }

// var btn = document.getElementById('btn');
// btn.addEventListener('click',function(){
//     alert("Hello");
// });

// var btn = document.getElementById('btn');
// btn.addEventListener('click',hello);
// btn.addEventListener('click',bye);

// var box = document.getElementById('box');
// var Clickcount = document.getElementById('click-count');
// var count = 0;

// box.addEventListener('click',function(){
//     count++;
//     console.log(count);
//     Clickcount.innerText = count + " ";
// })

/* Other Mouse and Keyboard Events */

// var outerDiv = document.getElementById('outer');
// outerDiv.addEventListener('mouseover',function(){
//     console.log("Mouse Over");
// });

// outerDiv.addEventListener('mouseout',function(){
//     console.log("Mouse Out");
// });

// var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress',function(){
//     console.log('Key Press');
// });

// document.addEventListener('keypress',function(){
//     console.log("KeyPress");
// });

// document.addEventListener("keydown",function(event){
//     console.log("KeyDown",event.keyCode);
// });
// document.addEventListener('keydown',function(event){
//     console.log("KeyDown",event.key)
// })

/* Propagation of Event 

    document
    outerdiv
    event target -> innerdiv
*/

// var innerDiv = document.getElementById('inner');
// innerDiv.addEventListener('click',function(event){
//     console.log("Click Inner Div");
//     event.stopPropagation();
// });

// var outerDiv = document.getElementById('outer');
// outerDiv.addEventListener('click',function(){
//     console.log('Click Outer Div');
// });

// document.addEventListener('click',function(){
//     console.log('Click Document');
// });

/* Strict Mode */

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('dra',function(){
    console.log('Click Outer Div');
});
