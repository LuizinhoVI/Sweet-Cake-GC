 total_compras = 0; // valor das compras
 valor_total = 0; // valor do troco 


 menu_prato = "";
 nome_prato = "";
 cobertura = "", massa = "", caldas = "", recheio = "";



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
     var tipo = document.getElementById("tipo_prato");
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


     if (tipo.value == "") {
         compras.value = "R$ 0.00"
         total_compras = 0;

     }


     // TIPO TORTA
     if (tipo.value == "Torta") {
         torta.style.display = "block";


         if (torta.value == "limao") {
             torta_valor.style.display = "block";
             torta_valor1.style.display = "none";

             nome_prato = torta[0].innerHTML;

             console.log(nome_prato)
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

             nome_prato = torta[1].innerHTML;
             console.log(nome_prato)
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
     if (tipo.value == "Doce") {
         doce.style.display = "block"

         nome_prato = doce[0].innerHTML;

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
     if (tipo.value == "Salgado") {
         salgado.style.display = "block"
         bolo.style.display = "none"


         if (salgado.value == "1") {
             salgado_com.style.display = "block";
             salgado_parte.style.display = "none";
             total_compras = 0;
             compras.value = "R$ 0.00";
             nome_prato = salgado[0].innerHTML;


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
             nome_prato = salgado[1].innerHTML;

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
     if (tipo.value == "Bolo") {
         bolo.style.display = "block"
         salgado.style.display = "none"
         total_compras = 0;

         if (bolo.value == "1") {
             bolo_mini.style.display = "block"
             bolo_parte.style.display = "none"
             compras.value = "R$ 0.00";
             total_compras = 0;
             nome_prato = bolo[1].innerHTML;

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
             nome_prato = bolo[0].innerHTML;


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
     if (tipo.value == "copo") {
         copo_valor.style.display = "block"


         if (copo_valor.value == "1") {
             copo_massa.style.display = "block"
             copo_cobertura.style.display = "block"
             copo_recheio.style.display = "block"
             copo_caldas.style.display = "block"
             compras.value = "R$ 13,00";
             total_compras = 13;


             for (let i = 1; i <= 5; i++) {
                 if (copo_massa[i].selected == true) {
                     massa = copo_massa[i].innerHTML


                     console.log(massa)
                 }

             }


             for (let i = 1; i <= 4; i++) {
                 if (copo_cobertura[i].selected == true) {

                     cobertura = copo_cobertura[i].innerHTML

                     console.log(cobertura)
                 }

             }

             for (let i = 1; i <= 3; i++) {
                 if (copo_caldas[i].selected == true) {

                     caldas = copo_caldas[i].innerHTML

                     console.log(caldas)
                 }

             }
             for (let i = 1; i <= 11; i++) {
                 if (copo_recheio[i].selected == true) {

                     recheio = copo_recheio[i].innerHTML


                     console.log(recheio)
                 }

             }
         }
     } else {
         copo_caldas.style.display = "none"
         copo_cobertura.style.display = "none"
         copo_massa.style.display = "none"
         copo_recheio.style.display = "none"
         copo_valor.style.display = "none"

     }

     for (let index = 2; index <= 6; index++) {
         var pratos = document.getElementById('tipo_prato')[index]
         if (pratos.selected == true) {
             menu_prato = pratos.innerHTML; // salvara o innethtml dentro da variavel de string


             break;
         }

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
 dinheiro_a_vista = document.getElementById('valor_pagamento')
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
         console.log("valor do troco " + valor_total)
         console.log("valor do troco " + total_compras)


     }

 }

 function enviarMensagem() {
     //verificação das opções
     if (nome.value != 0 && celular_cliente.value != 0 && rua.value != 0 && n_rua.value != 0 && referencia.value != 0 && tipo_prato.value != 0 && pagamento.value != 0 && confirmacao.checked != false) {


         alert("você será direcionado para o whatsapp ")

         var my_celular = "5579988335481";


         if (tipo_prato.value == "copo") {
             var texto = "*Nome: " + nome.value + "\n *Telefone: " +
                 celular_cliente.value + "  \n *Endereço: " + rua.value + "\n *Nº: " +
                 n_rua.value + "  \n *Referência: " + referencia.value + "\n *vou querer o " + menu_prato + " com  a " + massa + " ,  " + cobertura + " ,  " + recheio + " ,  " + caldas + "\n Valor R$ " + total_compras +
                 "\n Pagamento: " + pagamento[1].innerHTML + " R$ " + dinheiro_a_vista.value + " Troco: R$ " + valor_total + "\n ";

         } else {



             var texto = "*Nome: " + nome.value + "\n *Telefone: " +
                 celular_cliente.value + "  \n *Endereço: " + rua.value + "\n Nº: " +
                 n_rua.value + "  \n *Ponto de referência: " + referencia.value + "\n *Vou querer :" + nome_prato + "\n *Valor R$ " + total_compras +
                 "\n *Pagamento: " + pagamento[1].innerHTML + " R$ " + dinheiro_a_vista.value + " Troco: R$ " + valor_total + "\n ";

         }
         convert = window.encodeURIComponent(texto);

         window.open("https://api.whatsapp.com/send?phone=" + my_celular + "&text=" + convert, "_blank");
         //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;

     } else {
         console.log("sucesso")
     }
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