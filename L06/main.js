const europe = ["Europe", 4209.3, 4965.7];
const australia = ["Australia", 2100.5, 1993];
const asia = ["Asia", 16274.1, 12954.7];
const southAmerica = ["South America", 1261.5, 1132.6];
const northAmerica = ["North America", 6035.6, 6600.4];
const africa = ["Africa", 1235.5, 1028];
const totalValue = (europe[1] + australia[1] + asia[1] + southAmerica[1] + northAmerica[1] + africa[1]);
const continentList = [europe, australia, asia, southAmerica, northAmerica, africa];
const continentClassList = document.querySelectorAll(".continent");
for (let i = 0; i < continentClassList.length; i++)
    continentClassList[i].addEventListener("mouseover", () => { changeCountryValue(continentList[i]); });
function changeCountryValue(country) {
    const firstSectionElement = document.getElementById("firstSection");
    document.getElementById("titleRegion").innerHTML = country[0];
    firstSectionElement.firstElementChild.innerHTML = country[1].toString();
    firstSectionElement.firstElementChild.nextElementSibling.innerHTML = "Emission absolute of " + country[0] + " in 2018";
    firstSectionElement.nextElementSibling.firstElementChild.innerHTML = Math.round(country[1] / totalValue * 100) + "%";
    firstSectionElement.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = Math.round((country[1] / country[2] * 100) - 100) + "%";
    firstSectionElement.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = Math.round(country[1] - country[2]) + " kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + Math.round(country[1] / totalValue * 100) + "%");
}
//# sourceMappingURL=main.js.map