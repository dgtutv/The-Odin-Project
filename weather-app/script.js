//Global Variables
const apiKey = 'WDVN9BJ4YDFAK7H8BNLJX64N4';
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchButton");

//Functions
async function getLocationData(city, country) {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=${apiKey}`;
    try{
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } 
    catch(error){
        return("Error:", error);
    }
}

function searchBarValidity(){
    let isValid = true;
    const location = searchBar.value.split(",");
    if(location.length != 2){
        console.log("ERROR");
        searchBar.setCustomValidity("Location must be in format \"City, Country\"");
    }
    else{
        searchBar.setCustomValidity("");
    }
    searchBar.reportValidity();
}

//Event Listeners
searchButton.addEventListener('click', (event) => {
    const location = searchBar.value.split(",");
    searchBarValidity();
    console.log(location);
});


//Main
getLocationData("Abbotsford", "Canada").then((result) => {
    console.log(result);
});
