function comparar(num1, num2) {
    const frase1 = primeiraFrase(num1, num2);
    const frase2 = segundaFrase(num1, num2);
    return `${frase1} ${frase2}`;
}
function primeiraFrase(num1, num2) {
    let saoIguais = "";
    if (num1 !== num2) {
        saoIguais = " não";
    }
    return `Os números ${num1} e ${num2}${saoIguais} são iguais.`;
}

function segundaFrase(num1, num2) {
    const soma = num1 + num2;
    let compara10 = "menor";
    let compara20 = "menor";

    if (soma > 10) {
        compara10 = "maior";
    }

    if (soma > 20) {
        compara20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`;
}

console.log(comparar(50, 50));
