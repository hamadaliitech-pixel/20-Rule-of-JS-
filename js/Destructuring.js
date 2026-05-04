// let arr = [0, 1, 2, 3, 4];
// // let [a,b] = arr
// const [first, third] = arr;
// // console.log([a,b]);
// console.log([first, , third]); //first =1 and third= 3

// //swapping variables
// let x = 2,
//   y = 3;
// [x, y] = [y, x];
// console.log(`x:${x} & Y:${y}`);

//object destruc..
// const person = {name:"Hammad",age :21}
// const {name:Username,age:Userage}=person;
// console.log(Username,Userage);//"Hammad",21

//  //nested destruc....
// const student = { name: "Ali", score: { math: 90 } };
// const {
//   score: { math },
// } = student;
// console.log(math);

//Practice-------------------------------------------
// const arr = [1,2,3,4]
// const [a,b]=arr
// console.log(a,b);

// const arr =[5,10,15,20]
// const [first, ,last] =arr
// console.log(first,last);

// let a = 2;
// let b = 3;
// [a, b] = [b, a];
// console.log(a, b);

// const car = {
//   brand: "Toyota",
//   model: 2022,
//   color: "Green",
// };
// const {brand, model} = car;
// console.log(brand,model);

// const person = {
//     name : "Hammad",
//     age: 20
// }
// const {name:Username,age:Userage} = person
// console.log(Username);

//mostly used in Api`s
// const student = {
//     name:"Hammad",
//     score:{
//         Math:90,
//         Computer:80
//     }
// }
// const {score : {Math,Computer}} = student
// console.log(Math,Computer);

// function greet({name , age}) {
//     console.log(name,age);
// }
// greet({name:"Hammad",age:20})

// function mul(a,b) {
//     return a*b
// }
// console.log(mul(2,3));

// const mul = (a,b) => a+b;
// console.log(mul(4,5));

// function double(num) {
//     return num * 2;
// }
// console.log(double(5));

// const double = (num) => num*2
// console.log(double(4));

// const numbers = [1,2,3,4]
// numbers.map((ele)=>console.log(ele*2))//Answer in line
// const double =  numbers.map((ele)=>ele*2)
// console.log(double);//Answer in []

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a = arr.filter((ele) => ele > 5);
// console.log(a);

// const student = [
//   { name: "Hammad", marks: 85 },
//   { name: "Mark", marks: 87 },
//   { name: "Bezos", marks: 80 },
// ];
// let b= student.filter((ele)=> ele.marks > 85)
// console.log(b);

// const a = [10,20,30,40]
// const add = a.reduce((acc,cur)=>acc+cur,0)
// console.log(add);

const student = [
  { name: "Hammad", marks: 90 },
  { name: "Mark", marks: 75 },
  { name: "Bezos", marks: 45 },
];
const aa = student.map((ele)=>ele.marks).reduce((acc,cur)=>acc+cur,0)//Good
const aaa = student.reduce((acc,student)=>acc+student.marks,0)//More Efficient
console.log(aa,aaa);