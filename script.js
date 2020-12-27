$(document).ready(function () {

    var mario = document.getElementsByClassName("superMario");
    var obstacle = document.getElementsByClassName("obstacle");
    //document.getElementsByClassName(".gameSpace").addEventListener("onclick", function () {
    //mario.classList.add(".animation"); });

    // access the charcter + grap itms of class list add the animation to the function

    $('.gameSpace').click(function () {
        $('.superMario').addClass("animation");
        //remove class when animation is done
        setTimeout(function () {
            $('.superMario').removeClass("animation");
        }, 500);
    });


})