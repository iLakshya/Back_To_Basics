// Write a javascript function code to dynamically grab object keys and use the keys as part of a method.
// Sample :
// const data = [ { title: "title1", subtitle:"sub1"}, { title: "title2", subtitle:"sub2"}, { title: "title3", subtitle:"sub3"} ];
// searchkey = 'title2';
// Expected Output : [ {
// "title": "title2",
// "subtitle": "sub2", }
// ]

const data =[
    {title: "title1", subtitle: "sub1"},
    {title: "title2", subtitle: "sub2"},
    {title: "title3", subtitle: "sub3"}
];

let search = "title2";

let filterdata = data.filter(
    (item) => item.title.includes(search) || item.subtitle.includes(search)
);
console.log(filterdata);

// let filterdata = data.filter(
//     (item) => Object.values(item).some(val => val.includes(search))
// );
// console.log(filterdata);