let vetor = [];
let list = document.getElementById("list");
let msg = document.getElementById("msg");
function adicionar() {
    let num = document.getElementById("num");
    let res = Number(num.value);
    num.value = "";
    num.focus();
    msg.innerHTML = "";
    console.log(vetor);
    if (res.length == 0 || res < 0 || res > 100) {
        window.alert("Número inválido");
    } else if (vetor.indexOf(res) != -1) {
        window.alert("Número já inserido");
    } else {
        vetor.push(res);
        let option = document.createElement("option");
        option.innerHTML = `Valor ${res} adicionado`;
        list.appendChild(option);
    }
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert("Impossivel obter resultados: lista vazia");
    } else {
        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;
        let media = 0;
        for (let pos in vetor) {
            debugger;
            soma += vetor[pos];
            media = soma / vetor.length;
            console.log(`soma = ${vetor[pos]}`);
            console.log(`pos = ${typeof vetor[pos]}`);
            if (vetor[pos] > maior) maior = vetor[pos];
            if (vetor[pos] < menor) menor = vetor[pos];
        }

        msg.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados<br>
         O maior número encontrado foi ${maior}<br>
         O menor número encontrado foi ${menor}<br>
         A soma de todos os valores é igual a : ${soma}<br>
         A média dos valores digitados é de : ${media}`;
    }
    list.innerHTML = "";
    vetor = [];
}
