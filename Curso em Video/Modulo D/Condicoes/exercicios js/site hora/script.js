function carregar() {
    var msv = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;
    if (hora >= 0 && hora < 6) {
        // Boa Madrugada
        document.body.style.background = "#432d1c";
        img.src = "madrugada.png";
        sub.innerHTML = "Boa Madrugada";
    } else if (hora >= 6 && hora <= 12) {
        // Bom Dia
        img.src = "manha.png";
        document.body.style.background = "#a35116";
        sub.innerHTML = "Bom Dia";
    } else if (hora >= 13 && hora < 19) {
        // Boa Tarde
        img.src = "tarde.png";
        document.body.style.background = "#8e5961";
        sub.innerHTML = "Boa Tarde";
    } else {
        // Boa Noite
        img.src = "noite.png";
        document.body.style.background = "#4a5161";
        sub.innerHTML = "Boa Noite";
    }
}
