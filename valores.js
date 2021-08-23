var total_compras = 0;
var compras = document.getElementById("compras");
var prato_mercado = document.getElementById("tipo_prato");
var dinheiro = document.getElementById("valor_pagamento");
var total = document.getElementById('total');


function meu_valor() {

    var valor_total = 0;

    var total = document.getElementById("total");
    var dinheiro = document.getElementById("valor_pagamento");


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
    var doce = document.getElementById("Doce");
    var doce_valor = document.getElementById("doce_valor");
    var salgado = document.getElementById("salgado");
    var salgado_parte = document.getElementById("salgado_parte");
    var salgado_com = document.getElementById("salgado_com");
    var bolo = document.getElementById("bolo");
    var bolo_parte = document.getElementById("bolo_parte");
    var bolo_mini = document.getElementById("bolo_mini");
    var torta = document.getElementById("Torta");
    var torta_valor = document.getElementById("torta_valor");
    var torta_valor1 = document.getElementById("torta_valor1");
    var copo_valor = document.getElementById("copo_valor");
    var copo_caldas = document.getElementById("copo_caldas");
    var copo_massa = document.getElementById("copo_massa");
    var copo_recheio = document.getElementById("copo_recheio");
    var copo_cobertura = document.getElementById("copo_cobertura");
    //variveis dos valores 
    var compras = document.getElementById("compras");
    //  var compras = document.getElementById("troco");


    if (tipo == "0") {
        compras.value = "R$ 00,00"
        total_compras = 0;
        console.log(tipo)
    }


    // TIPO TORTA
    if (tipo == "Torta") {
        torta.style.display = "block";


        if (torta.value == "limao") {
            torta_valor.style.display = "block";
            torta_valor1.style.display = "none";

            if (torta_valor.value == "1") {
                compras.value = "R$ 24,00";
                total_compras = 24;
            }
            if (torta_valor.value == "2") {
                compras.value = "R$ 4,00";
                total_compras = 4;
            }


        }


        if (torta.value == "negresco") {
            torta_valor1.style.display = "block";
            torta_valor.style.display = "none";

            if (torta_valor1.value == "1") {
                compras.value = "R$ 35,00";
                total_compras = 35;
            }
            if (torta_valor1.value == "2") {
                compras.value = "R$ 7,00";
                total_compras = 7;
            }
        }


    } else {
        torta.style.display = "none"
        torta_valor.style.display = "none"
        torta_valor1.style.display = "none"


    }





    // TIPO DOCE
    if (tipo == "Doce") {
        doce.style.display = "block"



        if (doce.value == "1") {
            doce_valor.style.display = "block";
            total_compras = 3;
            compras.value = "R$ 3,00";
        }

    } else {

        doce.style.display = "none"
        doce_valor.style.display = "none"
            // compras.value = "R$ 00,00";
            // total_compras = 0;
    }


    //  TIPO  SALGADO
    if (tipo == "Salgado") {
        salgado.style.display = "block"
        bolo.style.display = "none"

        if (salgado.value == "1") {
            salgado_com.style.display = "block";
            salgado_parte.style.display = "none";
            total_compras = 0;
            compras.value = "R$ 00,00";

            if (salgado_com.value == "1") {
                total_compras = 27;
                compras.value = "R$ 27,00";
            }

            if (salgado_com.value == "2") {
                total_compras = 4.50;
                compras.value = "R$ 4,50";
            }

        }


        if (salgado.value == "2") {
            salgado_parte.style.display = "block";
            salgado_com.style.display = "none";
            total_compras = 0;


            if (salgado_parte.value == "1") {
                total_compras = 24;
                compras.value = "R$ 24,00";
            }
            if (salgado_parte.value == "2") {
                total_compras = 4;
                compras.value = "R$ 4,00";

            }
        }

    } else {
        salgado.style.display = "none"
        salgado_parte.style.display = "none"
        salgado_com.style.display = "none"
            // compras.value = "R$ 00,00";

    }


    // TIPO BOLO 
    if (tipo == "Bolo") {
        bolo.style.display = "block"
        salgado.style.display = "none"
        total_compras = 0;

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

    }


    // TIPO COPO 
    if (tipo == "copo") {
        copo_valor.style.display = "block"

        if (copo_valor.value == "1") {
            copo_massa.style.display = "block"
            copo_cobertura.style.display = "block"
            copo_recheio.style.display = "block"
            copo_caldas.style.display = "block"
            compras.value = "R$ 13,00";
            total_compras = 13;
        }
    } else {
        copo_caldas.style.display = "none"
        copo_cobertura.style.display = "none"
        copo_massa.style.display = "none"
        copo_recheio.style.display = "none"
        copo_valor.style.display = "none"

    }

    console.log(compras.value);
    console.log(total_compras);
}


function escolha_pagamento() {

    var tipo_pagamento = document.getElementById('tipo_pagamento').value;
    // var vista = document.getElementById('');
    // var card = document.getElementById('');
    var valor_pagamento = document.getElementById('valor_pagamento');


    if (tipo_pagamento == "vista") {
        valor_pagamento.removeAttribute('disabled');
    } else {
        // valor_pagamento.value = 0;

        valor_pagamento.setAttribute('placeholder', 'R$ 0,00')
        valor_pagamento.setAttribute('disabled', 'disabled')

        console.log(total.value)

    }

    if (tipo_pagamento == "pix") {

        total.value = "teste"

    }
    if (tipo_pagamento == "card") {
        alert()
    }

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