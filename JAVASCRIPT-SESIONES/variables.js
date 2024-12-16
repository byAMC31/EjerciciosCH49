//Comentarios de una sola linea

/* 
    *   Comentarios de multiples lineas
    *   Hola CH49
*/

//---------------------------------------------------

/*  Variables dentro de JS

Se entiende como una variable a un almacen de 
informacion que yo puedo declarar dentro de mi
codigo de JS

Puedo almacenar información de diferentes 
maneras dentro de una variable, por ejemplo:

    -Haciendo uso de los tipos de dato primitivos/
    complejos:

        * number
        * string
        * boolean
        * null
        * array
        * object

    -Almacenar el valor de un elemento de HTML

    -Traer la información de una API y almacenarla
    dentro de una variable

    Como se declara una variable dentro de JS?

    Pasos:
        1. palabra reservada 'Let' o 'Var'
        2. Darle un nombre a mi variable
        3. colocamos operador de asignacion '='
        y le damos un valor a nuestra variable

*/

//-----------------------------------------------

//Ejemplos de variables

//1. Variables que almacenen datos numericos

let edadFer = -23;
let estatura = 1.68;
let peso = 60;
console.log(estatura)

// Typeof

/*
    Typeof es una función previamente definida en JS
    que nos permite evaluar el tipo de dato que 
    almacena una variable de nuestro codigo

    Sintaxis:
        -Typeof(variable)
*/

console.log(typeof (edadFer));


// Operadores aritmeticos

/* 
    Un operador aritmetico me permite utilizar valores
    numericos y realizar distintos tipos de operaciones
    con los mismos. Operadores aritmeticos disponibles 
    en JS.
        - Suma (+)
        - Resta (-)
        - Multiplicacion (*)
        - Division (/)
        - Exponenciacion (**)
        - Residuo o modulo (%)
        - Incremento (++)
        - Decremento (--)

        Como puedo utilizar los valores numericos de una
        variable para realizar operaciones aritmeticas?

        Forma 1: 
            Declarar una nueva variable y que esta almacene
            La suma de dichas variables


        Forma 2:
            Colocar una instruccion de depurado(console.log())
            y dentro de los paréntesis colocar directamente
            la suma de dichas variables

        */


// Forma #1:

let sumaDeValores = peso + estatura;
console.log(sumaDeValores);

//Forma 2#
console.log(peso + estatura) // Suma

console.log(3 - edadFer) //Resta

console.log(4 * 4) // Multiplicacón

console.log(5 / 2); // División

console.log(5 % 2); // Módulo o residuo

console.log(Math.sqrt(64)); // Raiz Cuadrada

console.log("Potencia de 2 al cubo: " + 2 ** 3); //Potencias

console.log(++peso); //Incremento (++)

console.log(--peso); //Decremento (--)


//----------------------------------------------------------
// 2. Variables que almacenan cadenas de texto (string)

let videojuegoFavorito = "DoOm";
let nombreUsuario = "@pep79";
let curp = `XXXXXXXX
XXXXXX
XXXX`;
let test =

    console.log(typeof (curp));
console.log(videojuegoFavorito);
console.log(curp);

/*  Concatenacion de strings

    Podemos utilizar el operado "+" para unir dos cadenas de texto
    o más 
    
 */
// Agregando espacios con + " "
console.log("Mi videojuego favorito es: " + videojuegoFavorito +
    " y mi nombre de usuario es: " + nombreUsuario);

/*
    Backtics y literales de string
    (altgr+``)
    Las backtics son un tipo de comilla representados por el caractes ``
    
    Podemos hacer diferentes cosas con ellas con respecto a usar 
    comillas sencillas ('') o dobles ("")

    Puedo declarar strings que utilicen backtics?
    Sí, si se puede, y tambien obtenemos resultados diferentes, por 
    ejemplo:

    Podemos tener un string con diferntes saltos de linea, cosa que
    con comillas dobles o sencillas no es posibless

    Una forma más sencilla y legible de escribir mensajes o 
    concatenar cadenas de texto es haciendo uso de los literales de 
    string: los elementos que se incluyen son los siguientes

        -backlist: Para mostrar una cadena de texto
        - ${variables}: Para traer y mostrar el valor de una variable
         
    */

// Ejemplo de literal de string
console.log(`La suma de ${estatura} y ${peso} es igual a: ${sumaDeValores}`);

/* Métodos sencillos para cadenas de texto

Un método es una funcionalidad previamente definida dentro del
lenguaje de programación que  me permite hacer algo con cierta 
informacion que se encuentre almacenada dentro de mi programa

Para cadenas de texto se utilizan de manera muy común los siguientes
metodos: 

    -toLowerCase (): Convierte los caracteres de una cadena de texto
                     en minúsculas

    -toUpperCase ():Convierte los caracteres de una cadena de texto
                     en mayúsculas

*/

// .toLowerCase()
console.log(curp.toLowerCase());

// .toUpperCase()
console.log(videojuegoFavorito.toUpperCase());

//----------------------------------------------------------
// 3. Ejemplos de Variables lógicas ( booleanas/boolean)

/* Valores booleandos
Un valor booleano solo puede ser cualquiera de los siguientes:
    -true
    -false

Normalmente encontramos este tipo de dato para hacer
evaluaciones de tipo lógico, donde según un resultado sea
verdadero o falso se lleve a acabo la ejecución de ciertas 
instrucciones dentro de mi código.

*/

let esHumano = true;
let usuarioVerificado= false;
let mayorDeEdad= true;

console.log(esHumano);

/*
    Operadores para evaluar con valores Lógicos

    1. Operadores lógicos: Nos sirven para determinar resultados
    booleanos que sean verdaderos o falsos, según el operador que 
    se utilice.

    Los operadores lógicos con los que contamos son;

    -AND (&&):
            Evalúa:
                Si a y b son verdaderos, el resultado es verdadero
                si a es verdadero y b es falso, el resultado es falso
                si a es falso y b es verdadero, el resultado es falso
                si a es falso y b es falso, el resultado es falso

    -OR (||):
             Evalúa:
                Si a ó b son verdaderos, el resultado es verdadero
                Si a es verdadero ó b es falso, el resultado es verdadero
                Si a es falso ó b es verdadero, el resultado es verdadero
                Si a es falso ó b es falso, el resultado es falso

    -NOT (!): Combina el valor de un resultado booleano
        !(true): falso
        !(false): verdadero

    2. Operadores de comparación
*/

let a = true;
let b = false;

console.log(a&&b);
console.log(a||b);
console.log(!b);
console.log(typeof(a));

//-----------------------------------------------------------------
// 4. Ejemplos de variables que almacenan arreglos
let vocalistas =
   ["Matt Belamy" , 
    "Alex Turner", 
    "Hayley Williams",
    "Sabrina Carpenter", 
    "Olvia Rodrigo"];

let numerosPares =[0,2,4,6,8,10];

let diosesGrigos = ["Zeus", "Afrodita", "Ares", "Hades", "Hermes"];

let arregloRandom = [15, "Hola", true, null, ["a", "b", "c"]];

console.log(vocalistas); //imprime el arreglo completo

console.log(vocalistas[0]); // Imprime un elemento en especifico

//----------------------------------------------------------------
//5. Ejemplos de variables que almacenan objetos

//Objeto tangible
let mueble= 
{
    altura: 1.5,
    ancho: 0.5,
    tieneCajones: true,
    peso: 15,
    materia: "Madera",
    color: "beige",
    precio: 5000
};

//Objeto intangible
let cancion ={
    nombre:"The unforgiven",
    artista: "Metallica",
    genero: "Heavy Metal",
    duracion: 5,
    año: 1995,
    album: "Black album",
    productora: "Blackened records"
}

console.log(cancion); // Muestra en pantalla el objeto completo

console.log(cancion.artista); // Muestra una propiedad del objeto

//--------------------------------------------------------------------------

/* CONSTANTES

    No unicamente podemos trabajar con valores variables, podemos
    igualmente definir valores constantes que no pueden modificar su
    valor después de su declaración inicial.

    Los pasos para declarar un valor constante son los mismos para las variables,
    con la diferencia que tenemos que utilizar una palabra reservada diferente:

        - const

    Recomendaciones para trabajar con constantes:
        - En lugar de usar la convención de escritura camelCase, es mejor
        utilizar UPPER_SNAKE_CASE
*/

// Reasignación de variables
let miNombre = "Adrian";
console.log(`Nombre original: ${miNombre}`)

miNombre= "AdrianMtz";
console.log(`Nombre mdificado: ${miNombre}`);


// Constante 
const API_URL = "http://www.ejemplo.com"

//API_URL=15 Esto daría error
console.log(API_URL)

//--------------------------------------------
/* Comportamiento de una variable*/



/* Scope (alcance)
Se refiere a que una variable puede ser accedida 
unicamente desde ciertas partes de mi código

Tipos de scope/alcance existen:
        -local: Apartir de donde fue definida o dentro del 
        bloque de código se encuentre

        -global: Se puede acceder al valor de mi variable
        desde cualquier parte de mi código

Diferencias entre let y var
        let: tiene un scope local

*/
//las variables var se pueden acceder antes de su declaracion


//Esto daria error porque aun no se define
// console.log(verificarScope); 
let verificarScope = "Si se puede acceder";
//console.log(verificarScope);


//Esto daria error de undefined
//console.log(verificarScopeVar); 
var verificarScopeVar = "Si se puede acceder";
console.log(verificarScopeVar);


function miFuncion(){
    let nombre = "Pedrito";
    var apellido = "Kuromi";

    console.log(nombre);
    console.log(apellido);
}

/*Esto daria error por el SCOPE porque solo 
se puede usar dentro de la funcion*/
//console.log(nombre);

miFuncion();


/* Hoisting
   Es la manera en que JavaScript interpreta la declaracion
   de variables.
   Las variables definidas con la palabra reservada "Var"
   adquieren este comportamiento que es algo parecido a lo
   siguiente:

   En la interpretación de un código tipo JS, estas variables
   se "elevan" y se leen al principio de mi interpretación

*/



//-----------------------------------------------------
// Comportamiento de una variable

/* Encasillamiento
    Se refiere a que yo puedo convertir un tipo de dato
    en otro diferente

    Vamos a necesitar para ello lo siguiente:
        
        -Un valor para convertir
        -Usar alguno de los constructores disponibles para
        cada tipo de datos:
            *Number()
            *String()
            *Boolean()
*/


// let nuevoPrompt = prompt("Introduce un dato:");
// let convertirPrompt = Number(nuevoPrompt);
// console.log(typeof(convertirPrompt));

let numeroEspecial = 7;
console.log(typeof(numeroEspecial))
let cadenaNumerica = "1";
console.log(typeof(cadenaNumerica))
let esCierto = true;
console.log(typeof(esCierto))

let convertirNumero = Number(cadenaNumerica);
console.log(convertirNumero);
console.log(typeof(convertirNumero));

let convertirString = String(numeroEspecial);
console.log(convertirString);
console.log(typeof(convertirString));

let convertirBoolean = Boolean(numeroEspecial);
console.log(convertirBoolean);
console.log(typeof(convertirBoolean));



