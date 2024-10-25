import "./styles.css";
import loadAbout from "./about.js";
import loadContact from "./contact.js";

function loadPage(){
    const content = document.querySelector("#content");
    content.innerHTML =  `<div class="imageBackground" id="homeImage">
            <div class="imageText">
                <h1>Where food meets art.</h1>
                <h2>Endulge in meals that enforce healthy highs of mystical flavour.</h2>
            </div>
        </div>
        <div class="imageBackground" id="cheeseBurger">
            <div class="imageText">
                <h1>American Classic Cheeseburger.</h1>
                <h2>Built with bold cheddar and a juicy patty.</h2>
            </div>
        </div>
        <div class="imageBackground" id="caesarSalad">
            <div class="imageText">
                <h1>Roman Caesar Salad.</h1>
            <h2>The finest dressing in town meets crisp romaine from our garden.</h2>
            </div>
        </div>`;
}

const homeButton = document.querySelector("#home");
homeButton.addEventListener('click', function(e){
    loadPage();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener('click', function(e){
    loadAbout();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener('click', function(e){
    loadContact();
});

loadPage();