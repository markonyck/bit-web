
// function applyClass(){
//     return document.querySelectorAll("ul")[1].className = "bg-color";
// }
// applyClass();

// function applyAllLi(){
//     var liList = document.querySelectorAll("li");
//     liList.forEach(function(li) {
//         li.className = "li-bg"
//     });
// }

// applyAllLi();

// function apply3(){
//     var thirdUL = document.querySelectorAll("ul")[2].childNodes;
//     thirdUL.forEach(function(li){
//         li.className = "li-third";
//     })
// }
// apply3();

function activeSelect() {
    var oldElem = document.querySelector(".active");
    oldElem.className = "";

    oldElem.parentElement.previousElementSibling.firstElementChild.className = "active";
}
activeSelect();