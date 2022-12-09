// Write a javascript function to find the square root of a number throw an error when a negative number is passed to that function.
// Use try, catch and throw error handlers

let name = prompt("Enter your name: ");
let number = prompt("Enter the number: ");

console.log(Math.sqrt(number));

try
{
    if(number<0)
    {
        console.log("Can't take square root of negative numbers!");
        throw "negative number";
    }
}
catch(e)
{
    alert(e.message);
}

// let number = prompt("Enter the number: ");
// function SQRT(num)
// {
//     if(num<0)
//     {
//         throw new Error("Square root of negative number can't be determined!");
//     }
//     else
//     {
//         return Math.sqrt(num);
//     }
// }
// try
// {
//     SQRT(number);
// }
// catch(e)
// {
//     alert(e.message);
// }