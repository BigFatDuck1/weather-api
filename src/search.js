
//Base URL for weatherapi.com
const BASE_URL = "https://api.weatherapi.com/v1/";
//API key for weatherapi.com
const KEY = "212e8f5eea9d46aaa14152509242903"; 

//Function to get the weather data from the API
async function searchWeather(location) {

    let url = `${BASE_URL}current.json?key=${KEY}&q=${location}`;

    let response = await fetch(url);
    let result = await response.json();
    //TODO: delete this after eveyrthing is working
    console.log(result); 
    return result;
}

export { searchWeather };