"use strict";

// 1 forEach
// let arr = [2, 4, 6, 8];
// let arr2 = [];

// let result = arr.forEach((item) => {
//   // code
//   arr.push(item);
// });

// console.log("result:", result);

// 2 map

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = arr.map((item, index, array) => {
//   if (item > 5) {
//     return item * 2;
//   }

//   return item;
// });

// console.log("arr:", arr);
// console.log("result:", result);

// 3 filter

// let students = [
//   { name: "Василь" },
//   { name: "Дмитро" },
//   { name: "Тимофій" },
//   { name: "Володимир" },
// ];

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = students.filter((student) => {
//   return student.name.length <= 6;
// });

// console.log("result:", result);

// 4 ПОШУК find/findLast, findIndex/findLastIndex

// let students = [
//   { name: "Василь" },
//   { name: "Дмитро" },
//   { name: "Тимофій", score: 100 },
//   { name: "Володимир" },
//   { name: "Тимофій", score: 3 },
// ];

// console.log({ name: "Дмитро" } === { name: "Дмитро" });

// let result = students.indexOf(students[1]);

// let result = students.find(({ name }) => {
//   return name === "Дмитро";
// });

// let result = students.findLast(({ name }) => {
//   return name === "Тимофій";
// });

// let result = students.findIndex(({ name }) => {
//   return name === "Василь";
// });

// let result = students.findLastIndex(({ name }) => {
//   return name === "Тимофій";
// });

// console.log("result:", result);

// 5 every/some

// let arr = [2, 4, 6, 8];

// let result = arr.every((item) => {
//   return item % 2 === 0;
// });

// let result = arr.some((item) => {
//   return typeof item === "string";
// });

// console.log("result:", result);

// let products = [
//   { title: "chips", packType: "paper" },
//   { title: "milk", packType: "plastic" },
//   { title: "oil", packType: "plastic" },
// ];

// if (
//   products.some((product) => {
//     return product.packType === "glass";
//   })
// ) {
//   console.log("Крихкий товар! Доставляти обережно!");
// }

// let students = [
//   { name: "Василь", score: 99 },
//   { name: "Дмитро", score: 98 },
//   { name: "Тимофій", score: 95 },
//   { name: "Володимир", score: 82 },
// ];

// if (
//   students.every((student) => {
//     return student.score > 90;
//   })
// ) {
//   console.log("Best group");
// }

// 6 flatMap

// const orders = [
//   {
//     id: 1,
//     products: [
//       { name: "Чизкейк", price: 1.99 },
//       { name: "Бисквит", price: 4.99 },
//     ],
//   },
//   {
//     id: 2,
//     products: [
//       { name: "Шоколад", price: 5.59 },
//       { name: "Зефір", price: 8.99 },
//     ],
//   },
// ];

// let result = orders.flatMap((order) => {
//   return order.products.map((product) => {
//     return product;
//   });
// });

// console.log("result:", result);

// 7 sort
// let fruits = ["Апельсин", "Яблуко", "Груша", "Кавун", "Вишня"];
// let numbers = [10, 2, 2, 15, 3, 22, 12, 32, 25, 30];

// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log("numbers:", numbers);
// fruits.sort();
// console.log(fruits);

// console.log("Банан" < "Банан");

// let students = [
//   { name: "Тимофій", score: 95 },
//   { name: "Володимир", score: 82 },
//   { name: "Дмитро", score: 97 },
//   { name: "Василь", score: 99 },
// ];

// students.sort((student1, student2) => {
//   return student2.score1 - student1.score;
// });

// students.sort((student1, student2) => {
//   return student1.name.length - student2.name.length;
// });

// students.sort((student1, student2) => {
//   return student1.name > student2.name ? 1 : -1;
// });

// console.log(students);

// 8  Object.groupBy()

// let students = [
//   { name: "Тимофій", city: "Чернівці" },
//   { name: "Володимир", city: "Дніпро" },
//   { name: "Дмитро", city: "Київ" },
//   { name: "Лео Мессі", city: "Київ" },
//   { name: "Кріштіано Роналдо", city: "Київ" },
//   { name: "Том Холанд", city: "Дніпро" },
//   { name: "Том Круз", city: "Чернівці" },
//   { name: "Василь", city: "Львів" },
// ];

// let groupByCity = Object.groupBy(students, (student) => {
//   return student.city;
// });

// /*
// {
//   "Чернівці": [{ name: "Тимофій", city: "Чернівці" },],
//   "Дніпро": [{ name: "Володимир", city: "Дніпро" },  { name: "Том Холанд", city: "Дніпро" },],
//   "Київ": [ { name: "Дмитро", city: "Київ" }, { name: "Лео Мессі", city: "Київ" }, { name: "Кріштіано Роналдо", city: "Київ" },]
// }
// */

// console.log("groupByCity:", groupByCity);

// let students = [
//   { name: "Тимофій", score: 95 },
//   { name: "Володимир", score: 92 },
//   { name: "Дмитро", score: 97 },
//   { name: "Василь", score: 99 },
//   { name: "Ваня", score: 1 },
//   { name: "Пєтя", score: 2 },
//   { name: "Коля", score: 3 },
// ];

// let gropedByScore = Object.groupBy(students, (student) => {
//   return student.score > 90 ? "Здав" : "Не здав";
// });

/* {
"Здав": [{ name: "Тимофій", score: 95 },{ name: "Володимир", score: 92 },],
"Не здав": [{ name: "Ваня", score: 1 },{ name: "Пєтя", score: 2 },]
} */

// console.log("gropedByScore:", gropedByScore);

// reduce(cb(sum, item, index, arr) => {}, initialValue)

// let products = [
//   { name: "Чизкейк", price: 1.99 },
//   { name: "Бисквит", price: 4.99 },
//   { name: "Шоколад", price: 5.59 },
//   { name: "Зефір", price: 8.99 },
// ];

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, item) => {
//   return sum + item;
// }, 0);

// // sum: 0, item: 1  => 1
// // sum: 1, item: 2  => 3
// // sum: 3, item: 3  => 6
// // sum: 6, item: 4  => 10
// // sum: 10, item: 5  => 15
// // sum: 15

// console.log("result:", result);

// let products = [
//   { name: "Чизкейк", price: 1.99 },
//   { name: "Бисквит", price: 4.99 },
//   { name: "Шоколад", price: 5.59 },
//   { name: "Зефір", price: 8.99 },
// ];

// let sum = products.reduce((sum, product) => {
//   return sum + product.price;
// }, 0);

// console.log("sum:", sum.toFixed(2));

//Bubble sort

// let arr = [5, 1, 3, 2, 4];
// // arr[i] = 1
// // arr[i + 1] = 1

// function bubbleSort(array) {
//   let count = 0;

//   for (let j = 0; j < array.length; j++) {
//     for (let i = 0; i < array.length - 1 - j; i++) {
//       count++;

//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];

//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   console.log("Iterations:", count);

//   return array;
// }

// let sortedArray = bubbleSort(arr);
// console.log("sortedArray:", sortedArray);

// let arr = [
//   {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "telegram", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "telegram", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "system", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
//   {source: "instagramm", text: "Ваш пост хтось лайкнув", date: "23-09-2024"}
// ]
// arr.map((item, index array) => {
// })

// function map(array, cb) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     result[i] = cb(array[i], i, array);
//   }

//   return result;
// }

// let arr = [2, 4, 6, 8];

// let result = map(arr, (item) => {
//   return item ** 2;
// });

// console.log("result:", result);

// function filter(array, cb) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (cb(array[i], i, array)) {
//       result.push(array[i]);
//     }
//   }

//   return result;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = filter(arr, (item) => {
//   return item % 2 === 0;
// });

// console.log("result:", result);
