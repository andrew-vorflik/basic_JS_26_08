// let user1 = {
//   name: "Fred",
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// let user2 = {
//   name: "George",
//   sayHi: user1.sayHi,
// };

// user1.sayHi();
// user2.sayHi();

// 1 - Прив’язка за замовчуванням

// function func() {
//   console.log(this);
// }

// func();

// 2 - Неявна прив’язка або об’єкт що володіє (owner object)

// let user1 = {
//   name: "Fred",
//   sayHi() {
//     console.log(`Hi, ${this.name}`);
//   },
// };

// let user2 = {
//   name: "George",
//   sayHi: user1.sayHi,
// };

// user1.sayHi();
// user2.sayHi();

// Втрата контексту

// 1
// let user = {
//   name: "Fred",
//   sayHi() {
//     console.log(this);
//     console.log(`Hello, ${this.name}`);
//   },
// };

// let sayHiFred = user.sayHi;

// // let sayHiFred = function () {
// //   console.log(`Hi, ${this.name}`);
// // };

// sayHiFred();

// 2
// function getName(fn) {
//   fn();
// }

// getName(user.sayHi);

// 3 Явна прив’язка

// let actor = {
//   firstName: "Leonardo",
//   lastName: "Dicaprio",
// };

// let actress = {
//   firstName: "Margo",
//   lastName: "Robbie",
// };

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

// getFullName() => this - actor
// getFullName() => this - actress

// // function greeting(message) {
// //   console.log(`${message}, ${getFullName.call(this)}`);
// // }

// function greeting(message, appeal) {
//   console.log(`${message} ${appeal}, ${getFullName.call(this)}`);
// }

// greeting.call(actor, "Good morning", "mr"); // this => actor
// greeting.call(actress, "Good evening", "ms"); // this => actreess

// greeting.apply(actor, ["Good morning", "mr"]); // this => actor
// greeting.apply(actress, ["Good evening", "ms"]); // this => actreess

// let greetingLeo = greeting.bind(actor, "Good morning");

// greetingLeo();

// let greetingLeo = greeting.bind(actor, "Good morning");
// let greetingMargo = greeting.bind(actress, "Good evening");

// greetingLeo("mr");
// greetingMargo("ms");

// 4  Ключове слово new

// function Actor(fullName, films) {
//   // this = {}
//   this.fullName = fullName;
//   this.films = films;

//   // return this;
// }

// let mattew = new Actor("Mattew McConahee", ["True detective", "Interstellar"]);

// console.log("mattew:", mattew);

// 1 Прив’язка за замовчуванням
// function func() {
//   console.log(this); // undefined
// }

// // 2 Неявна прив’язка або об’єкт що володіє (owner object)

// let obj = {
//   id: 123,
//   getId() {
//     return this.id; //this = об'кт перед комою
//   },
// };

// // 3 Явна прив’язка

// let actor = {
//   firstName: "Leonardo",
// };

// function getName() {
//   return this.firstName;
// }

// getName.call(actor); // this actor
// getName.apply(actor); // this actor
// let bindedGetName = getName.bind(actor);
// bindedGetName(); // this actor

// // 4 new

// function Actor(fullName) {
//   this.fullName = fullName; // this = {}
// }

// let leo = new Actor("Leonardo");

// Arrow functions

// let group = {
//   course: "Basic JavaScript",
//   students: ["Василь", "Володимир", "Тимофій"],
//   getInfoFn: function () {
//     console.log(this);
//     console.log(this.course);
//   },
//   getInfoArrow: () => {
//     console.log(this);
//     console.log(this.course);
//   },
//   // getStudentsInfo() {
//   //   this.students.forEach(
//   //     function (student, index) {
//   //       console.log(`Студент групи ${this.course} #${index + 1} - ${student}`);
//   //     }.bind(this)
//   //   );
//   // },
//   // getStudentsInfo() {
//   //   let that = this;

//   //   this.students.forEach(function (student, index) {
//   //     console.log(`Студент групи ${that.course} #${index + 1} - ${student}`);
//   //   });
//   // },
//   getStudentsInfo() {
//     this.students.forEach((student, index) => {
//       console.log(`Студент групи ${this.course} #${index + 1} - ${student}`);
//     });
//   },
// };

// // group.getStudentsInfo();
// group.getInfoFn();
// group.getInfoArrow();

// bind

// function bind(fn, thisCtx, ...bindArgs) {
//   return function (...args) {
//     return fn.apply(thisCtx, args.concat(bindArgs));
//   };
// }

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

// function greeting(message) {
//   console.log(`${message}, ${getFullName.call(this)}`);
// }

// let actor = {
//   firstName: "Leonardo",
//   lastName: "Dicaprio",
// };

// let actress = {
//   firstName: "Margo",
//   lastName: "Robbie",
// };

// let leoFullName = bind(greeting, actor);
// let margoFullName = bind(greeting, actress, "Good morning");

// console.log(this);

// function sum(a, b) {
//   return a + b;
// }

// function sqrt(a) {
//   return a ** 2;
// }

// function decorateHello(fn, limit) {
//   let count = 0;
//   return function (...params) {
//     if (count > limit) {
//       // ...
//     }
//     // if (validate(...params)) {
//     // }

//     return fn(a, b);
//   };
// }

// let sumHello = decorateHello(sum);
// let sqrtHello = decorateHello(sqrt);

// sumHello(2, 3);
// sqrtHello(3);

// function fnValidate(...params) {
//   return params.every((item) => item > 5);
// }

// let arr = [1, 2];

// console.log(...arr); // 1, 2
// console.log(arr); // [1, 2]

// function sum(a, b) {
//   console.log(a + b);
// }

// console.log(sum(...arr));

// function bind(fn, thisCtx, ...bindArgs) {
//   return function (...args) {
//     return fn.apply(thisCtx, [...bindArgs, ...args]);
//   };
// }
