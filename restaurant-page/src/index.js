import "./styles.css";

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

loadPage();