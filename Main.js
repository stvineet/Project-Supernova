var x = document.getElementById("css").href;

function darkMode() {
    if (x == "MainDark.css") {
        x = document.getElementById("css").href = "Main.css"
    } else {
        x = document.getElementById("css").href = "MainDark.css"
    }
}