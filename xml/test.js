/*var xmlhttpObject = new XMLHttpRequest();
xmlhttpObject.open("GET", "http://thecatapi.com/api/images/get?format=xml");
xmlhttpObject.send();

xmlhttpObject.onload = function () {
    if (xmlhttpObject.status === 200) {

    var xmlDoc = xmlhttpObject.responseXML;
    var xmlImageSource = xmlDoc.querySelector("url").textContent;

    var image = document.createElement("img");
    image.setAttribute("src", xmlImageSource);
    
    var body = document.querySelector("body");
    body.appendChild(image);
    }
}*/
/*
var image = document.createElement("img");
image.setAttribute("src", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg");
var body = document.querySelector("body");
body.appendChild(image);


function handleResponse(response) {
    var response = JSON.parse(response.responseText);
    var src = response.message; // uzimamo value od propertija

    image.setAttribute("src", src);

}

function makeImageRequest() {
    console.log("New request");
    
    var request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            handleResponse(request)
        }
        else {
            console.log("We reached target server, but it returned error!")
        }
        
    }
    request.onerror = function(){
        image.setAttribute("src", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg");
        body.appendChild(image);
        alert("You are back on default picture, because you missed server address!")
    }
    request.send();

}

image.addEventListener("click", makeImageRequest);
*/

