console.log("hello world");
console.log("merhaba");

var game;
var graph;
var Ballx = 150;
var Bally = 120;
var ballSpeedx = 4, ballSpeedy = 4;
const radius = 10;
const framePerSecond = 50;
const trackColNumber = 20;
const trackRowNumber = 15;
const trackwidth = 40;
const trackheight = 40;
const trackGap = 1;
var trackGrid = [
    1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
	1,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,
	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
	1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,
	1,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	1,
	1,	0,	0,	1,	1,	0,	0,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,	0,	0,	1,
	1,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,
	1,	0,	0,	1,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,
	1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	1,
	1,	0,	0,	1,	0,	0,	1,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	1,
	1,	0,	0,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,
	1,	1,	1,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,
	1,	0,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,
	1,	0,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,
	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,

]

window.onload = function () {

    game = document.getElementById ("racing_game");
    graph = game.getContext ("2d");


    setInterval (function () {

        drawEverything();
        moveEverything();

    }, 1000/framePerSecond);    
}

function drawEverything() {
    colorRect (0, 0, game.width, game.height, "black");
    colorCirc (Ballx, Bally, radius, "white");

    drawbricks();
}

function moveEverything (){

    Ballx += ballSpeedx;
    Bally += ballSpeedy; 
    
    var tilex = Math.floor(Ballx / trackwidth);
    var tiley = Math.floor(Bally / trackheight);    
    var trackindex = tilex + trackColNumber * tiley;

    var preballx = Ballx - ballSpeedx;
    var prebally = Bally - ballSpeedy;
    var pretilex = Math.floor(preballx / trackwidth);
    var pretiley = Math.floor(prebally / trackheight);

    if (trackGrid[trackindex] === 1) {        
        
        if (tilex != pretilex && tiley != pretiley ){
            ballSpeedy *= -1;
            ballSpeedx *= -1;             
        } 
        
        else if (tiley != pretiley) {
            ballSpeedy *= -1;
            Bally += ballSpeedy;             
        }

        else if (tilex != pretilex){
            ballSpeedx *= -1;
            Ballx += ballSpeedx;
            
        }        
    }
}

function colorRect (cordx, cordy, sizex, sizey, color) {
    graph.fillStyle = color;
    graph.fillRect (cordx, cordy, sizex, sizey);
}

function colorCirc (Ballx, Bally, radius, color) {

    graph.beginPath();
    graph.fillStyle = color;
    graph.arc (Ballx, Bally, radius, 0, Math.PI * 2, true);
    graph.fill();

}

function drawbricks (){
    for (let i = 0; i < trackRowNumber; i++){
        for (let j = 0; j < trackColNumber; j++){
            var ind = j + trackColNumber * i
            if (trackGrid[ind] === 1) {
                colorRect (j * trackwidth, i * trackheight, trackwidth - trackGap, trackheight - trackGap, "green");
            }            
        }
    }  
}
