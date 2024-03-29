import "./style.css";
import Photo from "./photo.png";


const myPhoto = new Image();
myPhoto.src = Photo;
document.querySelector("#photo").src = myPhoto.src;