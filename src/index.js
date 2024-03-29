import "./style.css";
import { searchWeather } from "./search";

let searchterm;

document.querySelector("#searchbutton").addEventListener("click", () => {
    let searchbar = document.querySelector("#searchbar").value;

    searchterm = searchbar.toLowerCase(); 
    searchterm = searchterm.replace(/\s/g, ''); //Store searched value
    document.querySelector("#searchbar").value = ""; //Clear searchbar
    console.log(searchterm);
})

let result = await searchWeather("hongkong"); //Await works at the top level of a module

document.querySelector(".results").textContent = result.location.name;