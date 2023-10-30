// ESECUZIONE
const gridElem = document.querySelector(".grid");

//Mostrare la griglia di gioco al click
const playBtnElem = document.getElementById("play");
playBtnElem.addEventListener("click", showGrid);

/************/
// FUNZIONI

/**
 * Creazione cella
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
 * Creazione griglia
 * @param {any}
 * @param {any}
 * viene generato il giusto numero di celle, con la giusta disposizione in base alla difficoltà del gioco
 */
function gridCreation(cellNum, cellW) {
  for (let i = 1; i <= cellNum; i++) {
    let gridNumber = i;
    console.log(gridNumber);
    let cell = generateGridCell(gridNumber);
    cell.addEventListener("click", function () {
      cell.classList.add("bg-cyan");
    });
    gridElem.append(cell);
    cell.classList.add(cellW);
  }
}

/**
 * Mostra la griglia al click
 * @param {any}
 * @returns {any} rimozione della classe "display-none"
 */
function showGrid() {
  const mainGrid = document.getElementById("main-grid");
  mainGrid.innerHTML = "";

  const gameLevel = document.getElementById("level").value;
  console.log(gameLevel);
  if (gameLevel === "1") {
    gridCreation(100, "cell-w-1");
  } else if (gameLevel === "2") {
    gridCreation(81, "cell-w-2");
  } else if (gameLevel === "3") {
    gridCreation(49, "cell-w-3");
  }
  mainGrid.classList.remove("display-none");
}
