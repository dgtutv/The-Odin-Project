//Global Variables
const apiKey = 'WDVN9BJ4YDFAK7H8BNLJX64N4';
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchButton");

//Functions
async function getLocationData(city, country, ) {
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

//Generates the HTML for the API report
function displayAPI(result){
    const weatherReport = document.querySelector("#weatherReport");

    const resolvedAddressElement = document.createElement("h2");
    resolvedAddressElement.innerHTML = result.resolvedAddress;
    weatherReport.appendChild(resolvedAddressElement);

    if(result.alerts.length > 0){
        const alertsContainer = document.createElement("div");
        result.alerts.forEach(alert => {
            const alertElement = document.createElement("h2");
            alertElement.innerHTML = alert;
            alertsContainer.appendChild(alertElement);
        });
        weatherReport.appendChild(alertsContainer);
    }

    const descriptionElement = document.createElement("h3");
    descriptionElement.innerHTML = result.description;
    weatherReport.appendChild(descriptionElement);

    const conditionsElement = document.createElement("h3");
    conditionsElement.innerHTML = `Conditions: ${result.currentConditions.conditions}`;
    weatherReport.appendChild(conditionsElement);

    const tempElement = document.createElement("h3");
    tempElement.innerHTML = `Current Temperature: ${result.currentConditions.temp}° F`;
    weatherReport.appendChild(tempElement); 

    const feelsLikeElement = document.createElement("h3");
    feelsLikeElement.innerHTML = `Feels Like: ${result.currentConditions.feelslike}° F`;
    weatherReport.appendChild(feelsLikeElement);

}

//Event Listeners
searchButton.addEventListener('click', (event) => {
    const location = searchBar.value.split(",");

    if(!searchBarValidity()){
        return;
    }
    
    getLocationData(location, "metric").then((result) => {
        console.log(result);
        displayAPI(result)
    });

});


//Main
getLocationData("Abbotsford", "Canada", "metric").then((result) => {
    console.log(result);
    displayAPI(result);
});
