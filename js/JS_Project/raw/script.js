// //getting input
let inp = document.getElementById("inp");
//Render UI
function render() {
  let unorder = document.querySelector("#list");
  let arr = JSON.parse(localStorage.getItem("1st save")) || [];
  unorder.innerHTML = "";
  arr.forEach((ele) => {
    unorder.innerHTML += `
    <li>
    ${ele}
    <button onclick="deleteItem('${ele}')">Delete</button>
    </li>`;
  });
}
render();

//delete selected items
function deleteItem(value) {
  let arr = JSON.parse(localStorage.getItem("1st save")) || []; 
  arr = arr.filter(item => item !== value) // remove only selected item
  console.log(arr,value);
  localStorage.setItem("1st save", JSON.stringify(arr));
  render(); // refresh UI
}

//Save button
function runn() {
  document.querySelector(".save-btn").addEventListener("click", function sav() {
    let new_data = JSON.parse(localStorage.getItem("1st save")) || [];
    const i = inp.value.trim();
    new_data.push(i);
    inp.value = "";
    localStorage.setItem("1st save", JSON.stringify(new_data)) || [];
    console.log(new_data);
    
    render();
  });
}
runn();

//clear history
function clear_btn() {
  let clear = document.querySelector(".clear-btn");
  clear.addEventListener("click", function clk() {
    localStorage.removeItem("1st save");
  });
}
clear_btn();
