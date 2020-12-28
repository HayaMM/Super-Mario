$(document).ready(function () {

    var mario = document.getElementsByClassName("superMario");
    var obstacle = document.getElementsByClassName("obstacle");
    // access the charcter + grap itms of class list add the animation to the function
    //every click on the game space Mario will jump
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

    setInterval(function () {
        // get mario's position and obstcale
        // parseInt used to return only the number without px
        //get the value of obstacle left position  every 50 ms
        var mmch = $('.superMario')[0];
        var marioPo = parseInt(window.getComputedStyle(mmch).getPropertyValue("top"));
        //get the value of obstacle left position  every 50 ms
        var mmob = $('.obstacle')[0];
        var obstaclePo = parseInt(window.getComputedStyle(mmob).getPropertyValue("left"));
        // check the positions 
        if (obstaclePo < 50 && obstaclePo > 0 && marioPo > 310) {
            // Alert lose to the user 
            alert("You lose  . . .");
            //to reload the page to play again 
            location.reload();
        }
        // set interval every 50 ms
    }, 50);
})