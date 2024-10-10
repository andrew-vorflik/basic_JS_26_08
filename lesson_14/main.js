"use strict";

// let user = {
//   firstName: "Leo",
//   lastName: "Messi",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(newFullName) {
//     let newFullNameArr = newFullName.split(" ");
//     this.firstName = newFullNameArr[0];
//     this.lastName = newFullNameArr[1];
//   },
// };

// user.fullName = "Cristiano Ronaldo";
// console.log(user.fullName);

// let person = {
//   fullName: "Tomas Shelby",
//   _phone: "+380731112233",
//   get phone() {
//     return this._phone;
//   },
//   set phone(newPhone) {
//     if (newPhone.startsWith("+380") && newPhone.length === 13) {
//       this._phone = newPhone;
//     } else {
//       console.log("Incorrect phone number!");
//     }
//   },
// };

// person.phone = "+380936661133";
// console.log("person:", person.phone);

// let user1 = {
//   name: "John Snow",
// };

// let user2 = {
//   __proto__: user1,
// };

// let user3 = {
//   name: "John Conor",
//   __proto__: user2,
// };

// console.log(user2.name);

// let animal = {
//   type: "animal",
//   message: "I'm animal",
//   sleep() {
//     console.log(`Я ${this.type} сплю`);
//   },
// };

// let donkey = {
//   type: "donkey",
//   say() {
//     console.log("Іа-іа");
//   },
//   run() {
//     console.log("Я скочу як кінь!");
//   },
//   __proto__: animal,
// };

// let shrekDonkey = {
//   type: "shrekDonkey",
//   say() {
//     console.log("Ми приїхали?");
//   },
//   __proto__: donkey,
// };

// shrekDonkey.say();
// shrekDonkey.run();
// shrekDonkey.sleep();
// donkey.sleep();
// animal.sleep();
// console.log(shrekDonkey.message);

// let user = {
//   role: "USER",
//   login() {
//     console.log("Hello! I'm logged in!");
//   },
//   logout() {
//     console.log("Good buy! I'm logged out!");
//   },
//   buy(product) {
//     console.log(`Я купив новий ${product}`);
//   },
// };

// let admin = {
//   role: "ADMIN",
//   addProduct(newProduct) {
//     console.log(`Я додав новий товар - ${newProduct}`);
//   },
//   __proto__: user,
// };

// let superAdmin = {
//   role: "SUPER_ADMIN",
//   addAdmin(newAdmin) {
//     console.log(`Я додав нового адміна - ${newAdmin}`);
//   },
//   __proto__: admin,
// };

// superAdmin.login();
// superAdmin.logout();
// superAdmin.buy("iPhone 16");
// superAdmin.addProduct("iPhone 17");
// superAdmin.addAdmin("John");

// let animal = {
//   message: "I'm animal",
//   sleep() {
//     console.log(`Я сплю`);
//   },
// };

// function Cat(name, color) {
//   // this = {}
//   this.name = name;
//   this.color = color;
//   // this.__proto__: Cat.prototype

//   // return this
// }

// Cat.prototype = {
//   legsCount: 4,
//   say() {
//     console.log("Мяу!");
//   },
//   eat() {
//     console.log("Я їм! Дай ще!");
//   },
//   __proto__: animal,
// };

// let tom = new Cat("Tom", "blue");
// let garfield = new Cat("Garfield", "orange");

// tom.say();
// tom.eat();

// garfield.say();
// garfield.eat();

// tom.sleep();
// garfield.sleep();

// console.log(tom.__proto__.__proto__);

// __proto__
// [[Prototype]]: Cat.prototype
// Func.prototype

// tom[[Prototype]]: Cat.prototype
// garfield[[Prototype]]: Cat.prototype

// __proto__: animal
// Cat.prototype[[Prototype]]: animal

// let animal = {
//   sleep() {
//     console.log(`Я сплю`);
//   },
// };

// let donkey = {
//   say() {
//     console.log("Іа-іа");
//   },
// };

// Object.setPrototypeOf(obj, proto)
// Object.setPrototypeOf(donkey, animal);

// Object.getPrototypeOf(obj)
// console.log(Object.getPrototypeOf(donkey));

//Object.create(proto, {})

// let donkey = Object.create(animal, {
//   say() {
//     console.log("Іа-іа");
//   },
// });

// console.log(Object.getPrototypeOf(donkey));

// obj.isPrototypeOf()

// console.log(animal.isPrototypeOf(donkey));

// let animal = {
//   sleep() {
//     console.log(`Я сплю`);
//   },
// };

// let donkey = {
//   legsCount: 4,
//   say() {
//     console.log("Іа-іа");
//   },
// };

// Object.setPrototypeOf(donkey, animal);

// obj.hasOwnProperty(key)
// Object.hasOwn(person, 'name')
// Object.getOwnPropertyNames(person)

// for (const key in donkey) {
//   console.log(key);
//   console.log(donkey.hasOwnProperty(key));
// }

//  console.log(donkey.hasOwnProperty(key));
// console.log(Object.hasOwn(donkey, "say"));
// console.log(Object.getOwnPropertyNames(donkey));

// let arr = [2, 4, 6, 8];
// let obj = {
//   age: 30,
// };

// console.log(Array.prototype);
// console.log(Object.prototype);

// arr.forEach((item) => {
//   console.log("item:", item);
// });

// console.log(obj.hasOwnProperty("age"));

// console.log(arr);
// console.log("arr2:", arr2);
// console.log("obj2:", obj2);
// console.log(obj);

// console.log(String("Hello").toUpperCase());
// console.log(String.prototype);

// let arr = [2, 4, 6, 8];
// console.log("arr:", arr);

// console.log(arr.hasOwnProperty(0));
// console.log(arr.isPrototypeOf(obj));

// let arr = [2, 4, 6, 8];

// Array.prototype.ourMap = function (cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result[i] = cb(this[i], i, this);
//   }

//   return result;
// };

// let newArray = arr.ourMap((item) => {
//   return item ** 2;
// });

// console.log(newArray);

// Array.prototype.double = function () {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result[i] = this[i] * 2;
//   }

//   return result;
// };

// console.log(arr.double());

// function Student(name, course) {
//   this.name = name;
//   this.courses = {}

// }

// let obj = {
//   addGrade(grade) {

//   }

//   addGeneralGrade() {
//     return
//   }

//   addCourse() {

//   }

//   removeCourse() {

//   }
// }

// Student.prototype = obj

// function Group(students) {
//   this.students;
// }

// Group.prototype = {
//   addStudent(students) {
//     this.
//   }

//   getStudentsByGrade() {
//     return this.students.sort()
//   }
//   getStudentsByAttendence() {
//     return this.students.sort()
//   }
// }
