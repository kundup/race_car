var countdown;

var carPic = new Image();
var trackWallPic = new Image();
var trackRoadPic = new Image();
var trackTree = new Image();
var trackGoal = new Image();
var trackFlag = new Image();


function loadingPicture() {

    var imagelist = [

        { pic: carPic, sourc: "images/player1.png" },
        { pic: trackWallPic, sourc: "images/track_wall.png" },
        { pic: trackRoadPic, sourc: "images/track_road.png" },        
        { pic: trackTree, sourc: "images/track_tree.png" },
        { pic: trackGoal, sourc: "images/track_goal.png" },
        { pic: trackFlag, sourc: "images/track_flag.png" },

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