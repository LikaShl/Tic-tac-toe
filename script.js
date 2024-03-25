let move = 0;
let cell = document.getElementsByClassName("cell");

function nextMove(cell) {
  if (cell.classList.contains("cross") || cell.classList.contains("null")) {
    return;
  } else if (move % 2 == 0) {
    cell.classList.add("cross");
  } else if (move % 2 != 0) {
    cell.classList.add("null");
  }
  move += 1;
  whoWin();
}

function whoWin() {
  let crossWin = document.getElementById("cross-win");
  let nullWin = document.getElementById("null-win");
  let cell1 = document.getElementById("cell1");
  let cell2 = document.getElementById("cell2");
  let cell3 = document.getElementById("cell3");
  let cell4 = document.getElementById("cell4");
  let cell5 = document.getElementById("cell5");
  let cell6 = document.getElementById("cell6");
  let cell7 = document.getElementById("cell7");
  let cell8 = document.getElementById("cell8");
  let cell9 = document.getElementById("cell9");
  if (
    (cell1.classList.contains("cross") &&
      cell2.classList.contains("cross") &&
      cell3.classList.contains("cross")) ||
    (cell4.classList.contains("cross") &&
      cell5.classList.contains("cross") &&
      cell6.classList.contains("cross")) ||
    (cell7.classList.contains("cross") &&
      cell8.classList.contains("cross") &&
      cell9.classList.contains("cross")) ||
    (cell1.classList.contains("cross") &&
      cell4.classList.contains("cross") &&
      cell7.classList.contains("cross")) ||
    (cell2.classList.contains("cross") &&
      cell5.classList.contains("cross") &&
      cell8.classList.contains("cross")) ||
    (cell3.classList.contains("cross") &&
      cell6.classList.contains("cross") &&
      cell9.classList.contains("cross")) ||
    (cell1.classList.contains("cross") &&
      cell5.classList.contains("cross") &&
      cell9.classList.contains("cross")) ||
    (cell3.classList.contains("cross") &&
      cell5.classList.contains("cross") &&
      cell7.classList.contains("cross"))
  ) {
    crossWin.style.display = "flex";
  } else if (
    (cell1.classList.contains("null") &&
      cell2.classList.contains("null") &&
      cell3.classList.contains("null")) ||
    (cell4.classList.contains("null") &&
      cell5.classList.contains("null") &&
      cell6.classList.contains("null")) ||
    (cell7.classList.contains("null") &&
      cell8.classList.contains("null") &&
      cell9.classList.contains("null")) ||
    (cell1.classList.contains("null") &&
      cell4.classList.contains("null") &&
      cell7.classList.contains("null")) ||
    (cell2.classList.contains("null") &&
      cell5.classList.contains("null") &&
      cell8.classList.contains("null")) ||
    (cell3.classList.contains("null") &&
      cell6.classList.contains("null") &&
      cell9.classList.contains("null")) ||
    (cell1.classList.contains("null") &&
      cell5.classList.contains("null") &&
      cell9.classList.contains("null")) ||
    (cell3.classList.contains("null") &&
      cell5.classList.contains("null") &&
      cell7.classList.contains("null"))
  ) {
    nullWin.style.display = "flex";
  } else {
  }
}
