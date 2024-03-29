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
    console.log(searchterm);

    try {
        let result = await searchWeather(searchterm); 
        console.log(result);
        document.querySelector(".results").textContent = result.location.name;
    }
    catch (error) {
        document.querySelector(".results").textContent = "City not found";
    }

}

// let result = await searchWeather("hongkong"); //Await works at the top level of a module

// document.querySelector(".results").textContent = result.location.name;