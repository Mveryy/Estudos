var a = document.getElementById("area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);

function clicar() {
    a.innerText = "Clicou!";
    a.style.background = "orange";
}
function entrar() {
    a.innerText = "Clique aqui";
    a.style.background = "green";
}
function sair() {
    a.innerText = "Interaja";
    a.style.background = "red";
}
