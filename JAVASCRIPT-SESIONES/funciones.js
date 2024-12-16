
// JS - 02.FUNCIONES
/*
    Una función dentro de la programación es 
    una estructura que me permite a cabo de 
    unas erie de pasos que resuelven una tarea
    determinada.

    Pasos para declarar una función en JS:

        1. Palabra reservada
        2. Darle un nombre a mi función
        3. Agregar los paréntesis para los parámetros 
            de mi función
        4. Llaves que indican donde inicia y donde termina
            mi función
*/

//Declarar nuestra primer función en JS

//Función para mostrar un mensaje en la consola

/*
La función declarada debajo de este comentario tiene las
siguientes características:

    -No recibe mensajes
    -No devuelve ningún valor
*/

function mostrarMensaje(){
    console.log("Hola mundo")   
}

mostrarMensaje();


// Función para saludar a un usuario
/* saludarUsuario(nombreUsuario)
La función declarada debajo de este comentario tiene las
siguientes características:

    -Recibe un parametro "nombreUsuario"
    -No devuelve ningún valor

*/
function saludarUsuario(nombreUsuario){
    console.log(`Hola, ${nombreUsuario}, que tengas un gran día`);
}

saludarUsuario("Adrian");
saludarUsuario("Fer");
saludarUsuario("Snoopy");



/* Función para calcular el promedio de una calificación a 
  partir de 4 resultados */
/* calcularPromedio(a, b, c, d)
La función declarada debajo de este comentario tiene las
siguientes características:

    -Recibe los parámetros a,b,c,d
    -Si devuelve un valor

*/

function calcularPromedio(a, b, c, d){
    let promedio = (a+b+c+d)/4;
    // return console.log(promedio);
    return promedio;
}

//Formas de utilizar el valor devuelto en una función

//Ejemplo #1: almacenar el valor dentro de una variable
let partirPromedio = calcularPromedio(10,10,10,10)/2
console.log(partirPromedio)

// Ejemplo #2: Mostrar el valor devuelto  por mi función en consola
console.log(calcularPromedio(2,3,4,5))

//Ejemplo #3: Utilizar el valor para que sea evaluado bajo cierta condición
if (calcularPromedio(10,10,10,10)>=7) {
    console.log("Aprobado")
} else {
    console.log("Reprobado")
}


//---------------------------------------------

/* Funciones flecha
    Son lo mismo que una función tradicional con la gran
    diferencia que su sintaxis es más sencilla.

    Como se declara una función flecha:
        1. Palabra reservada var, let, const (es recomendable
            usar const para que no se redeclare)
        2. Asignarle un nombre
        3. Se coloca el signo de asignación "=" para
            agregar parametros a mi función
        4. Hay que agregar un fat arrow "=>" y posteriormente
            se agregan las instrucciones a ejecutar
            
Consideraciones:
    -Puedo evitar colocar los paréntesis de mis parámetros
    si solo recibo un solo parámetro
    -Puedo omitir colocar las llaves que encierran todas las 
    instrucciones que ejecuta mi función si solo existe una
    instrucción

    -La palabra reservada return es implicita siempre y cuando
    solo exista una expresión dentro de mi función


            */

// Función flecha que eleve un número al cuadrado

const elevarAlCuadrado = n => n**2;
console.log(elevarAlCuadrado(10));


const saludarUsuario2 = nombreUsuario =>`Hola, ${nombreUsuario}`
console.log(saludarUsuario2("Momo"));


const calcularPromedio2 = (a,b,c,d) =>{
    let resultado= (a+b+c+d)/4;
    return resultado
}
console.log(calcularPromedio2(10,10,10,10));


let numerosPares =[0,2,4,6,8,10];
// let duplicarCantidad = numerosPares.map(e => e*2)

//funcion anonima (que no tiene un nombre)
let duplicarCantidad = numerosPares.map(function(numero){return numero*2})
console.log(duplicarCantidad)

