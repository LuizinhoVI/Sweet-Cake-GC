var total_compras = 0; // valor das compras
var valor_total = 0; // valor do troco 


var compras = document.getElementById("compras");
var prato_mercado = document.getElementById("tipo_prato");
var dinheiro = document.getElementById("valor_pagamento");
// var total = document.getElementById('total');



// função para fazer o calculo automatico 

function meu_valor() {



    var total = document.getElementById("total");
    var dinheiro = document.getElementById("valor_pagamento");


    if (dinheiro.value > total_compras && dinheiro.value <= 100) {
        if (total_compras != 0) {
            valor_total = (dinheiro.value - total_compras);
            // colocarar dentro da caixa de texto o valor total 

            if (total.value.length >= 6) {
                total.value = "R$ " + valor_total;

            } else {
                total.value = "R$ " + valor_total + ",00";
            }
        } else {
            total.value = "R$ 0.00";
        }
    } else {

        if (dinheiro.value > 100) {
            alert("Digita o valor do dinheiro em espécie  Max: 100.00$ Min: 1,00$");
            dinheiro.value = 100;
        }
        // dinheiro.value = 0;

    }

}

// função para fazer as escolhas dos pratos
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
        compras.value = "R$ 0.00"
        total_compras = 0;

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
            // compras.value = "R$ 0.00";
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
            compras.value = "R$ 0.00";

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
            // compras.value = "R$ 0.00";

    }


    // TIPO BOLO 
    if (tipo == "Bolo") {
        bolo.style.display = "block"
        salgado.style.display = "none"
        total_compras = 0;

        if (bolo.value == "1") {
            bolo_mini.style.display = "block"
            bolo_parte.style.display = "none"
            compras.value = "R$ 0.00";
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
            compras.value = "R$ 0.00";



            if (bolo_parte.value == "1") {
                total_compras = 70;
                compras.value = "R$ 70.00";
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


}

// função para fazer o resultado do calculo da loja 
function escolha_pagamento() {

    var tipo_pagamento = document.getElementById('tipo_pagamento').value;
    var compras_valor = document.getElementById('compras');
    var total = document.getElementById('total');
    var valor_pagamento = document.getElementById('valor_pagamento');


    if (tipo_pagamento == "vista") {
        valor_pagamento.removeAttribute('disabled');

        if (valor_pagamento.value >= total_compras) {
            valor_pagamento.classList.remove("caixa_de_seletion_red");
            valor_pagamento.classList.add("caixa_de_seletion")


        } else {
            valor_pagamento.classList.add("caixa_de_seletion_red");
            valor_pagamento.classList.remove("caixa_de_seletion")
            total.value = "R$ 0.00"




        }
    } else {
        total.value = null;

        valor_pagamento.value = null;
        total.setAttribute('placeholder', 'R$ 0.00')
        valor_pagamento.setAttribute('placeholder', 'R$ 0.00')
        valor_pagamento.classList.remove("caixa_de_seletion_red");
        valor_pagamento.classList.remove("caixa_de_seletion");
        valor_pagamento.setAttribute('disabled', 'disabled')




    }

    if (tipo_pagamento == "pix") {




    }
    if (tipo_pagamento == "card") {




    }

}

// variaveis dos dados 
nome = document.getElementById("name")
celular_cliente = document.getElementById('celular')
rua = document.getElementById('rua')
n_rua = document.getElementById('rua_numero')
referencia = document.getElementById('referencia')

//variaveis das comidas
tipo_prato = document.getElementById('tipo_prato')

pagamento = document.getElementById('tipo_pagamento')
confirmacao = document.getElementById('pedido')



function mostrar() {
    if (nome.value == 0) {
        alert("coloca uma ariavel")

    } else {



        console.log(nome.value)
        console.log(celular_cliente.value)
        console.log(rua.value)
        console.log(n_rua.value)
        console.log(referencia.value)
        console.log(tipo_prato.value)


    }

}

function enviarMensagem() {
    //verificação das opções
    if (nome.value != 0 && celular_cliente.value != 0 && rua.value != 0 && n_rua.value != 0 && referencia.value != 0 && tipo_prato.value != 0 && pagamento.value != 0 && confirmacao.checked != false) {


        alert("você será direcionado para o whatsapp ")

        var my_celular = "5579999722046";

        var texto = "Nome: " + nome.value + "\n telefone: " +
            celular_cliente.value + "  \n Endereço: " + rua.value + "\n nº: " +
            n_rua.value + "  \n referência:" + referencia.value + "\n tipo-do-prato: " + tipo_prato.innerHTML.value + "\n Tipo do pagamento:";

        convert = window.encodeURIComponent(texto);

        window.open("https://api.whatsapp.com/send?phone=" + my_celular + "&text=" + convert, "_blank");
        //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;

    } else {
        console.log("sucesso")
    }
}








function gera_id() {
    var size = 10 //tamanho do ID e armazena na variável
    var randomized = Math.ceil(Math.random() * Math.pow(10, size)); //Cria um número aleatório do tamanho definido em size.
    var digito = Math.ceil(Math.log(randomized)); //Cria o dígito verificador inicial
    while (digito > 10) { //Pega o digito inicial e vai refinando até ele ficar menor que dez
        digito = Math.ceil(Math.log(digito));
    }
    var id = randomized + '-' + digito; //Cria a ID
    alert(id);
}






// função para limitar os caracteres da Saida de entrada dos valores 
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