var wrapper = document.getElementById("wrapper");
var elementWrapper = [];
var title = document.createElement("h1");
var desc = document.createElement("p");
var firstInput = document.createElement("input");
var mathOperator = document.createElement("input");
var secondInput = document.createElement("input");
var submitBtn = document.createElement("button");
var output = document.createElement("p");
firstInput.setAttribute('type', "number");
secondInput.setAttribute('type', "number");
title.innerHTML = "Willkommen bei meinem Operator";
desc.innerHTML = "Benutze bitte ausschließelich für Addidtion, Subtraktion und Multiplikation";
submitBtn.innerText = "Berechnen";
output.innerHTML = "Hier wird das Ergebnis angezeigt";
function calcAddition(firstValue, SecondValue, operator) {
}
elementWrapper.push(title, desc, firstInput, mathOperator, secondInput, submitBtn, output);
elementWrapper.map(function (e) {
    wrapper.appendChild(e);
});
//# sourceMappingURL=calculator.js.map