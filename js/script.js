// ESECUZIONE
const gridElem = document.querySelector(".grid");

for (let i = 1; i <= 100; i++) {
  const gridNumber = i;
  console.log(gridNumber);
  //Genera la cella
  const cell = generateGridCell(gridNumber);
  cell.addEventListener("click", alternativeBg);
  gridElem.append(cell);
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
  console.log("rimuovo classe e mostro griglia");
}

/**
 * Colora la cella cliccata
 * @param {any}
 * @returns {any} aggiunta classe "bg-cyan"
 */
function alternativeBg() {
  const clickedCell = document.getElementsByClassName("cell");
  clickedCell.classList.add("bg-cyan");
  console.log($gridNumber);
}
