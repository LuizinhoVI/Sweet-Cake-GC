function enviarMensagem() {
    alert("olar");
    var celular = "5579999722046";

    var texto = "A pia pinga, o pinto pia...\n Quanto mais a pia pinga, mais o pinto pia.\n\n Acesse https: //ratimbum.com/?token=333 para saber mais.";

    convert = window.encodeURIComponent(texto);

    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + convert, "_blank");
    //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}