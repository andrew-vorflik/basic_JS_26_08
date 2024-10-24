"use strict";

// 1 - Займають час
// 2 - Можуть завершитись успішно або з помилкою

// 1 Виробник
// 2 Споживач

// console.log("Loading data...");

// function getWether(cb) {
//   setTimeout(() => {
//     console.log("Server working...");
//     if (Math.random() > 0.7) {
//       throw new Error("Connection problem");
//     }

//     let wetherData = {
//       desription: "Мінлива хмарність",
//       icon: "🌤",
//       city: "Kharkiv",
//       tempreche: "12",
//     };

//     setTimeout(() => {
//       console.log("Data sending from server...");

//       cb(wetherData);
//     }, 2000);
//   }, 2000);
// }

// try {
//   getWether((wetherData) => {
//     console.log(
//       `Погода сьогодні у місті ${wetherData.city}: ${wetherData.desription}, ${wetherData.icon}, температура: +${wetherData.tempreche}C`
//     );
//   });
// } catch (error) {
//   console.log("here");
//   console.log(error.message);
// }

// let promise = new Promise((resolve, reject) => {
//   let isSuccess = false;

//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Ми вдома");
//     } else {
//       reject("Ми заблукали :(");
//     }
//   }, 2000);
// });

// console.log("promise:", promise);
// promise
//   .then((result) => {
//     console.log("result:", result);
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// }).then(() => {
//   console.log("Цей код виконався через 3 сек");
// });

// function delay(fn) {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 3000);
//   }).then(() => {
//     fn();
//   });
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// delay(() => {
//   sum(2, 3);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Ми доїхали");

//     resolve();
//   }, 3000);
// });

// promise
//   .then(() => {
//     console.log("Як доїхали?");
//   })
//   .then(() => {
//     console.log("Добраніч!");
//   });

// new Promise((resolve, reject) => {
//   resolve(1);
// })
//   .then((result) => {
//     console.log("then 1: ", result);
//     return result + 1;
//   })
//   .then((result) => {
//     console.log("then 2: ", result);
//     return result + 2;
//   })
//   .then((result) => {
//     console.log("then 3: ", result);
//     return result + 3;
//   })
//   .then((result) => {
//     console.log("Total: ", result);
//   });

// function makeDish(title, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Ваша страва ${title} готова!`);
//       resolve();
//     }, time);
//   });
// }

// makeDish("Борщ", 3000)
//   .then(() => {
//     return makeDish("Паста", 2000);
//   })
//   .then((result) => {
//     return makeDish("Кава", 500);
//   })
//   .then(() => {
//     return makeDish("Морозиво", 100);
//   });

// console.log("Loading data...");

// function getWether(cb) {
//   setTimeout(() => {
//     console.log("Server working...");
//     if (Math.random() > 0.7) {
//       throw new Error("Connection problem");
//     }

//     let wetherData = {
//       desription: "Мінлива хмарність",
//       icon: "🌤",
//       city: "Kharkiv",
//       tempreche: "12",
//     };

//     setTimeout(() => {
//       console.log("Data sending from server...");

//       cb(wetherData);
//     }, 2000);
//   }, 2000);
// }

// function getWether() {
//   console.log("Loading data...");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Server working...");

//       if (Math.random() > 0.6) {
//         console.log("here");

//         reject("Connection problem");
//       }

//       let wetherData = {
//         desription: "Мінлива хмарність",
//         icon: "🌤",
//         city: "Kharkiv",
//         tempreche: "12",
//       };

//       resolve(wetherData);
//     }, 2000);
//   });
// }

// getWether()
//   .then((result) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Data sending from server...");
//         result.status = "ok";
//         resolve(result);
//       }, 2000);
//     });
//   })
//   .then((result) => {
//     console.log("result:", result);
//     console.log(
//       `Погода сьогодні у місті ${result.city}: ${result.desription}, ${result.icon}, температура: +${result.tempreche}C`
//     );
//   })
//   .catch((error) => {
//     console.log("error:", error);
//   });

// Promise.api

// function makeDish(title, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         reject(`Ваша страва ${title} згоріла!`);
//       }
//       resolve(`Ваша страва ${title} готова!`);
//     }, time);
//   });
// }

// let borsh = makeDish("Борщ", 3000);
// let pasta = makeDish("Паста", 2000);
// let coffee = makeDish("Кава", 1000);
// let icecream = makeDish("Морозиво", 500);

// let promises = Promise.all([borsh, pasta, coffee, icecream]);
// let promises = Promise.allSettled([borsh, pasta, coffee, icecream]);
// let promise = Promise.any([borsh, pasta, coffee, icecream]);
// let promise = Promise.race([borsh, pasta, coffee, icecream]);
// Promise.resolve()
// Promise.reject()

// new Promise((resolve) => {
//   resolve();
// })

// promise.then((result) => {
//   console.log("result:", result);
// });

// Event Loop

// console.log("start");

// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("end");

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout 1");

//   Promise.resolve().then(() => {
//     console.log("promise setTimeout 1");
//   });
//   Promise.resolve().then(() => {
//     console.log("promise setTimeout 2");
//   });
// }, 0);

// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise 1");
// });

// queueMicrotask(() => {
//   console.log("queue mikrotask");
// });

// Promise.resolve().then(() => {
//   console.log("promise 2");
// });

// console.log("end");

// async await

// async function foo() {
//   return 1;
// }

// let result = foo();
// console.log("result:", result);

// function makeDish(title, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         reject(`Ваша страва ${title} згоріла!`);
//       }
//       resolve(`Ваша страва ${title} готова!`);
//     }, time);
//   });
// }

// async function foo() {
//   let borshResult = null;
//   let pastaResult = null;
//   try {
//     borshResult = await makeDish("Борщ", 3000);
//     pastaResult = await makeDish("Паста", 2000);
//     console.log(borshResult, pastaResult);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// function foo() {
//   let borshResult = null;
//   let pastaResult = null;

//   makeDish("Борщ", 3000)
//     .then((result) => {
//       borshResult = result;
//       return makeDish("Паста", 2000);
//     })
//     .then((result) => {
//       pastaResult = result;

//       console.log(borshResult, pastaResult);
//     })
//     .catch((error) => {
//       console.log("error:", error);
//     });
// }
// foo();

// fetch(url)

// function fetchUsers(url) {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       result.forEach((user) => {
//         console.log(`${user.id} - ${user.name} ${user.email}`);
//       });
//     })
//     .catch((error) => {
//       console.log("error:", error);
//     });
// }

// fetchUsers("https://jsonplaceholder.typicode.com/users");

// async function asyncAwaitFetch(url) {
//   try {
//     let response = await fetch(url);
//     let result = await response.json();

//     result.forEach((user) => {
//       console.log(`${user.id} - ${user.name} ${user.email}`);
//     });
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// asyncAwaitFetch("https://jsonplaceholder.typicode.com/users");

// async function asyncAwaitFetch(url) {
//   try {
//     let response = await fetch(url);
//     let result = await response.json();
//     let raceResults = result.MRData.RaceTable.Races[0].Results;

//     raceResults.forEach((driver, index) => {
//       console.log(driver.Driver.givenName);
//     });
//   } catch (error) {
//     console.log("error:", error);
//   }
// }

// asyncAwaitFetch("http://ergast.com/api/f1/current/last/results.json");

// concurrentPromises([promise1, promise2, promise3, promise4, promise5], limit) {
//   Promise.api([promise1, promise2]);
//   Promise.api([promise3, promise4]);
//   Promise.api([promise5]);
// }

// foo1(result) {
// return result+ 1
// }
// foo2(result) {
// return result+ 2
// }
// foo3(result) {
// return result+ 3
// }

// sequenceAsync([asyncFunction1, asyncFunctions2, asyncFunctions3]) {
//   result1 =  foo1() // 1
//   result2 = foo2(result1) // 3
//   return foo3(result2) // 6
// };
