var numerador = [0, 0, 0, 0, 0, 0];

function slid_frango() {
    var i;
    var x = document.getElementsByClassName("frango_slid");
    var x1 = document.getElementsByClassName("frango_slid1");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        x1[i].style.display = "none";

    }
    numerador[0]++;
    if (numerador[0] > x.length) { numerador[0] = 1 }



    x[numerador[0] - 1].style.display = "block";
    x1[numerador[0] - 1].style.display = "block";

    setTimeout(slid_frango, 2500); // Change image every 2 seconds
}

function slid_bolo_red() {

    var i;
    var x = document.getElementsByClassName("slid_bolo_red");
    var x1 = document.getElementsByClassName("slid_bolo_red1");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        x1[i].style.display = "none";

    }
    numerador[1]++;
    if (numerador[1] > x.length) { numerador[1] = 1 }


    x[numerador[1] - 1].style.display = "block";
    x1[numerador[1] - 1].style.display = "block";

    setTimeout(slid_bolo_red, 2600); // Change image every 2 seconds
}

function slid_torta_limon() {

    var i;
    var x = document.getElementsByClassName("slid_torta_limon");
    var x1 = document.getElementsByClassName("slid_torta_limon1");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        x1[i].style.display = "none";

    }
    numerador[2]++;
    if (numerador[2] > x.length) { numerador[2] = 1 }



    x[numerador[2] - 1].style.display = "block";
    x1[numerador[2] - 1].style.display = "block";

    setTimeout(slid_torta_limon, 2800); // Change image every 2 seconds
}

function slid_bolo_chocolate() {

    var i;
    var x = document.getElementsByClassName("slid_bolo_chocolate");
    var x1 = document.getElementsByClassName("slid_bolo_chocolate1");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        x1[i].style.display = "none";

    }
    numerador[3]++;
    if (numerador[3] > x.length) { numerador[3] = 1 }



    x[numerador[3] - 1].style.display = "block";
    x1[numerador[3] - 1].style.display = "block";

    setTimeout(slid_bolo_chocolate, 2100); // Change image every 2 seconds
}

function slid_bolo_negresco() {

    var i;
    var x = document.getElementsByClassName("slid_bolo_negresco");
    var x1 = document.getElementsByClassName("slid_bolo_negresco1");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        x1[i].style.display = "none";

    }
    numerador[4]++;
    if (numerador[4] > x.length) { numerador[4] = 1 }



    x[numerador[4] - 1].style.display = "block";
    x1[numerador[4] - 1].style.display = "block";

    setTimeout(slid_bolo_negresco, 2200); // Change image every 2 seconds
}

function slid_copo_felicidade() {

    var i;
    var x = document.getElementsByClassName("slid_copo_felicidade");
    var x1 = document.getElementsByClassName("slid_copo_felicidade1");

    for (i = 0; i < x.length; i++) {

        x[i].style.display = "none";
        x1[i].style.display = "none";

    }
    numerador[5]++;
    if (numerador[5] > x.length) { numerador[5] = 1 }



    x[numerador[5] - 1].style.display = "block";
    x1[numerador[5] - 1].style.display = "block";

    setTimeout(slid_copo_felicidade, 2300); // Change image every 2 seconds
}