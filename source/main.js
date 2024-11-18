
// game variables
var game;
var graph;
const framePerSecond = 50;
var	p1	= new carClass();
var	p2	= new carClass();

window.onload = function () {

    game = document.getElementById("racing_game");
    graph = game.getContext("2d");
    
    loadingPicture();      
}

function loadingdone (){

    p2.carReset();
    p1.carReset();   

    initInPut();

    setInterval(function () {

        drawEverything();
        p1.carMove();
        p2.carMove();

    }, 1000 / framePerSecond);
}

   
function drawEverything() {
    colorRect(0, 0, game.width, game.height, "black");

    drawbricks();
    p1.carDraw(carPic);
    p2.carDraw(carPic2);
}

// chapter 26 continue
