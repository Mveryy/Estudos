function contar() {
    let ini = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passos = document.getElementById("passos");
    let res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = "Impossivel contar!";
    } else {
        res.innerHTML = "Contando: <br>";
        let i = Number(ini.value); // usar .value para pegar valor inserido dentro do input
        let f = Number(fim.value);
        let p = Number(passos.value);
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}`;
                console.log(c);
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{27A1}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}
