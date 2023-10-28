// ESECUZIONE

button.addEventListener("click", generateGridCell)

for (let i = 1; i <= 100; i++) {
    const gridNumber = i
    //Genera la cella
    const cell = generateGridCell(gridNumber)
}

/************/
// FUNZIONI
/**
 * Genera una cella della griglia con un numero all'interno
 * @param {number} innerNumber
 * @returns {any} elemento HTML che rappresenta la cella
 */
function generateGridCell(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;
    return newCell;
  }
  