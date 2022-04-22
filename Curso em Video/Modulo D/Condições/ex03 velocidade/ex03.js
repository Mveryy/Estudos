function calcular() {
    var txtv = document.getElementById("txtvel");
    var vel = Number(txtv.value);
    var res = document.querySelector("div#res");
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> Km/h</p>`;
    if (vel > 60) {
        res.innerHTML += "<p>Você foi <strong>multado</strong> por excesso de velocidade</p>";
    }
    res.innerHTML += "<p>Dirija sempre em segurança</p>";
}
