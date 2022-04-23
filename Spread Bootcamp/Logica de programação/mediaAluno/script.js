var aluno = prompt("Digite seu nome");
var nota1 = Number(prompt("Nota 1"));
var nota2 = Number(prompt("Nota 2"));
var nota3 = Number(prompt("Nota 3"));
var nota4 = Number(prompt("Nota 4"));
var media = (nota1 + nota2 + nota3 + nota4) / 4;
// document.write("<p>O aluno " + aluno + " obteve a média : " + media + '</p>')
// var resultado = document.write(media >=7?" <h1>Aprovado</h1>":" <h1>Reprovado</h1>")
var resultado = media >= 7 ? "Aprovado" : "Reprovado";
var tagP = document.querySelector("p");
tagP.innerText = resultado;
tagP.style.color = media >= 7 ? "green" : "red";
