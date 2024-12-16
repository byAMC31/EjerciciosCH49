// Arreglos y bucles - JS

/*  Arreglos
    Son un tipo de datos dentro de JS que me permiten almacenar
    múltiplies datos dentro de una misma variable.

    Las carácteristicas principales de un arreglo son:
    -Longitud: representan el # total de elementos que existen
      dentro de nuestro arreglo

    - índices: se refieren a la posición que ocupan un elemento en 
      específico dentro de mi arreglo.

    Como puedo declarar un arreglo dentro de JS
    1. Declarar el arreglo con sus elementos
    2. Construir un arreglo a partir de la clase Array
    3. Definir un arreglo vacio y agregar elementos a trá ves del indice
    que especifiquemos

*/

// Arreglo #1
let colores = ["rojo", "azul", "verde", "amarillo", "violeta"];
//console.log(typeof(colores))

console.log(colores);

//Arreglo #2
let numerosPares = new Array(0,2,4,6,8,10)
console.log(numerosPares)

//Arreglo #3
let carros= [];
carros[0]="Toyota";
carros[1]="Ford";
carros[2]="Honda";

console.log(carros);

/* Lista de algunos métodos para arreglos que existen dentro de JS

    - .pop(): elimina el último elemento de mi arreglo.
    
    - .push(elemento): agrega un elemento al final de mi arreglo
    
    - .unshift(elemento): agrega un elemento al inicio de mi arreglo
    
    - .shift(): elimina el primer elemento de mi arreglo
    
    - .slice(índice/posición): me regresa todos los elementos de mi arreglo
        a partir de la posición indicada dentro del paréntesis.
    
    - .at(índice/posición): me regresa el elemento que se encuentra dentro 
        de la posición indicada dentro del paréntesis

    - .sort(): ordena los elementos de mi arreglo de menos a mayor
    (orden ascendente).

    - .reverse(): invierte el orden de los elementos dentro de mi arreglo

    - .indexOf(elemento): me devuelve la posición dado un elemento.

-----------------------------------------------------------------------------
    Métodos iterativos

    Con respecto a los métodos anteriores, tenemos otro tipo de métodos
    que nos permiten ejecutar funciones más completas/complejas dentro de
    un arreglo.

    Los siguientes métodos van a trabajar/realizar una acción en específico 
    sobre todos y cada uno de los elementos que existen dentro de mi arreglo.

    - .forEach(función anónima) : Para cada elemento dentro de mi arreglo
        me ejecuta una instrucción

    - .map(función anónima): para cada elemento dentro de mi arreglo
    me ejecuta una instrucción. Me devuelve un arreglo nuevo
    con las iteraciones llevadas a cabo.


    Ejemplo de sintaxis para ambos métodos

    let arreglo = [e1,e2,e3,e4,e5];

    forEach();

    -función flecha
    arreglo.foreach(alias => instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo);

    -función tradicional
    arreglo.forEach(function (alias){
        instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo
    });



    .map();

    -función flecha
    arreglo.map(alias => instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo);

    -función tradicional
    arreglo.map(function (alias){
        instrucciones que se llevan a cabo sobre todos los elementos de mi arreglo
    });


*/

// // .pop()
//     colores.pop();
//     console.log(colores);

// //.push
//     colores.push()
    
// // .unshift







// forEach();
colores.forEach(color => console.log(color.toUpperCase()));



// .map()
let coloresMayusculas = colores.map(e => e.toUpperCase());
console.log(coloresMayusculas);


////////////////////////////////////////////////////////////

/*
    Un ciclo, bucle o iteración se trata de una estructura
    de flujo que trabaja de la siguiente manera:

    Tiene un punto de inicio, sobre el cual comenzaran a  
    ejecutarse las intrucciones definidadas dentro del 
    bloque, la cantidad de veces que las instrucciones se van
    a repetir depende de una condición (expresiones lógicas)
    que: mientras sea verdadera, las instrucciones se repiten.
    Cuando es falsa, se detiene el proceso de ejecución.

    Que ciclos podemos usar en JS?

    ciclo for: es una forma de definir un bucle dentro de JS,
    su estructura/sintaxis están definida de la siguiente
    manera

        -palabra reservada for
        -{inicio; condición, contador}
        -Llaves que delimitan el bloque de instrucciones que
        llevará a cabo el bucle.

*/

// Ejemplo de uso del ciclo for
//Ciclo que imprima los números del 0 al 100

for (let i = 0; i <= 100; i++) {
    console.log(i)
    
}


////Ejemplo #2 de uso del ciclo for
//Ciclo que imprima los números del 0 al 100, contando de 10 en 10

for(let i=0; i<=100; i+=10){
    console.log(i)
}


////Ejemplo #3 de uso del ciclo for
//Ciclo que imprima los elementos de un arreglo
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i])
}


/*
    While
    Es otro tipo de bucle disponible dentro de JS, es similar
    al bucle for, pero tienen una diferencia importante:

    Mientras que el ciclo while tiene una sintaxis mas flexible,
    el bucle for tiene una estructura definida previamente.

    Sintaxis:
        -Palabra reservada while
        -{condicion}
        -bloque donde se encuentra las instrucciones que ejecuta el ciclo

*/

    //Ejemplo de bucle while

    let i=0;

    while(i<=100){
        console.log(i);
        i++;
    }


 /* Do while
    
    Es lo mismo que un bucle while, para esta estructura
    nos permite primero llevar a cabo una instrucción y
    posteriormente evaluar la condición del ciclo

    sintaxis
        -palabra reservada Do
        -bloque de código con las instrucciones que ejecuta el ciclo
        -palabra reservada while
        -{condicion}
 
 */
        let index = 0;
        do {
            console.log(index)
            index++;
        } while (index<=100);


        