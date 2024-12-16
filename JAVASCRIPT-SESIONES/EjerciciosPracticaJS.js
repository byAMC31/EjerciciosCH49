
// Ejercicio #1
// Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista.
// (No se debe utilizar la función Math.max) Ejemplo del arreglo : [3, 5, 7, 1, 6]
function obtenerNumeroMayor(arreglo) {
    let numMayor = arreglo[0]; 
    for (let i = 0; i < arreglo.length; i++) {
        if (numMayor < arreglo[i]) {
            numMayor = arreglo[i];
        }
    }

    return numMayor;
}

// Ejemplo de uso
let numeros = [3, 5, 7, 1, 6];
console.log(`El número mayor es: ${obtenerNumeroMayor(numeros)}`);



//Ejercicio #2
//María llega a su entrevista de trabajo para el rol de 
//Desarrollador Junior y se le pide que resuelva este
//problema: Dada una lista de números [-1, 3, 4, 2, 6], 
//escribe una función en javascript para calcular el número
// más pequeño. (No se debe utilizar la función Math.min)

function obtenerNumeroMenor(arreglo) {
    let numMenor = arreglo[0]; 

    for (let i = 0; i < arreglo.length; i++) {
        if (numMenor > arreglo[i]) {
            numMenor = arreglo[i];
        }
    }

    return numMenor;
}

// Ejemplo de uso
let numeros2 = [-1, 3, 4, 2, 6];
console.log(`El número menor es: ${obtenerNumeroMenor(numeros2)}`);




//Ejercicio #3
//Escribir una función que permita saber si un número se repite dentro de un arreglo.
//Casos de prueba:
//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

function encontrarNumeroRepetido(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        let contador = 0;
        for (let j = 0; j < arreglo.length; j++) {
            if (arreglo[i] === arreglo[j]) {
                contador++;
            }
        }
        if (contador > 1) {
            return `El número ${arreglo[i]} se encuentra repetido ${contador}  veces`;
        }
    }
    return "No hay números repetidos";
}

// Casos de prueba
let caso1 = [1, 22, 5, 17, 10, 5, 40, 5];
let caso2 = [7, 41, 5, 7, 10, 13, 2];
let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];

console.log(encontrarNumeroRepetido(caso1)); 
console.log(encontrarNumeroRepetido(caso2)); 
console.log(encontrarNumeroRepetido(caso3)); 




//Ejercicio #4
//Escribir una función que tome un arreglo ordenado y
//devuelva un arreglo completamente desordenado 
//Entrada: [1, 2, 5, 14, 24, 31, 50, 105] 
//Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

function desordenarArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {

        //Genera un índice aleatorio
        let j = Math.floor(Math.random() * arreglo.length);

        //Intercambia los elementos en las posiciones i y j
        [arreglo[i],arreglo[j]] = [arreglo[j],arreglo[i]];
    }
    return arreglo;
}

let arregloOrdenado = [1, 2, 5, 14, 24, 31, 50, 105];
console.log("Arreglo desordenado:", desordenarArreglo(arregloOrdenado));

