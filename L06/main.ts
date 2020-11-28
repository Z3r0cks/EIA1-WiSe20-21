const europe: (number | string)[] = ["Europe", 4209.3, 4965.7];
const australia: (number | string)[] = ["Australia", 2100.5, 1993];
const asia: (number | string)[] = ["Asia", 16274.1, 12954.7];
const southAmerica: (number | string)[] = ["South America", 1261.5, 1132.6];
const northAmerica: (number | string)[] = ["North America", 6035.6, 6600.4];
const africa: (number | string)[] = ["Africa", 1235.5, 1028];
const totalValue: number = ((europe[1] as number) + (australia[1] as number) + (asia[1] as number) + (southAmerica[1] as number) + (northAmerica[1] as number) + (africa[1] as number));
const continentList: (number | string)[][] = [europe, australia, asia, southAmerica, northAmerica, africa];
const continentClassList: NodeListOf<Element> = document.querySelectorAll(".continent");

for (let i = 0; i < continentClassList.length; i++)
   continentClassList[i].addEventListener("mouseover", () => { changeCountryValue(continentList[i]) })

function changeCountryValue(country: (number | string)[]): void {
   const firstSectionElement = document.getElementById("firstSection");
   document.getElementById("titleRegion").innerHTML = (country[0] as string);
   firstSectionElement.firstElementChild.innerHTML = country[1].toString();
   firstSectionElement.firstElementChild.nextElementSibling.innerHTML = "Emission absolute of " + country[0] + " in 2018";
   firstSectionElement.nextElementSibling. firstElementChild.innerHTML = Math.round((country[1] as number) / totalValue * 100) + "%";
   firstSectionElement.nextElementSibling. nextElementSibling.firstElementChild.innerHTML = Math.round(((country[1] as number) / (country[2] as number) * 100) - 100) + "%";
   firstSectionElement.nextElementSibling. nextElementSibling.nextElementSibling.firstElementChild.innerHTML = Math.round((country[1] as number) - (country[2] as number)) + " kg CO2";
   document.querySelector(".chart").setAttribute("style", "height:" + Math.round((country[1] as number) / totalValue * 100) + "%");
}