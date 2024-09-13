"use strict";

// let num1 = 123; // integer
// let num2 = 3.14; // float

// let billion = 1000000;
// let billion2 = 1_000_000;
// let billion3 = 1e6;
// let milliNumber = 2e-6;
// let number = Number(100);

// console.log("billion:", number);

// console.log(9007199254740991 + 1);
// console.log(90071992547409920000 + 9007199254740992000);

// 1 - Number.isSafeInteger(num)
// console.log(Number.isSafeInteger(9007199254740991));
// console.log(Number.isSafeInteger(9007199254740992000));

// Infinity -Infinity NaN

// 2- Number.isFinite(num)

// console.log(10 / 0);
// console.log("4px" - 2);

// console.log(Number.isFinite(10));
// console.log(Number.isFinite(3.1));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite("4px" - 2));
// console.log(Number.isFinite(10 / 0));

// 3 Number.isNaN() isNaN()

// console.log(isNaN(NaN));
// console.log(isNaN("4px" - 2));
// console.log(isNaN("4px"));
// console.log(isNaN(undefined));
// console.log(isNaN(100));
// console.log("================");
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN("4px"));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN(100));

// let num1 = +prompt("Enter numer 1"); // 23
// let num2 = +prompt("Enter numer 2"); // NaN
// let result = num1 + num2;

// if (isNaN(result)) {
//   console.log("Введені некоректні дані!");
// } else {
//   console.log(result);
// }

// 4 - Number.isInteger()

// console.log(Number.isInteger(100));
// console.log(Number.isInteger(100.5));
// console.log(Number.isInteger(16236 / 4));
// console.log(Number.isInteger(16236 / 5));

// 5 - parseInt(str), parseFloat(str)

// console.log(Number("100"));
// console.log(Number("100%"));
// console.log(+"100%");

// console.log(parseInt("100"));
// console.log(parseInt("100px100"));
// console.log(parseInt("100%"));
// console.log(parseInt("50$"));
// console.log(parseInt("50.5$"));
// console.log(parseInt("$50"));
// console.log(parseInt("px50"));
// console.log("===============");
// console.log(parseFloat("50"));
// console.log(parseFloat("50px"));
// console.log(parseFloat("50.5$"));
// console.log(parseFloat("$50.5"));

// console.log("1.035,50");

// 6 - parseInt(str, base)

// 0 1 10 11 100 101 110
// console.log(parseInt("100", 2));
// 0-9 a b c d e f 10
// 11- 19 1a 1b 1c 1d 1e 1f 20

// console.log(parseInt("10", 16));
// console.log(parseInt("ff", 16));

// 7 - number.toFixed(num) - string!!!

// console.log(16.355);
// console.log((16.355).toFixed());
// console.log((16.355).toFixed(0));
// console.log((16.355).toFixed(1));
// console.log((16.345).toFixed(1));
// console.log((16.355).toFixed(2));
// console.log((16.354).toFixed(2));
// console.log((16.354).toFixed(6));
// console.log(+(16.354).toFixed(6));

// 8 - num.toPrecision(number)

// let num = 5.12345;
// console.log(num.toPrecision(1));
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(3));
// console.log(num.toPrecision(10));
// console.log(num.toPrecision(10));

// let num = 50.12345;
// console.log(num.toPrecision(1));
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(3));

// let num2 = 0.00125;
// console.log(num2.toPrecision(1));
// console.log(num2.toPrecision(2));

// console.log(+(0.1 + 0.2).toFixed(1) === 0.3);
// console.log((0.1).toFixed(20));
// console.log((0.2).toFixed(20));
// console.log(+(0.11 * 0.2).toFixed(6));

// Autoboxing

// let user = {
//   name: "john",
//   sayHi() {
//     console.log("Hi");
//   },
// };

// console.log(user.name);
// console.log(user.sayHi());

// console.log((10.2).toFixed(1));

// Autoboxing
// 10.toFixed()
// Number(10) => {}
// {}.toFixed() => result
// Number(10) - delete
// result

// let str1 = " Hello! ";
// let str2 = " World ";
// let str3 = `${str1} JavaScript`;
// let str4 = String("JS");

// console.log(str1.length);
// console.log(str1[0]);
// console.log(str1[1]);
// console.log(str1[2]);
// console.log(str1[str1.length - 1]);

// // str1[0] = "h";
// console.log("str1:", str1);

// // 1 - str1.at(0)
// console.log(str1.at(0));
// console.log(str1.at(1));
// console.log(str1.at(-1));

// 2 - str.concat(str1, str2)

// console.log("Hello!".concat(str2, " ", "World", " ", str4, true, 100));

// 3 - toUpperCase, toLowerCase

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// 4 str1.indexOf(str)

// let text = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";
// let search = "дому";

// console.log(text.indexOf("Я"));
// console.log(text.indexOf("їду"));
// console.log(text.indexOf("бабуся"));
// console.log(text.lastIndexOf("дому"));
// console.log(text.indexOf("дому", 10));

// str1.includes(str)

// if (text.includes(search)) {
//   console.log("Співпадіння є!");
// } else {
//   console.log("Співпадіння немає!");
// }

// let text = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";
// let search = prompt();

// 5 - text.toLowerCase()

// if (text.toLowerCase().includes(search.toLowerCase())) {
//   console.log("Співпадіння є!");
// } else {
//   console.log("Співпадіння немає!");
// }

// 6 - slice(start, end)
// let text = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";
// let str = "Hello";

// console.log(text.slice(5));
// console.log(text.slice(1));
// console.log(text.slice(10));
// console.log(text.slice(10, 20));
// console.log(text.slice(3, -5));
// console.log(text.slice(10, 5));

// str = "h" + str.slice(1);
// console.log("str:", str);

// 7 - replace

// let text = "Я їду до дому, до тебе до дому де очі знайомі і завжди нові!";

// console.log(text.replace("до дому", "до хати"));
// console.log(text.replaceAll("до дому", "до хати"));

// 8 repeat
// let str = "Hello";

// console.log(str.repeat(1));

// 9 - trim, trimStart, trimEnd

// let str = "      Hello       ";

// console.log(1, str, 2);
// console.log(1, str.trim(), 2);
// console.log(1, str.trimStart(), 2);
// console.log(1, str.trimEnd(), 2);

// let userEmail = "user@mail.com";
// let registeredEmail = "user@mail.com ".trim();

// if (registeredEmail === userEmail) {
//   console.log("Welcome");
// } else {
//   console.log("Я вас не знаю!");
// }

// 10 - string.startsWith

// let str = "Hello";

// console.log(str.startsWith("He!"));
// console.log(str.endsWith("lo!"));

// let url = "http://site.com";

// if (url.startsWith("https")) {
//   console.log("Безпечний протокол");
// } else {
//   console.log("НЕ безпечний протокол");
// }

// let docFile = "book.doc";

// if (docFile.endsWith(".pdf")) {
//   console.log("Обробляю pdf файл");
// } else if (docFile.endsWith(".doc")) {
//   console.log("Обробляю doc файл");
// }

// padStart та padEnd

// let str = "Hello";

// console.log(str.padStart(10, "-"));
// console.log(str.padStart(3, "-"));
// console.log(str.padEnd(10, "-"));
// console.log(str.padEnd(5, "-"));
