var total_compras = 0;


function meu_valor() {

    var valor_total = 0;

    var dinheiro = document.getElementById("valor_pagamento");
    var total = document.getElementById("total");






    if (dinheiro.value > total_compras && dinheiro.value <= 900) {
        if (total_compras != 0) {
            valor_total = (dinheiro.value - total_compras);
            // colocarar dentro da caixa de texto o valor total 
            total.value = "R$ " + valor_total + ",00";
        } else {
            total.value = "R$ 0,00";
        }
    } else { total.value = "R$ 0,00" }

}




function escolher_prato() {

    //variaveis dos pratos
    var tipo = document.getElementById("tipo_prato").value;
    var doce = document.getElementById("doce");
    var salgado = document.getElementById("salgado");
    var salgado_parte = document.getElementById("salgado_parte");
    var bolo = document.getElementById("bolo");
    var bolo_parte = document.getElementById("bolo_parte");
    var bolo_mini = document.getElementById("bolo_mini");
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
        if (salgado.value == "1") {
            salgado_parte.style.display = "block"
        }
        if (salgado_parte.value == "1") {
            total_compras = 27;
            compras.value = "R$ 27,00";

        }
        if (salgado_parte.value == "2") {
            total_compras = 4.50;
            compras.value = "R$ 4,50";

        }
        if (salgado_parte.value == 0) {
            compras.value = "R$ 0,00";
            total_compras = 0;
        }
    } else {
        salgado.style.display = "none"
        salgado.value = 0;
        salgado_parte.style.display = "none"
        salgado_parte = 0;
        total_compras = 0;
        compras.value = "R$ 0,00";
    }


    // vai mostrar as opções  do bolo
    if (tipo == "Bolo") {
        bolo.style.display = "block"




        if (bolo.value == "1") {
            bolo_mini.style.display = "block"
            bolo_parte.style.display = "none"
            compras.value = "R$ 00,00";
            total_compras = 0;

            if (bolo_mini.value == "1") {
                total_compras = 15;
                compras.value = "R$ 15,00";


            }
        }

        if (bolo.value == "2") {
            bolo_mini.style.display = "none"
            bolo_parte.style.display = "block"
            total_compras = 0;
            compras.value = "R$ 00,00";



            if (bolo_parte.value == "1") {
                total_compras = 70;
                compras.value = "R$ 70,00";
            }

            if (bolo_parte.value == "2") {
                total_compras = 7;
                compras.value = "R$ 7,00";
            }

        }






    } else {
        bolo.style.display = "none"
        bolo_parte.style.display = "none"
        bolo_mini.style.display = "none"
        bolo.value = 0;
        bolo_mini.value = 0;
        bolo_parte.value = 0;
        compras.value = "R$ 0,00";
        total_compras = 0;


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
    console.log(total_compras);
}








// função para limitar os caracteres da caide entrada dos valores 
// no object tem que colocar o this
function numero_max(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}
// no evt tem que colocar no event
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