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
    if (document.getElementById("c1").clicked == true) {
        document.getElementById("scr").innerHTML = "c5555";
    }
    if (document.getElementById("c2").clicked == true) {
        return document.getElementById("c2").id;
    }
    if (document.getElementById("c3").clicked == true) {
        return document.getElementById("c3").id;
    }
    if (document.getElementById("c4").clicked == true) {
        return document.getElementById("c4").id;
    }
    if (document.getElementById("c5").clicked == true) {
        return document.getElementById("c5").id;
    }
}

function correct() {
    var cor = 1;
    //var cor = Math.floor(Math.random() * 5) + 1;
    var c = "c" + cor;

    if (c == "c1") {
        return document.getElementById("c1").id;
    } else if (c == "c2") {
        return document.getElementById("c2").id;
    } else if (c == "c3") {
        return document.getElementById("c3").id;
    } else if (c == "c4") {
        return document.getElementById("c4").id;
    } else if (c == "c5") {
        return document.getElementById("c5").id;
    }
}

function score() {
    var scr = document.getElementById("scr");
    clicked();
    correct();

    if (clicked() == correct()) {
        total++;
        scr.style.color = 'blue';
        scr.innerHTML = "Score: " + total;
    }
}

function hint() {

}