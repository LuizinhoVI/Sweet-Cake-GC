function escolher_prato() {
    var tipo = document.getElementById("tipo_prato").value;
    var doce = document.getElementById("doce");
    var salgado = document.getElementById("salgado");
    var bolo = document.getElementById("bolo");
    var gourmet = document.getElementById("gourmet");
    var copo_caldas = document.getElementById("copo_caldas");
    var copo_massa = document.getElementById("copo_massa");
    var copo_recheio = document.getElementById("copo_recheio");
    var copo_cobertura = document.getElementById("copo_cobertura");

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
    if (tipo == "copo") {
        copo_massa.style.display = "block";
        copo_recheio.style.display = "block";
        copo_cobertura.style.display = "block";
        copo_caldas.style.display = "block";
    } else {
        copo_massa.style.display = "none"
        copo_recheio.style.display = "none"
        copo_cobertura.style.display = "none"
        copo_caldas.style.display = "none"
    }
}