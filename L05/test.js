// Variabeln von 2008
var africaCD2008 = 1028;
var SACD2008 = 1041.9;
var europeCD2008 = 4965.7;
var NACD2008 = 6600.4;
var asianCD2008 = 12954.7;
var austrialiaCD2008 = 1993;
// Variabeln von 2018
var africaCD = 1235.5;
var SACD = 1264.5;
var europeCD = 4209.3;
var NACD = 6035.6;
var asianCD = 16274.1;
var austrialiaCD = 2100.5;
var worldCD = africaCD + SACD + europeCD + NACD + asianCD + austrialiaCD;
// Funktion, um den Prozentsatz im vergleich der Welt zu berechnen.
function calcCompareToWorld(value) {
    var result = (100 / worldCD * value);
    result = myRound(result, 2);
    return result;
}
// Funktion um auf 2 Nachkommarstellen zu runden
function myRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
// Die gleiche Funktion nur in neuer schreibweise (kann ignoriert werden)
// const calcCompareToWorldNew = (value: number): number => {
//    return Math.round(100 / worldCD * value);
// }
// Funktion, um den Unterschied zu 2008 zu berechnen
function calcCampareTo2008(newValue, oldValue) {
    var result = (((100 / oldValue) * newValue) - 100);
    return (((100 / oldValue) * newValue) - 100);
}
// Erzeuge die benötigten Elemente
var title = document.createElement("h1");
var africa = document.createElement("div");
var southAmerica = document.createElement("div");
var europe = document.createElement("div");
var northAmerica = document.createElement("div");
var asian = document.createElement("div");
var australia = document.createElement("div");
// Fülle die Elemente mit Inhalt
title.innerHTML = "The current Values";
africa.innerHTML = "The current emission from afria is: " + asianCD + "kg CO2." + " Relative to the total emissions of the world, africa causes " + calcCompareToWorld(africaCD) + "%. " + "For africa, emissions changed by " + calcCampareTo2008(africaCD, africaCD2008) + "% in 2018 compared to 2008";
// die erzeugten Elemente an ein bestimmtes HTML element anhängen
document.getElementById("content").appendChild(title);
document.getElementById("content").appendChild(africa);
//# sourceMappingURL=test.js.map