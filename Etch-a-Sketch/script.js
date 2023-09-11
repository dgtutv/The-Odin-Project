let createGrid = function(){
    /*create 16 rows which contain 16 divs each*/
    let counter = 0;
    for(let i=0; i<16; i++){
        let row = document.createElement("div");
        row.id = `row-${i}`;
        row.className = "row";
        container.appendChild(row);
        for(let j=0; j<16; j++){
            let slot = document.createElement("div");
            counter++;
            slot.id = `slot-${counter}`;
            slot.className = "slot";
            row.appendChild(slot);
        }
    }
}

const container = document.querySelector(".container");
createGrid();