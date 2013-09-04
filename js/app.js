
$(document).ready(function(){

    $('.navItem a').click(function(){
        console.log('hello');
        $("#page1").animate({
            top: '100%'
        }, 200);

    });

    $(".page").html("Hello from app.js");
});