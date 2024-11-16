
// input variables and ocnstants
const KEY_ARROW_UP = 38;
const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;
const KEY_ARROW_DOWN = 40;
var key_held_gas = false;
var key_held_reverse = false;
var key_held_left = false;
var key_held_right = false;

function keyPressed(evt) {
    document.getElementById("debugging").innerHTML = "keypressed: " + evt.keyCode;
    setKeyHold(evt.keyCode, true);

    evt.preventDefault();
}
function keyreleased(evt) {
    document.getElementById("debugging").innerHTML = "keyreleased: " + evt.keyCode;
    setKeyHold(evt.keyCode, false);
}
function setKeyHold(thiskey, setto) {
    if (thiskey == KEY_ARROW_UP) key_held_gas = setto;
    if (thiskey == KEY_ARROW_DOWN) key_held_reverse = setto;
    if (thiskey == KEY_ARROW_LEFT) key_held_left = setto;
    if (thiskey == KEY_ARROW_RIGHT) key_held_right = setto;
}


