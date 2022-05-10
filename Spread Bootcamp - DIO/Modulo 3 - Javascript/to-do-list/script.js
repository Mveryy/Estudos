let tarefa = document.getElementById("txtinput");
let contadorID = 0;
function add() {
    if (tarefa.value.length == 0) {
        alert("Digite uma tarefa");
    } else {
        let list = document.getElementById("list");
        list.innerHTML += `<label for='input${contadorID}'><input type='checkbox' name="input${contadorID}" id='input${contadorID}' />${tarefa.value}</label>`;
        contadorID++;
        tarefa.focus();
        tarefa.value = "";
    }
}

function reset() {
    list.innerHTML = "";
    tarefa.value = "";
    tarefa.focus();
    contadorID = 0;
}
