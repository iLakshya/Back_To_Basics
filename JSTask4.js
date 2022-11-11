// Write a JavaScript function to remove duplicates of objects sharing same property value and get it grouped into a new objects
// Sample Array:
// let array = [
// {
// section: "A"
// }, {
// section: "B" },
// {
// section: "C"
// }, {
// department: "Electronics" },
// {
// department: "Computer Science"
// }, {
// college: "University College Kerala" }
// ];
// Expected Output : let array = [
// { section: ["A", "B", "C"] },
// { department: ["Computer Science","Electronics"] }, { college: ["University College Kerala"] }
// ];

let array = [
            {section: "A"},
            {section: "B"},
            {section: "C"},
            {department: "Electronics"},
            {department: "Computer Science"},
            {college: "University College Kerala"}];

let result = array.reduce(function(obj, current){
    Object.keys(current).forEach(function(key){
        obj[key] = obj[key] || [];
        obj[key] = Array.isArray(obj[key]) ? obj[key]:[obj[key]];
        obj[key].push(current[key]);
    });
    return obj;
});
console.log(result);