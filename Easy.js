var y = document.getElementById("css2").href;
var clicked = 0;
var executed = false;

function darkMode() {
    if (y == "LevelsDark.css") {
        y = document.getElementById("css2").href = "Levels.css"
    } else {
        y = document.getElementById("css2").href = "LevelsDark.css"
    }
}

function color() {
    const r = [];
    const c = ["c1", "c2", "c3"];
    var diff = false;
    var j = 0;

    while (diff == false) {
        while (r.length < 9) {
            var rand = Math.floor(Math.random() * 256);
            if (r.indexOf(rand) === -1) {
                r.push(rand);
            }
            if (r[0] != r[1] != r[2] != r[3] != r[4] != r[5] != r[6] != r[7] != r[8]) {
                diff = true;
            }
        }
    }
    for (i = 0; i < 3; i++) {
        document.getElementById(c[i]).style.backgroundColor = "rgb(" + r[j] + ", " + r[j + 1] + ", " + r[j + 2] + ")";
        j = j + 3;
    }
}

function clicked1() {
    clicked = 1;
}

function clicked2() {
    clicked = 2;
}

function clicked3() {
    clicked = 3;
}

function correct() {
    var c = 0;
    if (document.getElementById("c3").style.display != "none") {
        c = Math.floor(Math.random() * 3) + 1;
    } else {
        c = Math.floor(Math.random() * 2) + 1;
    }
    
    return c;
}

function end() {
if (lives == 0){
    scr.innerHTML = "Score: 0";
    hintT.innerHTML = "Hints: " + hints;
    alert("Game Over \n Score: " + total);
    total = 0;
    hints = 0;
    history.back();
}
else if (lives >0){
lives--;
liv.innerHTML = "Extra Lives: "+lives;
}
}

function score() {
    globalThis.scr = document.getElementById("scr");
    globalThis.hintT = document.getElementById("hint");
    globalThis.liv = document.getElementById("liv");
    var cor = correct();
    document.getElementById("c3").style.display = "initial";
    var start = (function () {
        return function () {
            if (!executed) {
                globalThis.hints = 1;
                globalThis.total = 0;
                globalThis.counter = 0;
                globalThis.lives = 5;
                hintT.innerHTML = "Hints: " + hints;
                executed = true;
            }
        };
    })();

    start();
    
    if (clicked == cor) {
        total++;
        counter++;
        if (counter == 3) {
            counter = 0;
            hints++;
            hintT.innerHTML = "Hints: " + hints;
        }
        scr.innerHTML = "Score: " + total + " point(s)";
        liv.innerHTML = "Extra Lives: "+lives;
    } else if (clicked != cor) {
        end();

    }
}

function hint() {
    if (hints > 0 && document.getElementById("c3").style.display != "none") {
        hints--;
        document.getElementById("c3").style.display = "none";
        hintT.innerHTML = "Hints: " + hints;
    }
}