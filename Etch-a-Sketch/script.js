let createGrid = function(gridX, gridY){
    /*create 16 rows which contain 16 divs each*/
    let counter = 0;
    for(let i=0; i<gridY; i++){
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for(let j=0; j<gridX; j++){
            let slot = document.createElement("div");
            counter++;
            slot.className = "slot";
            slot.addEventListener('mouseenter', function()  {
                slot.style.backgroundColor = 'gray';
            });
            slot.style.height = `${750/gridX}px`;
            slot.style.width = `${750/gridY}px`;
            row.appendChild(slot);
            if(j == 0){
                slot.style.borderLeft = '4px solid black';
            }
            else if(j == gridX-1){
                slot.style.borderRight = '4px solid black';
            }
            if(i==0){
                slot.style.borderTop = '4px solid black';
            }
            else if(i == gridY-1){
                slot.style.borderBottom = '4px solid black';
            }
        }
    }
}

const container = document.querySelector(".container");
createGrid(16, 16);
const gridQueryButton = document.querySelector("#gridQuery");
gridQueryButton.addEventListener('click', function() {
    console.log("I've been pressed!");
})