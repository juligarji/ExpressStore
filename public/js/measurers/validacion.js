function esValido(formulario){
    for(var i = 1;i <=2;++i){
        document.getElementById("valido"+i).style.display = "none";
        document.getElementById("v"+i).innerHTML = "";
    }
    //var largo,ancho,alto,escalones,nombre,apellido,email,celular,validador;
    var diametro, caudal, alto, ancho, medidores, nombre, email, celular;

    diametro = parseFloat(formulario["out_diameter"].value);
    caudal = parseFloat(formulario["flow"].value);
    alto = parseFloat(formulario["wall_heigth"].value);
    ancho = parseFloat(formulario["wall_width"].value);
    medidores = formulario["measurer_number"].value;
    nombre = formulario["name"].value;
    email = formulario["email"].value;
    celular = formulario["phone"].value;

    if(!isNumber(medidores) || !isNumber(caudal) || !isNumber(ancho) || !isNumber(alto)){
        validador = document.getElementById("valido1");
        validador.style.display = "block";
        validador = document.getElementById("v1");
        validador.innerHTML = validador.innerHTML + "___ Error en alguno de los datos: Diametro, caudal, alto,largo";
        huboError();
        return false;
    }
    if(!estaEnRango(medidores, caudal, ancho, alto)){
        validador = document.getElementById("valido1");
        validador.style.display = "block";
        validador = document.getElementById("v1");
        validador.innerHTML = validador.innerHTML + "___ Error el diametro, caudal, ancho o alto no estan en el rango indicado";
        huboError();
        return false;
    }
    
    if(celular.length > 10){
        validador = document.getElementById("valido3");
        validador.style.display = "block";
        validador = document.getElementById("v3");
        validador.innerHTML = validador.innerHTML + "___ Error el numero de celular es muy grande";
        return false;
    }
    if(!isNumber(parseFloat(celular))){
        validador = document.getElementById("valido3");
        validador.style.display = "block";
        validador = document.getElementById("v3");
        validador.innerHTML = validador.innerHTML + "___ Error el numero de celular no es un numero";
        return false;
    }
    if(!campoValidoNoVacioNoNumero(nombre)){
        validador = document.getElementById("valido3");
        validador.style.display = "block";
        validador = document.getElementById("v3");
        validador.innerHTML = validador.innerHTML + "___ Error el nombre no puede ser vacio o numero";
        return false;
    }
    return true;
}
function isNumber(n) {
  return !isNaN(n);
}
function campoValidoNoVacioNoNumero(value){
    if(/^\s+|\s+$/.test(value))
        return false;
    if(isNumber(value))
        return false;
    return true;
}
function huboError(){
    var validador = document.getElementById("valido3");
    validador.style.display = "block";
    validador = document.getElementById("v3");
    validador.innerHTML = validador.innerHTML + "___ Error en el formulario";
}
function estaEnRango(medidores, caudal, ancho, alto){
    if(alto >= 1 && alto <= 2.2 && ancho >= 0.6 && ancho <= 5 && medidores >= 2 && medidores <= 20 && caudal >= 0.5 && caudal <= 20)
        return true;
    return false;
}

