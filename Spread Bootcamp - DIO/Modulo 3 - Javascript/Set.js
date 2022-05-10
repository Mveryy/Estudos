// set usa a propriedade "size" no lugar de "length"
// não pode ter valores repetidos

const mySet = new Set();

//adicionar
mySet.add(1);
mySet.add(5);

//consultar
mySet.has(1);
// true
mySet.has(3);
// false

//deletar
mySet.delete(5);
