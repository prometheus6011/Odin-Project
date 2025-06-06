let currSize = 16;

function randomColorString() {
  let rand1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let rand2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let rand3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let rand4 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return `rgba(${rand1}, ${rand2}, ${rand3}, ${rand4})`;
}

function createContainerDivs(numBoxes = currSize) {
  let divString = ``;
  for (let i = 0; i < numBoxes; ++i) {
    divString += `<div class="row">`
    for (let j = 0; j < numBoxes; ++j) {
      divString += `\t<div class="cell"></div>\n`
    }
    divString += `</div>\n`
  }
  containerDiv.innerHTML = divString;

  const rowDivs = document.querySelectorAll(".row");
  const cellDivs = document.querySelectorAll(".cell");
  rowDivs.forEach(row => {
    row.setAttribute("style", `
      display: flex;
      height: 600px;
      flex-direction: column;
    `);
  });

  cellDivs.forEach(cell => {
    cell.setAttribute("style", `
      display: flex; 
      border: 0.5px solid black;
      height: calc((600px - ${numBoxes * 1}px) / ${numBoxes});
      width: calc((600px - ${numBoxes * 1}px) / ${numBoxes});
    `);

    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = randomColorString();
    });
  });
}

const containerDiv = document.querySelector(".container");
containerDiv.setAttribute("style", `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  margin: auto;
  border: 2px solid black;
`);
createContainerDivs();

const resetButton = document.querySelector(".reset");
resetButton.onclick = () => {
  createContainerDivs();
}

const changeSizeButton = document.querySelector(".change-size");
changeSizeButton.onclick = () => {
  currSize = prompt("Enter a size. Between 1 and 100");
  createContainerDivs(currSize);
}