// function declaration 

// function declaration means function ko define krna with function keywords and function nama ka sath like this 
// function printSomething(){
//     console.log('hello somethihg')
// }
// printSomething();


// function expression
// a functions that is assigned to a variable
// const sum = function (first,second){
//     return first + second;
// }
// console.log(sum(34,56));

// 3 anonymous fucntion is a functio without name same like arror function 


// 4 named function is a function with name 

// 5 shorter syntax of arrow functions 
// 6 callback functio , a function passed as arguments to antoher function 
// callback means it will run after above task done , call later me 
// real world example 

// function fetchUser (id,callbackfuc){
//     setTimeout(() => {
//         const user = {id:id, name:"asif"};
//     callbackfuc(user);
//     }, 1000);
// }

// fetchUser(1,function(user){
//     console.log('user name is ',user.name)
// });



// 7 high order function 
// a function that takes another function as arguments and return a function is called high order function 
function multiply(double){
    return function (number){
        return double * number
    }
}

const another  = multiply(6)
console.log(another(8));

