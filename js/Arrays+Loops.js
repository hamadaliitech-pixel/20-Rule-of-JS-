// let numbers = [1,2,7,9]
// numbers[2] = 88
// console.log(numbers); //[1,88,7,9]

// const n = [1,7,8]
// console.log(typeof n); //object

// // Important Array methods

// let a = [1,2,4]
// console.log(a.toString()); // 1,2,4

// let b = [1,2,5]
// console.log(b.join("-")); //1-2-5

// let c = [1,2,8]
// console.log(c.pop()); //8

// let d = [1,2,5,8]
// console.log(d.push(9),d); // [1,2,5,8,9]

// let e = [1,2,5,8]
// console.log(e.shift(),e); // 1,[2,5,8,9]

// let f = [1,2,5,8]
// console.log(f.unshift(0),f); // 5,[0,1,2,5,8,9]

// let g = [7,8,9]
// delete g[1]
// console.log(g); //[3,empty,9]

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [7,8,9]
// console.log(a.concat(b,c)); //add all arrays [1,2,3,4,5,6,7,8,9]

// let h = [1,2,3,9,4,3,7]
// console.log(h.sort()); // 1,2,3,3,4,7,9

// let num = [1,2,5,6,7]
// num.splice(2,0,3,4) //1,2,3,4,5,6,7 (position to add,no of element to remove,element to be add)
// console.log(num);

// let num = [1,2,3,4,5]
// console.log(num.slice(2)); // [3,4,5]
// console.log(num.slice(1,3)); // [2,3]

// let rvrs = [1,2,3]
// console.log(rvrs.reverse()); //3,2,1

// LOOPING THROUGH ARRAYS
// let ar = [1,2,3,4,5]
// ar.forEach((value,index,array)=>{         //calls a function,once for each array element
//     console.log("hello",value,index,array);
// })

// let mp = [1, 2, 3, 4, 5];
// mp.map((value, index, array) => {
//   //creates a new array by performing some operation on each array element
//   console.log(value * value);
// });
// console.log(mp);

// let a = [1, 2, 3, 4, 5];
// let evennumbers = a.filter(function run(num) {
//     return num %2 ===0; })
// console.log(a,evennumbers); //only even numbers

// REAL WORLD FILTER() USAGE
// let users = [
//     {name : "Hammad",age: 17},
//     {name : "Harry",age: 21},
//     {name : "Mark",age: 19},
// ]
// let adults = users.filter(user => user.age >= 18).map(user => user.name.toUpperCase())
// console.log(`Adults are`,adults);

// let reduce = [1, 2, 3, 4, 5];
// let sum = reduce.reduce(
//   (acc, sum) => acc + sum,
// );
// console.log(sum); //15

// let arr = ["Hammad","Mark"]
// console.log(arr.map(arr => arr.replace("Hammad","Bezos").toUpperCase())); // ["BEZOS","MARK"]
// console.log(arr.map(arr => arr.toUpperCase())); // ["HAMMAD","MARK"
// let arr = [1, 2, 3, 4, 5];
// for (const ele of arr) {
//   console.log(ele); //1,2,3,4,5 used to get the values of an array
// }

// let arrr = [1, 2, 3, 4, 5];
// for (const key in arrr) {
//   console.log(key); //0,1,2,3,4 used to get the keys of array
// }

// Arrays practice

// let num = [1,2,3,4,5]
// let input = Number(prompt('enter num'))
// console.log(num.push(input),num);

// let input2 = -1;
// let num = [1, 2, 3, 4, 5];
// while (input2 !== 0) {
//   input2 = Number(prompt("enter number"));
//   console.log(num.push(input2),num);
//   console.log("Enter zero", input2);
// }

// let input2 = -1;
// let empty = [];
// while (input2 !== 0) {
//     input2 = Number(prompt("Enter number, Enter zero to end"));
//     // let arr = [input2 * input2];
//     empty.push(input2 * input2);
//     console.log(empty); //[answer in one array]
// }

// let inp = Number(prompt('Enter_'))
// let result = 1;
// for (let i = 1; i <= inp; i++){
//     result *= i  //Fictorial };
// console.log(`Your entered number is :${inp} \nFictorial is:`,result);

// let fruits = [{ price: 100 }, { price: 100 }, { price: 100 }];
// let total = fruits.reduce((acc, fruits) => acc + fruits.price,0);
// console.log(total);

// let fruits = ["apple", "banana", "grapes", "mango", "orange","apple","banana", "grapes", "mango", "orange"]
// let count = fruits.reduce((acc,items)=> {
//  acc[items] = (acc[items] || 0)+1;
//     return acc;} ,{});
// console.log(count); //[apple:2,banana:2,mango:2]

// let a = [2, 5, 8, 10];
// let sum = 0;
// for (const ele of a) {
//   console.log(ele);
//   sum += ele;
// }
// console.log(sum); //2,5,8,10 & 25

// let a = [2, 5, 8, 10];
// let sum = 0;
// a.forEach((index) =>{
//     console.log(index); //0,1,2,3
// })

// let num = [1, 2, 3, 4, 5, 6];
// for (let i of num) {
//   if (i % 2 == 0) {
//       console.log(i);
//   }
// }

// let num = [2, 6, 8, 3, 10, 4];
// let n = num.filter((user) => user > 5,user = 5);
// console.log(n);

// let num = [2, 6, 8, 3, 10, 4];
// let max = Math.max(...num);
// console.log("This is maximum number:", max);

// let max = num[0]
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]
//     }
// }
// console.log(max);//633

// let arr = [1, "hello ", [2, 3]];
// console.log(arr);

// arr.splice(1, 1, "hello world", [4, 5]);
// console.log(arr); //1,"hello world" [2,3] [4,5]

// var myarray = [1, 2, 3];
// myarray.forEach((ele) => {
//   console.log(ele);
// });
// for (let i = 0; i < myarray.length; i++) {
//   console.log(i);
// }
// for (const ele of myarray) {
//     console.log(ele);
// }
            
// let input = prompt("Enter_");
// let arr = [];
// let result = 1;
// for (let i = 1; i <= input; i++) {
//   arr.push(i);  
// }
// let sum = arr.reduce((acc,cur) => acc * cur ,1) //Fictorial ;
// console.log(sum);