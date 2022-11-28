var x = document.getElementById("css").href;
var total = 0;

function darkMode() {
    if (x == "LevelsDark.css") {
        x = document.getElementById("css").href = "Levels.css"
    } else {
        x = document.getElementById("css").href = "LevelsDark.css"
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

function clicked() {
    if (document.getElementById("c1").onclick) {
        document.getElementById("scr").innerHTML = "c1";
        return "c1";
    }
    if (document.getElementById("c2").onclick) {
        document.getElementById("scr").innerHTML = "c2";
        return "c2";
    }
    if (document.getElementById("c3").onclick) {
        document.getElementById("scr").innerHTML = "c3";
        return "c3";

    }
    if (document.getElementById("c4").onclick) {
        document.getElementById("scr").innerHTML = "c4";
        return "c4";

    }
    if (document.getElementById("c5").onclick) {
        document.getElementById("scr").innerHTML = "c5";
        return "c5";
    } else {
        return false;
    }
}

function correct() {
    var cor = Math.floor(Math.random() * 5) + 1;
    var c = "c" + cor;

    if (c == "c1") {
        return "c1";

    } else if (c == "c2") {
        return "c2";

    } else if (c == "c3") {
        return "c3";

    } else if (c == "c4") {
        return "c4";

    } else if (c == "c5") {
        return "c5";
    } else {
        return false;
    }
}

function score() {
    var scr = document.getElementById("scr");
    var click = clicked();
    var cor = correct();
    total = total;



    /* if (click == cor) {
        total++;
        scr.innerHTML = "Score: " + total; + " points";
    } else if (click != cor) {
        scr.innerHTML = "Wrong Answer!";
    } else {
        scr.innerHTML = "Error";
    } */

    // clicked is always "c1" for some reason

    document.getElementById("c4").innerHTML = click;
    document.getElementById("c5").innerHTML = cor;
}

function hint() {
    //
}