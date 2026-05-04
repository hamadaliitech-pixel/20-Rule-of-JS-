let input = prompt("Enter only Binary:");
let mul = 0;
let sum = 0;
if (/^[01]{1,10}$/.test(input)) {
  let power = 0;
  //let sm = 0;
  for (let i = 0; i < input.length; i++) {
    //i: is power
    power = 2 ** i;
    let reversed = input.split("").reverse().join("")
    
    mul = power * reversed[i]; //this is: 2^n * input

    // console.log(`2^${i} * ${reversed[i]} = ${mul}`);

    sum += mul;
  }
  console.log(`Binary: ${input} \nDecimal: ${sum}`);

} //if-end
else {
  console.log("not bin");
}

// --------------------
