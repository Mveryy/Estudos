function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}

const array = [2, 5, 7, 6, 88, 13, 24];
console.log(somaNumeros(array));

let res = array.reduce((prev, current) => prev + current);
console.log(res);
