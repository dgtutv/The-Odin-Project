let createGrid = function(gridX, gridY){
    /*create 16 rows which contain 16 divs each*/
    let counter = 0;
    for(let i=0; i<gridY; i++){
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for(let j=0; j<gridX; j++){
            let slot = document.createElement("div");
            slot.touched = false;
            counter++;
            slot.className = "slot";
            slot.addEventListener('mousedown', (e) => {
                if (e.button === 0){
                    leftMouseDown = true;
                }
                else if (e.button === 2){
                    rightMouseDown = true;
                }
            })
            slot.addEventListener('mouseup', (e) => {
                if (e.button === 0){
                    leftMouseDown = false;
                }
                else if (e.button === 2){
                    rightMouseDown = false;
                }
            })
            slot.addEventListener('mouseenter', function()  {
                if(leftMouseDown){
                    if(!slot.touched){
                        slot.touched = true;
                        slot.red = Math.floor(Math.random() * 256);
                        slot.green = Math.floor(Math.random() * 256);
                        slot.blue = Math.floor(Math.random() * 256);
                        slot.alpha = 0.3;
                        slot.style.backgroundColor = `rgb(${slot.red}, ${slot.green}, ${slot.blue}, ${slot.alpha})`;
                    }
                    else{
                        slot.alpha = slot.alpha + 0.1;
                        slot.style.backgroundColor = `rgb(${slot.red}, ${slot.green}, ${slot.blue}, ${slot.alpha})`;
                    }
                }
                else if(rightMouseDown){
                    slot.touched = false;
                    slot.style.backgroundColor = 'white';
                }
            });
            slot.addEventListener('contextmenu', (e) => {e.preventDefault();});

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
const body = document.querySelector("body");
let container = document.querySelector(".container");
createGrid(16, 16);
const gridQueryButton = document.querySelector("#gridQuery");
let leftMouseDown = false;
let rightMouseDown = false;
gridQueryButton.addEventListener('click', function() {
    const userInput = window.prompt("What size would you linke the grid to be?", "16");
    if(userInput != null && !isNaN(userInput)){
        container.remove();
        container = document.createElement("div");
        container.className = "container";
        container.style.height = '750px';
        container.style.width = '750px';
        body.appendChild(container);
        createGrid(userInput, userInput);
    }
})