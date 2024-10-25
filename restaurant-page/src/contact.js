export default loadPage;

function loadPage(){
    const content = document.querySelector("#content");
    content.innerHTML = `<div id="centerContainer">
            <div id="container">
                <div class="card pageTitle">
                    <h1>Contact</h1>
                </div>
                <div class="card">
                    <h2><b>Restaurant</b></h2>
                    <h3>Phone: (252)-973-1011</h3>
                    <h3>Email: tina@tinatastingroom.com</h3>
                </div>
                <div class="card">
                    <h2><b>Chef Stewie</b></h2>
                    <h3>Phone: (604)-671-9764</h3>
                    <h3>Email: chefstew@tinastastingroom.com</h3>
                </div>
                <div class="card">
                    <h2><b>HR Heather</b></h2>
                    <h3>Phone: (778)-241-1068</h3>
                    <h3>Email: thebest@tinastastingroom.com</h3>
                </div>
            </div>
        </div>`;
}