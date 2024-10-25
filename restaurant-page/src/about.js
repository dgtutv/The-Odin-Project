export default loadPage;

function loadPage(){
    const content = document.querySelector("#content");
    content.innerHTML = `<div id="centerContainer">
            <div id="container">
                <div class="card">
                    <h2><b>Hours</b></h2>
                    <h3>Monday: 9:00AM - 7:30PM</h3>
                    <h3>Tuesday: 9:00AM - 7:30PM</h3>
                    <h3>Wednesday: 9:00AM - 7:30PM</h3>
                    <h3>Thursday: 9:00AM - 7:30PM</h3>
                    <h3>Friday: 9:00AM - 9:00PM</h3>
                    <h3>Saturday: 12:00PM - 9:00PM</h3>
                    <h3>Sunday: Closed</h3>
                </div>
                <div class="card">
                    <h2><b>Location</b></h2>
                    <h3>27345 192Ave, Langley</h3>
                    <h3>British Columbia, Canada</h3>
                </div>
                <div class="card">
                    <h2><b>Our Mission</b></h2>
                    <h3>Tina has always strived to bring the best of classic American meals to the public. </h3>
                    <h3>Even with a low cost, we cut no corners!</h3>
                </div>
            </div>
        </div>`;
}