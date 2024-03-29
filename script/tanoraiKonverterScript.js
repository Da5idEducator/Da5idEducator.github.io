function round (number, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(number * multiplier) / multiplier;
}

var pontossag = 4;

function fontKilogrammKonverter(valNUM) {
document.getElementById("outputKilogramm").innerHTML = (valNUM / 2.204623).toFixed(pontossag);
}

function kilogrammFontKonverter(valNUM) {
document.getElementById("outputFont").innerHTML = round((valNUM * 2.204623), 3);
}

function inchCmKonverter(valNUM) {
document.getElementById("outputCm").innerHTML = round((valNUM * 2.54), 3);
}

function cmInchKonverter(valNUM) {
document.getElementById("outputInch").innerHTML = round((valNUM / 2.54), 3);
}

function feetMeterKonverter(valNUM) {
document.getElementById("outputMeter").innerHTML = round((valNUM / 3.28084), 3);
}

function meterFeetKonverter(valNUM) {
document.getElementById("outputFeet").innerHTML = round((valNUM * 3.28084), 3);
}