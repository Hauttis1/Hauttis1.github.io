function karuba() {

var sininenNumero1 = Math.floor(Math.random()*11+1);
var sininenNumero2 = Math.floor(Math.random()*11+1);
var oranssiNumero1 = Math.floor(Math.random()*11+1);
var oranssiNumero2 = Math.floor(Math.random()*11+1);
var violettiNumero1 = Math.floor(Math.random()*11+1);
var violettiNumero2 = Math.floor(Math.random()*11+1);
var ruskeaNumero1 = Math.floor(Math.random()*11+1);
var ruskeaNumero2 = Math.floor(Math.random()*11+1);

// UKOT

var sininen1 = sininenNumero1;
var oranssi1 = oranssiNumero1;
var violetti1 = violettiNumero1;
var ruskea1 = ruskeaNumero1;

// UKOT - Sininen

var sininenUkko = "sininen-ukko" + sininen1 + ".png";

// UKOT - Oranssi

while (oranssi1 === sininen1) {
    oranssiNumero1 = Math.floor(Math.random()*11+1);
    oranssi1 = oranssiNumero1;
}

var oranssiUkko = "oranssi-ukko" + oranssi1 + ".png";

// UKOT - Violetti

while (violetti1 === oranssi1 || violetti1 === sininen1) {
    violettiNumero1 = Math.floor(Math.random()*11+1);
    violetti1 = violettiNumero1;
}

var violettiUkko = "violetti-ukko" + violetti1 + ".png";

// UKOT - Ruskea

while (ruskea1 === oranssi1 || ruskea1 === sininen1 || ruskea1 === violetti1) {
    ruskeaNumero1 = Math.floor(Math.random()*11+1);
    ruskea1 = ruskeaNumero1;
}

var ruskeaUkko = "ruskea-ukko" + ruskea1 + ".png";

// MAALI

var sininen2 = sininenNumero2;
var oranssi2 = oranssiNumero2;
var violetti2 = violettiNumero2;
var ruskea2 = ruskeaNumero2;

// MAALI - Sininen

while (sininen2 === 1 && sininen1 === 1 || sininen2 === 11 && sininen1 === 11) {
    sininenNumero2 = Math.floor(Math.random()*11+1);
    sininen2 = sininenNumero2;
}

var sininenMaali = "sininen-maali" + sininen2 + ".png";

// MAALI - Oranssi

while (oranssi2 === sininen2 || oranssi2 === 1 && oranssi1 === 1 || oranssi2 === 11 && oranssi1 === 11) {
    oranssiNumero2 = Math.floor(Math.random()*11+1);
    oranssi2 = oranssiNumero2;
}

var oranssiMaali = "oranssi-maali" + oranssi2 + ".png";

// MAALI - Violetti

while (violetti2 === oranssi2 || violetti2 === sininen2 || violetti2 === 1 && violetti1 === 1 || violetti2 === 11 && violetti1 === 11) {
    violettiNumero2 = Math.floor(Math.random()*11+1);
    violetti2 = violettiNumero2;
}

var violettiMaali = "violetti-maali" + violetti2 + ".png";

// MAALI - Ruskea

while (ruskea2 === oranssi2 || ruskea2 === sininen2 || ruskea2 === violetti2 || ruskea2 === 1 && ruskea1 === 1 || ruskea2 === 11 && ruskea1 === 11) {
    ruskeaNumero2 = Math.floor(Math.random()*11+1);
    ruskea2 = ruskeaNumero2;
}

var ruskeaMaali = "ruskea-maali" + ruskea2 + ".png";

// Numerot laudalla

var sinisetNumerot = "Sininen: " + sininenNumero1 + "0 & " + sininenNumero2 + "0";
var oranssitNumerot = "Oranssi: " + oranssiNumero1 + "0 & " + oranssiNumero2 + "0";
var violetitNumerot = "Violetti: " + violettiNumero1 + "0 & " + violettiNumero2 + "0";
var ruskeatNumerot = "Ruskea:    " + ruskeaNumero1 + "0 & " + ruskeaNumero2 + "0";

// Kuvat

document.querySelector(".sininenUkko").setAttribute("src", sininenUkko);
document.querySelector(".sininenMaali").setAttribute("src", sininenMaali);
document.querySelector(".oranssiUkko").setAttribute("src", oranssiUkko);
document.querySelector(".oranssiMaali").setAttribute("src", oranssiMaali);
document.querySelector(".violettiUkko").setAttribute("src", violettiUkko);
document.querySelector(".violettiMaali").setAttribute("src", violettiMaali);
document.querySelector(".ruskeaUkko").setAttribute("src", ruskeaUkko);
document.querySelector(".ruskeaMaali").setAttribute("src", ruskeaMaali);

// Numerot tekstinä

document.querySelector(".sininen").innerHTML = sinisetNumerot;
document.querySelector(".oranssi").innerHTML = oranssitNumerot;
document.querySelector(".violetti").innerHTML = violetitNumerot;
document.querySelector(".ruskea").innerHTML = ruskeatNumerot;

}
