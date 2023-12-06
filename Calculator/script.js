let display = document.querySelector("#display");

document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', () => {
        if(display.textContent == "Error"){
            display.textContent = "";
        }
        display.textContent += button.id;
    });
});

document.querySelector("#delete").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    display.textContent = display.textContent.slice(0, -1);
});

document.querySelector("#clear").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    if(display.textContent == "Error"){
        display.textContent = "";
    }
    display.textContent = "";
});

document.querySelector("#divide").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    if(display.textContent == "Error"){
        display.textContent = "";
    }
    display.textContent += "/";
});

document.querySelector("#multiply").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    display.textContent += "*";
});

document.querySelector("#subtract").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    display.textContent += "-";
});

document.querySelector("#add").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    display.textContent += "+";
});

document.querySelector("#decimal").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    display.textContent += ".";
});

document.querySelector("#pi").addEventListener('click', () => {
    if(display.textContent == "Error"){
            display.textContent = "";
        }
    display.textContent += "π";
});

document.querySelector("#equals").addEventListener('click', () => {
    let input = display.textContent;
    try {
        output = eval(input);
        display.textContent = output;
    } catch (error) {
        display.textContent = "Error";
    }
});