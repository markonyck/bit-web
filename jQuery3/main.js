
$(function () {
    var $secondGallery = $(".selected").removeClass("selected").parent().next();

    $secondGallery.find(':nth-child(2)').addClass("selected");
});



// (function animate() {
//     $(".selected").animate({
//         left: '250px',
//         height: '+=150px',
//         width: '+=150px'
//     }, 5000)
// })();