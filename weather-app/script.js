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
    if(location.length < 2){
        searchBar.setCustomValidity("Location must include country and/or state");
        isValid = false;
    }
    else{
        searchBar.setCustomValidity("");
    }
    searchBar.reportValidity();
    return isValid;
}

//Event Listeners
searchButton.addEventListener('click', (event) => {
    const location = searchBar.value.split(",");

    if(!searchBarValidity()){
        return;
    }
    
    getLocationData(location).then((result) => {
        console.log(result);
    });
});


//Main
getLocationData("Abbotsford", "Canada").then((result) => {
    console.log(result);
});
