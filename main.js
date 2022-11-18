let pad = document.querySelector(".grid-container");
function createBoard(size){
pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
pad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};
let size = 16;
createBoard(size);
let divNumber = size*size;
for(let a = 0; a < divNumber; a++){
    let div = document.createElement("div");
    pad.appendChild(div);
}