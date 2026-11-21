// •	Global Scope
// •	Local Scope
// •	Block Scope
// •	Function Scope
// •	Lexical Scope
// •	Scope Chain
// •	Execution Context
// •	Variable Environment
// •	Hoisting
// •	this Keyword

// 1 global scope
// var age = 30;
// console.log('outside',age)
// function printAge (){
//     console.log('inside',age);
// }
// printAge()
// {
//     console.log("inside blocks ",age)
// }

// local scop

// function local(){
//     var age = 49;
//     // console.log(age); only here is accessable age
// }
// local()
// console.log(age); refrence error age is not define

// blocks scope

// {
//     var age = 90;
//     console.log(age)
// let date = Date();

// console.log(date)
// }
// console.log(age); print here also beacuse of functon scop

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
