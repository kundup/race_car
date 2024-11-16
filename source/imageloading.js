var countdown;
var trackWallPic = new Image();
var trackRoadPic = new Image();
var carPic = new Image();

function loadingPicture() {

    var imagelist = [

        { pic: trackWallPic, sourc: "images/track_wall.png" },
        { pic: trackRoadPic, sourc: "images/track_road.png" },
        { pic: carPic, sourc: "images/player1.png" },

    ]

    countdown = imagelist.length;

    for (let i = 0; i < imagelist.length; i++) {
        imagelist[i].pic.onload = countdownbypictureloading;
        imagelist[i].pic.src = imagelist[i].sourc;

    }
}

function countdownbypictureloading() {
    countdown--;
    if (countdown == 0) {
        loadingdone();
    }
}