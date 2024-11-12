console.log("hello world");
console.log("merhaba");

var game;
var graph;
var carX = 150;
var carY = 120;
var carSpeedx = 4, carSpeedy = 4;
const radius = 10;
const framePerSecond = 50;
const trackColNumber = 20;
const trackRowNumber = 15;
const trackwidth = 40;
const trackheight = 40;
const trackGap = 1;
var trackGrid = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,
1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,
1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,
1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,
1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,
1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,
1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,
1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

var carPic = document.createElement("img");
var carLoaded = false;
var angular = 0;


window.onload = function () {

    game = document.getElementById ("racing_game");
    graph = game.getContext ("2d");

    setInterval (function () {

        drawEverything();
        moveEverything();

    }, 1000/framePerSecond);     
    
    carPic.onload = function (){
        carLoaded = true;
    }
    carPic.src = "player1.png"
}

function drawEverything() {
    colorRect (0, 0, game.width, game.height, "black");
    
    carDraw();
    drawbricks();    

}

function moveEverything (){

    carX += carSpeedx;
    carY += carSpeedy; 
    
    var tilex = Math.floor(carX / trackwidth);
    var tiley = Math.floor(carY / trackheight);    
    var trackindex = tilex + trackColNumber * tiley;

    var preballx = carX - carSpeedx;
    var prebally = carY - carSpeedy;
    var pretilex = Math.floor(preballx / trackwidth);
    var pretiley = Math.floor(prebally / trackheight);

    if (trackGrid[trackindex] === 1) {        
        
        if (tilex != pretilex && tiley != pretiley ){
            carSpeedy *= -1;
            carSpeedx *= -1;             
        } 
        
        else if (tiley != pretiley) {
            carSpeedy *= -1;
            carY += carSpeedy;             
        }

        else if (tilex != pretilex){
            carSpeedx *= -1;
            carX += carSpeedx;            
        }        
    }
}

function colorRect (cordx, cordy, sizex, sizey, color) {
    graph.fillStyle = color;
    graph.fillRect (cordx, cordy, sizex, sizey);
}

function drawbricks (){
    for (let i = 0; i < trackRowNumber; i++){
        for (let j = 0; j < trackColNumber; j++){
            var ind = j + trackColNumber * i;
            if (trackGrid[ind] === 1) {
                colorRect (j * trackwidth, i * trackheight, trackwidth - trackGap, trackheight - trackGap, "green");
            }            
        }
    }  
}

function carDraw () {    
    
    angular += 0.2;
    if (carLoaded) {

        graph.save();
        graph.translate(carX,carY);
        graph.rotate(angular);
        graph.drawImage(carPic,-carPic.width/2,-carPic.height/2);
        graph.restore();
    }
}