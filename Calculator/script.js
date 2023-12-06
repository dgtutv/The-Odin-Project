let display = document.querySelector("#display");


document.querySelectorAll('.number').forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.id;
        console.log(button.id);
    });
});