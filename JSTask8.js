// Create a generator to return a random number on every request

function getRandom(min,max)
{
    return Math.random() * (max-min)+min;
}
console.log(getRandom(0,100));