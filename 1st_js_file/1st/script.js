// Question 1 ----------------------------
// let totalcost = [
//     item1price=25,
//     item2price=50,
//     item3price=10
// ]
// console.log(totalcost);

// let newtotal = item1price+item2price+item3price;
// let x = newtotal*10/100;
// let final = newtotal - x

// console.log(`total price is:${newtotal}\nDiscount:${x}\n${final}`);

// Question 2 ----------------------------
// let username = "admin"
// let password = "secure23"
// if(username === "admin" && password === "secure123"){
//     console.log("True");
// }
// else{
//     console.log("false");
// }

// Question 3 ----------------------------

// username === "admin" && password === "secure123" ? console.log("True") : console.log("True")
// let score = "75" ? console.log(true) : console.log(false);

let input = Number(prompt("enter"));
// input = input - 0;

let result = input * 2;
console.log(typeof input, input, result);


echo "# Numbers-converter" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hamadaliitech-pixel/Numbers-converter.git
git push -u origin main