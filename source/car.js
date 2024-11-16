// car variable and constants
const GROUNDSPEED = 0.95;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.02;
const MIN_TURN_SPEED = 0.4;

var carPic = document.createElement("img");
var carX;
var carY;
var carSpeed = 0;
var angular = -0.5 * Math.PI;

function carDraw() {   
    drawPicAngular(carPic, carX, carY, angular);    
}

function carReset() {
    for (let i = 0; i < trackColNumber * trackRowNumber; i++) {
        if (trackGrid[i] == Player) {
            var tileX = i % trackColNumber;
            var tileY = Math.floor(i / trackColNumber);
            carX = tileX * trackwidth + trackwidth * 0.5;
            carY = tileY * trackheight;
            trackGrid[i] = Track_Road;
            break;
        }
    }
}
