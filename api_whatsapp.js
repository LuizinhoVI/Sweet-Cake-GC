function enviarMensagem() {

    var tab = window.open(window.location, "_self");
    tab.close();

    var celular = "5579999722046";

    var texto = "Nome: \n telefone:  \n Endereço \n nº  \n referência \n ";

    convert = window.encodeURIComponent(texto);

    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + convert, "_blank");
    //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}