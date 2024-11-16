
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




