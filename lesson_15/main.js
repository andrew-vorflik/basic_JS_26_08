"use strict";

// function Cat(name, color) {
//   // this = {}
//   this.name = name;
//   this.color = color;

//   // return this;
// }

// Cat.prototype = {
//   say() {
//     console.log("Meow!");
//   },
// };

// let tom = new Cat("Tom", "blue");
// console.log("tom:", tom);
// tom.say();

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   say() {
//     console.log("Meow!");
//   }
// }

// let garfield = new Cat("Garfield", "orange");
// let barsik = new Cat("Barsik", "gray");

// console.log("garfield:", garfield);
// console.log("barsik:", barsik);

// garfield.say();
// barsik.say();

// [[isCalassCOnstructor]]: true
// "use strict"

// let methodName = "sayHi";

// let obj = {
//   _phone: "23424234324"
//   name: "John",
//   [methodName]() {
//     console.log("Hello");
//   },
// };

// obj.sayHi();
// obj[methodName]();
// obj._phone();

// let methodName = "sayHi";
// let propertName = "type";

// class Cat {
//   // 1 Зазначені властивості
//   legsCount = 4;

//   // 2 Обчіслювальні методи і власивості
//   [propertName] = "Cat";
//   [methodName]() {
//     console.log(`Hello! I'm ${this.#age} years old`);
//   }

//   // 3 Внутрішні властивості і методи
//   #weight = 3;
//   #age = 2;
//   #yawn() {
//     console.log("Meoooowww...");
//   }

//   // 4 Статичні властивості і методи
//   static hasTail = true;
//   static calcYears(catAge) {
//     if (catAge < 0) {
//       return "Вік не може бути від'ємним";
//     } else if (catAge === 0) {
//       return 0; // Новороджена кішка
//     } else if (catAge === 1) {
//       return 15; // Перший рік
//     } else if (catAge === 2) {
//       return 24; // Другий рік
//     } else if (catAge >= 3 && catAge <= 15) {
//       return 24 + (catAge - 2) * 4; // З 3-го по 15-й рік
//     } else {
//       return 24 + (15 - 2) * 4 + (catAge - 15) * 3; // З 16-го року
//     }
//   }

//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   say() {
//     console.log("Meow!");
//     this.#yawn();
//   }

//   // 5 аксессори
//   get weight() {
//     return this.#weight;
//   }

//   set weight(newWeight) {
//     if (newWeight > 0 && newWeight < this.#weight + 3) {
//       this.#weight = newWeight;
//     } else {
//       console.log("Некоррекнта вага");
//     }
//   }
// }

// let garfield = new Cat("Garfield", "orange");

// console.log("garfield:", garfield);

// garfield.weight = 500;

// console.log("garfield:", garfield.weight);

// garfield.say();

// console.log(Cat.hasTail);
// console.log(Cat.calcYears(3));

// console.log(Array.isArray(garfield));
// console.log(Object.getOwnPropertyNames(garfield));
// console.log(Number.isFinite(100));
// console.log(Symbol.iterator); // sekjfhesliuh489yljh

// let obj = {
//   age: 30,
//   [Symbol.iterator]() {
//     // sgmnksj
//   },
// };

// forof
// obj[Symbol.iterator]() = {next(){}}

// class BankAccount {
//   #balance = 1000;
//   #pin = 1234;

//   contructor(bankAccountNumber) {
//     this.bankAccountNumber = bankAccountNumber;
//   }

//   #checkAccess() {
//     return Math.random() > 0.5; // 0 0.9999999
//   }

//   #checkPin() {
//     let userPin = +prompt("Enter pin");

//     return userPin === this.#pin;
//   }

//   getMoney(amount) {
//     if (!this.#checkAccess()) {
//       console.log("Немає доступу до банку");
//       return;
//     }
//     if (!this.#checkPin()) {
//       console.log("Неправильний pin-code");
//       return;
//     }

//     if (amount <= this.#balance) {
//       console.log(`Ми зняли ${amount} грн.`);
//       this.#balance -= amount;
//       console.log(`Баланс: ${this.#balance} грн.`);
//     } else {
//       console.log("Недостатньо грошей на рахунку");
//     }
//   }
// }

// let myAccount = new BankAccount(111222);

// myAccount.getMoney(800);
// myAccount.getMoney(800);

// super class
// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   sleep(place) {
//     if (place) {
//       console.log(`I'm sleeping at the ${place}`);
//     } else {
//       console.log("Я сплю");
//     }
//   }
// }

// // sub class
// class Cat extends Animal {
//   constructor(type, color) {
//     super(type); // new Animal();
//     this.color = color;
//   }

//   // constructor(...args) {
//   //  super(...args)
//   // }

//   say() {
//     console.log("Meow");
//   }

//   eat() {
//     console.log("Я їм");
//     super.sleep();
//   }

//   sleep(place) {
//     super.sleep(place);
//     console.log("І храплю");
//   }
// }

// class Mainkun extends Cat {
//   constructor(type, color, name) {
//     super(type, color);
//     this.name = name;
//   }

//   sleep() {
//     super.sleep();
//     // Animal.prototype.sleep();
//     console.log("Я меінкун я сплю");
//   }
// }

// let cat = new Mainkun("Кішка", "Сірий", "Барсік");
// console.log("cat:", cat);
// console.log("cat:", cat);

// obj instanceof Class

// console.log(cat instanceof Mainkun);
// console.log(cat instanceof Cat);
// console.log(cat instanceof Animal);
// console.log(cat instanceof Array);
// console.log(cat instanceof Object);

// Employee {
//   name
//   age
//   salary
// }

// Developers extends Employee{

// }

// Designers extends Employee{

// }

// Testers extends Employee{

// }

// Accountent extends Employee{

// }

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   getSickDay() {
//     console.log("I'm ill");
//   }
// }

// class Developers extends Employee {
//   constructor(name, age, salary, language, skill) {
//     super(name, age, salary);
//     this.language = language;
//     this.skill = skill;
//   }

//   writeCode() {
//     console.log("I'm codding");
//   }
// }

// class Designers extends Employee {
//   constructor(name, age, salary, program, skill) {
//     super(name, age, salary);
//     this.program = program;
//     this.skill = skill;
//   }

//   drinkCoffee() {
//     console.log("I'm drinking");
//   }
// }

// class Testers extends Employee {
//   constructor(name, age, salary, type, skill) {
//     super(name, age, salary);
//     this.type = type;
//     this.skill = skill;
//   }

//   test() {
//     console.log("I'm testing");
//   }
// }

// class Accountent extends Employee {
//   constructor(name, age, salary, yearsExperience, isMain) {
//     super(name, age, salary);
//     this.yearsExperience = yearsExperience;
//     this.isMain = isMain;
//   }

//   payTaxes() {
//     console.log("I'm paying taxes");
//   }
// }

// let developer1Name = "dlvknk"
// let developer1Age = "30"
// let developer1salary = "30"
// let developer1Name = "dlvknk"
// let developer1Age = "30"
// let developer1salary = "30"
// let developer1Name = "dlvknk"
// let developer1Age = "30"
// let developer1salary = "30"
// let developer5Name = "dlvknk"
// let developer5Age = "30"
// let developer5salary = "30"
// let developer5Name = "dlvknk"
// let developer1Age = "30"
// let developer2salary = "30"
// let developer2Name = "dlvknk"
// let developer2Age = "30"
// let developer2salary = "30"
// let developer3Name = "dlvknk"
// let developer3Age = "30"
// let developer3salary = "30"

// developer1WriteCode() {

// }
// DesignerDesign() {

// }
// payTaxwes() {

// }
// developer1WriteCode() {

// }
// DesignerDesign() {

// }
// payTaxwes() {

// }
// developer1WriteCode() {

// }
// DesignerDesign() {

// }

// let taxes1 = "dlvknk"
// let taxes1 = "dlvknk"
// let taxes1 = "dlvknk"
// let globalTazes = "30"
// let developer2salary = "30"
// let developer2Name = "dlvknk"
// let developer2Age = "30"
// let developer2salary = "30"
// let developer3Name = "dlvknk"
// let developer3Age = "30"
// let developer3salary = "30"

// function func1(params) {
//   DesignerDesign()
//    cancelIdleCallback()
//    let taxes = payTaxes()
// }
// function func1(params) {
//   DesignerDesign()
//    cancelIdleCallback()
//    let taxes = payTaxes()
// }
// function func2(params) {
//   DesignerDesign()
//    cancelIdleCallback()
//    let taxes = payTaxes()
// }
// function func1(params) {

//   func2()
//   DesignerDesign()
//    cancelIdleCallback()
//    let taxes = payTaxes()
// }
// function func1(params) {
//   DesignerDesign()
//    cancelIdleCallback()
//    let taxes = payTaxes()
// }

// let developer2Age = "30"
// let developer2salary = "30"
// let developer3Name = "dlvknk"
// let developer3Age = "30"
// let developer3salary = "30"
// function func1(params) {
//   DesignerDesign()
//    cancelIdleCallback()
//    let taxes = payTaxes()
// }

// User {
//   name
//   age
//   salary
// }
// user1 => User{
//   calc1()
// }
// user2 => User{

//   calc2()
// }
// user3 => User{

//   calc3()
// }

// SUperUser => User {
//   // dskjndksjn
// }

// user3.age
// user1.calc1(user3.salary)

// 1 Інкапсуляція
// 2 Наслідування
// 3 Поліморфізм
// 4 Абстракція

// class Shape {
//   constructor(type) {
//     this.type = type;
//   }

//   calcAria() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(type, width, height) {
//     super(type);
//     this.width = width;
//     this.height = height;
//   }

//   calcAria() {
//     return this.width * this.height;
//   }
// }

// class Triangle extends Shape {
//   constructor(type, base, height) {
//     super(type);
//     this.base = base;
//     this.height = height;
//   }

//   calcAria() {
//     return 0.5 * this.base * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(type, radius) {
//     super(type);
//     this.radius = radius;
//   }

//   calcAria() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// let rectangle = new Rectangle("Rectangle", 20, 30);
// let triangle = new Triangle("Triangle", 20, 10);
// let circle = new Circle("Circle", 15);

// console.log("rectangle.calcAria():", rectangle.calcAria());
// console.log("triangle.calcAria():", triangle.calcAria());
// console.log("circle.calcAria():", circle.calcAria());

// class TodoItem / Note {

// }

// const note1 = new TodoItem(skdnkdjnvjk)

// class TodoList {
//   constructor() {
//     notes = [{
//       title: "Купити хліба",
//       isDOne: true/ false
//       creationdate:
//       editDate: null,
//     }];

//   }

//   addNote()
//   removeNote()
//   getInfo()

//   editNote() {

//   }

//   search(noteTitle) {

//   }

//   sortNotesByStatusDone(status) {

//   }
//   sortNotesByStatusNotDone(status) {

//   }
// }

// let todoList = new TodoList()

// todoList.getNoteInfo("Купити хліба")

// console.log(new Date().toLocaleString());
