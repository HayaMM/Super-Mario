$(document).ready(function () {

    var mario = document.getElementsByClassName("superMario");
    var obstacle = document.getElementsByClassName("obstacle");
    //document.getElementsByClassName(".gameSpace").addEventListener("onclick", function () {
    //mario.classList.add(".animation"); });

    // access the charcter + grap itms of class list add the animation to the function

    $('.gameSpace').click(function () {
        //add the class if it's nas not been added
        if (mario.classList != "animation") {
            $('.superMario').addClass("animation");
        }
        //remove class when animation is done
        setTimeout(function () {
            $('.superMario').removeClass("animation");
        }, 500);
    });
    var clash = setInterval(function () {
        // get mario's position and obstcale
        // parseInt used to return only the number without px
        var marioPo = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
        var obstaclePo = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
        if (obstaclePo < 40 && obstaclePo > 0 && marioPo >= 277) {
            obstaclePo.style.animation = "none";
            obstaclePo.style.display = "none";
            alert("You hit obstacle");
        }
    }, 10);


})