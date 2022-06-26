/* Creo funcion para que el formulario se mueva hacia ambos lados 
conforme el usuario toque en registrarse o loguearse */ 

/* DECLARANDO VARIABLES Y FUNCION*/

let cont__log__reg = document.querySelector(".main__login--register")

let formulario__login = document.querySelector(".form__login")

let formulario__reg = document.querySelector(".form__register")

let backbox_login = document.querySelector(".main__form-backbox__login")

let backbox_register = document.querySelector(".main__form-backbox__register")



function register(){
    formulario__reg.style.display = "block"; 
    cont__log__reg.style.left = "410px";
    formulario__login.style.display = "none";
    backbox_register.style.opacity = "0";
    backbox_login.style.opacity = "1";
}

function IniciarSesion(){
    formulario__reg.style.display = "none"; 
    cont__log__reg.style.left = "10px";
    formulario__login.style.display = "block";
    backbox_register.style.opacity = "1";
    backbox_login.style.opacity = "0";
}

/* EJECUCION DE FUNCIONES */

document.getElementById("btn__login--reg2").addEventListener(`click`, register);

document.getElementById("btn__login--reg").addEventListener(`click`, IniciarSesion);

/* ----------------------------------------------------------------------------------------- */

