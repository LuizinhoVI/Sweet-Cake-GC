function meu_valor() {
    var valor = document.getElementById("valor_pagamento");


    if (valor.value >= 100) {
        valor.value = valor.value / 100;

    }




    console.log(valor.value);
    return valor.value;
}