
// track constants
const Track_Road = 0;
const Player = 2;
const Wall = 1;
const Goal = 3;
const Tree = 4;
const Flag = 5;
const trackColNumber = 20;
const trackRowNumber = 15;
const trackwidth = 40;
const trackheight = 40;
const trackGap = 1;

// track variables
var trackGrid = [
    4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4,
    4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 4, 0, 0, 4,
    4, 0, 0, 4, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 4, 0, 0, 4,
    4, 0, 0, 4, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 4,
    4, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 4,
    4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 4, 0, 0, 4,
    4, 0, 0, 4, 0, 0, 5, 0, 0, 0, 5, 0, 0, 5, 0, 0, 4, 0, 0, 4,
    4, 2, 2, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 4,
    1, 1, 1, 5, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4,
    1, 3, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 4,
    1, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 4,
    1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4,
];

function checkfortruck(pixelx, pixely) {

    var tilecol = Math.floor(pixelx / trackwidth);
    var tilerow = Math.floor(pixely / trackheight);

    var trackindex = tilecol + tilerow * trackColNumber;
    return (trackGrid[trackindex] == Track_Road);
}
