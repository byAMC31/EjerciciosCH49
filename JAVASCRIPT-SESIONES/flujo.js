// const fecha1 = new Date('2024-12-01');
// const fecha2 = new Date('2024-12-05');
// console.log(fecha1 < fecha2); // true


//----------------------------------
// Estructuras de control de flujo

/*  Estructuras de control

Es un tipo de bloque dentro de los lenguajes de programación
muy importantes y utilzados de manera frecuente dentro de
cualquier programa. Su finalidad es optimizar la manera en
que se van ejecutando instrucciones dentro de mi programa.

Entre las ventajas de usarlos tenemos las siguientes:
    -Definir el flujo que sigue mi programa
    -Trabajar en base a condiciones
    -Optimizar el procesamiento de datos

Las diferentes estructuras de control que existen en los 
lenguajes de programación son los siguientes:

    -if else
    -switch
    -for
    -do
    -do while

*/

/* if else 

Podemos entender un if else de la siguiente manera:

evaluaremos una condición. El resultado de dicha evaluación
tendrá un valor booleano: true o false

Si mi condición se cumple, se ejecutarán determinadas
instrucciones

Si NO se cumple mi condición, se ejecutarán instruciones
diferentes

La sintaxis de una estructura if-else es la siguiente:

if(condicion){
    //instrucciones que se ejecutan si la condición es verdadera
}else{
    //instrucciones que se ejecutan si la condición es falsa
}

Las condiciones se construyen a partir del uso de los siguientes
operadores:

1. Operadores Lógicos:
    - AND &&
    - OR ||
    - NOT !

2. Operadores de comparación
    - igual que ==
    - Estrictamente igual que ===
    - Diferente de !=
    - Estrictamente diferente de !==
    - Mayor que >
    - Menor que <
    - Mayor o igual que >=
    - Menor o igual que <=


Ejemplos:
Ej. 1
console.log(6<=8); // output: true

Ej. 2
let x=5;
x>6  //Output: false

Ej. 3
(x<3 && 5 >=x) // output: false

Ej. 4
(mFuncion(x) >=27) //output: false
*/

let y=3;
if (y===30) {
    console.log(`El valor de ${y} es igual que 30`);
} else {
    console.log(`El valor de ${y} no es igual que 30`);
}


/*
    if - else -if

    Es la misma estructura if else que se encuentra definida
    arriba de este comentario, solamente es una manera de
    anidar diferentes bloques if, con la intencion de poder
    evaluar diferentes condiciones

    if(condicion 1){
        // Instrucciones que se ejecutan si se cumple la
        condición 1
    } else if( condicion 2){
        // Instrucciones que se ejecutan si se cumple la
        condición 2
    } else if( condicion 3){
        // Instrucciones que se ejecutan si se cumple la
        condición 3
    } else{
        // instrucciones que se ejecutan si ninguna de 
        las condiciones anteriores se cumple
    }

*/

/*
    Ejemplo de if else if

    *Crea una interfaz de un cajero ATM
    *Debe recibirse como parámetro algunas de las siguientes 
      opciones:
        1. Retirar dinero
        2. Transferencia
        3. Deposito
        4. Pago de servicios
 */

    // let opcionInput = prompt("Por favor, ingrese una opción: ")
    // let opcion = Number(opcionInput);
    let opcion=2;
    function cajeroATM(opcion){
    if(opcion===1){
        console.log(`Operación realizada: #${opcion} retiro de dinero`)

    } else if( opcion===2){
        console.log(`Operación realizada: #${opcion} transferencia`)

    } else if( opcion===3){
        console.log(`Operación realizada: #${opcion} deposito a cuenta`)

    } else if( opcion===4){
        console.log(`Operación realizada: #${opcion} pago de servicios`)
    }else {
        console.log(`Opción no disponible`)

    }
}

cajeroATM(opcion)

    // if(opcion >=1 && opcion<=4)
    // {

    // }    

/*  SWITCH

    Es otra estructura de control parecida al if else, principalmente
    porque nos permite evaluar diferentes condciones, que en
    este caso los llamamos 'Casos' (case)

    Otra de las diferencias importantes es que no se 
    utilizan expresiones Lógicas/condiciones como if else.

    Sintaxis:

    palabras reservadas:
        -switch: para definir la estructura
        -case: para colocar un caso a evaluar
        -break: para indicar donde debe terminar la ejecución
            de instrucciones
        -default: es un valor que me indica que no se encontraron
        coincidencias con ninguno de los casos definidos

    switch(parametro){
    case 0:
        //instrucciones que se llvan a cabo para
            el caso 0
    break;
     case 1:
        //instrucciones que se llvan a cabo para
            el caso 1
    break;
     case 2:
        //instrucciones que se llvan a cabo para
            el caso 2
    break;
    default: 
        // Instrucciones que se llevan a cabo si no se
        encuentran coincidencias con los casos
        anteriores
    break;
    }

*/

switch (opcion) {
    case 1:
        console.log(`Operación realizada: #${opcion} retiro de dinero`)
        break;
    case 2:
        console.log(`Operación realizada: #${opcion} transferencia`)
        break;
    case 3:
        console.log(`Operación realizada: #${opcion} deposito a cuenta`)
        break;
    case 4:
        console.log(`Operación realizada: #${opcion} pago de servicios`)
        break;
    default:
        console.log(`Opción no disponible`)
        break;
}

/*
Ejemplo 2:

Necesito crear un programa que me ayude a determinar si un numero
es divisble entre 5 y 7

como resolveriamos el problema?
Determinando a través de una operación matematica si el numero
es divisible entre 5 y 7.

El programa devuelve verdadero si mi número es divisible entre
5 y 7

como lo puedo determinar?
Obteniendo el residuo de dividir el número entre 5 y 7

Que estructura puedo utilizar para resolver este problema?
if-else

porque no cuento con casos especificos para evaluar
*/
let numero= 5;
if (numero%5===0 && numero%7===0 ) {
    console.log(`El numero ${numero} es divisible entre 5 y 7`)
} else {
    console.log(`El numero ${numero} NO es divisible entre 5 y 7`)

}

/*
    Operador ternario

    Es una manera más sencilla de expresar un bloque if-else
    dentro de una sola línea de código

    Síntaxis:
        - No utiliza ninguna palabra reservada
        - Puedo almacenar un operador ternario dentro
        de una variable o puedo colocarlo directamente en una instruccion console.log()

        condicion ? true:false;

        Utilizamos el operador ternario para expresar condicionales
        que tengan una estructura muy simple, esto nos ayuda
        a manejar la legibilidad del código y nos ahorra muchas líneas
        dentro del mismo
 */

/*
        Ejemplo:
        
    Determinar si una persona es mayor de edad a través de su edad

    Si la persona tiene 18 años o más, sabemos que es mayor de edad

    Si la persona tiene menos de 18 años, sabemos que es menor de edad

*/

let edad=21;

if (edad >= 18) {
    console.log(`Según tu edad ${edad}, si eres mayor de edad`)
} else {
    console.log(`Según tu edad ${edad}, si eres mayor de edad`)
}

let evaluaredad = edad>=18 ? console.log(`Según tu edad ${edad}, si eres mayor de edad`) : console.log(`Según tu edad ${edad}, si eres mayor de edad`)

