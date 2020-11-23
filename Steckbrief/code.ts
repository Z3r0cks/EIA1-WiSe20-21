// // Variabeln von 2008
// const africaCD2008: number = 1028;
// const SACD2008: number = 1041.9;
// const europeCD2008: number = 4965.7;
// const NACD2008: number = 6600.4;
// const asianCD2008: number = 12954.7;
// const austrialiaCD2008: number = 1993;

// // Variabeln von 2018
// const africaCD: number = 1235.5;
// const SACD: number = 1264.5;
// const europeCD: number = 4209.3;
// const NACD: number = 6035.6;
// const asianCD: number = 16274.1;
// const austrialiaCD: number = 2100.5;
// const worldCD: number = africaCD + SACD + europeCD + NACD + asianCD + austrialiaCD;

// // Funktion, um den Prozentsatz im vergleich der Welt zu berechnen.
// function calcCompareToWorld(value: number): number {
//    let result: number = (100 / worldCD * value);
//    result = myRound(result,2);
//    return result;
// }

// // Funktion um auf 2 Nachkommarstellen zu runden
// function myRound(number, precision) {
//    const factor = Math.pow(10, precision);
//    return Math.round(number * factor) / factor; 
//  }

// // Die gleiche Funktion nur in neuer schreibweise (kann ignoriert werden)
// // const calcCompareToWorldNew = (value: number): number => {
// //    return Math.round(100 / worldCD * value);
// // }

// // Funktion, um den Unterschied zu 2008 zu berechnen
// function calcCampareTo2008(newValue: number, oldValue: number): number {
//    let result: number = (((100 / oldValue) * newValue)-100)
//    return (((100 / oldValue) * newValue)-100);
// }

// // Erzeuge die benötigten Elemente
// const title: HTMLHeadingElement = document.createElement("h1");
// const africa: HTMLDivElement = document.createElement("div");
// const southAmerica: HTMLDivElement = document.createElement("div");
// const europe: HTMLDivElement = document.createElement("div");
// const northAmerica: HTMLDivElement = document.createElement("div");
// const asian: HTMLDivElement = document.createElement("div");
// const australia: HTMLDivElement = document.createElement("div");

// // Fülle die Elemente mit Inhalt
// title.innerHTML = "The current Values"
// africa.innerHTML = "The current emission from afria is: " + asianCD + "kg CO2." + " Relative to the total emissions of the world, africa causes " + calcCompareToWorld(africaCD) + "%. " + "For africa, emissions changed by "+ calcCampareTo2008(africaCD, africaCD2008) +"% in 2018 compared to 2008"

// // die erzeugten Elemente an ein bestimmtes HTML element anhängen
// document.getElementById("content").appendChild(title);
// document.getElementById("content").appendChild(africa);