"use strict";

// let person = {
//   name: "John",
//   age: 30,
// };

// let person2 = new Object({
//   name: "Will",
//   age: 40,
// });

// let person = {
//   name: "Leonardo Dicapriuo",
//   age: 50,
//   salary: 1700,
//   tasexPercent: 10,
//   isAdmin: false,
//   contacts: {
//     email: "leo@mail@.com",
//     phone: "+631123123",
//   },
//   films: ["Titanic", "Aviator"],
//   getSelery() {
//     let taxes = (person.salary / 100) * person.tasexPercent;
//     return person.salary - taxes;
//   },
// };

// console.log("person:", person);
// console.log(person.contacts.phone);
// console.log(person["contacts"]["email"]);
// console.log(person.getSelery());

// // 1 - через крапку
// console.log(person.age);
// console.log(person.name);

// // 2 - через []
// console.log(person["age"]);
// console.log(person["name"]);

// let person = {
//   name: "Leonardo Dicapriuo",
//   age: 50,
//   salary: 1700,
//   tasexPercent: 10,
//   isAdmin: false,
//   crimes: 0,
//   contacts: {
//     email: {
//       gmail: "leo@gmail.com",
//       mail: "leo@mail.com",
//     },
//     phone: "+631123123",
//   },
//   films: ["Titanic", "Aviator"],
//   getSelery() {
//     let taxes = (person.salary / 100) * person.tasexPercent;
//     return person.salary - taxes;
//   },
// };

// let person2 = {
//   name: "Leonardo Dicapriuo",
//   age: 50,
// };

// let prop = prompt("Enter key:");

// if (prop in person) {
//   // 0
//   console.log(person[prop]);
// } else {
//   console.log("Такого ключа не існує");
// }

// console.log(person.contacts && person.contacts.phone);
// console.log(person.contacts?.email?.yahoo);

// console.log(person.getSelery?.());
// console.log(person2.getSelery?.());

// const newSymbol = Symbol();

// let user = {
//   [newSymbol]: "12345",
// };

// console.log("user:", user[newSymbol]);

// let car = "Mersedes";
// let job = "Front-end";

// let obj = {
//   name: "John",
//   age: 30,
//   car,
//   job,
//   // car: car, // "Mersedes",
//   // job: job, // "Front-end"
// };

// delete obj.car;
// delete obj.age;

// console.log("obj:", obj);

// let user = {
//   age: 30,
//   name: "John",
//   job: "front-end",
//   contacts: {
//     email: {
//       gmail: "leo@gmail.com",
//       mail: "leo@mail.com",
//     },
//     phone: "+631123123",
//   },
// };

// // let age = user.age;
// // let job = user.job;

// let { age, job } = user;

// console.log("age:", age);
// console.log("job:", job);

// function showSalary() {
//   console.log(`My salary is ${this.salary}`);
// }

// let person1 = {
//   fullName: "Josef Baiden",
//   salary: 2000,
//   showSalary,
// };

// let person2 = {
//   fullName: "Barak Obama",
//   salary: 1500,
//   showSalary,
// };

// person1.showSalary();
// person2.showSalary();

// let user = {
//   age: 30,
//   name: "John",
//   job: "front-end",
//   contacts: {
//     email: {
//       gmail: "leo@gmail.com",
//       mail: "leo@mail.com",
//     },
//     phone: "+631123123",
//   },
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// Масиви
// let array = [];
// let array2 = new Array();

// console.log("array:", array);
// console.log("array2:", array2);

// let arr1 = [
//   100,
//   "Hello",
//   true,
//   { name: "John" },
//   [2, 4, 6],
//   function sayHi() {
//     console.log("Hi");
//   },
// ];

// let arr = ["Mersedes", "BMW", "Toyota", "Mazda"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// arr[4] = "Tesla";
// arr[0] = "Reno";
// arr[100] = "Citroen";
// delete arr[2];

// console.log("arr:", arr);

// let [car1, car2, , car3] = arr;
// console.log("car1:", car1);
// console.log("car2:", car2);
// console.log("car3:", car3);

// let arr = ["Mersedes", "BMW", "Toyota", "Mazda"];

// console.log(arr.pop());
// console.log(arr.push("Tesla"));

// console.log(arr.shift());
// arr.unshift("Reno");

// console.log("arr:", arr);

// let arr = [
//   [2, 4, 6],
//   [5, 10, 15],
//   [10, 20, 30],
// ];

// console.log(arr[1][2]);

// let arr = ["Mersedes", "BMW", "Toyota", "Mazda"];

// console.log(arr.includes("BMW"));

// let arr = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// [1, 2, 3, 4, 5, 6];

// let arr = ["Mersedes", "BMW", "Toyota", "Mazda"];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

// let arr = [{ name: "john" }, { name: "will" }, { name: "fred" }];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].name);
// }
