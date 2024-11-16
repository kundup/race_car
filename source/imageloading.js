var countdown = 3;
var trackWallPic = new Image();
var trackRoadPic = new Image();
var carPic = new Image();

function loadingPicture (){      

    carPic.onload = countdownbypictureloading;
    carPic.src = "player1.png";

    trackRoadPic.onload = countdownbypictureloading;
    trackRoadPic.src = "track_road.png";

    trackWallPic.onload = countdownbypictureloading;
    trackWallPic.src = "track_road.png"

}

function countdownbypictureloading (){
    countdown--;
    if (countdown == 0){
        loadingdone();
    }
}