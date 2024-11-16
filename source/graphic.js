

function drawbricks() {
    for (let i = 0; i < trackRowNumber; i++) {
        for (let j = 0; j < trackColNumber; j++) {
            var ind = j + trackColNumber * i;
            var useimage;
            var tracktype = trackGrid[ind];
            switch (tracktype){
                case Track_Road:
                    useimage = trackRoadPic;
                    break;
                case Player:
                    useimage = carPic;
                    break;
                case Flag:
                    useimage = trackFlag;
                    break;
                case Tree:
                    useimage = trackTree;
                    break;
                case Goal:
                    useimage = trackGoal;
                    break;
                case Wall:
                    useimage = trackWallPic;

            }
            graph.drawImage(useimage, j * trackwidth, i * trackheight);           
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




