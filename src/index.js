import "./style.css";
import { searchWeather } from "./search";

let searchterm;

//Search on button press
document.querySelector("#searchbutton").addEventListener("click", () => {
    onSearch();
})

//Search on enter key press
window.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && document.querySelector("#searchbar").value != "") {
        onSearch();
    };
})

async function onSearch() {
    let searchbar = document.querySelector("#searchbar").value;

    searchterm = searchbar.toLowerCase(); 
    searchterm = searchterm.replace(/\s/g, ''); //Store searched value
    document.querySelector("#searchbar").value = ""; //Clear searchbar
    // console.log(searchterm);

    try {
        let result = await searchWeather(searchterm); 
        // console.log(result);
        document.querySelector(".results").textContent = result.location.name;
        displayInfo(result);
    }
    catch (error) {
        document.querySelector(".results").textContent = "City not found";
    }

}

async function displayInfo(place) {
    const INFO = {};

    INFO["city"] = place.location.name;
    INFO["country"] = place.location.country;
    INFO["region"] = place.location.region;
    INFO["time"] = place.location.localtime;
    INFO["condition"] = place.current.condition.text;
    INFO["icon"] = place.current.condition.icon;
    INFO["temperature"] = place.current.temp_c + "°C";
    INFO["wind"] = place.current.wind_kph + " km/h";
    INFO["feelslike"] = place.current.feelslike_c + "°C";
    INFO["humidity"] = place.current.humidity + "%";

    for (let key in INFO) {

        try {
            if (key == "icon") {
                document.querySelector(".weather_icon > img").src = "http:" + INFO[key];
                document.querySelector(".weather_icon > img").style = "display: block;";
            }
            document.querySelector(`.${key}`).textContent = INFO[key];
        } catch (error) {
            // if (key == "icon") {
            //     document.querySelector(".weather_icon > img").src = INFO[key];
            // }
        }
    }

    return INFO;
}

// let result = await searchWeather("hongkong"); //Await works at the top level of a module

// document.querySelector(".results").textContent = result.location.name;