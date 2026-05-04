let btn = document.querySelector(".btn");
let vice = 0;
function colorchange() {
  let h1 = document.querySelector("h1");
  h1.innerHTML = "Ticket to Mount Fuji booked";
  vice = 1;
}

let again = 0;
btn.addEventListener("click", function (e) {
  
  if (again == 0) {
    btn.innerHTML = "Booked";
    btn.style.backgroundColor = "#275169";
    btn.style.color = "white";
    colorchange();
    again = 1
} else {
    let h1 = document.querySelector("h1");
    btn.innerHTML = "Buy";
    btn.style.backgroundColor = "white";
    btn.style.color = "black"
    h1.style.color = "white";
    h1.innerHTML = "Mount Fuji";
    again = 0
  }
});

// function backward() {
//   let h1 = document.querySelector("h1");
//   h1.style.color = "white";
//   h1.innerHTML = "Mount Fuji";
// }

// let bttn = document.querySelector(".bttn");
// bttn.addEventListener("click", function () {
//   bttn.innerHTML = "Booked";
//   bttn.style.backgroundColor = "white";
//   bttn.style.color = "black";
//   bttn.innerHTML = "Buy";
//   backward();
// });


