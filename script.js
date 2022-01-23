var vid = document.getElementById("audio");
var character = document.getElementById("mario");
var block = document.getElementById("block1");
let gameover = false;
var score1 = 0;
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

function playGame() {
    gameover = false;
    score1 = 0;
    document.getElementById("playButton").style.display = "none";
    document.getElementById("GameContainer").style.display = "inline";
    document.getElementById("myScore").style.display = "inline";
    document.getElementById("myScore").innerHTML = `Score: ${score1}`;
    document.getElementById("myLevel").style.display = "inline";
    document.getElementById("myLevel").innerHTML = `Level: 1`;
    vid.currentTime = 0;
    vid.play();
    vid.volume = 0.45;
    document.getElementById("block1").style.animationDuration = "2s";
}

function muteAudio() {
    vid.muted = !vid.muted
}

function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

document.onkeydown = function (e) {
    if (e.keyCode == 32) jump();
};



var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < -100 && blockLeft > -200 && characterTop >= 0) {
        gameover = true;
        vid.pause();
        if (score1 == 0) alert("YOU LOOSER 0 !");
        else alert("Game Over\nYour score is: " + score1);
    }
});

var flag = setInterval(function () {
    if (gameover == true) {
        document.getElementById("GameContainer").style.display = "none";
        document.getElementById("myScore").style.display = "none";
        document.getElementById("myLevel").style.display = "none";
        document.getElementById("playButton").style.display = "inline";
    }
});

block.addEventListener('animationiteration', () => {
    document.getElementById("myScore").innerHTML = `Score: ${++score1}`;
})

addEventListener(score1,)

//let ckScore = setInterval(level, 1);
function level() {
    switch (score1) {
        case 5: {
            document.getElementById("myLevel").innerHTML = `Level: 2`;
            document.getElementById("block1").style.animationDuration = "1.6s";
        }
        case 10: {
            document.getElementById("myLevel").innerHTML = `Level: 3`;
            document.getElementById("block1").style.animationDuration = "1.2s";
        }
        case 15: {

            document.getElementById("myLevel").innerHTML = `Level: 4`;
            document.getElementById("block1").style.animationDuration = "0.9s";
        }
        case 20: {
            document.getElementById("myLevel").innerHTML = `Level: 5`;
            document.getElementById("block1").style.animationDuration = "0.7s";
        }
    }
}
    // if (score1 > 4) {

    // }
    // if (score1 > 14) {
    //     document.getElementById("myLevel").innerHTML = `Level: 3`;
    //     document.getElementById("block1").style.animationDuration = "1.2s";
    // }
    // if (score1 > 24) {
    //     document.getElementById("myLevel").innerHTML = `Level: 4`;
    //     document.getElementById("block1").style.animationDuration = "0.9s";
    // }
    // if (score1 > 34) {
    //     document.getElementById("myLevel").innerHTML = `Level: 4`;
    //     document.getElementById("block1").style.animationDuration = "0.7s";
    // }


//var myScore = 0;

// let scoreCounter = setInterval(score, 200);
// function score() {
//     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if (blockLeft <= -150 && blockLeft >= -250 )
//         document.getElementById("myScore").innerText = `Score: ${++myScore}`;
//     else     
//         document.getElementById("myScore").innerText = `Score: ${myScore}`;
// }




//var blockAnimate = document.getElementById('block1').animate;

// let ckScore2 = setInterval(level3, 1);
// function level3() {
//     if (score1 > 14) { 
//         //block.style.left = 1600+"px";
//         document.getElementById("block1").style.animationDuration = "1.2s";
//     }
//     alert("Level 3");
// }

// let ckScore3 = setInterval(level4, 1);
// function level4() {
//     if (score1 > 24) {
//         //block.style.left = 1600+"px";
//         document.getElementById("block1").style.animationDuration = "0.9s";
//     }
//     alert("Level 4");
// }

// let ckScore4 = setInterval(level5, 1);
// function level5() {
//     if (score1 > 34) {
//         //block.style.left = 1600+"px";
//         document.getElementById("block1").style.animationDuration = "0.7s";
//     }
//     alert("Level 5");
// }


