function calc() {
    let msg = document.getElementById("msg");
    let select = document.getElementById("select");
    // limpar(select, msg); // function para limpar o resultado
    msg.innerHTML = "";
    select.innerHTML = "";
    let contador = 1;
    while (contador <= 10) {
        let number = document.getElementById("txtnum").value;
        let option = document.createElement("option");
        msg.innerHTML += `${number} x ${contador} = ${number * contador}</br>`;
        option.innerHTML = `${number} x ${contador} = ${number * contador}</br>`; // lista
        select.appendChild(option);
        contador++;
    }
}

// function limpar(elemento1, elemento2) {
//     while (elemento1.hasChildNodes()) {
//         elemento1.removeChild(elemento1.firstChild);
//     }
//     elemento2.innerHTML = "";
// }
