let cardek =[];
const tipos =['C','D','H','S'];
const especiales = ['A','J','Q','K'];

const crearDek=()=>{

for (let i=2; i<=10; i++){
    for ( let tipo of tipos){
        cardek.push(i+tipo);
    }
}

for (let tipo of tipos){
    for(let esp of especiales){
    cardek.push(esp + tipo);
}


}

cardek = _.shuffle(cardek);
console.log("Estas son las cartas con shuffle:");
console.log(cardek);
return cardek;
}
crearDek();

const pedirCarta = () => {
    if (cardek.length > 0) {
        let cartaAmover = 0;
        let elementoEliminado = cardek.splice(cartaAmover, 1)[0]; // Corrección aquí
        console.log("Esta es la carta a retirar:");
        console.log(elementoEliminado);
        console.log("Estas son las cartas restantes:");
        console.log(cardek);
        return elementoEliminado; // Corrección aquí
    } else {
        throw 'No quedan cartas';
    }
}
    



function obtenerNumerosEnTexto(texto) {
    let regex = /\d+/g; // Expresión regular para encontrar números
    let numero = texto.match(regex); // Obtener todos los números en un array
    return numero; // Unir los números en una cadena
}

const valorarCarta = (cartaAmover)=>{  
    
    let valorNumericoCarta =obtenerNumerosEnTexto(cartaAmover);

    if(valorNumericoCarta !== null) {
        console.log("Este es el valor de la carta:");
        console.log(valorNumericoCarta); //console

    }else   if(cartaAmover[0]!=="A"){
        console.log("Este es el valor de la carta AS:");
        console.log(10); //console


    }else {

        console.log("Este es el valor de la carta:");
        console.log("Puedes ser 11 ó 1"); //console
        }
    }

  


let carta= pedirCarta(); //
valorarCarta(carta);