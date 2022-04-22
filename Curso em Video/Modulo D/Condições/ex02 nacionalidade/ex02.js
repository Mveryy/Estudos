function verificar() {
    var pais = document.querySelector("#txtpais").value;
    var res = document.querySelector("#res");
    if (pais == "Brasil") {
        res.innerHTML = `<p>Seu país é ${pais} e você é Brasileiro!</p>`;
    } else {
        res.innerHTML = `<p>Seu país é ${pais} e você é Estrangeiro!</p>`;
    }
}
