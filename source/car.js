// car variable and constants
const GROUNDSPEED = 0.95;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.02;
const MIN_TURN_SPEED = 0.4;


class carClass {
    constructor (){
        this.carX = 75;
        this.carY = 75;
        this.carSpeed = 0;
        this.angular = -0.5 * Math.PI
    }

    carReset () {

        for (let i = 0; i < trackColNumber * trackRowNumber; i++) {
            if (trackGrid[i] == Player) {
                var tileX = i % trackColNumber;
                var tileY = Math.floor(i / trackColNumber);
                this.carX = tileX * trackwidth + trackwidth * 0.5;
                this.carY = tileY * trackheight;
                trackGrid[i] = Track_Road;
                break;        
            }
        }
    }

    carMove (){

        if (key_held_gas) {
            this.carSpeed += DRIVE_POWER;
        }
        if (key_held_reverse) {
            this.carSpeed += -REVERSE_POWER;
        }
    
        if (Math.abs(this.carSpeed) > MIN_TURN_SPEED) {
    
            if (key_held_left) {
                this.angular += -TURN_RATE * Math.PI;
            }
            if (key_held_right) {
                this.angular += TURN_RATE * Math.PI;
            }
    
        }
    
        var nextX = this.carX + Math.cos(this.angular) * this.carSpeed;
        var nextY = this.carY + Math.sin(this.angular) * this.carSpeed;
    
        if (checkfortruck(nextX, nextY)) {
            this.carX = nextX;
            this.carY = nextY;
        } else {
            this.carSpeed *= -0.5;
        }
        this.carSpeed *= GROUNDSPEED    
    }    

    carDraw() {   
        drawPicAngular(carPic, this.carX, this.carY, this.angular);    
    }
}