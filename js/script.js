// ESECUZIONE
const gridElem = document.querySelector(".grid");

let selectLevel = document.getElementById("level");
let gameLevel = selectLevel.options[selectLevel.selectedIndex].value;
console.log(gameLevel);

if (gameLevel === "1") {
  console.log("ciao");
  for (let i = 1; i <= 100; i++) {
    let gridNumber = i;
    console.log(gridNumber);
    let cell = generateGridCell(gridNumber);
    cell.addEventListener("click", function () {
      cell.classList.add("bg-cyan");
    });
    gridElem.append(cell);
    cell.classList.add("cell-w-1");
  }
} else if (gameLevel === "2") {
  console.log("ciao");
  for (let i = 1; i <= 81; i++) {
    let gridNumber = i;
    console.log(gridNumber);
    let cell = generateGridCell(gridNumber);
    cell.addEventListener("click", function () {
      cell.classList.add("bg-cyan");
    });
    gridElem.append(cell);
    cell.classList.add("cell-w-2");
  }
} else if (gameLevel === "3") {
  console.log("ciao");
  for (let i = 1; i <= 49; i++) {
    let gridNumber = i;
    console.log(gridNumber);
    let cell = generateGridCell(gridNumber);
    cell.addEventListener("click", function () {
      cell.classList.add("bg-cyan");
    });
    gridElem.append(cell);
    cell.classList.add("cell-w-3");
  }
}

const playBtnElem = document.getElementById("play");
playBtnElem.addEventListener("click", showGrid);

/************/
// FUNZIONI
/**
 * Genera una cella della griglia con un numero all'interno
 * @param {number} innerNumber
 * @returns {any} elemento HTML che rappresenta la cella
 */
function generateGridCell(innerNumber) {
  let newCell = document.createElement("div");
  newCell.classList.add("cell");
  newCell.innerHTML = innerNumber;
  return newCell;
}

/**
 * Mostra la griglia al click
 * @param {any}
 * @returns {any} rimozione della classe "display-none"
 */
function showGrid() {
  const mainGrid = document.getElementById("main-grid");
  mainGrid.classList.remove("display-none");
}

/**
 * Colora la cella cliccata
 * @param {any}
 * @returns {any} aggiunta classe "bg-cyan"
 */
function alternativeBg() {
  const clickedCell = clickedCell.classList.add("bg-cyan");
  console.log($gridNumber);
}
