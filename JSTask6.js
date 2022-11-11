// Write a javascript function for the Fibonacci generator with the next() method in Generators and print up to 5 values.
function *fibonacci(n, current = 0, next = 1)
{
    if (n === 0)
    {
        return current;
    }
    yield current;
    yield *fibonacci(n-1, next, current + next);
}
let a = [...fibonacci(5)];
console.log(a)