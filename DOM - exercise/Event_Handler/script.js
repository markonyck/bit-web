var interval;
var body = document.querySelector("body");
var automatic = document.querySelector("#automatic");

var handler = function(){
    body.classList.toggle("bg-color");
}

var turnOffHandler = function(){
    if (!interval) {
        automatic.textContent = "Automatic turn Off";
        interval = setInterval(handler, 2000);
    } else {
        automatic.textContent = "Automatic turn On";
        clearInterval(interval);
        interval = undefined;
    }
}