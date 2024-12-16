//Ejercicio de repaso de funciones
/* Instrucciones: Declara una función para cada
   problema planteado.
*/

//Calcular el perímetro de un círculo
// perimetro= 2*(PI)*Radio

function calcularPerimetroCirculo(radio){
let perimetroCiculo=2*(Math.PI)*radio;
return perimetroCiculo;
}
let radioCirculo=5;
console.log(`El perimetro del circulo con radio ${radioCirculo} es ${calcularPerimetroCirculo(radioCirculo)}`);


//Calcular el área de un rectangulo
//Area= base*altura
function calcularAreaRectangulo(altura, base){
    return (base*altura);
}
console.log(`El area del rectangulo es ${calcularAreaRectangulo(10,10)}`);


//Calcular el cuadrado de un numero
function cuadradoNumero(num){
//return (num**2);
return (num*num);
}
console.log(`El cuadrado del numero es ${(cuadradoNumero(9))}`);


//calcular la conversion de grados celsius a farenheit
function gradosCelsiusAFarenheit(celsius){
let resultado = (celsius*1.8)+32;
return resultado;
}
console.log(`La conversion de grados celsius a farnheit es ${gradosCelsiusAFarenheit(25)}`);


//Calcular el valor del voltaje dadas la resistencia y la corriente 
function calcularVoltaje(resistencia,corriente){
    let voltaje=corriente*resistencia;
return voltaje;
}
console.log(`El voltaje es: ${calcularVoltaje(2,10)} V`);


//calcular el volumen de una esfera
function calcularVolumenEsfera(radio){
let volumen= (4/3) * (Math.PI) * (radio**3);
return volumen;
}
console.log(`El volumen de la esfera es: ${calcularVolumenEsfera(5)} unidades cúbicas.`);
