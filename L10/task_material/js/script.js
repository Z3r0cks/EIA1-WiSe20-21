var L11;
(function (L11) {
    let newTodo = [{
            text: "placeholder",
            isChecked: true
        }];
    // newTodo = [];
    let inputDOMElement;
    let addButtonDOMElement;
    let todosDOMElement;
    let counterDOMElement;
    let doneCounterDOMELement;
    let undoneCounterDOMELement;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneCounterDOMELement = document.querySelector("#done");
        undoneCounterDOMELement = document.querySelector("#undone");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        for (let i = 0; i < newTodo.length; i++) {
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + newTodo[i].isChecked + "'><i class='fas fa-check'></i></span>" + newTodo[i].text + "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(i);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(i);
            });
            todosDOMElement.appendChild(todo);
        }
        updateCounter();
    }
    function updateCounter() {
        let done = 0;
        let undone = 0;
        newTodo.forEach(e => {
            if (e.isChecked == true) {
                done++;
            }
            else
                undone++;
        });
        counterDOMElement.innerHTML = newTodo.length + " in total";
        doneCounterDOMELement.innerHTML = done + " done";
        undoneCounterDOMELement.innerHTML = undone + " undone";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            console.log(newTodo);
            newTodo.unshift({ text: inputDOMElement.value, isChecked: false });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        newTodo[index].isChecked = !newTodo[index].isChecked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        newTodo.splice(index, 1);
        drawListToDOM();
    }
})(L11 || (L11 = {}));
let myName = ["lorem", "ipsum"];
// index                   0        1
console.log(myName[1]);
// Variante die Rausch in seiner Vorlage benutzt:
//              index              0     1     2
const todosText = ["a", "b", "c"];
const todosChecked = [true, false, true];
console.log(todosChecked.length);
// const newInstance: Todo[] = [{
//     key1: "Test",
//     key2: false
// }]
// // // jetzt kannst du eine Instanz erzeugen, also ein neues Object vom Typ "MyInterface"
// // // Werte hier kannst du befüllen (im Array), musst du aber nicht
// const newInstance: MyInterface = {
//     ersteVariable: ["a", "b", "c"],
//     zweiterVariable: [true, false, true]
// };
// // nun kannst du damit arbeiten, die Werte befüllen, abrufen oder abfragen.
// newInstance.ersteVariable.push("neuer Inhalte");
// newInstance.zweiterVariable.push(true);
// for (let i: number = 0; i < newInstance.ersteVariable.length; i++) {
//     //some code
// }
//# sourceMappingURL=script.js.map