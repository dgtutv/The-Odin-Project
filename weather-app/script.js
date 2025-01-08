//Global Variables
const apiKey = 'WDVN9BJ4YDFAK7H8BNLJX64N4';
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchButton");
let unitGroup = "metric";
let lastLocation;
let lastResult;

//Functions
async function getLocationData(location) {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${apiKey}&unitGroup=${unitGroup}`;
    try{
        const response = await fetch(URL);
        if(!response.ok){
            searchBar.setCustomValidity("Location does not exist, must include country and/or state");
            searchBar.reportValidity();
            return lastResult;
        }
        const data = await response.json();
        lastResult = data;
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
    const subInfoSection = document.querySelector("#subInfo");
    const descriptionSection = document.querySelector("#description");
    const alertsSection = document.querySelector("#alerts");
    const weekContainer = document.querySelector("#weekContainer");

    const currentIconElement = document.querySelector("#weatherIcon");
    const tempElement = document.querySelector("#tempElement")
    currentIconElement.src = "";
    subInfoSection.innerHTML = "";
    tempElement.innerHTML = "";
    descriptionSection.innerHTML = "";
    alertsSection.innerHTML = "";
    weekContainer.innerHTML = "";
    if(document.querySelector("#resolvedElement")){
        weatherReport.removeChild(document.querySelector("#resolvedElement"));
    }

    //Info section (left side)
    const iconsURL = "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/";
    const currentIconURL = iconsURL+`${result.currentConditions.icon}.png`;
    currentIconElement.src = currentIconURL;

    const resolvedAddressElement = document.createElement("h3");
    resolvedAddressElement.id = "resolvedElement";
    resolvedAddressElement.innerHTML = result.resolvedAddress;
    weatherReport.prepend(resolvedAddressElement);

    const windElement = document.createElement("h5");
    subInfoSection.appendChild(windElement);

    if(unitGroup == "us"){
        tempElement.innerHTML = `${result.currentConditions.temp}° F`;
        windElement.innerHTML = `Wind: ${result.currentConditions.windspeed} mph`;
    }
    else{
        tempElement.innerHTML = `${result.currentConditions.temp}° C`;
        windElement.innerHTML = `Wind: ${result.currentConditions.windspeed} km/h`;
    }

    const percentRainElement = document.createElement("h5");
    percentRainElement.innerHTML = `Precipitation: ${result.currentConditions.precipprob}%`;
    subInfoSection.appendChild(percentRainElement);

    const humidityElement = document.createElement("h5");
    humidityElement.innerHTML = `Humidity: ${result.currentConditions.humidity}%`;
    subInfoSection.appendChild(humidityElement);

    

    //Description section (right side)
    if(result.alerts.length > 0){
        const alertsContainer = document.createElement("div");
        const alertTitle = document.createElement("h4");
        alertTitle.innerHTML = "Alerts:";
        alertsContainer.appendChild(alertTitle);
        result.alerts.forEach(alert => {
            const alertElement = document.createElement("h4");
            alertElement.innerHTML = alert.headline;
            alertsContainer.appendChild(alertElement);
        });
        alertsSection.appendChild(alertsContainer);
    }

    const weatherElement = document.createElement("h3");
    weatherElement.innerHTML = "Weather";
    weatherElement.id = "weatherElement";
    descriptionSection.appendChild(weatherElement);

    const dayElement = document.createElement("h4");
    dayElement.innerHTML = `${processEpoch(result.currentConditions.datetimeEpoch, false)}`;
    descriptionSection.appendChild(dayElement);

    const conditionsElement = document.createElement("h4");
    conditionsElement.innerHTML = `${result.currentConditions.conditions}`;
    descriptionSection.appendChild(conditionsElement);

    //Generating report for the rest of the week
    for(let i=0; i<7; i++){
        const day = result.days[i];
        const newDay = document.createElement("div");
        newDay.className = "weekCard";
        const currDay = processEpoch(day.datetimeEpoch, true);
        const iconLink = iconsURL+`${day.icon}.png`;
        let currTemp;
        if(unitGroup == "us"){
            currTemp = `${day.temp}° F`;
        }
        else{
            currTemp = `${day.temp}° C`;
        }
        newDay.innerHTML = `<h4>${currDay}</h4>
        <img class="weekIcon" src="${iconLink}" alt="">
        <h4>${currTemp}</h4>`;
        weekContainer.appendChild(newDay);
    }
}

//Gets day of week from datetimeEpoch
function processEpoch(epoch, short){
    let dateObj = new Date(epoch*1000);
    let days;
    if(short){
        days  = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    }
    else{
        days  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
    let dayOfWeek = days[dateObj.getDay()];
    return dayOfWeek;
}

//Function to search locations
function search(){
    const location = searchBar.value.split(",");

    if(!searchBarValidity()){
        return;
    }
    
    lastLocation = location;
    getLocationData(location).then((result) => {
        console.log(result);
        displayAPI(result)
    });
}

//Event Listeners
searchButton.addEventListener('click', (event) => {
   search();
});

searchBar.addEventListener('keypress', (e) => {
    if(e.key == "Enter"){
        search();
    }
});

const metricButton = document.querySelector("#toggleCelcius");
metricButton.addEventListener('click', (e) => {
    unitGroup = "metric";
    getLocationData(lastLocation).then((result) => {
        console.log(result);
        displayAPI(result)
    });
});

const freedomButton = document.querySelector("#toggleFarenheit");
freedomButton.addEventListener('click', (e) => {
    unitGroup = "us";
    getLocationData(lastLocation).then((result) => {
        console.log(result);
        displayAPI(result)
    });
})


//Main
lastLocation = ["Abbotsford", "BC", "Canada"];
getLocationData(lastLocation).then((result) => {
    console.log(result);
    displayAPI(result);
});
