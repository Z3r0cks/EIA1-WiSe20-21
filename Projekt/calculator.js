const wrapper = document.getElementById("wrapper");
let elementWrapper = [];
const title = document.createElement("h1");
const desc = document.createElement("p");
const firstInput = document.createElement("input");
const mathOperator = document.createElement("input");
const secondInput = document.createElement("input");
const submitBtn = document.createElement("button");
const output = document.createElement("p");
firstInput.setAttribute('type', "number");
secondInput.setAttribute('type', "number");
title.innerHTML = "Willkommen bei meinem Operator";
desc.innerHTML = "Benutze bitte ausschließelich für Addidtion, Subtraktion und Multiplikation";
submitBtn.innerText = "Berechnen";
output.innerHTML = "Hier wird das Ergebnis angezeigt";
function calcAddition(firstValue, SecondValue, operator) {
}
elementWrapper.push(title, desc, firstInput, mathOperator, secondInput, submitBtn, output);
elementWrapper.map(e => {
    wrapper.appendChild(e);
});
//# sourceMappingURL=calculator.js.map