var total_compras = 0;

function meu_valor() {

    var valor_total = 0;

    var dinheiro = document.getElementById("valor_pagamento");
    var total = document.getElementById("total");


    var compras = document.getElementById("compras");




    if (dinheiro.value > total_compras && dinheiro.value <= 100) {

        valor_total = (dinheiro.value - total_compras);
        // colocarar dentro da caixa de texto o valor total 
        total.value = "R$ " + valor_total + ",00";
    } else { total.value = "R$ 0.00" }
}




function escolher_prato() {
    //variaveis dos pratos
    var tipo = document.getElementById("tipo_prato").value;
    var doce = document.getElementById("doce");
    var salgado = document.getElementById("salgado");
    //   var salgado_parte = document.getElementById("salgado_parte");
    var bolo = document.getElementById("bolo");
    var bolo_parte = document.getElementById("bolo_parte");
    var gourmet = document.getElementById("gourmet");
    var copo_caldas = document.getElementById("copo_caldas");
    var copo_massa = document.getElementById("copo_massa");
    var copo_recheio = document.getElementById("copo_recheio");
    var copo_cobertura = document.getElementById("copo_cobertura");
    //variveis dos valores 
    var compras = document.getElementById("compras");
    //  var compras = document.getElementById("troco");


    if (tipo == "Doce") {
        doce.style.display = "block"
    } else { doce.style.display = "none" }
    if (tipo == "Salgado") {
        salgado.style.display = "block"

    } else { salgado.style.display = "none" }
    // vai mostrar as opções  do bolo
    if (tipo == "Bolo") {
        bolo.style.display = "block"
        if (bolo.value == "2") {
            bolo_parte.style.display = "block"
        } else { bolo_parte.style.display = "none" }
        if (bolo_parte.value == "2") {
            total_compras = 7;
            compras.value = "R$ 7,00";
            console.log(compras.value)
        } else {

            compras.value = "R$ 0,00";
        }

    } else {
        bolo.style.display = "none"

    }


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







// função para limitar os caracteres da caide entrada dos valores 
function numero_max(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

function numero_max1(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}