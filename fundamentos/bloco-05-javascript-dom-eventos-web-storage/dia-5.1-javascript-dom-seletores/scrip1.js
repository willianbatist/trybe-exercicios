function byIdBackground(stingId, stringColor) {
    document.getElementById(stingId).style.backgroundColor = stringColor;
}
function byClassName(stringClass, stringColorClass){
    document.querySelector(stringClass).style.backgroundColor = stringColorClass;
}
byIdBackground("header-container", "#3CB371");
byIdBackground("footer-container","darkgreen");
byClassName(".emergency-tasks","#F08080");
byClassName(".no-emergency-tasks", "#F0E68C");


document.querySelectorAll("h3")[2].style.backgroundColor = "black";
document.querySelectorAll("h3")[3].style.backgroundColor = "black";
document.querySelectorAll("h3")[0].style.backgroundColor = "#FF1493";
document.querySelectorAll("h3")[1].style.backgroundColor = "#FF1493";