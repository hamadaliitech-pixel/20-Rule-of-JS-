//http://Mdn.com/javascript/errors

// let a = prompt('enter')
// let b = prompt('enter')
// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("sorry syntax err");//throws syntax err
// }
// let sum = parseInt(a) + parseInt(b) //parseint reads only integers 11kk+33l = 44
// console.log(sum);

let c = Number(prompt("enter")); //Number handles decimals/more strict
let d = Number(prompt("enter"));
let sm = c + d; //

try {
  console.log("sum:", sm * x);
} catch (error) {
  //types of err
  alert(error.name);
  alert(error.massage);
  alert(error.stack);
  throw new Error("error agia re bedo"); //throws error
}

function sd(params) {
  try {
    console.log("sum:", sm * x);
  } catch (error) {
    //types of err
    alert(error.name);
    alert(error.massage);
    alert(error.stack);
    return 0;
  } finally {
    //finally is usefull in functions when we want to run statements after return state:
    console.log("files are closed");
  }
}
