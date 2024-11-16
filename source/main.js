
// game variables
var game;
var graph;
const framePerSecond = 50;

window.onload = function () {

    game = document.getElementById("racing_game");
    graph = game.getContext("2d");
    
    loadingPicture();      
}

function loadingdone (){
    carReset();
    initInPut();

    setInterval(function () {

        drawEverything();
        moveEverything();

    }, 1000 / framePerSecond);
}

function moveEverything() {

    if (key_held_gas) {
        carSpeed += DRIVE_POWER;
    }
    if (key_held_reverse) {
        carSpeed += -REVERSE_POWER;
    }

    if (Math.abs(carSpeed) > MIN_TURN_SPEED) {

        if (key_held_left) {
            angular += -TURN_RATE * Math.PI;
        }
        if (key_held_right) {
            angular += TURN_RATE * Math.PI;
        }

    }

    var nextX = carX + Math.cos(angular) * carSpeed;
    var nextY = carY + Math.sin(angular) * carSpeed;

    if (checkfortruck(nextX, nextY)) {
        carX = nextX;
        carY = nextY;
    } else {
        carSpeed = -0.5 * carSpeed;
    }
    carSpeed = carSpeed * GROUNDSPEED    
}

function drawEverything() {
    colorRect(0, 0, game.width, game.height, "black");

    drawbricks();
    carDraw();
}

// chapter 21 continue
