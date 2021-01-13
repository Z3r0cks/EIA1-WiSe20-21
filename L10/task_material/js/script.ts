namespace L11 {

    interface Todo {
        text: string;
        isChecked: boolean;
    }

    let newTodo: Todo[] = [{
        text: "placeholder",
        isChecked: true
    }];



    // newTodo = [];

    let inputDOMElement: HTMLInputElement;
    let addButtonDOMElement: HTMLElement;
    let todosDOMElement: HTMLElement;
    let counterDOMElement: HTMLElement;
    let doneCounterDOMELement: HTMLElement;
    let undoneCounterDOMELement: HTMLElement;

    window.addEventListener("load", function (): void {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneCounterDOMELement = document.querySelector("#done");
        undoneCounterDOMELement = document.querySelector("#undone");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });

    function drawListToDOM(): void {
        todosDOMElement.innerHTML = "";
        for (let i: number = 0; i < newTodo.length; i++) {

            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + newTodo[i].isChecked + "'><i class='fas fa-check'></i></span>" + newTodo[i].text + "<span class='trash fas fa-trash-alt'></span>";

            todo.querySelector(".check").addEventListener("click", function (): void {
                toggleCheckState(i);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                deleteTodo(i);
            });
            todosDOMElement.appendChild(todo);
        }
        updateCounter();
    }

    function updateCounter(): void {
        let done: number = 0;
        let undone: number = 0;
        newTodo.forEach(e => {
            if (e.isChecked == true) {
                done++;
            } else
                undone++;
        });
        counterDOMElement.innerHTML = newTodo.length + " in total";
        doneCounterDOMELement.innerHTML = done + " done";
        undoneCounterDOMELement.innerHTML = undone + " undone";
    }

    function addTodo(): void {
        if (inputDOMElement.value != "") {
            console.log(newTodo);
            newTodo.unshift({ text: inputDOMElement.value, isChecked: false });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }

    function toggleCheckState(index: number): void {
        newTodo[index].isChecked = !newTodo[index].isChecked;
        drawListToDOM();
    }

    function deleteTodo(index: number): void {
        newTodo.splice(index, 1);
        drawListToDOM();
    }
}




let myName: string[] = ["lorem", "ipsum"];
// index                   0        1

console.log(myName[1]);










// Variante die Rausch in seiner Vorlage benutzt:
//              index              0     1     2
const todosText: string[] = ["a", "b", "c"];
const todosChecked: boolean[] = [true, false, true];
console.log(todosChecked.length);

// // Die Arrays sind miteinander Verknüpft Index 0 von todosText (a) ist also durch "true" von todosChecked gecheckt.
// // Nun kann man Objekte benutzen um sowas zu machen, dafür legst du erstmal ein Interface an:
// // Ein Interface ist eine Art Bauplan die Vorgibt wie eine Instanz auszusehen hat.

interface Todo {
    key1: string;
    key2: boolean;
}

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
