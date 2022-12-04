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
    const c = ["c1", "c2", "c3", "c4", "c5"];
    var diff = false;
    var j = 0;

    while (diff == false) {
        while (r.length < 15) {
            var rand = Math.floor(Math.random() * 256);
            if (r.indexOf(rand) === -1) {
                r.push(rand);
            }
            if (r[0] != r[1] != r[2] != r[3] != r[4] != r[5] != r[6] != r[7] != r[8] != r[9] != r[10] != r[11] != r[12] != r[13] != r[14]) {
                diff = true;
            }
        }
    }
    for (i = 0; i < 5; i++) {
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

function clicked4() {
    clicked = 4;
}

function clicked5() {
    clicked = 5;
}

function correct() {
    var c = 0;
    if (document.getElementById("c5").style.display != "none") {
        c = Math.floor(Math.random() * 5) + 1;
    } else {
        c = Math.floor(Math.random() * 4) + 1;
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
    var cor = correct();
    document.getElementById("c5").style.display = "initial";
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
    if (hints > 0 && document.getElementById("c5").style.display != "none") {
        hints--;
        document.getElementById("c5").style.display = "none";
        hintT.innerHTML = "Hints: " + hints;
    }
}