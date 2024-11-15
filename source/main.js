console.log("hello world");
console.log("merhaba");

const GROUNDSPEED = 0.95;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.02;
const MIN_TURN_SPEED = 0.4;
var game;
var graph;
var carX;
var carY;
var carSpeed = 0
const radius = 10;
const framePerSecond = 50;
const trackColNumber = 20;
const trackRowNumber = 15;
const trackwidth = 40;
const trackheight = 40;
const trackGap = 1;
var trackGrid = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const Track_Road = 0;
const Player = 2;
const Wall = 1;

var carPic = document.createElement("img");
var carLoaded = false;
var angular = -0.5 * Math.PI;
const KEY_ARROW_UP = 38;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;

var key_held_gas = false;
var key_held_reverse = false;
var key_held_left = false;
var key_held_right = false;


function keyPressed(evt) {

    document.getElementById("debugging").innerHTML = "keypressed: " + evt.keyCode;
    setKeyHold(evt.keyCode, true);

    evt.preventDefault();
}

function keyreleased(evt) {
    document.getElementById("debugging").innerHTML = "keyreleased: " + evt.keyCode;
    setKeyHold(evt.keyCode, false);

}

function setKeyHold(thiskey, setto) {
    if (thiskey == KEY_ARROW_UP) key_held_gas = setto;
    if (thiskey == KEY_ARROW_DOWN) key_held_reverse = setto;
    if (thiskey == KEY_ARROW_LEFT) key_held_left = setto;
    if (thiskey == KEY_ARROW_RIGHT) key_held_right = setto;
}

window.onload = function () {

    game = document.getElementById("racing_game");
    graph = game.getContext("2d");

    addEventListener("keydown", keyPressed);
    addEventListener("keyup", keyreleased);

    setInterval(function () {

        drawEverything();
        moveEverything();

    }, 1000 / framePerSecond);

    carPic.onload = function () {
        carLoaded = true;
    }
    carPic.src = "player1.png"

    carReset();
}

function drawEverything() {
    colorRect(0, 0, game.width, game.height, "black");

    drawbricks();
    carDraw();
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

function colorRect(cordx, cordy, sizex, sizey, color) {
    graph.fillStyle = color;
    graph.fillRect(cordx, cordy, sizex, sizey);
}

function drawbricks() {
    for (let i = 0; i < trackRowNumber; i++) {
        for (let j = 0; j < trackColNumber; j++) {
            var ind = j + trackColNumber * i;
            if (trackGrid[ind] === 1) {
                colorRect(j * trackwidth, i * trackheight, trackwidth - trackGap, trackheight - trackGap, "green");
            }
        }
    }
}

function carDraw() {
    // angular += 0.2;
    if (carLoaded) {
        drawPicAngular(carPic, carX, carY, angular);
    }
}

function drawPicAngular(pic, posx, posy, ang) {

    graph.save();
    graph.translate(posx, posy);
    graph.rotate(ang);
    graph.drawImage(pic, -pic.width / 2, -pic.height / 2);
    graph.restore();
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

function checkfortruck(pixelx, pixely) {

    var tilecol = Math.floor(pixelx / trackwidth);
    var tilerow = Math.floor(pixely / trackheight);

    var trackindex = tilecol + tilerow * trackColNumber;
    return (trackGrid[trackindex] == Track_Road);

}

// chapter 17 continue