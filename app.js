

//paso 1 crear una variable llamada numero secreto
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//paso2 funcion para cambiar parametros 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML  = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario  = parseInt(document.getElementById("valorUsuario").value);
    
    
     console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Acertaste el nùmero secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

     } else {
        //EL USUARIO NO ACERTO
        if (numeroDeUsuario > numeroSecreto){
         asignarTextoElemento ("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento ("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
    }

    function limpiarCaja (){
       document.querySelector("#valorUsuario").value ="";
    }

// paso 1 funcion para crear el numero secreto
function generarNumeroSecreto() {
    return Math.floor (Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
 //si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
} else { 
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            listaNumerosSorteados.push(numeroGenerado);
             }  else {
         listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    
}

      
         }
         }





function condicionesIniciales(){

    asignarTextoElemento("h1","JUEGO DEL NUMERO SECRETO");
    asignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;



}


function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indiar mensje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
     //inicializar el numero de intentos
     //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();





//paso 2 asignacion de parametros




/*function mostrarHolaMundo (){

    console.log ("holaMundo")

}

mostrarHolaMundo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. //


function nombreComoParametro (nombre) {
  
    console.log (`!Hola, ${nombre}`)
}

nombreComoParametro('Fernanda');

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.//

function numeroComoParametroDoble (numero){

    return numero *2
}

console.log (numeroComoParametroDoble (10));

//Crear una función que reciba tres números como parámetros y devuelva su promedio.//

function tresNumerosComoParametros(numero1, numero2, numero3) {
    
    return numero1 + numero2 + numero3 / 3;
}

console.log(tresNumerosComoParametros (2, 2, 2));

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.//

function dosNumerosDevuelveAlMayor(numero1, numero2){

      if (numero1 > numero2){
      return numero1
      } else {
        return numero2
      }
} 

console.log (dosNumerosDevuelveAlMayor (2, 8));

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.//

function unNumeroComoParametro (numero){

return numero * numero
}
console.log (unNumeroComoParametro (6)); */

