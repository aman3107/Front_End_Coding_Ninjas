/* Const */

// Const are read only variables, You have to define the variable with the value, You cannot the use the variable before the declaration statement

// console.log(c);  Cannot access 'c' before initialization
// const c = 20;

// var a = 10;
// var a ;
// console.log(a);
// a = 20;
// console.log(a);

// const b = 10;
// const b; You have to initialize the const variable with value
// console.log(b);
// b = 30; You can not change values of const variables
// console.log(b);

/* Let */

// console.log(a);
// var a = 10;

// if(a <= 10){
//     console.log(b);
//     let b = 20;
// }

// var a = 10;
// if(a <= 10){
//     var b = 40;
// }
// else {
//     var c = 50;
// }

// console.log(a,b,c);

// let x = 10;
// if(x <= 10){
//     let y = 40;
// }
// else{
//     let z = 50;
// }

// console.log(x,y,z);

/* Let vs Var */

// for(let i = 1; i <= 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

// const pi = 3.14;
// var pi = 4;
// console.log(pi);

// function oddSum(n)
// {
//     let total = 0, result=[]; 
//     for(let x = 1; x <= n; x++) 
//     { 
//        let odd = 2*x-1; 
//        total += odd;
//        result.push(total);
//     }
//     return result;
// }

// var result = oddSum(5); 
// console.log(result);

/* For of Loop */

var arr = [1,2,3,4];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let i of arr){
    console.log(i);
}