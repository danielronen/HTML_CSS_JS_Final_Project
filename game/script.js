
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");

var jumping = 0;
var counter = 0;

document.getElementById("score").innerHTML = "score: 0"
document.getElementById("level").innerHTML = "level: 1"

document.onkeydown = function (e) {
    if (e.keyCode == 32) jump();
};


block.addEventListener('animationiteration', () => {
    var random = Math.random() * 3;
    var top = (random * 150) + 50;
    console.log(top);
    hole.style.top = top + "px";
    document.getElementById("score").innerHTML =`score: ${++counter}`;
});

setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //var cTop = -(675 - characterTop);
    if (((characterTop > 640) || (characterTop < 10)) || (((blockLeft < 105) && (blockLeft > 65)) && ((characterTop < holeTop) || (characterTop > holeTop + 135)))) {

        if (counter <= 0) {
            alert("Game Over.\nyoure score: 0");
            counter = 0;
        }
        else
            alert("Game Over.\nyoure score: " + counter);
        character.style.top = 100 + "px";
        counter = 0;
        document.getElementById("score").innerHTML = "score: " + counter;
        document.getElementById("level").innerHTML = "level: 1";
        document.getElementById("block").style.animationDuration = "4s";
    }
}, 9);

let jumpCount = 0;
function jump() {
    jumping = 1;
    var jumpInterval = setInterval(() => {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 6) + "px";
        }
        if (jumpCount > 19) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++
    }, 7);
}

let ckScore = setInterval(level, 10);
function level() {
    if (counter == 5) {
        document.getElementById("level").innerHTML = `Level: 2`;
        document.getElementById("block").style.animationDuration = "3s";
        document.getElementById("block").style.animationTimingFunction = "delay"

    }
    if (counter == 10) {
        document.getElementById("level").innerHTML = `Level: 3`;
        document.getElementById("block").style.animationDuration = "2.5s";

    }
    if (counter == 15) {
        document.getElementById("level").innerHTML = `Level: 4`;
        document.getElementById("block").style.animationDuration = "2s";

    }
    if (counter == 25) {
        document.getElementById("level").innerHTML = `Level: 4`;
        document.getElementById("block").style.animationDuration = "1.5s";

    }
}

