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
    const infoSection = document.querySelector("#info");
    const descriptionSection = document.querySelector("#description");

    //Info section (left side)
    const resolvedAddressElement = document.createElement("h3");
    resolvedAddressElement.innerHTML = result.resolvedAddress;
    infoSection.appendChild(resolvedAddressElement);

    const tempElement = document.createElement("h2");
    tempElement.innerHTML = `${result.currentConditions.temp}° F`;
    infoSection.appendChild(tempElement); 

    const feelsLikeElement = document.createElement("h3");
    feelsLikeElement.innerHTML = `${result.currentConditions.feelslike}° F`;
    infoSection.appendChild(feelsLikeElement);

    const percentRainElement = document.createElement("h5");
    percentRainElement.innerHTML = `Precipitation: ${result.currentConditions.precipprob}%`;
    infoSection.appendChild(percentRainElement);

    const humidityElement = document.createElement("h5");
    humidityElement.innerHTML = `Humidity: ${result.currentConditions.humidity}%`;
    infoSection.appendChild(humidityElement);

    const windElement = document.createElement("h5");
    windElement.innerHTML = `Wind: ${result.currentConditions.windspeed} mph`;
    infoSection.appendChild(windElement);

    //Description section (right side)
    if(result.alerts.length > 0){
        const alertsContainer = document.createElement("div");
        const alertTitle = document.createElement("h2");
        alertTitle.innerHTML = "Alerts";
        alertsContainer.appendChild(alertTitle);
        result.alerts.forEach(alert => {
            const alertElement = document.createElement("h2");
            alertElement.innerHTML = alert;
            alertsContainer.appendChild(alertElement);
        });
        descriptionSection.appendChild(alertsContainer);
    }

    const dayElement = document.createElement("h4");
    dayElement.innerHTML = `${processEpoch(result.currentConditions.datetimeEpoch)}`;
    descriptionSection.appendChild(dayElement);

    const conditionsElement = document.createElement("h4");
    conditionsElement.innerHTML = `${result.currentConditions.conditions}`;
    descriptionSection.appendChild(conditionsElement);
}

//Gets day of week from datetimeEpoch
function processEpoch(epoch){
    let dateObj = new Date(epoch*1000);
    let days  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayOfWeek = days[dateObj.getDay()];
    return dayOfWeek;
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
