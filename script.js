$(document).ready(function () {

    var mario = document.getElementsByClassName("superMario");
    var obstacle = document.getElementsByClassName("obstacle");
    //document.getElementsByClassName(".gameSpace").addEventListener("onclick", function () {

    // access the charcter + grap itms of class list add the animation to the function
    //mario.classList.add(".animation"); });

    $('.gameSpace').click(function () {
        $('.superMario').addClass("animation");
    });

    /* $('.gameSpace').addEventListener("click", function () {
    
        mario.classList.add("animation");
    }); */
})