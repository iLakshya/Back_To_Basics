// Create a function which receives a function as argument and executes it after 2 seconds

// let a = function(){
//     console.log("Message");
// }
// setTimeout(a, 2000);

setTimeout(function(){
    console.log("Message");
},2000);