//Regular function with no return value
function greet() {
    console.log("Hello Abdi");
}

greet();

// //regular Function With Return Value
// function add(a, b) {
//     return a + b;
// }
//
// let result = add(5, 3);
// console.log(result);
//
// //Arrow Function
// const multiply = (a, b) => a * b;
//
// console.log(multiply(2, 5));
//
// //Default Parameter
// function welcome(name = "Guest") {
//     console.log("Welcome " + name);
// }
//
// welcome();
// welcome("Abdi");
//
// //Callback Function
// function processUser(name, callback) {
//     console.log("Processing user: " + name);
//     callback();
// }
//
// function done() {
//     console.log("User processed successfully");
// }
//
// processUser("Ahmed", done);
//
// //Rest Parameter
// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }
//
// console.log(sum(1, 2, 3, 4));
//
// //Class & Constructor
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     info() {
//         console.log("Name: " + this.name + ", Age: " + this.age);
//     }
// }
//
// let s1 = new Student("Abdi", 20);
// s1.info();
//
// //Object Destructuring
// const person = {
//     name: "Ayaan",
//     age: 22,
//     country: "Somalia"
// };
//
// const { name, age } = person;
//
// console.log(name);
// console.log(age);
//
// //Array Destructuring
// const numbers = [10, 20, 30];
//
// const [first, second] = numbers;
//
// console.log(first);
// console.log(second);
//
// //Template Literals
// let name = "Mohamed";
// let age = 25;
//
// console.log(`My name is ${name} and I am ${age} years old.`);
//
// //JSON to JavaScript Object
// let jsonData = '{"name":"Hodan","age":21}';
//
// let obj = JSON.parse(jsonData);
//
// console.log(obj.name);
// console.log(obj.age);
//
// //JavaScript Object to JSON
// let student = {
//     name: "Ali",
//     age: 23
// };
//
// let jsonString = JSON.stringify(student);
//
// console.log(jsonString);
//
//
//
