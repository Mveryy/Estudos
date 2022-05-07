function saldoFinal(saldoInicial, arr) {
    return arr.reduce(function (prev, current) {
        return prev - current;
    }, saldoInicial);
}

const divida = [243, 103, 56, 36, 14, 98];
const saldoInicial = 1000;
console.log(saldoFinal(saldoInicial, divida));
