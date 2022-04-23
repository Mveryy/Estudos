function calc() {
    var msg = document.getElementById("msg");
    var contador = 0;
    var limite = 10;
    while (contador <= limite) {
        var resultado = number * contador;
        var number = document.getElementById("txtnum").value;
        msg.innerHTML = `${number} x ${contador} = ${resultado}`;
        contador++;
        console.log(number);
    }
}
