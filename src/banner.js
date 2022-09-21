import image from "./images/travel.jpg";
import mobileImage from "./images/mob_travel.jpg";
export default () => {
const img = document.createElement("picture");
img.innerHTML='<source class="banner" srcset="'+image+'" media="(min-width: 600px)"><img class="banner" src="'+mobileImage+'" alt="MDN" />'
return img;
};