$(function () {

    var $btn = $('#find')
    var $search = $("#search");

    $btn.on('click', function (event) {
        
            var text = $search.val();
            console.log(text);
            var urlSearch = `https://api.github.com/search/users?q=${text}`;

            console.log(urlSearch);
            var request = $.ajax({
                url: urlSearch,
                method: "GET",
            });
            console.log(request);

            request.done(function(user){
                userList = user.items;

                userList.forEach(element => {
                    const div = $(".user");
                    const p = $("<p>");
                    p.text(element.login);
                    const avatar = $("<img>");
                    avatar.attr("src", element.avatar_url);
                    div.append(p);
                    div.append(avatar);
                    $("body").append(div);

                });
            })
    })
    
  

});

/*
if ($search.k == 13) {


    $search.on("submit", function (event) {
        event.preventDefault();


       





    
    request.done(function( msg ) {
    $( "#log" ).html( msg );
    });
    
    request.fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
    });
    */