const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
    // o argumento rest "..." irá inserir cada valor de "mySet" dentro do array
}

console.log(valoresUnicos(meuArray));
