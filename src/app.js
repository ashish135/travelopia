import header from './header';
import main from './main';
import footer from './footer';
import './style.css';

document.body.appendChild(header());
document.body.appendChild(main());
document.body.appendChild(footer());

//Alert Box
const btn = document.getElementById("alert")
btn.addEventListener("click", function(){
    alert("Hello World!");
})

//Set Image height as per screen sizes
const winH = eval(window.innerHeight-200);
function setHeight(winH){
    var banner = document.getElementsByClassName("banner");
    for(var i=0;i<banner.length;i++){
        banner[i].style.height = winH+"px";
    }
}
setHeight(winH)
function reportWindowSize() {
    const winH = eval(window.innerHeight-200);
    setHeight(winH)
}
window.onresize = reportWindowSize;