// Application that creates an interactive grid of divs.
// When user hovers over a specific div in the grid it will change colors,
// and the color will stay changed. This will create a rudimentary
// etch-a-sketch type experience.

// Get container div
let container = document.getElementById("container");
let gridNumber = document.getElementById("gridNumber");


// Create 16 x 16 grid of divs
function makeSquareGrid(x) {
  for(i = 0; i < x; i++){
    let col = document.createElement("div");
    col.className = "grid";
    container.appendChild(col);

    for(j = 0; j < x; j++) {
      let cell = document.createElement("div");
      cell.className = "grid cell";
      col.appendChild(cell);
      cell.style.display = "inline-block";
    }
  }
}

function fillCells() {

}



makeSquareGrid(16);

function clearGrid() {

}








// function checkGridSize(x) {
//   if(x > 16 && x <= 32) {
//     row.style.height = "30px";
//     row.style.width = "30px";
//     cell.style.height = "30px";
//     cell.style.width = "30px";
//   } else if(x > 32) {
//     row.style.height = "20px";
//     row.style.width = "20px";
//     cell.style.height = "20px";
//     cell.style.width = "20px";
//   }
// }
