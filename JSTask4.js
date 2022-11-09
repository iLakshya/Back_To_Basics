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

let seen = new Set();
let array = [
            {section: "A"},
            {section: "B"},
            {section: "C"},
            {department: "Electronics"},
            {department: "Computer Science"},
            {college: "University College Kerala"}];

let group = groupBy('section');
