// Map irá criar um novo array e não alterar o array principal
// array.map(callback, thisArg)
// callback : função a ser executada em cada elemento
const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2); // retorno [2, 4, 6, 8, 10]

// Filter; // mesma estrutura do map
const frutas = ["maçã fuji", "maçã verde", "laranja", "abacaxi"];
frutas.filter((item) => item.includes("maçã"));
// retorno: ['maçã fuji', 'maçã verde']

//Reduce diferente de map e filter ele irá alterar o array original mas retornando apenas um valor
array.reduce(callbackFn, initialValue);
