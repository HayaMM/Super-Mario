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

    //$('.test').click(function () {

    setInterval(function () {
        // get mario's position and obstcale
        // parseInt used to return only the number without px
        var mmch = $('.superMario')[0];
        //console.log(mmch);
        var marioPo = parseInt(window.getComputedStyle(mmch).getPropertyValue("top"));

        //console.log(marioPo);
        var mmob = $('.obstacle')[0];
        var obstaclePo = parseInt(window.getComputedStyle(mmob).getPropertyValue("left"));
        //  console.log(obstaclePo);

        if (obstaclePo < 50 && obstaclePo > 0 && marioPo > 290) {
            console.log("enter");
            //obstaclePo.style.animation = "none";
            //obstaclePo.style.display = "none";
            alert("You hit obstacle");
            //to reload the page to play again 
            location.reload();
        }
        // set interval every 50 ms
    }, 50);
})