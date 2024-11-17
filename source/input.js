
// input variables and ocnstants
const KEY_ARROW_UP = 38;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;

function initInPut () {
    addEventListener("keydown", keyPressed);
    addEventListener("keyup", keyreleased);

    p1.setupcontrols(KEY_ARROW_UP, KEY_ARROW_DOWN, KEY_ARROW_LEFT, KEY_ARROW_RIGHT)
}

function keyPressed(evt) {
    document.getElementById("debugging").innerHTML = "keypressed: " + evt.keyCode;
    setKeyHold(evt.keyCode, p1, true);

    evt.preventDefault();
}
function keyreleased(evt) {
    document.getElementById("debugging").innerHTML = "keyreleased: " + evt.keyCode;
    setKeyHold(evt.keyCode, p1, false);
}
function setKeyHold(thiskey, thiscar, setto) {
    if (thiskey == thiscar.controlkeyforward) thiscar.key_held_gas = setto;
    if (thiskey == thiscar.controlkeyreverse) thiscar.key_held_reverse = setto;
    if (thiskey == thiscar.controlkeyleft) thiscar.key_held_left = setto;
    if (thiskey == thiscar.controlkeyright) thiscar.key_held_right = setto;
}




