//basado en el identificador, solo toma el primero y solo uno
let btnMostrar= document.getElementById("btnMostrar"); 
let txtNombre= document.getElementById("txtNombre");
let txtRFC = document.getElementById("txtRFC");
let imgMeme= document.getElementById("imgMeme");


console.log(document.getElementById("encabezado1"));

const encabezado1 = document.getElementById("encabezado1");

console.log(encabezado1.textContent); 
console.log(encabezado1.innerText);
console.log(encabezado1.innerHTML);


// obtiene todos los elementos que continen esa etiqueta
const listas = document.getElementsByTagName("ul")
console.log(listas); //HTMLColection //Live
console.log(listas.length); //2
console.log(listas.item(1)); 


//obtiene todos los elementos que tiene el mismo nombre de clase
const listGroup = document.getElementsByClassName("list-group-item")
console.log(listGroup);
console.log(listGroup.length);


//document.querySelector("ul > li:last-child")


//queryselector: el primer elemento del DOM que coincide con un selector CSS especificado
                           //selector de hijo directo
let segundaLista = document.querySelector("ul > li");//selecciona el primero
console.log(segundaLista); //li


// querySelectorAll: todos los elementos del DOM que coincidan con un selector CSS especificado
let terceraLista= document.querySelectorAll("ul>li");// selecciona todos
console.log(terceraLista);
console.log(terceraLista.length); //10



btnMostrar.addEventListener("click", function (event){
event.preventDefault();
//console.log("click en btnMostrar...");
let element = document.createElement("li");
element.innerText="Another item"; // <li>Another item</li>
element.classList.add("list-group-item"); //.toggle: Si tiene 'list-group-item', la quita; si no, la añade.

//let element2= element.cloneNode(true);
//listas.item(0).append(element); 
//append agrega el elemento al final de la lista, antes de que el "ul" cierre


//listas.item(0).prepend(element2);
//prepend: inserta el elemento al inicio de la lista "ul", despues del "ul" que abre


//listas.item(0).before(element);
//inserta el elemento previo a la lista, antes de que el ul abre


//listas.item(0).after(element);
//agrega el elemento despues de la lista, despues del ul que cierra


let segundaLista = listas.item(1);
let element3= element.cloneNode(true);


//inserta el elemento previo a la lista, antes del ul que abre
//segundaLista.insertAdjacentElement("beforebegin", element3);


//inserta el elemento al principio de la lista, despues del ul que abre
//segundaLista.insertAdjacentElement("afterbegin", element3);


//Agrega elemento al final de la lista, antes que el ul cierra
//segundaLista.insertAdjacentElement("beforeend", element3);


//agrega el elemento despues de la lista, despues del ul que cierra
//segundaLista.insertAdjacentElement("afterend", element3);



 listas.item(0).insertAdjacentHTML("beforebegin", `<li class="list-group-item">HTML item</li>`)

 listas.item(0).insertAdjacentHTML("afterbegin", `<li class="list-group-item">HTML item</li>`)

 listas.item(0).insertAdjacentHTML("beforeend", `<li class="list-group-item">HTML item</li>`)

 listas.item(0).insertAdjacentHTML("afterend", `<li class="list-group-item">HTML item</li>`)

});


// txtNombre.addEventListener("blur", function (event){
//     txtNombre.value = txtNombre.value.toUpperCase().trim();
// });
    
function toUpper(event){
    event.preventDefault();// cancela el comportamiento por default (ej. submit)
    event.target.value=event.target.value.toUpperCase().trim();
    
} //toUpper


// El método addEventListener en JavaScript se utiliza para 
// agregar un manejador de eventos a un elemento del DOM
txtNombre.addEventListener("blur", toUpper)
txtRFC.addEventListener("blur", toUpper)



// function handleImagen(img){
//     console.log("error al cargar la imagen");
//     //
// }
// imgMeme.addEventListener("error", handleImagen())



window.addEventListener("load", (event)=>{
console.log("pagina totalmente cargada")
});

