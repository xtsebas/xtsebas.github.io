function aumentar(){
    var botonSi = $("#Si");
    var tamanoActual = parseInt(botonSi.css("font-size"));
    var largoActual = parseInt(botonSi.css("width"));
    botonSi.css("font-size", tamanoActual + 20 + "px");
    botonSi.css("width", largoActual + 20 + "px");


    var frasesNo = ["¡No!", "Otra vez NO", "Pensala bien", "NO SEAS MALA", "Porfis :(", "Me duele", "Amor pls", "Por favore", "te doy el mundo", "Te amo porfis"];
    
    var botonNO = $("#no");
    var indice = Math.floor(Math.random() * frasesNo.length); 
    botonNO.text(frasesNo[indice]);
};

function redirigir(){
    window.location.href = "./index2.html?desdeSi=true";
};
