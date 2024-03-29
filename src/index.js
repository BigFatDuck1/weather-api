import "./style.css";
import { searchWeather } from "./search";

let result = await searchWeather("hongkong"); //Await works at the top level of a module


document.querySelector("h1").textContent = result.location.name;