let pad = document.querySelector(".grid-container");
let size = 16;
var color = "black";
createBoard(size, color);
function createBoard(size) {
  pad.textContent = "";
  pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  let divNumber = size * size;
  console.log(divNumber);
  for (let a = 0; a < divNumber; a++) {
    let div = document.createElement("div");
    div.classList.add("pad-box");
    pad.appendChild(div);
    div.onmouseover = function(){
      if(color == col){
        div.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;    
      }
      div.style.background = `${color}`;
    }
  }
 
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
  
  return boardSize;
}
 function reset(){
  let allDivs = document.querySelectorAll(".pad-box");
  for (let a = 0; a < allDivs.length; a++){
    allDivs[a].style.backgroundColor = "white";
  };
};
document.querySelector(".pad-size").addEventListener(("click"), () => {
    let padSize = getBoardSize();
    createBoard(padSize);
});
function changeColor(chosenColor){
  color = chosenColor;
};
let col = "random"
document.querySelector("#random").onclick = function (){color = col};
  
