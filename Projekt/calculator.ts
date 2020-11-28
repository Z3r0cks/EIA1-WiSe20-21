const wrapper: HTMLDivElement = (document.getElementById("wrapper") as HTMLDivElement);
let elementWrapper: HTMLElement[] = [];

const title: HTMLHeadingElement = document.createElement("h1");
const desc: HTMLParagraphElement = document.createElement("p");
const firstInput: HTMLInputElement = document.createElement("input");
const mathOperator: HTMLInputElement = document.createElement("input");
const secondInput: HTMLInputElement = document.createElement("input");
const submitBtn: HTMLButtonElement = document.createElement("button");
const output: HTMLParagraphElement = document.createElement("p");

firstInput.setAttribute('type', "number");
secondInput.setAttribute('type', "number");

title.innerHTML = "Willkommen bei meinem Operator";
desc.innerHTML = "Benutze bitte ausschließelich für Addidtion, Subtraktion und Multiplikation";
submitBtn.innerText = "Berechnen";
output.innerHTML = "Hier wird das Ergebnis angezeigt";

function calcAddition(firstValue: number, SecondValue: number, operator: string): void {
   
}

elementWrapper.push(title, desc, firstInput, mathOperator, secondInput, submitBtn, output);

elementWrapper.map(e => {
   wrapper.appendChild(e);
})