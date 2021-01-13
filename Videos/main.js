// namespace L09 {
//    const toDoForm: HTMLElement = document.getElementById("toDoForm");
//    const inputField: HTMLInputElement = (document.getElementById("inputField") as HTMLInputElement);
//    inputField.placeholder = "add another Task";
//    let taskCounter: number = 0;
//    updateTaskNumber(taskCounter);
//    inputField.addEventListener("keypress", function (e: KeyboardEvent): void {
//       if (e.key == "Enter") {
//          createNewToDo(inputField.value);
//          inputField.value = "";
//       }
//    });
//    function createNewToDo(input: string): void {
//       let newWrapper: HTMLDivElement = document.createElement("div");
//       let newCheckbox: HTMLInputElement = document.createElement("input");
//       let newLabel: HTMLLabelElement = document.createElement("label");
//       let newTrash: HTMLElement = document.createElement("div");
//       newTrash.className = "fas fa-trash-alt delete notHovered";
//       newWrapper.className = "toDoWrapper";
//       newCheckbox.className = "toDo";
//       newLabel.className = "toDoLabel";
//       newCheckbox.type = "checkbox";
//       newLabel.innerHTML = input;
//       newWrapper.appendChild(newCheckbox);
//       newWrapper.appendChild(newLabel);
//       newWrapper.appendChild(newTrash);
//       toDoForm.appendChild(newWrapper);
//       addDeleteEventlistener(newTrash);
//       addWrapperEventlistener(newWrapper);
//       updateTaskNumber(taskCounter);
//    }
//    function addWrapperEventlistener(wrapper: HTMLElement): void {
//       wrapper.addEventListener("mouseover", () => {
//          (wrapper.firstChild.nextSibling.nextSibling as HTMLDivElement).classList.remove("notHovered");
//       });
//       wrapper.addEventListener("mouseleave", () => {
//          (wrapper.firstChild.nextSibling.nextSibling as HTMLDivElement).classList.add("notHovered");
//       });
//    }
//    function updateTaskNumber(thisTaskCounter: number): void {
//       taskCounter++;
//       document.getElementById("taskNumber").innerHTML = thisTaskCounter.toString();
//    }
//    function addDeleteEventlistener(deleteBtn: HTMLElement): void {
//       deleteBtn.addEventListener("click", () => {
//          deleteBtn.parentElement.remove();
//          taskCounter = taskCounter - 2;
//          updateTaskNumber(taskCounter);
//       });
//    }
// }
//# sourceMappingURL=main.js.map