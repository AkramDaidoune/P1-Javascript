function Keer() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
    else {
        var antwoord = getal1 * getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" + antwoord;
    }
}

function Delen() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
    else {
        var antwoord = getal1 / getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" + antwoord;
    }
}

function Plus() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
    else {
        var antwoord = +getal1 + +getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" +  antwoord;
    }
}

function Min() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0 || getal1 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    } 
    else if (getal2 < 0 || getal2 == 0) {
        document.getElementById("antwoord").innerHTML = "Het getal is te laag";
    }
    else {
        var antwoord = getal1 - getal2;
        document.getElementById("antwoord").innerHTML = "Het antwoord is:" +  antwoord;
    }
}