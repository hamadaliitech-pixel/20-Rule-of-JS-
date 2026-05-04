while (true) {
  let age = Number(prompt("enter age"));

  if (age <= 18) {
    alert("dont drive");
  } else {
    alert("drive");
  }

  let ask = confirm("wanna run again?");
  if (!ask) break;
}
