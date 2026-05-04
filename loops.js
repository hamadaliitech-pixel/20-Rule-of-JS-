// let num = 10;
// for (let i = 0; i <= num; i++) {
//     console.log("This is counting numbers:",i);
//     if (i%2==0) {
//         console.log("This is even numbers:",i);
//     }
// }

//            (0, 1, 2, 3, 4, 5);
// let numbers = [3, 7, 2, 9, 4, 6];

// for (const element of numbers) {
//     if (element % 3 === 0) {
//         console.log(element); //3,9,6
//     }
// }

/* for-loop is used for {counting,index-based array access,mathematical Logic}
while-loop is used for {user input loops,condition based repition}
do-while-loop is used for {Menus,validation}
for-of is used for {clean array looping,no need for index}
for-in is used for {object properties} */

// loop practical::::::::
/* for (let i = 0; i < 10; i++) {
  console.log(i + 1); //1,2,3,4,5,6,7,8,9,10
} */

/* for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);   //0,2,4,6,8...
  }
} */

/* for (let i = 1; i <= 10; i++) {
  console.log(`7*${i}:${i * 7}`); // 7,14,21,28,35..
} */

/*let i = 1
while (i<=5) {
    console.log(i);
    i++
}*/

/*let num = -1;
while (num !== 0) {
  num = Number(prompt("enter"));
  console.log("enter zero", num);
}
console.log("loop is closed");*/

/* let num = 10;
while (num <= 20) {
  console.log(num);
  num++;
} */

/* let password;
do {
  password = prompt("enter");
} while (password !== "admin");
console.log(password); */

/* let num = [1, 2, 3, 4, 5];
let sum = 0
for (const ele of num) {
  if (ele > 4) {
    console.log(ele);//5
  }
  sum += ele
  console.log(ele);//1,2,3,4,5
}
console.log(sum); //15 */

/* let id = {
  //key: values
  name: "Hamad",
  age: 20,
  roll_no: 585,
};
console.log(Object.keys(id));//print key/values in arr
Object.keys(id).forEach((keys) => {
  console.log(keys); //prints keys/values indivitually
}); */


let count = 0
for (let i = 0; i < 100; i++) {
  if (i % 3 == 0) {
    count++
}
}
console.log(count);
