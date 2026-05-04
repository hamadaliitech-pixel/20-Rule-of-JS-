var b = document.querySelector(".diiv");
b.style.backgroundColor = "beige";
b.addEventListener("click", function () {
  var a = document.querySelector("h1");
  a.innerHTML = "bye world";
  a.style.color = "green";
});

let light = 0;

let change = document.querySelector(".btn");
console.log(change);

change.addEventListener("ctrlkey", function (e) {
  console.log(e);

  if (light == 0) {
    change.style.backgroundColor = "rgb(0, 0, 0)";
    change.style.color = "rgb(255, 252, 252)";
    let bulb = document.querySelector(".bulb");
    bulb.style.backgroundColor = "black";
    light = 1;
  } else {
    change.style.backgroundColor = "rgb(255, 255, 255)";
    change.style.color = "rgb(0, 0, 0)";
    let bulb = document.querySelector(".bulb");
    bulb.style.backgroundColor = "white";
    light = 0;
  }
});

let v = document.querySelectorAll(".h");
console.log(v);
v.forEach(function (e) {
  console.log(e.textContent);
});

let a = document.querySelector(".h4");
a.textContent = "<div>not hello</div>";
document.body.outerHTML.textContent;
console.log(document.body); //

//Dom events in notes.txt file
//Event bubbling

document.querySelector(".container").addEventListener("click", (e) => {
  alert("container was clicked");
});
document.querySelector(".child-container").addEventListener("click", (e) => {
  alert("child-container was clicked");
});

let child = document.querySelector(".child").addEventListener("click", (e) => {
  alert("child was clicked");
  e.stopPropagation()
});
