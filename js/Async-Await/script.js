async function run() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
      console.log("hello world");
    }, 3500);
  });
}
run();

//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully



async function ron() {
  let a = 10;
  let b = 10;
  console.log(a + b); //20
  let c = 10;
  let d = 5;
  console.log(c + d); //15
  let wait = await run(); //wait for run() '3500sec'
  console.log(wait); //after 3500 prints
}
ron();

let data = run();
console.log(data); //wait till 3500sec

