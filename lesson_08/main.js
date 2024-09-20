"use strict";

// 1 get element cars.at()

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars[0]);
// console.log(cars[2]);
// console.log(cars[4]);
// console.log(cars.length);
// console.log(cars[cars.length - 1]);
// console.log(cars.at(0));
// console.log(cars.at(2));
// console.log(cars.at(4));
// console.log(cars.at(-1));
// console.log(cars.at(-2));

// 2 string.split(separator. limit)

// let string =
//   "У бегемотів зуби міцніші, ніж у будь-якої іншої живої істоти на Землі";

// console.log(string.split(" ", 5));

// 3 array.join(separator)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.join());

// 4 push() pop() shift() unshift()

// delete cars[2];

// console.log("cars:", cars);
// console.log(cars.push("Tesla", "Honda")); // додає в кінець
// console.log(cars);
// console.log("============");

// console.log(cars.pop()); // видаляє з кінця
// console.log(cars.pop()); // видаляє з кінця
// console.log(cars);
// console.log("============");

// console.log(cars.shift()); // видаляє з початку
// console.log(cars.shift()); // видаляє з початку
// console.log(cars);
// console.log("============");

// console.log(cars.unshift("Tesla", "Ford")); // видаляє з початку
// console.log(cars);
// console.log("============");

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];
// // BMW Audi Honda
// // Tesla Mazda Honda
// // Honda Mazda Tesla
// // Mazda Tesla Audi Honda !

// cars.pop();
// cars.pop();
// cars.pop();
// cars.shift();
// cars.unshift("Tesla");
// cars.unshift("Mazda");
// cars.push("Honda");

// console.log(cars);

// let string =
//   "У бегемотів зуби міцніші, ніж у будь-якої іншої живої істоти на Землі";

// function deleteEvrySecondWord(string) {
//   let arr = string.split(" ");
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result.join(" ");
// }

// let newString = deleteEvrySecondWord(string);

// console.log(newString);

// 5 array.concat(array1, array2)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];
// let japanCars = ["Honda", "Nissan", "Mazda"];
// let americanCars = ["Ford", "Tesla", "Cadillac"];

// console.log(
//   cars.concat(americanCars, "Reno", japanCars, "Citroen", 100, null, {
//     age: 30,
//   })
// );

// 6 array.fill(value, start, end)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.fill(null, 1, 4));
// console.log(cars.fill(null, 0, 3));
// console.log(cars.fill(null, 1));

// 7 array.slice(start, end)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.slice(1, 3));
// console.log(cars.slice(1));
// console.log(cars.slice(-2));
// console.log(cars.slice(2, 4));

// 8 array.copyWithin(target, start, end)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];
// let cars = ["BMW", "Audi", "Porsche", "Audi", "Porsche"];

// console.log(cars.copyWithin(0, 1, 3));
// console.log(cars.copyWithin(0, 1, 4));
// console.log(cars.copyWithin(1, 1, 2));
// console.log(cars.copyWithin(0, 1, 2));
// console.log(cars.copyWithin(3, 1, 3));
// console.log(cars.copyWithin(3, 1));

// 9 array.indexOf(searchElement, fromIndex) та lastIndexOf()

// let cars = [
//   "BMW",
//   "Audi",
//   "Porsche",
//   "Mercedes",
//   "Ferrari",
//   "Porsche",
//   "Mercedes",
//   "Ferrari",
// ];

// console.log(cars.indexOf("Audi"));
// console.log(cars.indexOf("Audi", 5));
// console.log(cars.indexOf("Reno"));
// console.log("============");
// console.log(cars.lastIndexOf("Audi"));
// console.log(cars.lastIndexOf("Ferrari"));

// 10 array.includes(searchElement, fromIndex)

// console.log(cars.includes("Audi", 0));

// 11 array.flat(depth)

// let cars = [
//   "BMW",
//   "Audi",
//   "Porsche",
//   "Mercedes",
//   "Ferrari",
//   ["Honda", "BMW", "Mazda", ["BMW", "Tesla", "Cadillac"]],
// ];

// // console.log(cars);
// console.log(cars.flat(Infinity));

// 12 array.with(index, value)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(cars.with(1, "Tesla"));

// 13 array.splice(start, deleteCount, item1, item2, ...)

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// cars.splice(1, 0, "Tesla", "Honda");
// cars.splice(1, 1, "Tesla", "Honda");
// cars.splice(1, 1);
// cars.splice(1, 100);

// console.log(cars.toSpliced(1, 2));
// console.log(cars);

// 14 array.reverse()

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// cars.reverse();

// console.log(cars.toReversed());
// console.log(cars);

// 15 Array.isArray()

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// console.log(Array.isArray(123));
// console.log(Array.isArray(cars));
// console.log(Array.isArray({}));
// console.log(Array.isArray(false));

// 16 Array.of()

// let arr = Array.of(10, 12, 11);
// let arr4 = [10, 12, 11];
// console.log("arr4:", arr4);

// let arr2 = new Array(10);
// arr2.fill({ name: "John" });

// console.log("arr:", arr);
// console.log("arr2:", arr2);

// let arr3 = [2, , , , , , , , , , , 4];
// console.log("arr3:", arr3);

// 17 keys(), values(), entries()

// let cars = ["BMW", "Audi", "Porsche", "Mercedes", "Ferrari"];

// let obj = {
//   name: "Will",
//   age: 30,
//   country: "USA",
// };

// let iterator = cars.values();
// let iterator = cars.keys();
// let iterator = cars.entries();

// console.log("iterator:", iterator);

// for (const element of iterator) {
//   console.log(element);
// }

// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

// let cars = [
//   "BMW",
//   "Audi",
//   "Porsche",
//   "Mercedes",
//   "Ferrari",
//   "Porsche",
//   "Mercedes",
//   "Ferrari",
// ];

// arr.indexOf(elem, fromIndex)

// function countAllMatches(array, elem) {
//   let lastIndex = 0;
//   let count = 0;

//   while (true) {
//     const index = array.indexOf(elem, lastIndex);

//     if (index === -1) {
//       break;
//     }

//     count++;
//     lastIndex = index + 1;
//   }

//   return count;
// }

// let countElem = countAllMatches(cars, "Ferrari");

// console.log("countElem:", countElem);

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [3, 4, 5, 6, 7]

// result = [3, 4, 5]

// Math.min(arr)
// Math.max(arr)

// function name(params) {
//   return {
//     sum: ,
//     avarage: ,
//   }
// }
