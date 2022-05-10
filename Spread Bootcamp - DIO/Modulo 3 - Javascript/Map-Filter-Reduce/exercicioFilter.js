function pares(arr) {
    return array.filter((item) => item % 2 === 0);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(pares(array));

let res = array.filter((item) => item % 2 === 0);
console.log(res);
