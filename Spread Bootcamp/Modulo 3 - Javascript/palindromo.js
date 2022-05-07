//solução 1
function verificarPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string;
}

//solução 2
function verificarPalindromo2(string) {
    if (!string) return false;

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
