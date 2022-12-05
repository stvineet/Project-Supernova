// Medium and Hard Difficulties
var x = document.getElementById("css").href;
var y = document.getElementById("css2").href;
var z = document.getElementById("css3").href;
var clicked = 0;
var executed = false;
var url = "http://localhost:3000/post";

// Dark Modes
function darkMode() {
    if (x == "MainDark.css") {
        x = document.getElementById("css").href = "Main.css"
    } else {
        x = document.getElementById("css").href = "MainDark.css"
    }
}

function darkMode2() {
    if (y == "LevelsDark.css") {
        y = document.getElementById("css2").href = "Levels.css"
    } else {
        y = document.getElementById("css2").href = "LevelsDark.css"
    }
}

function darkMode3() {
    if (z == "LeaderboardDark.css") {
        z = document.getElementById("css3").href = "Leaderboard.css"
    } else {
        z = document.getElementById("css3").href = "LeaderboardDark.css"
    }
}

// Generates 15 variables for 5 arrays; 3 * 5 = 15; 3 RGB values * 5 colors
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

/*
   Generates the correct value
   between 1 and 5 if no hint is used
   between 1 and 4 if 1 hint is used
   between 1 and 3 if 2 hints are used
*/
function correct() {
    var c = 0;
    if (document.getElementById("c5").style.display != "none") {
        c = Math.floor(Math.random() * 5) + 1;
    } else if (document.getElementById("c4").style.display != "none") {
        c = Math.floor(Math.random() * 4) + 1;
    } else {
        c = Math.floor(Math.random() * 3) + 1;
    }

    return c;
}
// Ends game and takes player to the leaderboard page
function end() {
    scr.innerHTML = "Score: 0";
    hints = 0;
    alert("Game Over \n Score: " + total);
    total = 0;
    window.location.href = "Leaderboard.html";
}
/*
   Main function:
   Initializes global variables with the start() function
   Compares the correct color with the color the player clicks
*/
function score() {
    var cor = correct();
    document.getElementById("c4").style.display = "initial";
    document.getElementById("c5").style.display = "initial";
    var start = (function () {
        return function () {
            if (!executed) {
                globalThis.scr = document.getElementById("scr");
                globalThis.hintT = document.getElementById("hint");
                globalThis.livesT = document.getElementById("lives");
                hintT.style.display = "initial";
                document.getElementById("hint2").innerHTML = "Hints: ";
                globalThis.hints = hintT.innerHTML;//Initialize all necessary variables globally
                globalThis.lives = livesT.innerHTML;
                globalThis.lead = 0;

                if (window.location.href.indexOf("Easy") > -1) {
                    lead = 1;
                } else if (window.location.href.indexOf("Medium") > -1) {
                    lead = 2;
                } else if (window.location.href.indexOf("Hard") > -1){
                    lead = 3;
                }

                globalThis.total = 0;
                globalThis.counter = 0;
                executed = true;
            }
        };
    })();

    start();
    
    if (clicked == cor) {
        total++;//Increments score
        counter++;//Counts correct answers
        if (counter % 3 == 0) {//Counts 3 turns
            hintT.innerHTML = hints;
            hints++;//Adds extra hint
            document.getElementById("bonusH").style.display = "initial";
            scr.innerHTML = "Score: " + total + " point(s)";
        } else {
            document.getElementById("bonusH").style.display = "none";
            hintT.innerHTML = hints;
        }
        if (counter % 3 == 0) {//Counts 5 turns
            livesT.innerHTML = lives;
            lives++;//Adds extra life
            document.getElementById("bonusL").style.display = "initial";
            scr.innerHTML = "Score: " + total + " point(s)";
        } else {
            document.getElementById("bonusL").style.display = "none";
            livesT.innerHTML = lives;
        }
        if (counter % 5 == 0) {//Counts 5 turns
            total++;//Adds extra point
            scr.innerHTML = "Score: " + total + " point(s) " + "Bonus point!";
        } else {
            scr.innerHTML = "Score: " + total + " point(s)";
        }
        
    } else if (clicked != cor) {
        lives--;//Lose a life if wrong guess
        livesT.innerHTML = lives;
        if (lives < 0) {
            //leaderboard();
            end();
        }
    }
}
//Uses 1 hint to remove 1 option
function hint() {
    if (hints > 0 && document.getElementById("c5").style.display == "none" && document.getElementById("c4").style.display != "none") {
        hints--;
        document.getElementById("c4").style.display = "none";
        hintT.innerHTML = hints;
    }
    if (hints > 0 && document.getElementById("c5").style.display != "none") {
        hints--;
        document.getElementById("c5").style.display = "none";
        hintT.innerHTML = hints;
    }
    document.getElementById("bonusH").style.display = "none";
}
//Unused function
function leaderboard() {
    if (lead == 1) {
        getElementById("score1E").innerHTML = total;
    } else if (lead == 2) {
        getElementById("score1M").innerHTML = total;
    } else if (lead == 3) {
        getElementById("score1H").innerHTML = total;
    }
}