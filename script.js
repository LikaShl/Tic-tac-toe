function clickCounter() {
  move += 1;
  console.log(move);
}

let move = 0;
let field = document.getElementById("field");
field.addEventListener("click", clickCounter);

let cell = document.getElementsByClassName("cell");

function nextMove(cell) {
  if (move % 2 == 0) {
    cell.classList.add("cross");
  } else {
    cell.classList.add("null");
  }
}
