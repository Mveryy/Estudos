let num = [1, 3, 5, 9];
num[3] = 6; // acrescenta o valor 6 à terceira posição do array
num.push(7); // acrescenta o valor 7 à ULTIMA posição
num.unshift(7); // acrescenta o valor 7 à PRIMEIRA posição
num.length; // mostra quantos elementos tem dentro do array "num"
num.sort(); // arruma os elementos em ordem crescente
num.indexOf(7); // buscar a posição do valor "7" dentro do array
num.pop(); // remove o ULTIMO elemento do array
num.shift(); // remove o PRIMEIRO elemento do array

num = [
    // usado para criar arrays dentro de arrays (separar os arrays com ",")
    [1],
    [2],
    [3],
];

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O valor do primeiro vetor é ${num[0]}`);

for (let pos = 0; pos < num.length; pos++) {
    // for comum
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

for (let pos in num) {
    // para cada posição(pos) dentro da variavel(num)
    // for simplificado
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
