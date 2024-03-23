let maximo = 100;
let minimo = 1;

function reiniciar(){
    
    //const confirmButton = document.getElementById("confirmButton");

    maximo = 100;
    minimo = 1;
    document.getElementById("numero-adivinado").innerHTML = `Adivina Adivinador`;
    aparecerBotonesJuego();
    estadoBotones(true, false, true, true, true);

    //confirmButton.innerHTML = "OK";
    //confirmButton.setAttribute("onclick", "startGame()");

}

const generaAleatorio = (valorMinimo = 1, valorMaximo = 100) =>{
    return Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo; // genera un numero aleatorio
}

function iniciarJuego(){
   /*  const tryButtons = document.getElementsByClassName("tryButton");
    const confirmButton = document.getElementById("confirmButton");

    confirmButton.innerHTML = "¡Correcto!";
    confirmButton.setAttribute("onclick", "finishGame()");
    confirmButton.setAttribute("class", "col-12 col-lg-4 btn btn-success");

    for (const tryButton of tryButtons) {
        tryButton.removeAttribute("disabled");
        tryButton.style.visibility = "visible";
    }*/
    
    const numeroAleatorio = generaAleatorio(); // Genera un numero aleatorio
    adivinaNumero(numeroAleatorio);
    console.log("FUNCIONA INICIAR JUEGO");
    console.log(numeroAleatorio);
    estadoBotones(false, true, false, false, false);

 /*    document.querySelectorAll('button').forEach(button => {
        if(button.id !== 'boton-inicio') button.style.display = '';
    }); */
    
}

/* document.getElementById('botonMenor').style.display = 'none';
document.querySelectorAll('button').forEach(button => {
    if(button.id !== 'boton-inicio') button.style.display = 'none';
});
 */
const adivinaNumero = (numeroAleatorio) => {
    document.getElementById("numero-adivinado").innerHTML = `${numeroAleatorio}`;

    if(numeroAleatorio === 1)
        deshabilitaBotonMenor();
    else if(numeroAleatorio === 100)
        deshabilitaBotonMayor();
    //else if(isButtonDisabled)
       // enableButtons();

}

const botonMayor = () => {
    //const minValue = document.getElementById("minValue");
    const guessedNumber = document.getElementById("numero-adivinado");

    minimo = parseInt(guessedNumber.innerHTML) + 1; // 58+1 =59
    console.log(minimo);
    nuevoIntento();
}

const botonMenor = () => {
    const guessedNumber = document.getElementById("numero-adivinado");

    maximo = parseInt(guessedNumber.innerHTML) - 1;
    console.log(maximo);
    nuevoIntento();
}

const botonVictoria = () => {
    const numeroCorrecto = document.getElementById("numero-adivinado").innerHTML;
    alert(`Tu numero es ${numeroCorrecto}`);

    const botones = document.getElementsByClassName("botonesJuego"); // [botonMayor, BotonMenor]
    //console.log(botones)
    for (const boton of botones) {
        boton.style.visibility = "hidden";
    }

    estadoBotones(true, true, true, false, true);

    /* const botonReiniciar = document.getElementById("botonReiniciar");
    botonReiniciar.disabled = false; */

}

const nuevoIntento = () => {
    
    let nuevoValor = 0;

    nuevoValor = busquedaBinaria(minimo, maximo);
    adivinaNumero(nuevoValor);
    if(minimo > maximo)
       botonVictoria();
}

const busquedaBinaria = (valorMin, valorMax) => {
    console.log(`${valorMin}, ${valorMax}`);
    return Math.floor( ( valorMin + valorMax ) / 2); 
}

const estadoBotones = (menor, inicio, mayor, reinicio, victoria) =>{ //true // false
    const botonMenor = document.getElementById("botonMenor");
    const botonInicio = document.getElementById("botonInicio");
    const botonMayor = document.getElementById("botonMayor");
    const botonReiniciar = document.getElementById("botonReiniciar");
    const botonVictoria = document.getElementById("botonVictoria");
    botonMenor.disabled = menor;
    botonInicio.disabled = inicio;
    botonMayor.disabled = mayor;
    botonReiniciar.disabled = reinicio;
    botonVictoria.disabled = victoria;
}


function deshabilitaBotonMenor(){
    const botonMenor = document.getElementById("botonMenor");
    botonMenor.disabled = true;
    //isButtonDisabled = true;
}

function deshabilitaBotonMayor(){
    const botonMayor = document.getElementById("botonMayor");
    botonMayor.disabled = true;
    //isButtonDisabled = true;
}

const aparecerBotonesJuego = () =>{
    
    const botones = document.getElementsByClassName("botonesJuego"); // [botonMayor, botonMenor]
    //console.log(botones)
    for (const boton of botones) {
        boton.style.visibility = "visible";
    }
}

estadoBotones(true, false, true, true, true);