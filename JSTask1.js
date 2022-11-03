const products = [
    {productCode:1, itemName:'TV'},
    {productCode:2, itemName:'Fridge'},
    {productCode:3, itemName:'Phone'},
    {productCode:4, itemName:'Washing Machine'},
    {productCode:5, itemName:'AC'},
    ];
const newProducts = [
    {productCode:6, itemName:'Tablet'},
    {productCode:3, itemName:'Phone'},
    {productCode:7, itemName:'Keyboard'},
    {productCode:5, itemName:'AC'},
    {productCode:8, itemName:'Mouse'},
    ];

const uniqueProducts = [];

// let result = products.filter(function(obj1){
//     return newProducts.indexOf(obj1) == -1;
// });
// console.log(result);

// let result1 = products.filter(function(a){
//     return !newProducts.some(function(obj1)
//     {
//         return a.productCode == obj1.productCode;
//     });
// });
// console.log(result1);

// let result2 = newProducts.filter(function(b){
//     return !products.some(function(obj2)
//     {
//         return b.productCode == obj2.productCode;
//     });
// });
// console.log(result2);

// console.log(result1.concat(result2));

let result = [...products, ...newProducts];
console.log(result);

let ids = result.map(o=>o.productCode);
let filtered = result.filter(({productCode}, index) => !ids.includes(productCode, index+1));
console.log(filtered);



