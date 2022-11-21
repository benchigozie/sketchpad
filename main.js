let pad = document.querySelector(".grid-container");
let size = 16;
createBoard(size);
function createBoard(size) {
  
  pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  let divNumber = size * size;
  console.log(divNumber);
  for (let a = 0; a < divNumber; a++) {
    let div = document.createElement("div");
    div.classList.add("pad-box");
    pad.appendChild(div);
  }
  let allPads = document.querySelectorAll(".pad-box");
  //console.log(allPads);
  for(let b = 0; b < allPads.length; b++){
    allPads[b].style.background = "yellow";
    //console.log(allPads[b]);
  };
}
function getBoardSize() {
  let boardSize = prompt("Input a Size");
  if(boardSize == ""){
    let message = document.querySelector(".message");
    document.querySelector(".message").textContent = "Please, Select a size";
  }
  else if(boardSize < 0 || boardSize > 100){
    document.querySelector(".message").textContent = "Select a size from 1 - 100";
  }
  pad.textContent = "";
  return boardSize;
}
console.log(size);

document.querySelector(".pad-size").addEventListener(("click"), () => {
    let padSize = getBoardSize();
    createBoard(padSize);
})
