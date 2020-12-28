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
        var mmch = $('#img')[0];

        console.log(mmch);
        var marioPo = parseInt(window.getComputedStyle(mmch).getPropertyValue("top"));

        console.log(marioPo);
        var mmob = $('.obstacle')[0];
        var obstaclePo = parseInt(window.getComputedStyle(mmob).getPropertyValue("left"));
        console.log(mmob);
        if (obstaclePo < 50 && obstacleobstaclePo > 0 && marioPo >= 277) {
            obstaclePo.style.animation = "none";
            obstaclePo.style.display = "none";
            alert("You hit obstacle");
        }
    }, 10000000);


})