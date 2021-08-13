var numerador = 0;
var numerador1 = 0;


function slid_frango() {

    var i;
    var x = document.getElementsByClassName("frango_slid");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        console.log(i)
    }
    numerador++;
    if (numerador > x.length) { numerador = 1 }
    x[numerador - 1].style.display = "block";



    var i1;
    var x1 = document.getElementsByClassName("frango_slid1");
    for (i1 = 0; i1 < x1.length; i1++) {
        x1[i1].style.display = "none";
    }

    numerador1++;
    if (numerador1 > x1.length) { numerador1 = 1 }
    x1[numerador1 - 1].style.display = "block";

    setTimeout(slid_frango, 2000); // Change image every 2 seconds
}