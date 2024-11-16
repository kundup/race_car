
function drawbricks() {
    for (let i = 0; i < trackRowNumber; i++) {
        for (let j = 0; j < trackColNumber; j++) {
            var ind = j + trackColNumber * i;
            if (trackGrid[ind] === 1) {
                graph.drawImage(trackWallPic, j* trackwidth, i * trackheight);            
            } else {
                graph.drawImage(trackRoadPic, j* trackwidth, i * trackheight);
            }
        }
    }
}

function drawPicAngular(pic, posx, posy, ang) {

    graph.save();
    graph.translate(posx, posy);
    graph.rotate(ang);
    graph.drawImage(pic, -pic.width / 2, -pic.height / 2);
    graph.restore();
}

function colorRect(cordx, cordy, sizex, sizey, color) {
    graph.fillStyle = color;
    graph.fillRect(cordx, cordy, sizex, sizey);
}




