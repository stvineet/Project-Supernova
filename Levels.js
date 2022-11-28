var y = document.getElementById("css2").href;
var clicked = 0;
var total = 0;

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
    var c = Math.floor(Math.random() * 5) + 1;
    return c;
}

function score() {
    var scr = document.getElementById("scr");
    var cor = correct();
    //var total2 = this.total;

    document.getElementById("c3").innerHTML = cor;
    document.getElementById("c1").innerHTML = clicked;
    document.getElementById("c2").innerHTML = total;

    if (clicked == cor) {
        total++;
        scr.innerHTML = "Score: 0 points";
    } else if (click != cor) {
        scr.innerHTML = "Wrong Answer!";
    } else {
        scr.innerHTML = "Error";
    }
}

function hint() {

}