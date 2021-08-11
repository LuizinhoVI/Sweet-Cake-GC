function escolher_prato() {
    var tipo = document.getElementById("tipo_prato").value;
    var doce = document.getElementById("doce");
    var salgado = document.getElementById("salgado");
    var bolo = document.getElementById("bolo");
    var gourmet = document.getElementById("gourmet");

    if (tipo == "Doce") {
        doce.style.display = "block"
    } else { doce.style.display = "none" }
    if (tipo == "Salgado") {
        salgado.style.display = "block"
    } else { salgado.style.display = "none" }
    if (tipo == "Bolo") {
        bolo.style.display = "block"
    } else { bolo.style.display = "none" }
    if (tipo == "Gourmet") {
        gourmet.style.display = "block"
    } else { gourmet.style.display = "none" }

}