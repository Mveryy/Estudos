var contador = 0;
var limite = 10;
var tabuada = parseInt(window.prompt("Qual tabuada deseja ver ?"));
do {
    var resultado = tabuada * contador;
    document.write(tabuada + " x " + contador + " = " + resultado + "</br>");
    contador++; //somar 1 ao valor do contador
} while (contador <= limite);
