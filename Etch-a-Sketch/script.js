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
        }
    }
}

const container = document.querySelector(".container");
createGrid(16, 16);
const gridQueryButton = document.querySelector("#gridQuery");
gridQueryButton.addEventListener('click', function() {
    console.log("I've been pressed!");
})