var L09;
(function (L09) {
    const toDoForm = document.getElementById("toDoForm");
    const inputField = document.getElementById("inputField");
    let taskCounter = 0;
    updateTaskNumber(taskCounter);
    inputField.addEventListener("keypress", function (e) {
        if (e.key == "Enter" && inputField.value != "") {
            deleteWarningMessage();
            createNewToDo(inputField.value);
            inputField.value = "";
        }
        else if (e.key == "Enter" && inputField.value == "")
            getWarningMessage("noInput");
    });
    function createNewToDo(input) {
        let newWrapper = document.createElement("div");
        let newCheckbox = document.createElement("input");
        let newLabel = document.createElement("label");
        let newEdit = document.createElement("div");
        let newTrash = document.createElement("div");
        newWrapper.className = "toDoWrapper";
        newCheckbox.className = "toDo";
        newLabel.className = "toDoLabel";
        newTrash.className = "fas fa-trash-alt delete deleteBtn notHovered";
        newEdit.className = "fas fa-edit editBtn notHovered";
        newCheckbox.type = "checkbox";
        newLabel.innerHTML = input;
        newWrapper.appendChild(newCheckbox);
        newWrapper.appendChild(newLabel);
        newWrapper.appendChild(newEdit);
        newWrapper.appendChild(newTrash);
        toDoForm.appendChild(newWrapper);
        addDeleteEventlistener(newTrash, newWrapper);
        addEditEventlistener(newEdit);
        addWrapperEventlistener(newWrapper);
        updateTaskNumber(taskCounter);
    }
    function addWrapperEventlistener(wrapper) {
        wrapper.addEventListener("mouseover", () => {
            wrapper.firstChild.nextSibling.nextSibling.nextSibling.classList.remove("notHovered");
            wrapper.firstChild.nextSibling.nextSibling.classList.remove("notHovered");
        });
        wrapper.addEventListener("mouseleave", () => {
            wrapper.firstChild.nextSibling.nextSibling.nextSibling.classList.add("notHovered");
            wrapper.firstChild.nextSibling.nextSibling.classList.add("notHovered");
        });
    }
    function updateTaskNumber(thisTaskCounter) {
        taskCounter++;
        document.getElementById("taskNumber").innerHTML = thisTaskCounter.toString();
    }
    function addDeleteEventlistener(deleteBtn, wrapper) {
        deleteBtn.addEventListener("click", () => {
            wrapper.remove();
            taskCounter = taskCounter - 2;
            updateTaskNumber(taskCounter);
        });
    }
})(L09 || (L09 = {}));
// Zusatz: Lösche alles
document.getElementById("deleteAllBtn").addEventListener("click", () => {
    if (document.querySelector(".toDoWrapper")) {
        document.querySelectorAll(".toDoWrapper").forEach((e) => {
            e.remove();
            deleteWarningMessage();
        });
    }
    else
        getWarningMessage("");
});
// Zusatz: Fehlermeldung
function getWarningMessage(type) {
    const errorMsg = document.createElement("p");
    errorMsg.className = "errorMsg";
    if (type == "noInput") {
        errorMsg.innerHTML = "Nichts eingetragen";
    }
    else
        errorMsg.innerHTML = "Gibt nichts zum löschen";
    document.getElementById("app").appendChild(errorMsg);
}
function deleteWarningMessage() {
    if (document.querySelector(".errorMsg")) {
        document.querySelectorAll(".errorMsg").forEach(e => {
            e.remove();
        });
    }
}
// Zusatz: Lösche alle die gecheckt wurden
document.getElementById("deleteAllBtnChecked").addEventListener("click", () => {
    let count = 0;
    document.querySelectorAll(".toDoWrapper").forEach(e => {
        if (e.firstChild.checked) {
            deleteWarningMessage();
            e.remove();
            count++;
        }
    });
    if (count == 0) {
        getWarningMessage("");
    }
});
// Zusatz: Editiere Inhalt
function addEditEventlistener(editBtn) {
    editBtn.addEventListener("click", () => {
        const newContent = prompt("Neuer Inhalt angeben");
        editBtn.previousElementSibling.innerHTML = newContent;
    });
}
// Zusatz: Speichere in Array
document.getElementById("saveToDos").addEventListener("click", () => {
    const array = [];
    let count = 1;
    document.querySelectorAll(".toDoLabel").forEach(e => {
        const obj = { "Pos:": count, "ToDo": e.innerHTML };
        array.push(obj);
        count++;
    });
    console.log(array);
});
//# sourceMappingURL=main.js.map