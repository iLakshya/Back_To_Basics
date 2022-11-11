// Write a JavaScript function to find the unique elements from two arrays Sample Array:
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [1, 3, 8];
// Expected Output : [2, 4, 5, 8]

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 8];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// Remove Duplicate elements
let unique = [...new Set(arr3)];
console.log(unique);


// Unique Elements
let unique1 = arr1.filter(function(obj){
    return arr2.indexOf(obj) === -1
});
console.log(unique1);