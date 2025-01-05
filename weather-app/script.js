const apiKey = 'WDVN9BJ4YDFAK7H8BNLJX64N4';

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

getLocationData("Abbotsford", "Canada").then((result) => {
    console.log(result);
});
