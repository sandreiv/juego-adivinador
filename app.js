let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', 'Acertaste el numero');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
    
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //num generado incluido en lista
    //para tener lista de numeros generados que ya se jugaron
    //aplicando recursividad se va a generar el nuevo numero n veces
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
            
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            //va a crear la lista hasta 10, porque ese es rango, luego habra error
            //se debe implementar una condicion de salida
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar el numero secreto
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();