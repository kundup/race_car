console.log("hello world");
console.log("merhaba");

var game;
var graph;
var carX = 450;
var carY = 300;
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
    1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

var carPic = document.createElement("img");
var carLoaded = false;
var angular = 0;
const KEY_ARROW_UP = 38;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;

function keyPressed(evt) {

    document.getElementById("debugging").innerHTML = "keypressed: " + evt.keyCode;
    if (evt.keyCode == KEY_ARROW_UP) {
        carSpeed += 1;

    } else if (evt.keyCode == KEY_ARROW_DOWN) {
        carSpeed -= 1;
    }

    evt.preventDefault();
}

function keyreleased(evt) {
    document.getElementById("debugging").innerHTML = "keyreleased: " + evt.keyCode;
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
}

function drawEverything() {
    colorRect(0, 0, game.width, game.height, "black");

    drawbricks();
    carDraw();
}

function moveEverything() {


    carX += Math.cos(angular) * carSpeed
    carY += Math.sin(angular) * carSpeed

    // var tilex = Math.floor(carX / trackwidth);
    // var tiley = Math.floor(carY / trackheight);
    // var trackindex = tilex + trackColNumber * tiley;

    // var preballx = carX - carSpeedx;
    // var prebally = carY - carSpeedy;
    // var pretilex = Math.floor(preballx / trackwidth);
    // var pretiley = Math.floor(prebally / trackheight);

    // if (trackGrid[trackindex] === 1) {

    //     if (tilex != pretilex && tiley != pretiley) {
    //         carSpeedy *= -1;
    //         carSpeedx *= -1;
    //     }

    //     else if (tiley != pretiley) {
    //         carSpeedy *= -1;
    //         carY += carSpeedy;
    //     }

    //     else if (tilex != pretilex) {
    //         carSpeedx *= -1;
    //         carX += carSpeedx;
    //     }
    // }
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




// chapter 10 continue